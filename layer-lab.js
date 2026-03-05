(() => {
  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const createId = () => `lab_${Math.random().toString(36).slice(2, 11)}_${Date.now().toString(36)}`;

  const mapSelect = qs('#lab-map-select');
  const mapNameInput = qs('#lab-map-name');
  const updateCacheButton = qs('#lab-update-cache');
  const refreshButton = qs('#lab-refresh');
  const cellSizeInput = qs('#lab-cell-size');
  const publishStatus = qs('#lab-publish-status');
  const assetList = qs('#lab-asset-list');
  const assetGrid = qs('#lab-asset-grid');
  const assetGridLabel = qs('#lab-asset-grid-label');
  const assetsSubtitle = qs('#lab-assets-subtitle');
  const visibleLayersLabel = qs('#lab-visible-layers');
  const mapGrid = qs('#lab-map-grid');

  if (!mapSelect || !mapNameInput || !updateCacheButton || !refreshButton || !cellSizeInput || !publishStatus || !assetList || !assetGrid || !mapGrid) {
    return;
  }

  const projectManager = window.EightBitsProjectManager || null;
  if (!projectManager) {
    publishStatus.dataset.status = 'dirty';
    publishStatus.textContent = 'Project manager unavailable';
    return;
  }

  const stageByMode = {
    mapCreator: 'mapCreator',
    propDropper: 'propDropper',
    itemDropper: 'itemDropper',
    npcDropper: 'npcDropper'
  };

  const layerLabelsByMode = {
    mapCreator: 'Visible layers: Map',
    propDropper: 'Visible layers: Map + Props',
    itemDropper: 'Visible layers: Map + Props + Items',
    npcDropper: 'Visible layers: Map + Props + Items + NPCs'
  };

  const assetsSubtitleByMode = {
    mapCreator: 'Map Creator assets',
    propDropper: 'Prop Dropper assets',
    itemDropper: 'Item Dropper assets',
    npcDropper: 'NPC Dropper assets'
  };

  const cacheDbName = '8bits-map-cache';
  const cacheStoreName = 'images';

  const state = {
    mode: 'mapCreator',
    tool: 'pencil',
    temporaryTool: null,
    mapEntries: [],
    selectedEntryValue: '',
    map: {
      id: '',
      name: '',
      width: 1,
      height: 1,
      cellSize: 16,
      randomize: null,
      markers: []
    },
    base: { assets: [], cells: [] },
    props: { assets: [], cells: [] },
    items: { assets: [], cells: [] },
    npcs: { assets: [], cells: [] },
    selectedAssetNumber: null,
    selectedSpriteIndex: 1,
    isPainting: false,
    dirty: false,
    imageUrls: new Map()
  };

  const openCacheDb = () => new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(cacheDbName, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(cacheStoreName)) {
        const store = db.createObjectStore(cacheStoreName, { keyPath: 'key' });
        store.createIndex('name', 'name', { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  const cacheGet = (key) => openCacheDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(cacheStoreName, 'readonly');
    const store = tx.objectStore(cacheStoreName);
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  }));

  const cacheGetByName = (name) => openCacheDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(cacheStoreName, 'readonly');
    const store = tx.objectStore(cacheStoreName);
    const index = store.index('name');
    const req = index.getAll(name);
    req.onsuccess = () => resolve((req.result || [])[0] || null);
    req.onerror = () => reject(req.error);
  }));

  const setPublishState = (dirty) => {
    state.dirty = Boolean(dirty);
    publishStatus.dataset.status = state.dirty ? 'dirty' : 'updated';
    publishStatus.textContent = state.dirty ? 'Not published yet' : 'Updated';
  };

  const clearWorkspace = () => {
    state.map.id = '';
    state.map.name = '';
    state.map.width = 1;
    state.map.height = 1;
    state.map.markers = [];
    state.base = { assets: [], cells: [] };
    state.props = { assets: [], cells: [] };
    state.items = { assets: [], cells: [] };
    state.npcs = { assets: [], cells: [] };
    state.selectedAssetNumber = null;
    state.selectedSpriteIndex = 1;
    mapNameInput.value = '';
    renderAssetList();
    renderAssetGrid();
    renderMapGrid();
    setPublishState(false);
  };

  const getModeAssets = () => {
    if (state.mode === 'mapCreator') return state.base.assets;
    if (state.mode === 'propDropper') return state.props.assets;
    if (state.mode === 'itemDropper') return state.items.assets;
    return state.npcs.assets;
  };

  const getModeCells = () => {
    if (state.mode === 'mapCreator') return state.base.cells;
    if (state.mode === 'propDropper') return state.props.cells;
    if (state.mode === 'itemDropper') return state.items.cells;
    return state.npcs.cells;
  };

  const getVisibleModes = () => {
    if (state.mode === 'mapCreator') return ['mapCreator'];
    if (state.mode === 'propDropper') return ['mapCreator', 'propDropper'];
    if (state.mode === 'itemDropper') return ['mapCreator', 'propDropper', 'itemDropper'];
    return ['mapCreator', 'propDropper', 'itemDropper', 'npcDropper'];
  };

  const getTool = () => state.temporaryTool || state.tool;

  const normalizeAsset = (asset, index) => {
    const cols = Math.max(1, Number.parseInt(asset?.cols, 10) || 1);
    const rows = Math.max(1, Number.parseInt(asset?.rows, 10) || 1);
    const spriteCount = Math.max(1, Number.parseInt(asset?.spriteCount, 10) || (cols * rows));
    return {
      ...asset,
      number: Number.parseInt(asset?.number, 10) || index + 1,
      name: String(asset?.name || asset?.fileName || `asset_${index + 1}`),
      cols,
      rows,
      spriteCount,
      imageUrl: String(asset?.imageUrl || ''),
      fileName: String(asset?.fileName || ''),
      cacheKey: String(asset?.cacheKey || ''),
      color: String(asset?.color || '#2a2a2a')
    };
  };

  const normalizeBaseCell = (entry) => {
    if (!entry || entry.assetNumber == null) return null;
    return {
      ...entry,
      assetNumber: Number.parseInt(entry.assetNumber, 10) || null,
      spriteIndex: Number.isInteger(entry.spriteIndex) ? entry.spriteIndex : null,
      auto: entry.auto !== false
    };
  };

  const normalizeLayerCell = (entry, withInstance = false) => {
    if (!entry || entry.assetNumber == null) return null;
    const normalized = {
      ...entry,
      assetNumber: Number.parseInt(entry.assetNumber, 10) || null,
      spriteIndex: clamp(Number.parseInt(entry.spriteIndex, 10) || 1, 1, 9999)
    };
    if (withInstance && !normalized.instanceId) {
      normalized.instanceId = createId();
    }
    return normalized;
  };

  const normalizeCells = (source, total, parser) => {
    const output = Array.from({ length: total }, () => null);
    if (!Array.isArray(source)) return output;
    for (let i = 0; i < Math.min(total, source.length); i += 1) {
      output[i] = parser(source[i]);
    }
    return output;
  };

  const getEntryValue = (entry, index) => String(entry?.mapId || entry?.key || entry?.lookupName || `map-${index + 1}`);

  const refreshMapOptions = () => {
    const previous = state.selectedEntryValue || mapSelect.value;
    const maps = projectManager.listUnifiedMaps?.() || [];
    state.mapEntries = maps.map((entry, index) => ({
      ...entry,
      value: getEntryValue(entry, index)
    }));

    mapSelect.innerHTML = '';
    if (!state.mapEntries.length) {
      const option = document.createElement('option');
      option.value = '';
      option.textContent = '—';
      mapSelect.appendChild(option);
      state.selectedEntryValue = '';
      clearWorkspace();
      return;
    }

    state.mapEntries.forEach((entry) => {
      const option = document.createElement('option');
      option.value = entry.value;
      option.textContent = entry.displayName || entry.lookupName || entry.mapId || 'Map';
      mapSelect.appendChild(option);
    });

    const latest = projectManager.getLatestUnifiedMap?.(['npcDropper', 'itemDropper', 'propDropper', 'mapCreator']);
    const latestValue = latest
      ? (state.mapEntries.find((entry) => (
        (latest.mapId && entry.mapId && String(entry.mapId) === String(latest.mapId))
        || (latest.lookupName && entry.lookupName === latest.lookupName)
      ))?.value || '')
      : '';

    const nextValue = state.mapEntries.some((entry) => entry.value === previous)
      ? previous
      : (latestValue || state.mapEntries[0].value);

    state.selectedEntryValue = nextValue;
    mapSelect.value = nextValue;
  };

  const getCurrentEntry = () => state.mapEntries.find((entry) => entry.value === state.selectedEntryValue) || null;

  const resolveAssetImageUrl = async (asset) => {
    if (!asset) return '';
    if (asset.imageUrl) return asset.imageUrl;
    const imageKey = asset.cacheKey || asset.fileName || `${asset.name}:${asset.number}`;
    if (state.imageUrls.has(imageKey)) return state.imageUrls.get(imageKey);

    try {
      let cached = null;
      if (asset.cacheKey) {
        cached = await cacheGet(asset.cacheKey);
      }
      if (!cached && asset.fileName) {
        cached = await cacheGetByName(asset.fileName);
      }
      if (cached?.blob) {
        const url = URL.createObjectURL(cached.blob);
        state.imageUrls.set(imageKey, url);
        return url;
      }
    } catch (error) {
      return '';
    }

    return '';
  };

  const resolveAllImages = async () => {
    const allAssets = [
      ...state.base.assets,
      ...state.props.assets,
      ...state.items.assets,
      ...state.npcs.assets
    ];

    for (let i = 0; i < allAssets.length; i += 1) {
      const asset = allAssets[i];
      const url = await resolveAssetImageUrl(asset);
      if (url) {
        asset.imageUrl = url;
      }
    }
  };

  const findAssetByNumber = (assets, number) => assets.find((asset) => Number(asset.number) === Number(number)) || null;

  const buildSpriteLayer = (asset, spriteIndex, cellSize) => {
    if (!asset?.imageUrl) return null;
    const row = Math.floor((spriteIndex - 1) / asset.cols);
    const col = (spriteIndex - 1) % asset.cols;
    return {
      imageUrl: asset.imageUrl,
      size: `${asset.cols * cellSize}px ${asset.rows * cellSize}px`,
      position: `${-col * cellSize}px ${-row * cellSize}px`
    };
  };

  const getLayerCellAndAsset = (mode, index) => {
    if (mode === 'mapCreator') {
      const cell = state.base.cells[index];
      const asset = cell ? findAssetByNumber(state.base.assets, cell.assetNumber) : null;
      const spriteIndex = cell ? clamp(Number.parseInt(cell.spriteIndex, 10) || 1, 1, asset?.spriteCount || 1) : 1;
      return { cell, asset, spriteIndex };
    }
    if (mode === 'propDropper') {
      const cell = state.props.cells[index];
      const asset = cell ? findAssetByNumber(state.props.assets, cell.assetNumber) : null;
      const spriteIndex = cell ? clamp(Number.parseInt(cell.spriteIndex, 10) || 1, 1, asset?.spriteCount || 1) : 1;
      return { cell, asset, spriteIndex };
    }
    if (mode === 'itemDropper') {
      const cell = state.items.cells[index];
      const asset = cell ? findAssetByNumber(state.items.assets, cell.assetNumber) : null;
      const spriteIndex = cell ? clamp(Number.parseInt(cell.spriteIndex, 10) || 1, 1, asset?.spriteCount || 1) : 1;
      return { cell, asset, spriteIndex };
    }
    const cell = state.npcs.cells[index];
    const asset = cell ? findAssetByNumber(state.npcs.assets, cell.assetNumber) : null;
    const spriteIndex = cell ? clamp(Number.parseInt(cell.spriteIndex, 10) || 1, 1, asset?.spriteCount || 1) : 1;
    return { cell, asset, spriteIndex };
  };

  const renderMapCell = (cellNode, index) => {
    const marker = state.map.markers[index];
    const visibleModes = getVisibleModes();
    const visibleLayers = visibleModes
      .map((mode) => {
        const { cell, asset, spriteIndex } = getLayerCellAndAsset(mode, index);
        if (!cell || !asset) return null;
        return buildSpriteLayer(asset, spriteIndex, state.map.cellSize);
      })
      .filter(Boolean)
      .reverse();

    cellNode.classList.toggle('is-empty', visibleLayers.length === 0);
    cellNode.classList.toggle('has-marker', marker === 'portal');
    cellNode.classList.toggle('marker-entry', marker === 'portal');
    cellNode.classList.toggle('marker-exit', marker === 'portal');

    if (!visibleLayers.length) {
      cellNode.style.backgroundImage = '';
      cellNode.style.backgroundSize = '';
      cellNode.style.backgroundPosition = '';
      cellNode.style.backgroundRepeat = '';
      cellNode.style.backgroundColor = 'rgba(255,255,255,0.03)';
      return;
    }

    cellNode.style.backgroundImage = visibleLayers.map((layer) => `url(${layer.imageUrl})`).join(', ');
    cellNode.style.backgroundSize = visibleLayers.map((layer) => layer.size).join(', ');
    cellNode.style.backgroundPosition = visibleLayers.map((layer) => layer.position).join(', ');
    cellNode.style.backgroundRepeat = visibleLayers.map(() => 'no-repeat').join(', ');
    cellNode.style.backgroundColor = '';
  };

  const renderMapGrid = () => {
    mapGrid.innerHTML = '';
    mapGrid.style.setProperty('--map-columns', state.map.width);
    mapGrid.style.setProperty('--map-cell-size', `${state.map.cellSize}px`);

    const total = state.map.width * state.map.height;
    for (let i = 0; i < total; i += 1) {
      const cellNode = document.createElement('button');
      cellNode.type = 'button';
      cellNode.className = 'map-cell';
      cellNode.dataset.index = String(i);
      renderMapCell(cellNode, i);
      mapGrid.appendChild(cellNode);
    }
  };

  const renderModeButtons = () => {
    qsa('[data-lab-mode]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.labMode === state.mode);
    });
    assetsSubtitle.textContent = assetsSubtitleByMode[state.mode] || 'Active assets';
    visibleLayersLabel.textContent = layerLabelsByMode[state.mode] || 'Visible layers: Map';
  };

  const renderToolButtons = () => {
    const effectiveTool = getTool();
    qsa('[data-lab-tool]').forEach((button) => {
      const tool = button.dataset.labTool;
      const disabled = tool === 'portal' && !(state.mode === 'mapCreator' || state.mode === 'propDropper');
      button.disabled = disabled;
      button.classList.toggle('is-active', !disabled && tool === effectiveTool);
    });
  };

  const getSelectedAsset = () => {
    const assets = getModeAssets();
    return findAssetByNumber(assets, state.selectedAssetNumber);
  };

  const renderAssetGrid = () => {
    assetGrid.innerHTML = '';
    const selectedAsset = getSelectedAsset();
    if (!selectedAsset) {
      assetGridLabel.textContent = 'No asset selected.';
      return;
    }

    assetGridLabel.textContent = selectedAsset.name;
    assetGrid.style.setProperty('--asset-grid-columns', selectedAsset.cols);
    assetGrid.style.setProperty('--asset-cell-size', `${Math.max(24, state.map.cellSize * 2)}px`);

    for (let index = 1; index <= selectedAsset.spriteCount; index += 1) {
      const row = Math.floor((index - 1) / selectedAsset.cols);
      const col = (index - 1) % selectedAsset.cols;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'asset-sprite';
      if (index === state.selectedSpriteIndex) button.classList.add('is-active');
      button.textContent = String(index);

      if (selectedAsset.imageUrl) {
        const size = `${selectedAsset.cols * state.map.cellSize * 2}px ${selectedAsset.rows * state.map.cellSize * 2}px`;
        const position = `${-col * state.map.cellSize * 2}px ${-row * state.map.cellSize * 2}px`;
        button.style.backgroundImage = `url(${selectedAsset.imageUrl})`;
        button.style.backgroundSize = size;
        button.style.backgroundPosition = position;
      } else {
        button.style.backgroundColor = selectedAsset.color || '#2a2a2a';
      }

      button.addEventListener('click', () => {
        state.selectedSpriteIndex = index;
        renderAssetGrid();
      });

      assetGrid.appendChild(button);
    }
  };

  const renderAssetList = () => {
    assetList.innerHTML = '';
    const assets = getModeAssets();

    if (!assets.length) {
      const empty = document.createElement('div');
      empty.className = 'asset-row';
      empty.textContent = 'No assets for this layer yet.';
      assetList.appendChild(empty);
      return;
    }

    assets.forEach((asset) => {
      const row = document.createElement('div');
      row.className = 'asset-row';
      if (Number(asset.number) === Number(state.selectedAssetNumber)) {
        row.classList.add('is-active');
      }

      const nameField = document.createElement('div');
      nameField.className = 'asset-field asset-name';
      const nameLabel = document.createElement('label');
      nameLabel.className = 'panel-label';
      nameLabel.textContent = 'Asset';
      const nameValue = document.createElement('span');
      nameValue.className = 'asset-file-name';
      nameValue.textContent = `${asset.number}. ${asset.name}`;
      nameField.appendChild(nameLabel);
      nameField.appendChild(nameValue);

      const spriteField = document.createElement('div');
      spriteField.className = 'asset-field';
      const spriteLabel = document.createElement('label');
      spriteLabel.className = 'panel-label';
      spriteLabel.textContent = 'Sprites';
      const spriteValue = document.createElement('span');
      spriteValue.className = 'panel-value';
      spriteValue.textContent = String(asset.spriteCount);
      spriteField.appendChild(spriteLabel);
      spriteField.appendChild(spriteValue);

      const selectButton = document.createElement('button');
      selectButton.type = 'button';
      selectButton.className = 'button-secondary asset-select-button';
      selectButton.textContent = 'Select';
      selectButton.addEventListener('click', () => {
        state.selectedAssetNumber = asset.number;
        state.selectedSpriteIndex = 1;
        renderAssetList();
        renderAssetGrid();
      });

      row.appendChild(nameField);
      row.appendChild(spriteField);
      row.appendChild(selectButton);
      assetList.appendChild(row);
    });
  };

  const markDirty = () => {
    setPublishState(true);
  };

  const applyToolAt = (index, isDrag = false) => {
    const tool = getTool();
    const activeCells = getModeCells();
    if (!Array.isArray(activeCells)) return;

    if (tool === 'portal') {
      if (isDrag) return;
      if (!(state.mode === 'mapCreator' || state.mode === 'propDropper')) return;
      state.map.markers[index] = state.map.markers[index] === 'portal' ? null : 'portal';
      markDirty();
      const cellNode = mapGrid.querySelector(`.map-cell[data-index="${index}"]`);
      if (cellNode) renderMapCell(cellNode, index);
      return;
    }

    if (tool === 'eyedropper') {
      const entry = activeCells[index];
      if (!entry || !entry.assetNumber) return;
      state.selectedAssetNumber = entry.assetNumber;
      state.selectedSpriteIndex = clamp(Number.parseInt(entry.spriteIndex, 10) || 1, 1, 9999);
      renderAssetList();
      renderAssetGrid();
      return;
    }

    if (tool === 'eraser') {
      if (!activeCells[index]) return;
      activeCells[index] = null;
      markDirty();
      const cellNode = mapGrid.querySelector(`.map-cell[data-index="${index}"]`);
      if (cellNode) renderMapCell(cellNode, index);
      return;
    }

    const selectedAsset = getSelectedAsset();
    if (!selectedAsset) return;

    if (state.mode === 'mapCreator') {
      activeCells[index] = {
        assetNumber: selectedAsset.number,
        spriteIndex: state.selectedSpriteIndex,
        auto: false
      };
    } else {
      const previous = activeCells[index] && typeof activeCells[index] === 'object' ? activeCells[index] : {};
      const next = {
        ...previous,
        assetNumber: selectedAsset.number,
        spriteIndex: state.selectedSpriteIndex
      };
      if ((state.mode === 'itemDropper' || state.mode === 'npcDropper') && !next.instanceId) {
        next.instanceId = createId();
      }
      activeCells[index] = next;
    }

    markDirty();
    const cellNode = mapGrid.querySelector(`.map-cell[data-index="${index}"]`);
    if (cellNode) renderMapCell(cellNode, index);
  };

  const buildMapBasePayload = () => ({
    version: 2,
    assetColorPalette: 'studio',
    assets: state.base.assets,
    map: {
      id: state.map.id,
      name: state.map.name,
      width: state.map.width,
      height: state.map.height,
      cellSize: state.map.cellSize,
      randomize: state.map.randomize,
      cells: state.base.cells,
      markers: state.map.markers
    }
  });

  const buildPayloadForStage = (stage) => {
    const payload = buildMapBasePayload();

    if (stage === 'propDropper' || stage === 'itemDropper' || stage === 'npcDropper') {
      payload.itemAssets = state.props.assets;
      payload.itemLayer = {
        name: state.map.name,
        width: state.map.width,
        height: state.map.height,
        cellSize: state.map.cellSize,
        cells: state.props.cells
      };
    }

    if (stage === 'itemDropper' || stage === 'npcDropper') {
      payload.gameItemAssets = state.items.assets;
      payload.gameItemLayer = {
        name: state.map.name,
        width: state.map.width,
        height: state.map.height,
        cellSize: state.map.cellSize,
        cells: state.items.cells
      };
    }

    if (stage === 'npcDropper') {
      payload.npcAssets = state.npcs.assets;
      payload.npcLayer = {
        name: state.map.name,
        width: state.map.width,
        height: state.map.height,
        cellSize: state.map.cellSize,
        cells: state.npcs.cells
      };
    }

    return window.EightBitsMapSchema.compactPayload(payload);
  };

  const publishCurrentMode = async () => {
    const entry = getCurrentEntry();
    if (!entry || !state.map.id) return;
    const stage = stageByMode[state.mode];
    const docKey = entry?.docsByStage?.[stage]?.docKey || null;
    const payload = buildPayloadForStage(stage);

    projectManager.publishStageDocument(stage, payload, {
      docKey,
      mapId: state.map.id,
      lookupName: state.map.name || entry.lookupName || entry.displayName || 'Map',
      displayName: state.map.name || entry.displayName || entry.lookupName || 'Map'
    });

    setPublishState(false);
    projectManager.triggerReload?.('update-cache');
    refreshMapOptions();
    await loadSelectedMap();
  };

  const loadSelectedMap = async () => {
    const entry = getCurrentEntry();
    if (!entry) {
      clearWorkspace();
      return;
    }

    const payload = projectManager.buildUnifiedMapPayload?.(entry) || entry.preferredPayload || null;
    const normalized = window.EightBitsMapSchema.normalizePayload(payload);
    if (!normalized?.map) return;

    const width = clamp(Number.parseInt(normalized.map.width, 10) || 1, 1, 200);
    const height = clamp(Number.parseInt(normalized.map.height, 10) || 1, 1, 200);
    const total = width * height;

    state.map.id = String(normalized.map.id || entry.mapId || '');
    state.map.name = String(normalized.map.name || entry.displayName || entry.lookupName || 'Map');
    state.map.width = width;
    state.map.height = height;
    state.map.cellSize = clamp(Number.parseInt(state.map.cellSize, 10) || Number.parseInt(normalized.map.cellSize, 10) || 16, 10, 32);
    state.map.randomize = normalized.map.randomize || null;
    state.map.markers = normalizeCells(normalized.map.markers, total, (marker) => (marker === 'portal' ? 'portal' : null));

    state.base.assets = (Array.isArray(normalized.assets) ? normalized.assets : []).map(normalizeAsset);
    state.base.cells = normalizeCells(normalized.map.cells, total, normalizeBaseCell);

    state.props.assets = (Array.isArray(normalized.itemAssets) ? normalized.itemAssets : []).map(normalizeAsset);
    state.props.cells = normalizeCells(normalized.itemLayer?.cells, total, normalizeLayerCell);

    state.items.assets = (Array.isArray(normalized.gameItemAssets) ? normalized.gameItemAssets : []).map(normalizeAsset);
    state.items.cells = normalizeCells(normalized.gameItemLayer?.cells, total, (entryCell) => normalizeLayerCell(entryCell, true));

    state.npcs.assets = (Array.isArray(normalized.npcAssets) ? normalized.npcAssets : []).map(normalizeAsset);
    state.npcs.cells = normalizeCells(normalized.npcLayer?.cells, total, (entryCell) => normalizeLayerCell(entryCell, true));

    await resolveAllImages();

    mapNameInput.value = state.map.name;
    cellSizeInput.value = String(state.map.cellSize);

    const modeAssets = getModeAssets();
    state.selectedAssetNumber = modeAssets[0]?.number || null;
    state.selectedSpriteIndex = 1;

    renderModeButtons();
    renderToolButtons();
    renderAssetList();
    renderAssetGrid();
    renderMapGrid();
    setPublishState(false);
  };

  mapSelect.addEventListener('change', async () => {
    state.selectedEntryValue = mapSelect.value;
    await loadSelectedMap();
  });

  mapNameInput.addEventListener('input', () => {
    state.map.name = String(mapNameInput.value || '').trim();
    markDirty();
  });

  cellSizeInput.addEventListener('input', () => {
    state.map.cellSize = clamp(Number.parseInt(cellSizeInput.value, 10) || 16, 10, 32);
    markDirty();
    renderAssetGrid();
    renderMapGrid();
  });

  qsa('[data-lab-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextMode = button.dataset.labMode;
      if (!nextMode || !stageByMode[nextMode]) return;
      state.mode = nextMode;
      state.tool = state.tool === 'portal' && !(state.mode === 'mapCreator' || state.mode === 'propDropper') ? 'pencil' : state.tool;
      const modeAssets = getModeAssets();
      state.selectedAssetNumber = modeAssets[0]?.number || null;
      state.selectedSpriteIndex = 1;
      renderModeButtons();
      renderToolButtons();
      renderAssetList();
      renderAssetGrid();
      renderMapGrid();
    });
  });

  qsa('[data-lab-tool]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTool = button.dataset.labTool;
      if (!nextTool) return;
      if (nextTool === 'portal' && !(state.mode === 'mapCreator' || state.mode === 'propDropper')) return;
      state.tool = nextTool;
      renderToolButtons();
    });
  });

  mapGrid.addEventListener('pointerdown', (event) => {
    const target = event.target.closest('.map-cell');
    if (!target) return;
    const index = Number.parseInt(target.dataset.index, 10);
    if (!Number.isFinite(index)) return;
    state.isPainting = true;
    applyToolAt(index, false);
  });

  mapGrid.addEventListener('pointermove', (event) => {
    const target = event.target.closest('.map-cell');
    if (!target || !state.isPainting) return;
    const index = Number.parseInt(target.dataset.index, 10);
    if (!Number.isFinite(index)) return;
    const tool = getTool();
    if (tool === 'eyedropper' || tool === 'portal') return;
    applyToolAt(index, true);
  });

  window.addEventListener('pointerup', () => {
    state.isPainting = false;
  });

  window.addEventListener('keydown', (event) => {
    const tag = String(event.target?.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    if (event.key === 'Alt') {
      state.temporaryTool = 'eraser';
      renderToolButtons();
    }
    if (event.code === 'Space') {
      event.preventDefault();
      state.temporaryTool = 'eyedropper';
      renderToolButtons();
    }
  });

  window.addEventListener('keyup', (event) => {
    if (event.key === 'Alt' && state.temporaryTool === 'eraser') {
      state.temporaryTool = null;
      renderToolButtons();
    }
    if (event.code === 'Space' && state.temporaryTool === 'eyedropper') {
      state.temporaryTool = null;
      renderToolButtons();
    }
  });

  window.addEventListener('blur', () => {
    state.temporaryTool = null;
    state.isPainting = false;
    renderToolButtons();
  });

  updateCacheButton.addEventListener('click', () => {
    publishCurrentMode();
  });

  refreshButton.addEventListener('click', async () => {
    refreshMapOptions();
    await loadSelectedMap();
  });

  window.addEventListener('8bits-project-updated', async () => {
    const hadDirty = state.dirty;
    refreshMapOptions();
    if (!hadDirty) {
      await loadSelectedMap();
    }
  });

  const boot = async () => {
    renderModeButtons();
    renderToolButtons();
    refreshMapOptions();
    await loadSelectedMap();
  };

  boot();
})();
