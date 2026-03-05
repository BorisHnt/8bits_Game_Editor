(() => {
  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const createId = () => `lab_${Math.random().toString(36).slice(2, 11)}_${Date.now().toString(36)}`;

  const cacheDbName = '8bits-map-cache';
  const cacheStoreName = 'images';

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

  const createModeModules = () => ({
    mapCreator: {
      id: 'mapCreator',
      stage: 'mapCreator',
      assetsLabel: 'Map Creator assets',
      visibleLayersLabel: 'Visible layers: Map',
      visibleModes: ['mapCreator'],
      supportsPortal: true,
      getAssets: (state) => state.base.assets,
      getCells: (state) => state.base.cells,
      createPaintCell: (editor, selectedAsset) => ({
        assetNumber: selectedAsset.number,
        spriteIndex: editor.state.selectedSpriteIndex,
        auto: editor.state.modeSettings.mapCreator.paintAuto
      }),
      normalizeLoadedCell: (entry) => normalizeBaseCell(entry),
      extendPayload: () => {},
      renderOptions: (editor, container) => {
        container.innerHTML = '';
        const label = document.createElement('label');
        label.className = 'panel-value';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = editor.state.modeSettings.mapCreator.paintAuto;
        checkbox.addEventListener('change', () => {
          editor.state.modeSettings.mapCreator.paintAuto = checkbox.checked;
          editor.markDirty();
        });
        label.appendChild(checkbox);
        label.append(' Auto tile when painting base cells');
        container.appendChild(label);
      }
    },
    propDropper: {
      id: 'propDropper',
      stage: 'propDropper',
      assetsLabel: 'Prop Dropper assets',
      visibleLayersLabel: 'Visible layers: Map + Props',
      visibleModes: ['mapCreator', 'propDropper'],
      supportsPortal: true,
      getAssets: (state) => state.props.assets,
      getCells: (state) => state.props.cells,
      createPaintCell: (editor, selectedAsset, existing) => ({
        ...(existing && typeof existing === 'object' ? existing : {}),
        assetNumber: selectedAsset.number,
        spriteIndex: editor.state.selectedSpriteIndex,
        collision: editor.state.modeSettings.propDropper.defaultCollision,
        playerDepth: editor.state.modeSettings.propDropper.defaultDepth
      }),
      normalizeLoadedCell: (entry) => normalizeLayerCell(entry, false),
      extendPayload: (editor, payload) => {
        payload.itemAssets = editor.state.props.assets;
        payload.itemLayer = {
          name: editor.state.map.name,
          width: editor.state.map.width,
          height: editor.state.map.height,
          cellSize: editor.state.map.cellSize,
          cells: editor.state.props.cells
        };
      },
      renderOptions: (editor, container) => {
        container.innerHTML = '';

        const collisionLabel = document.createElement('label');
        collisionLabel.className = 'panel-label';
        collisionLabel.textContent = 'Default collision';

        const collisionSelect = document.createElement('select');
        collisionSelect.className = 'asset-select';
        ['blocking', 'passable'].forEach((value) => {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = value;
          collisionSelect.appendChild(option);
        });
        collisionSelect.value = editor.state.modeSettings.propDropper.defaultCollision;
        collisionSelect.addEventListener('change', () => {
          editor.state.modeSettings.propDropper.defaultCollision = collisionSelect.value === 'passable' ? 'passable' : 'blocking';
          editor.markDirty();
        });

        const depthLabel = document.createElement('label');
        depthLabel.className = 'panel-label';
        depthLabel.textContent = 'Default player depth';

        const depthSelect = document.createElement('select');
        depthSelect.className = 'asset-select';
        ['front', 'cover'].forEach((value) => {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = value;
          depthSelect.appendChild(option);
        });
        depthSelect.value = editor.state.modeSettings.propDropper.defaultDepth;
        depthSelect.addEventListener('change', () => {
          editor.state.modeSettings.propDropper.defaultDepth = depthSelect.value === 'cover' ? 'cover' : 'front';
          editor.markDirty();
        });

        container.appendChild(collisionLabel);
        container.appendChild(collisionSelect);
        container.appendChild(depthLabel);
        container.appendChild(depthSelect);
      }
    },
    itemDropper: {
      id: 'itemDropper',
      stage: 'itemDropper',
      assetsLabel: 'Item Dropper assets',
      visibleLayersLabel: 'Visible layers: Map + Props + Items',
      visibleModes: ['mapCreator', 'propDropper', 'itemDropper'],
      supportsPortal: false,
      getAssets: (state) => state.items.assets,
      getCells: (state) => state.items.cells,
      createPaintCell: (editor, selectedAsset, existing) => ({
        ...(existing && typeof existing === 'object' ? existing : {}),
        instanceId: existing?.instanceId || createId(),
        assetNumber: selectedAsset.number,
        spriteIndex: editor.state.selectedSpriteIndex,
        itemKind: editor.state.modeSettings.itemDropper.defaultItemKind,
        oneShot: editor.state.modeSettings.itemDropper.defaultOneShot,
        interactionId: editor.state.modeSettings.itemDropper.defaultInteractionId
      }),
      normalizeLoadedCell: (entry) => normalizeLayerCell(entry, true),
      extendPayload: (editor, payload) => {
        payload.itemAssets = editor.state.props.assets;
        payload.itemLayer = {
          name: editor.state.map.name,
          width: editor.state.map.width,
          height: editor.state.map.height,
          cellSize: editor.state.map.cellSize,
          cells: editor.state.props.cells
        };
        payload.gameItemAssets = editor.state.items.assets;
        payload.gameItemLayer = {
          name: editor.state.map.name,
          width: editor.state.map.width,
          height: editor.state.map.height,
          cellSize: editor.state.map.cellSize,
          cells: editor.state.items.cells
        };
      },
      renderOptions: (editor, container) => {
        container.innerHTML = '';

        const kindLabel = document.createElement('label');
        kindLabel.className = 'panel-label';
        kindLabel.textContent = 'Default item kind';

        const kindSelect = document.createElement('select');
        kindSelect.className = 'asset-select';
        ['pickup', 'trigger', 'chest'].forEach((value) => {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = value;
          kindSelect.appendChild(option);
        });
        kindSelect.value = editor.state.modeSettings.itemDropper.defaultItemKind;
        kindSelect.addEventListener('change', () => {
          editor.state.modeSettings.itemDropper.defaultItemKind = kindSelect.value;
          editor.markDirty();
        });

        const oneShotLabel = document.createElement('label');
        oneShotLabel.className = 'panel-value';
        const oneShotCheckbox = document.createElement('input');
        oneShotCheckbox.type = 'checkbox';
        oneShotCheckbox.checked = editor.state.modeSettings.itemDropper.defaultOneShot;
        oneShotCheckbox.addEventListener('change', () => {
          editor.state.modeSettings.itemDropper.defaultOneShot = oneShotCheckbox.checked;
          editor.markDirty();
        });
        oneShotLabel.appendChild(oneShotCheckbox);
        oneShotLabel.append(' One-shot interaction');

        const interactionLabel = document.createElement('label');
        interactionLabel.className = 'panel-label';
        interactionLabel.textContent = 'Default interaction id';

        const interactionInput = document.createElement('input');
        interactionInput.className = 'asset-input';
        interactionInput.type = 'text';
        interactionInput.placeholder = 'open_chest';
        interactionInput.value = editor.state.modeSettings.itemDropper.defaultInteractionId;
        interactionInput.addEventListener('input', () => {
          editor.state.modeSettings.itemDropper.defaultInteractionId = interactionInput.value.trim();
          editor.markDirty();
        });

        container.appendChild(kindLabel);
        container.appendChild(kindSelect);
        container.appendChild(oneShotLabel);
        container.appendChild(interactionLabel);
        container.appendChild(interactionInput);
      }
    },
    npcDropper: {
      id: 'npcDropper',
      stage: 'npcDropper',
      assetsLabel: 'NPC Dropper assets',
      visibleLayersLabel: 'Visible layers: Map + Props + Items + NPCs',
      visibleModes: ['mapCreator', 'propDropper', 'itemDropper', 'npcDropper'],
      supportsPortal: false,
      getAssets: (state) => state.npcs.assets,
      getCells: (state) => state.npcs.cells,
      createPaintCell: (editor, selectedAsset, existing) => ({
        ...(existing && typeof existing === 'object' ? existing : {}),
        instanceId: existing?.instanceId || createId(),
        assetNumber: selectedAsset.number,
        spriteIndex: editor.state.selectedSpriteIndex,
        npcName: editor.state.modeSettings.npcDropper.defaultNpcName,
        facing: editor.state.modeSettings.npcDropper.defaultFacing,
        behavior: editor.state.modeSettings.npcDropper.defaultBehavior,
        interactionId: editor.state.modeSettings.npcDropper.defaultInteractionId
      }),
      normalizeLoadedCell: (entry) => normalizeLayerCell(entry, true),
      extendPayload: (editor, payload) => {
        payload.itemAssets = editor.state.props.assets;
        payload.itemLayer = {
          name: editor.state.map.name,
          width: editor.state.map.width,
          height: editor.state.map.height,
          cellSize: editor.state.map.cellSize,
          cells: editor.state.props.cells
        };
        payload.gameItemAssets = editor.state.items.assets;
        payload.gameItemLayer = {
          name: editor.state.map.name,
          width: editor.state.map.width,
          height: editor.state.map.height,
          cellSize: editor.state.map.cellSize,
          cells: editor.state.items.cells
        };
        payload.npcAssets = editor.state.npcs.assets;
        payload.npcLayer = {
          name: editor.state.map.name,
          width: editor.state.map.width,
          height: editor.state.map.height,
          cellSize: editor.state.map.cellSize,
          cells: editor.state.npcs.cells
        };
      },
      renderOptions: (editor, container) => {
        container.innerHTML = '';

        const nameLabel = document.createElement('label');
        nameLabel.className = 'panel-label';
        nameLabel.textContent = 'Default NPC name';

        const nameInput = document.createElement('input');
        nameInput.className = 'asset-input';
        nameInput.type = 'text';
        nameInput.placeholder = 'Guard';
        nameInput.value = editor.state.modeSettings.npcDropper.defaultNpcName;
        nameInput.addEventListener('input', () => {
          editor.state.modeSettings.npcDropper.defaultNpcName = nameInput.value.trim();
          editor.markDirty();
        });

        const facingLabel = document.createElement('label');
        facingLabel.className = 'panel-label';
        facingLabel.textContent = 'Default facing';

        const facingSelect = document.createElement('select');
        facingSelect.className = 'asset-select';
        ['down', 'up', 'left', 'right'].forEach((value) => {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = value;
          facingSelect.appendChild(option);
        });
        facingSelect.value = editor.state.modeSettings.npcDropper.defaultFacing;
        facingSelect.addEventListener('change', () => {
          editor.state.modeSettings.npcDropper.defaultFacing = facingSelect.value;
          editor.markDirty();
        });

        const behaviorLabel = document.createElement('label');
        behaviorLabel.className = 'panel-label';
        behaviorLabel.textContent = 'Default behavior';

        const behaviorSelect = document.createElement('select');
        behaviorSelect.className = 'asset-select';
        ['idle', 'patrol', 'look-around'].forEach((value) => {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = value;
          behaviorSelect.appendChild(option);
        });
        behaviorSelect.value = editor.state.modeSettings.npcDropper.defaultBehavior;
        behaviorSelect.addEventListener('change', () => {
          editor.state.modeSettings.npcDropper.defaultBehavior = behaviorSelect.value;
          editor.markDirty();
        });

        container.appendChild(nameLabel);
        container.appendChild(nameInput);
        container.appendChild(facingLabel);
        container.appendChild(facingSelect);
        container.appendChild(behaviorLabel);
        container.appendChild(behaviorSelect);
      }
    }
  });

  class CoreEditor {
    constructor(projectManager, ui) {
      this.projectManager = projectManager;
      this.ui = ui;
      this.modeModules = createModeModules();
      this.state = {
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
        imageUrls: new Map(),
        modeSettings: {
          mapCreator: {
            paintAuto: false
          },
          propDropper: {
            defaultCollision: 'blocking',
            defaultDepth: 'front'
          },
          itemDropper: {
            defaultItemKind: 'pickup',
            defaultOneShot: true,
            defaultInteractionId: ''
          },
          npcDropper: {
            defaultNpcName: '',
            defaultFacing: 'down',
            defaultBehavior: 'idle',
            defaultInteractionId: ''
          }
        }
      };
    }

    getActiveModeModule() {
      return this.modeModules[this.state.mode] || this.modeModules.mapCreator;
    }

    getModeModule(modeId) {
      return this.modeModules[modeId] || this.modeModules.mapCreator;
    }

    getModeAssets(modeId = this.state.mode) {
      return this.getModeModule(modeId).getAssets(this.state);
    }

    getModeCells(modeId = this.state.mode) {
      return this.getModeModule(modeId).getCells(this.state);
    }

    getEffectiveTool() {
      return this.state.temporaryTool || this.state.tool;
    }

    setPublishState(dirty) {
      this.state.dirty = Boolean(dirty);
      this.ui.publishStatus.dataset.status = this.state.dirty ? 'dirty' : 'updated';
      this.ui.publishStatus.textContent = this.state.dirty ? 'Not published yet' : 'Updated';
    }

    markDirty() {
      this.setPublishState(true);
    }

    clearWorkspace() {
      this.state.map.id = '';
      this.state.map.name = '';
      this.state.map.width = 1;
      this.state.map.height = 1;
      this.state.map.markers = [];
      this.state.base = { assets: [], cells: [] };
      this.state.props = { assets: [], cells: [] };
      this.state.items = { assets: [], cells: [] };
      this.state.npcs = { assets: [], cells: [] };
      this.state.selectedAssetNumber = null;
      this.state.selectedSpriteIndex = 1;
      this.ui.mapNameInput.value = '';
      this.renderAll();
      this.setPublishState(false);
    }

    getEntryValue(entry, index) {
      return String(entry?.mapId || entry?.key || entry?.lookupName || `map-${index + 1}`);
    }

    refreshMapOptions() {
      const previous = this.state.selectedEntryValue || this.ui.mapSelect.value;
      const maps = this.projectManager.listUnifiedMaps?.() || [];
      this.state.mapEntries = maps.map((entry, index) => ({
        ...entry,
        value: this.getEntryValue(entry, index)
      }));

      this.ui.mapSelect.innerHTML = '';
      if (!this.state.mapEntries.length) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = '—';
        this.ui.mapSelect.appendChild(option);
        this.state.selectedEntryValue = '';
        this.clearWorkspace();
        return;
      }

      this.state.mapEntries.forEach((entry) => {
        const option = document.createElement('option');
        option.value = entry.value;
        option.textContent = entry.displayName || entry.lookupName || entry.mapId || 'Map';
        this.ui.mapSelect.appendChild(option);
      });

      const latest = this.projectManager.getLatestUnifiedMap?.(['npcDropper', 'itemDropper', 'propDropper', 'mapCreator']);
      const latestValue = latest
        ? (this.state.mapEntries.find((entry) => (
          (latest.mapId && entry.mapId && String(entry.mapId) === String(latest.mapId))
          || (latest.lookupName && entry.lookupName === latest.lookupName)
        ))?.value || '')
        : '';

      const nextValue = this.state.mapEntries.some((entry) => entry.value === previous)
        ? previous
        : (latestValue || this.state.mapEntries[0].value);

      this.state.selectedEntryValue = nextValue;
      this.ui.mapSelect.value = nextValue;
    }

    getCurrentEntry() {
      return this.state.mapEntries.find((entry) => entry.value === this.state.selectedEntryValue) || null;
    }

    async resolveAssetImageUrl(asset) {
      if (!asset) return '';
      if (asset.imageUrl) return asset.imageUrl;
      const imageKey = asset.cacheKey || asset.fileName || `${asset.name}:${asset.number}`;
      if (this.state.imageUrls.has(imageKey)) return this.state.imageUrls.get(imageKey);

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
          this.state.imageUrls.set(imageKey, url);
          return url;
        }
      } catch (error) {
        return '';
      }

      return '';
    }

    async resolveAllImages() {
      const allAssets = [
        ...this.state.base.assets,
        ...this.state.props.assets,
        ...this.state.items.assets,
        ...this.state.npcs.assets
      ];

      for (let i = 0; i < allAssets.length; i += 1) {
        const asset = allAssets[i];
        const url = await this.resolveAssetImageUrl(asset);
        if (url) {
          asset.imageUrl = url;
        }
      }
    }

    getLayerCellAndAsset(mode, index) {
      if (mode === 'mapCreator') {
        const cell = this.state.base.cells[index];
        const asset = cell ? findAssetByNumber(this.state.base.assets, cell.assetNumber) : null;
        const spriteIndex = cell ? clamp(Number.parseInt(cell.spriteIndex, 10) || 1, 1, asset?.spriteCount || 1) : 1;
        return { cell, asset, spriteIndex };
      }
      if (mode === 'propDropper') {
        const cell = this.state.props.cells[index];
        const asset = cell ? findAssetByNumber(this.state.props.assets, cell.assetNumber) : null;
        const spriteIndex = cell ? clamp(Number.parseInt(cell.spriteIndex, 10) || 1, 1, asset?.spriteCount || 1) : 1;
        return { cell, asset, spriteIndex };
      }
      if (mode === 'itemDropper') {
        const cell = this.state.items.cells[index];
        const asset = cell ? findAssetByNumber(this.state.items.assets, cell.assetNumber) : null;
        const spriteIndex = cell ? clamp(Number.parseInt(cell.spriteIndex, 10) || 1, 1, asset?.spriteCount || 1) : 1;
        return { cell, asset, spriteIndex };
      }
      const cell = this.state.npcs.cells[index];
      const asset = cell ? findAssetByNumber(this.state.npcs.assets, cell.assetNumber) : null;
      const spriteIndex = cell ? clamp(Number.parseInt(cell.spriteIndex, 10) || 1, 1, asset?.spriteCount || 1) : 1;
      return { cell, asset, spriteIndex };
    }

    renderMapCell(cellNode, index) {
      const marker = this.state.map.markers[index];
      const visibleModes = this.getActiveModeModule().visibleModes;
      const visibleLayers = visibleModes
        .map((mode) => {
          const { cell, asset, spriteIndex } = this.getLayerCellAndAsset(mode, index);
          if (!cell || !asset) return null;
          return buildSpriteLayer(asset, spriteIndex, this.state.map.cellSize);
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
    }

    renderMapGrid() {
      this.ui.mapGrid.innerHTML = '';
      this.ui.mapGrid.style.setProperty('--map-columns', this.state.map.width);
      this.ui.mapGrid.style.setProperty('--map-cell-size', `${this.state.map.cellSize}px`);

      const total = this.state.map.width * this.state.map.height;
      for (let i = 0; i < total; i += 1) {
        const cellNode = document.createElement('button');
        cellNode.type = 'button';
        cellNode.className = 'map-cell';
        cellNode.dataset.index = String(i);
        this.renderMapCell(cellNode, i);
        this.ui.mapGrid.appendChild(cellNode);
      }
    }

    renderModeButtons() {
      qsa('[data-lab-mode]').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.labMode === this.state.mode);
      });
      const module = this.getActiveModeModule();
      this.ui.assetsSubtitle.textContent = module.assetsLabel;
      this.ui.visibleLayersLabel.textContent = module.visibleLayersLabel;
    }

    renderToolButtons() {
      const effectiveTool = this.getEffectiveTool();
      const module = this.getActiveModeModule();
      qsa('[data-lab-tool]').forEach((button) => {
        const tool = button.dataset.labTool;
        const disabled = tool === 'portal' && !module.supportsPortal;
        button.disabled = disabled;
        button.classList.toggle('is-active', !disabled && tool === effectiveTool);
      });
    }

    renderModeOptions() {
      const module = this.getActiveModeModule();
      module.renderOptions(this, this.ui.modeOptions);
    }

    getSelectedAsset() {
      const assets = this.getModeAssets();
      return findAssetByNumber(assets, this.state.selectedAssetNumber);
    }

    renderAssetGrid() {
      this.ui.assetGrid.innerHTML = '';
      const selectedAsset = this.getSelectedAsset();
      if (!selectedAsset) {
        this.ui.assetGridLabel.textContent = 'No asset selected.';
        return;
      }

      this.ui.assetGridLabel.textContent = selectedAsset.name;
      this.ui.assetGrid.style.setProperty('--asset-grid-columns', selectedAsset.cols);
      this.ui.assetGrid.style.setProperty('--asset-cell-size', `${Math.max(24, this.state.map.cellSize * 2)}px`);

      for (let index = 1; index <= selectedAsset.spriteCount; index += 1) {
        const row = Math.floor((index - 1) / selectedAsset.cols);
        const col = (index - 1) % selectedAsset.cols;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'asset-sprite';
        if (index === this.state.selectedSpriteIndex) button.classList.add('is-active');
        button.textContent = String(index);

        if (selectedAsset.imageUrl) {
          const size = `${selectedAsset.cols * this.state.map.cellSize * 2}px ${selectedAsset.rows * this.state.map.cellSize * 2}px`;
          const position = `${-col * this.state.map.cellSize * 2}px ${-row * this.state.map.cellSize * 2}px`;
          button.style.backgroundImage = `url(${selectedAsset.imageUrl})`;
          button.style.backgroundSize = size;
          button.style.backgroundPosition = position;
        } else {
          button.style.backgroundColor = selectedAsset.color || '#2a2a2a';
        }

        button.addEventListener('click', () => {
          this.state.selectedSpriteIndex = index;
          this.renderAssetGrid();
        });

        this.ui.assetGrid.appendChild(button);
      }
    }

    renderAssetList() {
      this.ui.assetList.innerHTML = '';
      const assets = this.getModeAssets();

      if (!assets.length) {
        const empty = document.createElement('div');
        empty.className = 'asset-row';
        empty.textContent = 'No assets for this layer yet.';
        this.ui.assetList.appendChild(empty);
        return;
      }

      assets.forEach((asset) => {
        const row = document.createElement('div');
        row.className = 'asset-row';
        if (Number(asset.number) === Number(this.state.selectedAssetNumber)) {
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
          this.state.selectedAssetNumber = asset.number;
          this.state.selectedSpriteIndex = 1;
          this.renderAssetList();
          this.renderAssetGrid();
        });

        row.appendChild(nameField);
        row.appendChild(spriteField);
        row.appendChild(selectButton);
        this.ui.assetList.appendChild(row);
      });
    }

    renderAll() {
      this.renderModeButtons();
      this.renderToolButtons();
      this.renderModeOptions();
      this.renderAssetList();
      this.renderAssetGrid();
      this.renderMapGrid();
    }

    applyToolAt(index, isDrag = false) {
      const tool = this.getEffectiveTool();
      const module = this.getActiveModeModule();
      const activeCells = module.getCells(this.state);
      if (!Array.isArray(activeCells)) return;

      if (tool === 'portal') {
        if (isDrag || !module.supportsPortal) return;
        this.state.map.markers[index] = this.state.map.markers[index] === 'portal' ? null : 'portal';
        this.markDirty();
        const cellNode = this.ui.mapGrid.querySelector(`.map-cell[data-index="${index}"]`);
        if (cellNode) this.renderMapCell(cellNode, index);
        return;
      }

      if (tool === 'eyedropper') {
        const entry = activeCells[index];
        if (!entry || !entry.assetNumber) return;
        this.state.selectedAssetNumber = entry.assetNumber;
        this.state.selectedSpriteIndex = clamp(Number.parseInt(entry.spriteIndex, 10) || 1, 1, 9999);
        this.renderAssetList();
        this.renderAssetGrid();
        return;
      }

      if (tool === 'eraser') {
        if (!activeCells[index]) return;
        activeCells[index] = null;
        this.markDirty();
        const cellNode = this.ui.mapGrid.querySelector(`.map-cell[data-index="${index}"]`);
        if (cellNode) this.renderMapCell(cellNode, index);
        return;
      }

      const selectedAsset = this.getSelectedAsset();
      if (!selectedAsset) return;

      activeCells[index] = module.createPaintCell(this, selectedAsset, activeCells[index] || null, index);
      this.markDirty();

      const cellNode = this.ui.mapGrid.querySelector(`.map-cell[data-index="${index}"]`);
      if (cellNode) this.renderMapCell(cellNode, index);
    }

    buildBasePayload() {
      return {
        version: 2,
        assetColorPalette: 'studio',
        assets: this.state.base.assets,
        map: {
          id: this.state.map.id,
          name: this.state.map.name,
          width: this.state.map.width,
          height: this.state.map.height,
          cellSize: this.state.map.cellSize,
          randomize: this.state.map.randomize,
          cells: this.state.base.cells,
          markers: this.state.map.markers
        }
      };
    }

    buildPayloadForActiveStage() {
      const payload = this.buildBasePayload();
      const module = this.getActiveModeModule();
      module.extendPayload(this, payload);
      return window.EightBitsMapSchema.compactPayload(payload);
    }

    async publishActiveMode() {
      const entry = this.getCurrentEntry();
      if (!entry || !this.state.map.id) return;
      const module = this.getActiveModeModule();
      const stage = module.stage;
      const docKey = entry?.docsByStage?.[stage]?.docKey || null;
      const payload = this.buildPayloadForActiveStage();

      this.projectManager.publishStageDocument(stage, payload, {
        docKey,
        mapId: this.state.map.id,
        lookupName: this.state.map.name || entry.lookupName || entry.displayName || 'Map',
        displayName: this.state.map.name || entry.displayName || entry.lookupName || 'Map'
      });

      this.setPublishState(false);
      this.projectManager.triggerReload?.('update-cache');
      this.refreshMapOptions();
      await this.loadSelectedMap();
    }

    async loadSelectedMap() {
      const entry = this.getCurrentEntry();
      if (!entry) {
        this.clearWorkspace();
        return;
      }

      const payload = this.projectManager.buildUnifiedMapPayload?.(entry) || entry.preferredPayload || null;
      const normalized = window.EightBitsMapSchema.normalizePayload(payload);
      if (!normalized?.map) return;

      const width = clamp(Number.parseInt(normalized.map.width, 10) || 1, 1, 200);
      const height = clamp(Number.parseInt(normalized.map.height, 10) || 1, 1, 200);
      const total = width * height;

      this.state.map.id = String(normalized.map.id || entry.mapId || '');
      this.state.map.name = String(normalized.map.name || entry.displayName || entry.lookupName || 'Map');
      this.state.map.width = width;
      this.state.map.height = height;
      this.state.map.cellSize = clamp(Number.parseInt(this.state.map.cellSize, 10) || Number.parseInt(normalized.map.cellSize, 10) || 16, 10, 32);
      this.state.map.randomize = normalized.map.randomize || null;
      this.state.map.markers = normalizeCells(normalized.map.markers, total, (marker) => (marker === 'portal' ? 'portal' : null));

      this.state.base.assets = (Array.isArray(normalized.assets) ? normalized.assets : []).map(normalizeAsset);
      this.state.base.cells = normalizeCells(normalized.map.cells, total, this.modeModules.mapCreator.normalizeLoadedCell);

      this.state.props.assets = (Array.isArray(normalized.itemAssets) ? normalized.itemAssets : []).map(normalizeAsset);
      this.state.props.cells = normalizeCells(normalized.itemLayer?.cells, total, this.modeModules.propDropper.normalizeLoadedCell);

      this.state.items.assets = (Array.isArray(normalized.gameItemAssets) ? normalized.gameItemAssets : []).map(normalizeAsset);
      this.state.items.cells = normalizeCells(normalized.gameItemLayer?.cells, total, this.modeModules.itemDropper.normalizeLoadedCell);

      this.state.npcs.assets = (Array.isArray(normalized.npcAssets) ? normalized.npcAssets : []).map(normalizeAsset);
      this.state.npcs.cells = normalizeCells(normalized.npcLayer?.cells, total, this.modeModules.npcDropper.normalizeLoadedCell);

      await this.resolveAllImages();

      this.ui.mapNameInput.value = this.state.map.name;
      this.ui.cellSizeInput.value = String(this.state.map.cellSize);

      const modeAssets = this.getModeAssets();
      this.state.selectedAssetNumber = modeAssets[0]?.number || null;
      this.state.selectedSpriteIndex = 1;

      this.renderAll();
      this.setPublishState(false);
    }

    switchMode(nextMode) {
      if (!this.modeModules[nextMode]) return;
      this.state.mode = nextMode;
      const module = this.getActiveModeModule();
      if (this.state.tool === 'portal' && !module.supportsPortal) {
        this.state.tool = 'pencil';
      }
      const modeAssets = this.getModeAssets();
      this.state.selectedAssetNumber = modeAssets[0]?.number || null;
      this.state.selectedSpriteIndex = 1;
      this.renderAll();
    }

    bindEvents() {
      this.ui.mapSelect.addEventListener('change', async () => {
        this.state.selectedEntryValue = this.ui.mapSelect.value;
        await this.loadSelectedMap();
      });

      this.ui.mapNameInput.addEventListener('input', () => {
        this.state.map.name = String(this.ui.mapNameInput.value || '').trim();
        this.markDirty();
      });

      this.ui.cellSizeInput.addEventListener('input', () => {
        this.state.map.cellSize = clamp(Number.parseInt(this.ui.cellSizeInput.value, 10) || 16, 10, 32);
        this.markDirty();
        this.renderAssetGrid();
        this.renderMapGrid();
      });

      qsa('[data-lab-mode]').forEach((button) => {
        button.addEventListener('click', () => {
          const nextMode = button.dataset.labMode;
          if (!nextMode) return;
          this.switchMode(nextMode);
        });
      });

      qsa('[data-lab-tool]').forEach((button) => {
        button.addEventListener('click', () => {
          const nextTool = button.dataset.labTool;
          if (!nextTool) return;
          const module = this.getActiveModeModule();
          if (nextTool === 'portal' && !module.supportsPortal) return;
          this.state.tool = nextTool;
          this.renderToolButtons();
        });
      });

      this.ui.mapGrid.addEventListener('pointerdown', (event) => {
        const target = event.target.closest('.map-cell');
        if (!target) return;
        const index = Number.parseInt(target.dataset.index, 10);
        if (!Number.isFinite(index)) return;
        this.state.isPainting = true;
        this.applyToolAt(index, false);
      });

      this.ui.mapGrid.addEventListener('pointermove', (event) => {
        const target = event.target.closest('.map-cell');
        if (!target || !this.state.isPainting) return;
        const index = Number.parseInt(target.dataset.index, 10);
        if (!Number.isFinite(index)) return;
        const tool = this.getEffectiveTool();
        if (tool === 'eyedropper' || tool === 'portal') return;
        this.applyToolAt(index, true);
      });

      window.addEventListener('pointerup', () => {
        this.state.isPainting = false;
      });

      window.addEventListener('keydown', (event) => {
        const tag = String(event.target?.tagName || '').toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
        if (event.key === 'Alt') {
          this.state.temporaryTool = 'eraser';
          this.renderToolButtons();
        }
        if (event.code === 'Space') {
          event.preventDefault();
          this.state.temporaryTool = 'eyedropper';
          this.renderToolButtons();
        }
      });

      window.addEventListener('keyup', (event) => {
        if (event.key === 'Alt' && this.state.temporaryTool === 'eraser') {
          this.state.temporaryTool = null;
          this.renderToolButtons();
        }
        if (event.code === 'Space' && this.state.temporaryTool === 'eyedropper') {
          this.state.temporaryTool = null;
          this.renderToolButtons();
        }
      });

      window.addEventListener('blur', () => {
        this.state.temporaryTool = null;
        this.state.isPainting = false;
        this.renderToolButtons();
      });

      this.ui.updateCacheButton.addEventListener('click', () => {
        this.publishActiveMode();
      });

      this.ui.refreshButton.addEventListener('click', async () => {
        this.refreshMapOptions();
        await this.loadSelectedMap();
      });

      window.addEventListener('8bits-project-updated', async () => {
        const hadDirty = this.state.dirty;
        this.refreshMapOptions();
        if (!hadDirty) {
          await this.loadSelectedMap();
        }
      });
    }

    async boot() {
      this.bindEvents();
      this.renderAll();
      this.refreshMapOptions();
      await this.loadSelectedMap();
    }
  }

  const ui = {
    mapSelect: qs('#lab-map-select'),
    mapNameInput: qs('#lab-map-name'),
    updateCacheButton: qs('#lab-update-cache'),
    refreshButton: qs('#lab-refresh'),
    cellSizeInput: qs('#lab-cell-size'),
    publishStatus: qs('#lab-publish-status'),
    assetList: qs('#lab-asset-list'),
    assetGrid: qs('#lab-asset-grid'),
    assetGridLabel: qs('#lab-asset-grid-label'),
    assetsSubtitle: qs('#lab-assets-subtitle'),
    visibleLayersLabel: qs('#lab-visible-layers'),
    modeOptions: qs('#lab-mode-options'),
    mapGrid: qs('#lab-map-grid')
  };

  const required = Object.values(ui);
  if (required.some((node) => !node)) {
    return;
  }

  const projectManager = window.EightBitsProjectManager || null;
  if (!projectManager || !window.EightBitsMapSchema) {
    ui.publishStatus.dataset.status = 'dirty';
    ui.publishStatus.textContent = 'Project manager unavailable';
    return;
  }

  const editor = new CoreEditor(projectManager, ui);
  editor.boot();
})();
