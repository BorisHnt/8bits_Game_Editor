(() => {
  const pageActive = () => document.body.classList.contains('page-item');

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const createId = () => `id-${Math.random().toString(36).slice(2, 9)}`;
  const sanitizeFilename = (name) => String(name || '').replace(/[^a-z0-9-_]/gi, '_').replace(/_+/g, '_').trim() || 'export';
  const isEditableTarget = (target) => Boolean(
    target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable)
  );

  const messages = {
    en: {
      addItem: 'Add Item',
      importAsset: 'Import',
      assetName: 'Asset name',
      color: 'Color',
      imageNumber: 'Image number',
      config: 'Config',
      spriteSize: 'Sprite size',
      sprites: 'Sprites',
      type: 'Type',
      collision: 'Collision',
      collisionMode: 'Collision mode',
      collisionModeSimple: 'Simple',
      collisionModeMask: 'Painted mask',
      collisionMask: 'Mask 4x4',
      collisionMaskSprite: 'Sprite',
      blockingZone: 'Blocking',
      passableZone: 'Passable',
      editMask: 'Edit Mask',
      blocking: 'Blocking',
      passable: 'Passable',
      playerDepth: 'Player depth',
      depthFront: 'Player in front',
      depthCover: 'Hide player',
      select: 'Select',
      up: 'Up',
      down: 'Down',
      all: 'All',
      assetGridHint: 'Select an item sheet to preview its sprites.',
      baseMapEmpty: 'No base map loaded.'
    },
    fr: {
      addItem: 'Ajouter item',
      importAsset: 'Import',
      assetName: 'Nom asset',
      color: 'Couleur',
      imageNumber: 'Numero image',
      config: 'Config',
      spriteSize: 'Taille sprite',
      sprites: 'Sprites',
      type: 'Type',
      collision: 'Collision',
      collisionMode: 'Mode collision',
      collisionModeSimple: 'Simple',
      collisionModeMask: 'Mask peint',
      collisionMask: 'Mask 4x4',
      collisionMaskSprite: 'Sprite',
      blockingZone: 'Bloquant',
      passableZone: 'Passant',
      editMask: 'Edit Mask',
      blocking: 'Bloquant',
      passable: 'Passant',
      playerDepth: 'Profondeur joueur',
      depthFront: 'Joueur devant',
      depthCover: 'Cache joueur',
      select: 'Selectionner',
      up: 'Up',
      down: 'Down',
      all: 'Tous',
      assetGridHint: "Selectionner une sheet d'items pour voir ses sprites.",
      baseMapEmpty: 'Aucune map de base chargee.'
    }
  };

  const getLanguage = () => (document.documentElement.lang === 'fr' ? 'fr' : 'en');
  const msg = (key, fallback = '') => messages[getLanguage()]?.[key] ?? fallback;

  const patternFromRows = (rows) => rows.join('');
  const maskSize = 4;
  const maskCellCount = maskSize * maskSize;
  const matchesPattern = (pattern, sample) => {
    for (let i = 0; i < pattern.length; i += 1) {
      const expected = pattern[i];
      const actual = sample[i];
      if (expected === '+') continue;
      if (expected === 'X' && !actual) return false;
      if (expected === 'O' && actual) return false;
    }
    return true;
  };

  const boot = () => {
    if (!pageActive()) return;

    const assetList = qs('#item-asset-list');
    const assetTypeFilters = qs('#item-asset-type-filters');
    const assetGrid = qs('#item-asset-grid');
    const assetGridLabel = qs('#item-asset-grid-label');
    const addAssetButton = qs('#item-add-asset');
    const mapGrid = qs('#item-map-grid');
    const mapWidthInput = qs('#item-map-width');
    const mapHeightInput = qs('#item-map-height');
    const mapApplyButton = qs('#item-apply-map-size');
    const mapCellSize = qs('#item-cell-size');
    const mapNameInput = qs('#item-map-name');
    const baseMapLabel = qs('#item-base-map-label');
    const undoButton = qs('#item-undo');
    const redoButton = qs('#item-redo');
    const exportButton = qs('#item-export');
    const importButton = qs('#item-import');
    const importFile = qs('#item-import-file');
    const optionsButton = qs('#item-options');
    const cacheModal = qs('#item-cache-modal');
    const cacheCloseButton = qs('#item-cache-close');
    const cachePurgeButton = qs('#item-cache-purge');
    const cacheList = qs('#item-cache-list');
    const cacheCount = qs('#item-cache-count');
    const cacheSize = qs('#item-cache-size');
    const cacheEmpty = qs('#item-cache-empty');
    const maskModal = qs('#item-mask-modal');
    const maskCloseButton = qs('#item-mask-close');
    const maskSpriteGrid = qs('#item-mask-sprite-grid');
    const maskBlockingButton = qs('#item-mask-brush-blocking');
    const maskPassableButton = qs('#item-mask-brush-passable');
    const maskSubtitle = qs('#item-mask-subtitle');

    if (!assetList || !assetGrid || !mapGrid) return;

    const itemCacheKey = '8bits-item-cache-state';
    const cacheDbName = '8bits-map-cache';
    const cacheStoreName = 'images';
    const historyLimit = 10;

    const state = {
      assets: [],
      assetTypeFilter: 'all',
      selectedAssetId: null,
      selectedSpriteIndex: 1,
      tool: 'pencil',
      view: 'normal',
      shiftPaint: false,
      shiftPaintIndex: null,
      isDrawing: false,
      baseMap: {
        sourceFile: '',
        assetColorPalette: 'studio',
        assets: [],
        map: {
          name: '',
          width: 50,
          height: 50,
          cellSize: 16,
          cells: [],
          markers: []
        }
      },
      layout: {
        name: '',
        width: 50,
        height: 50,
        cellSize: 16,
        cells: []
      }
    };

    let itemAltEraserActive = false;
    let itemSpaceEyedropperActive = false;
    let itemTemporaryTool = null;
    let saveTimer = null;
    let undoStack = [];
    let redoStack = [];
    let historyBatchActive = false;
    let maskEditorAssetId = null;
    let maskBrush = 'blocking';
    let maskPainting = false;

    const getEffectiveTool = () => itemTemporaryTool || state.tool;
    const refreshTemporaryTool = () => {
      itemTemporaryTool = itemSpaceEyedropperActive ? 'eyedropper' : itemAltEraserActive ? 'eraser' : null;
    };

    const formatBytes = (bytes) => {
      if (!Number.isFinite(bytes) || bytes <= 0) return '0 KB';
      const units = ['B', 'KB', 'MB', 'GB'];
      let value = bytes;
      let unitIndex = 0;
      while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024;
        unitIndex += 1;
      }
      return `${value.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
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

    const cachePut = (entry) => openCacheDb().then((db) => new Promise((resolve, reject) => {
      const tx = db.transaction(cacheStoreName, 'readwrite');
      const store = tx.objectStore(cacheStoreName);
      const req = store.put(entry);
      req.onsuccess = () => resolve(entry.key);
      req.onerror = () => reject(req.error);
    }));

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

    const cacheListAll = () => openCacheDb().then((db) => new Promise((resolve, reject) => {
      const tx = db.transaction(cacheStoreName, 'readonly');
      const store = tx.objectStore(cacheStoreName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    }));

    const cacheClear = () => openCacheDb().then((db) => new Promise((resolve, reject) => {
      const tx = db.transaction(cacheStoreName, 'readwrite');
      const store = tx.objectStore(cacheStoreName);
      const req = store.clear();
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    }));

    const updateCacheModal = async () => {
      if (!cacheList || !cacheCount || !cacheSize || !cacheEmpty) return;
      try {
        const entries = await cacheListAll();
        const totalBytes = entries.reduce((sum, entry) => sum + (entry.size || 0), 0);
        cacheCount.textContent = String(entries.length);
        cacheSize.textContent = formatBytes(totalBytes);
        cacheList.innerHTML = '';
        if (!entries.length) {
          cacheEmpty.classList.remove('is-hidden');
          return;
        }
        cacheEmpty.classList.add('is-hidden');
        entries.sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''))).forEach((entry) => {
          const item = document.createElement('div');
          item.className = 'cache-item';
          const name = document.createElement('strong');
          name.textContent = entry.name || entry.key;
          const size = document.createElement('span');
          size.textContent = formatBytes(entry.size || 0);
          item.appendChild(name);
          item.appendChild(size);
          cacheList.appendChild(item);
        });
      } catch (error) {
        cacheCount.textContent = '0';
        cacheSize.textContent = '0 KB';
        cacheList.innerHTML = '';
        cacheEmpty.classList.remove('is-hidden');
      }
    };

    const cacheAssetImage = async (file) => {
      if (!file) return null;
      const key = `${file.name}::${file.size}::${file.lastModified}`;
      try {
        await cachePut({
          key,
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
          blob: file
        });
        return key;
      } catch (error) {
        return null;
      }
    };

    const normalizeItemAsset = (asset, fallbackNumber = 1) => {
      const cols = clamp(Number.parseInt(asset?.cols, 10) || 1, 1, 64);
      const rows = clamp(Number.parseInt(asset?.rows, 10) || 1, 1, 64);
      const maxSprites = cols * rows;
      const normalizeCollisionMask = (mask, fallbackType = 'blocking') => Array.from({ length: maskCellCount }, (_, index) => {
        const value = Array.isArray(mask) ? mask[index] : null;
        if (value === true || value === 1 || value === 'blocking') return true;
        if (value === false || value === 0 || value === 'passable') return false;
        return fallbackType !== 'passable';
      });
      const normalizeCollisionMasks = (rawMasks, fallbackType = 'blocking') => {
        const normalized = {};
        if (Array.isArray(rawMasks)) {
          normalized[1] = normalizeCollisionMask(rawMasks, fallbackType);
          return normalized;
        }
        if (!rawMasks || typeof rawMasks !== 'object') return normalized;
        Object.entries(rawMasks).forEach(([key, value]) => {
          const spriteIndex = clamp(Number.parseInt(key, 10) || 1, 1, maxSprites);
          normalized[spriteIndex] = normalizeCollisionMask(value, fallbackType);
        });
        return normalized;
      };
      return {
        id: asset?.id || createId(),
        name: asset?.name || '',
        fileName: asset?.fileName || '',
        imageUrl: asset?.imageUrl || '',
        number: clamp(Number.parseInt(asset?.number, 10) || fallbackNumber, 1, 9999),
        cols,
        rows,
        spriteWidth: clamp(Number.parseInt(asset?.spriteWidth, 10) || 16, 1, 256),
        spriteHeight: clamp(Number.parseInt(asset?.spriteHeight, 10) || 16, 1, 256),
        spriteCount: clamp(Number.parseInt(asset?.spriteCount, 10) || 1, 1, maxSprites),
        assetType: String(asset?.assetType || asset?.category || '').trim(),
        type: asset?.type === 'passable' ? 'passable' : 'blocking',
        collisionMode: asset?.collisionMode === 'mask' ? 'mask' : 'simple',
        collisionMasks: normalizeCollisionMasks(asset?.collisionMasks || asset?.collisionMask, asset?.type === 'passable' ? 'passable' : 'blocking'),
        playerDepth: asset?.playerDepth === 'cover' ? 'cover' : 'front',
        color: asset?.color || '#2a2a2a',
        cacheKey: asset?.cacheKey || null
      };
    };

    const normalizeBaseAsset = (asset, fallbackNumber = 1) => {
      const cols = clamp(Number.parseInt(asset?.cols, 10) || 1, 1, 64);
      const rows = clamp(Number.parseInt(asset?.rows, 10) || 1, 1, 64);
      const maxSprites = cols * rows;
      return {
        name: asset?.name || '',
        fileName: asset?.fileName || '',
        imageUrl: asset?.imageUrl || '',
        number: clamp(Number.parseInt(asset?.number, 10) || fallbackNumber, 1, 9999),
        cols,
        rows,
        spriteWidth: clamp(Number.parseInt(asset?.spriteWidth, 10) || 16, 1, 256),
        spriteHeight: clamp(Number.parseInt(asset?.spriteHeight, 10) || 16, 1, 256),
        spriteCount: clamp(Number.parseInt(asset?.spriteCount, 10) || 1, 1, maxSprites),
        assetType: String(asset?.assetType || asset?.category || '').trim(),
        type: asset?.type === 'passable' ? 'passable' : 'blocking',
        color: asset?.color || '#2a2a2a',
        cacheKey: asset?.cacheKey || null
      };
    };

    const loadCachedImageForAsset = async (asset) => {
      if (!asset || asset.imageUrl) return;
      try {
        let entry = null;
        if (asset.cacheKey) entry = await cacheGet(asset.cacheKey);
        if (!entry && asset.fileName) entry = await cacheGetByName(asset.fileName);
        if (entry?.blob) {
          asset.imageUrl = URL.createObjectURL(entry.blob);
          asset.cacheKey = entry.key;
        }
      } catch (error) {
        // ignore cache errors
      }
    };

    const loadCachedImages = async () => {
      await Promise.all(state.assets.map((asset) => loadCachedImageForAsset(asset)));
      await Promise.all(state.baseMap.assets.map((asset) => loadCachedImageForAsset(asset)));
    };

    const getItemAssetById = (id) => state.assets.find((asset) => asset.id === id);
    const getBaseAssetByNumber = (number) => state.baseMap.assets.find((asset) => asset.number === number);
    const createDefaultCollisionMask = (type = 'blocking') => Array.from({ length: maskCellCount }, () => type !== 'passable');
    const normalizeCollisionMask = (mask, fallbackType = 'blocking') => Array.from({ length: maskCellCount }, (_, index) => {
      const value = Array.isArray(mask) ? mask[index] : null;
      if (value === true || value === 1 || value === 'blocking') return true;
      if (value === false || value === 0 || value === 'passable') return false;
      return fallbackType !== 'passable';
    });
    const cloneCollisionMasks = (collisionMasks) => Object.fromEntries(
      Object.entries(collisionMasks || {}).map(([key, mask]) => [key, normalizeCollisionMask(mask)])
    );
    const getCollisionMaskForSprite = (asset, spriteIndex, options = {}) => {
      if (!asset) return createDefaultCollisionMask('blocking');
      const { create = false } = options;
      const safeIndex = clamp(Number.parseInt(spriteIndex, 10) || 1, 1, Math.max(1, asset.spriteCount || asset.cols * asset.rows || 1));
      const key = String(safeIndex);
      const current = asset.collisionMasks?.[key];
      if (Array.isArray(current)) {
        return normalizeCollisionMask(current, asset.type);
      }
      const fallback = createDefaultCollisionMask(asset.type);
      if (create) {
        asset.collisionMasks = asset.collisionMasks || {};
        asset.collisionMasks[key] = fallback.slice();
        return asset.collisionMasks[key];
      }
      return fallback;
    };
    const getAssetMaskEditorSpriteIndex = (asset) => (
      state.selectedAssetId === asset?.id
        ? clamp(state.selectedSpriteIndex, 1, Math.max(1, asset?.spriteCount || 1))
        : 1
    );
    const getMaskEditorAsset = () => getItemAssetById(maskEditorAssetId);

    const ensureCells = () => {
      const total = state.layout.width * state.layout.height;
      if (state.layout.cells.length !== total) {
        state.layout.cells = Array.from({ length: total }, (_, index) => state.layout.cells[index] || null);
      }
      if (state.baseMap.map.cells.length !== total) {
        state.baseMap.map.cells = Array.from({ length: total }, (_, index) => state.baseMap.map.cells[index] || null);
      }
      if (state.baseMap.map.markers.length !== total) {
        state.baseMap.map.markers = Array.from({ length: total }, (_, index) => state.baseMap.map.markers[index] || null);
      }
    };

    const cloneItemCell = (cell) => (cell ? { assetId: cell.assetId || null, spriteIndex: Number.isInteger(cell.spriteIndex) ? cell.spriteIndex : 1 } : null);
    const cloneBaseCell = (cell) => (cell ? {
      assetNumber: Number.isFinite(Number(cell.assetNumber)) ? Number(cell.assetNumber) : null,
      spriteIndex: Number.isInteger(cell.spriteIndex) ? cell.spriteIndex : null,
      auto: cell.auto !== false
    } : null);
    const cloneItemAsset = (asset) => ({
      id: asset.id,
      name: asset.name,
      fileName: asset.fileName,
      imageUrl: asset.imageUrl || '',
      number: asset.number,
      cols: asset.cols,
      rows: asset.rows,
      spriteWidth: asset.spriteWidth,
      spriteHeight: asset.spriteHeight,
      spriteCount: asset.spriteCount,
      assetType: asset.assetType,
      type: asset.type,
      collisionMode: asset.collisionMode,
      collisionMasks: cloneCollisionMasks(asset.collisionMasks),
      playerDepth: asset.playerDepth,
      color: asset.color,
      cacheKey: asset.cacheKey
    });
    const cloneBaseAsset = (asset) => ({
      name: asset.name,
      fileName: asset.fileName,
      imageUrl: asset.imageUrl || '',
      number: asset.number,
      cols: asset.cols,
      rows: asset.rows,
      spriteWidth: asset.spriteWidth,
      spriteHeight: asset.spriteHeight,
      spriteCount: asset.spriteCount,
      assetType: asset.assetType,
      type: asset.type,
      color: asset.color,
      cacheKey: asset.cacheKey
    });

    const buildSnapshot = () => ({
      assets: state.assets.map(cloneItemAsset),
      assetTypeFilter: state.assetTypeFilter,
      selectedAssetId: state.selectedAssetId,
      selectedSpriteIndex: state.selectedSpriteIndex,
      tool: state.tool,
      view: state.view,
      baseMap: {
        sourceFile: state.baseMap.sourceFile,
        assetColorPalette: state.baseMap.assetColorPalette,
        assets: state.baseMap.assets.map(cloneBaseAsset),
        map: {
          name: state.baseMap.map.name,
          width: state.baseMap.map.width,
          height: state.baseMap.map.height,
          cellSize: state.baseMap.map.cellSize,
          cells: state.baseMap.map.cells.map(cloneBaseCell),
          markers: state.baseMap.map.markers.slice()
        }
      },
      layout: {
        name: state.layout.name,
        width: state.layout.width,
        height: state.layout.height,
        cellSize: state.layout.cellSize,
        cells: state.layout.cells.map(cloneItemCell)
      }
    });

    const restoreSnapshot = (snapshot) => {
      if (!snapshot?.layout || !snapshot?.baseMap?.map) return;
      state.assets = (snapshot.assets || []).map((asset, index) => normalizeItemAsset(asset, index + 1));
      state.assetTypeFilter = snapshot.assetTypeFilter || 'all';
      state.selectedAssetId = snapshot.selectedAssetId || state.assets[0]?.id || null;
      state.selectedSpriteIndex = clamp(Number.parseInt(snapshot.selectedSpriteIndex, 10) || 1, 1, 9999);
      state.tool = snapshot.tool || 'pencil';
      state.view = snapshot.view || 'normal';
      state.baseMap.sourceFile = snapshot.baseMap.sourceFile || '';
      state.baseMap.assetColorPalette = snapshot.baseMap.assetColorPalette || 'studio';
      state.baseMap.assets = (snapshot.baseMap.assets || []).map((asset, index) => normalizeBaseAsset(asset, index + 1));
      state.baseMap.map.name = snapshot.baseMap.map.name || '';
      state.baseMap.map.width = clamp(Number.parseInt(snapshot.baseMap.map.width, 10) || 50, 4, 200);
      state.baseMap.map.height = clamp(Number.parseInt(snapshot.baseMap.map.height, 10) || 50, 4, 200);
      state.baseMap.map.cellSize = clamp(Number.parseInt(snapshot.baseMap.map.cellSize, 10) || 16, 10, 32);
      state.baseMap.map.cells = Array.isArray(snapshot.baseMap.map.cells) ? snapshot.baseMap.map.cells.map(cloneBaseCell) : [];
      state.baseMap.map.markers = Array.isArray(snapshot.baseMap.map.markers) ? snapshot.baseMap.map.markers.slice() : [];
      state.layout.name = snapshot.layout.name || '';
      state.layout.width = clamp(Number.parseInt(snapshot.layout.width, 10) || state.baseMap.map.width || 50, 4, 200);
      state.layout.height = clamp(Number.parseInt(snapshot.layout.height, 10) || state.baseMap.map.height || 50, 4, 200);
      state.layout.cellSize = clamp(Number.parseInt(snapshot.layout.cellSize, 10) || 16, 10, 32);
      state.layout.cells = Array.isArray(snapshot.layout.cells) ? snapshot.layout.cells.map(cloneItemCell) : [];
      ensureCells();
      if (mapNameInput) mapNameInput.value = state.layout.name;
      if (mapWidthInput) mapWidthInput.value = String(state.layout.width);
      if (mapHeightInput) mapHeightInput.value = String(state.layout.height);
      if (mapCellSize) mapCellSize.value = String(state.layout.cellSize);
      updateBaseMapLabel();
      updateUndoRedoButtons();
      updateInteractionControls();
      renderAssetList();
      renderAssetGrid();
      renderMapGrid();
      loadCachedImages().then(() => {
        renderAssetList();
        renderAssetGrid();
        renderMapGrid();
      });
      scheduleSave();
    };

    const updateUndoRedoButtons = () => {
      if (undoButton) undoButton.disabled = undoStack.length === 0;
      if (redoButton) redoButton.disabled = redoStack.length === 0;
    };

    const pushHistorySnapshot = () => {
      undoStack.push(buildSnapshot());
      if (undoStack.length > historyLimit) undoStack.shift();
      redoStack = [];
      updateUndoRedoButtons();
    };

    const ensureHistorySnapshot = () => {
      if (historyBatchActive) return;
      pushHistorySnapshot();
    };

    const beginHistoryBatch = () => {
      if (historyBatchActive) return;
      pushHistorySnapshot();
      historyBatchActive = true;
    };

    const endHistoryBatch = () => {
      historyBatchActive = false;
    };

    const undoHistory = () => {
      if (!undoStack.length) return;
      const snapshot = undoStack.pop();
      redoStack.push(buildSnapshot());
      if (redoStack.length > historyLimit) redoStack.shift();
      endHistoryBatch();
      restoreSnapshot(snapshot);
      updateUndoRedoButtons();
    };

    const redoHistory = () => {
      if (!redoStack.length) return;
      const snapshot = redoStack.pop();
      undoStack.push(buildSnapshot());
      if (undoStack.length > historyLimit) undoStack.shift();
      endHistoryBatch();
      restoreSnapshot(snapshot);
      updateUndoRedoButtons();
    };

    const scheduleSave = () => {
      if (!window.localStorage) return;
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = window.setTimeout(() => {
        saveTimer = null;
        try {
          localStorage.setItem(itemCacheKey, JSON.stringify(buildExportPayload()));
        } catch (error) {
          // ignore storage errors
        }
      }, 200);
    };

    const buildAssetTypeList = () => {
      const map = new Map();
      state.assets.forEach((asset) => {
        const label = String(asset.assetType || '').trim();
        if (!label) return;
        const key = label.toLowerCase();
        if (!map.has(key)) map.set(key, label);
      });
      return Array.from(map.entries()).map(([key, label]) => ({ key, label })).sort((a, b) => a.label.localeCompare(b.label));
    };

    const getFilteredAssets = () => {
      if (state.assetTypeFilter === 'all') return state.assets;
      return state.assets.filter((asset) => String(asset.assetType || '').trim().toLowerCase() === state.assetTypeFilter);
    };

    const normalizeAssetNumbers = () => {
      const used = new Set();
      state.assets.forEach((asset) => {
        let next = Number.parseInt(asset.number, 10);
        if (!Number.isFinite(next) || next < 1) next = 1;
        while (used.has(next)) next += 1;
        asset.number = next;
        used.add(next);
      });
      state.assets.sort((a, b) => a.number - b.number);
    };

    const getNextAvailableNumber = () => {
      const used = new Set(state.assets.map((asset) => asset.number));
      let next = 1;
      while (used.has(next)) next += 1;
      return next;
    };

    const createAsset = () => {
      const number = getNextAvailableNumber();
      const asset = normalizeItemAsset({
        number,
        cols: 4,
        rows: 4,
        spriteWidth: 16,
        spriteHeight: 16,
        spriteCount: 16,
        type: 'blocking',
        collisionMode: 'simple',
        playerDepth: 'front',
        color: '#2a2a2a'
      }, number);
      state.assets.push(asset);
      if (!state.selectedAssetId) state.selectedAssetId = asset.id;
      normalizeAssetNumbers();
    };

    const renderAssetTypeFilters = () => {
      if (!assetTypeFilters) return;
      const types = buildAssetTypeList();
      const validKeys = new Set(types.map((item) => item.key));
      if (state.assetTypeFilter !== 'all' && !validKeys.has(state.assetTypeFilter)) {
        state.assetTypeFilter = 'all';
      }
      assetTypeFilters.innerHTML = '';
      const makeButton = (key, label) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'button-secondary asset-type-filter-button';
        if (state.assetTypeFilter === key) button.classList.add('is-active');
        button.textContent = label;
        button.addEventListener('click', () => {
          state.assetTypeFilter = key;
          renderAssetList();
          renderAssetGrid();
        });
        assetTypeFilters.appendChild(button);
      };
      makeButton('all', msg('all', 'All'));
      types.forEach((item) => makeButton(item.key, item.label));
    };

    const renderAssetGrid = () => {
      assetGrid.innerHTML = '';
      const asset = getItemAssetById(state.selectedAssetId);
      if (!asset) {
        if (assetGridLabel) assetGridLabel.textContent = msg('assetGridHint', 'Select an item sheet to preview its sprites.');
        return;
      }
      if (assetGridLabel) assetGridLabel.textContent = asset.name || asset.fileName || `Item ${asset.number}`;
      const cellSize = 32;
      assetGrid.style.setProperty('--asset-grid-columns', asset.cols);
      assetGrid.style.setProperty('--asset-cell-size', `${cellSize}px`);
      for (let row = 0; row < asset.rows; row += 1) {
        for (let col = 0; col < asset.cols; col += 1) {
          const spriteIndex = row * asset.cols + col + 1;
          const cell = document.createElement('button');
          cell.type = 'button';
          cell.className = 'asset-sprite';
          cell.textContent = String(spriteIndex);
          if (spriteIndex > asset.spriteCount) cell.classList.add('is-disabled');
          if (spriteIndex === state.selectedSpriteIndex) cell.classList.add('is-active');
          if (asset.imageUrl) {
            cell.style.backgroundImage = `url(${asset.imageUrl})`;
            cell.style.backgroundSize = `${asset.cols * cellSize}px ${asset.rows * cellSize}px`;
            cell.style.backgroundPosition = `${-col * cellSize}px ${-row * cellSize}px`;
          }
          if (spriteIndex <= asset.spriteCount) {
            cell.addEventListener('click', () => {
              state.selectedSpriteIndex = spriteIndex;
              renderAssetGrid();
            });
          }
          assetGrid.appendChild(cell);
        }
      }
    };

    const moveAssetSelection = (asset, direction) => {
      normalizeAssetNumbers();
      const index = state.assets.indexOf(asset);
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= state.assets.length) return;
      state.selectedAssetId = state.assets[nextIndex].id;
      renderAssetList();
      renderAssetGrid();
      renderMapGrid();
    };

    const renderAssetList = () => {
      assetList.innerHTML = '';
      normalizeAssetNumbers();
      renderAssetTypeFilters();
      const visibleAssets = getFilteredAssets();
      if (!visibleAssets.some((asset) => asset.id === state.selectedAssetId)) {
        state.selectedAssetId = visibleAssets[0]?.id || null;
      }

      visibleAssets.forEach((asset) => {
        const row = document.createElement('div');
        row.className = 'asset-row';
        if (asset.id === state.selectedAssetId) row.classList.add('is-active');

        const uploadField = document.createElement('label');
        uploadField.className = 'asset-upload button-secondary';
        uploadField.textContent = msg('importAsset', 'Import');
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        uploadField.appendChild(fileInput);

        const nameField = document.createElement('div');
        nameField.className = 'asset-field asset-name';
        const nameLabel = document.createElement('label');
        nameLabel.className = 'panel-label';
        nameLabel.textContent = msg('assetName', 'Asset name');
        const nameInput = document.createElement('input');
        nameInput.className = 'asset-input';
        nameInput.type = 'text';
        nameInput.value = asset.name;
        nameInput.placeholder = asset.fileName || `Item ${asset.number}`;
        const fileName = document.createElement('span');
        fileName.className = 'asset-file-name';
        fileName.textContent = asset.fileName || '';
        nameField.appendChild(nameLabel);
        nameField.appendChild(nameInput);
        nameField.appendChild(fileName);

        const colorField = document.createElement('div');
        colorField.className = 'asset-field';
        const colorLabel = document.createElement('label');
        colorLabel.className = 'panel-label';
        colorLabel.textContent = msg('color', 'Color');
        const colorInput = document.createElement('input');
        colorInput.className = 'asset-color-input';
        colorInput.type = 'color';
        colorInput.value = asset.color || '#2a2a2a';
        colorField.appendChild(colorLabel);
        colorField.appendChild(colorInput);

        const numberField = document.createElement('div');
        numberField.className = 'asset-field';
        const numberLabel = document.createElement('label');
        numberLabel.className = 'panel-label';
        numberLabel.textContent = msg('imageNumber', 'Image number');
        const numberInput = document.createElement('input');
        numberInput.className = 'asset-input';
        numberInput.type = 'number';
        numberInput.min = '1';
        numberInput.value = String(asset.number);
        numberField.appendChild(numberLabel);
        numberField.appendChild(numberInput);

        const configField = document.createElement('div');
        configField.className = 'asset-field';
        const configLabel = document.createElement('label');
        configLabel.className = 'panel-label';
        configLabel.textContent = msg('config', 'Config');
        const configInputs = document.createElement('div');
        configInputs.className = 'asset-inline-inputs';
        const colsInput = document.createElement('input');
        colsInput.className = 'asset-input';
        colsInput.type = 'number';
        colsInput.min = '1';
        colsInput.max = '64';
        colsInput.value = String(asset.cols);
        const rowsInput = document.createElement('input');
        rowsInput.className = 'asset-input';
        rowsInput.type = 'number';
        rowsInput.min = '1';
        rowsInput.max = '64';
        rowsInput.value = String(asset.rows);
        const separator = document.createElement('span');
        separator.className = 'grid-separator';
        separator.textContent = 'x';
        configInputs.appendChild(colsInput);
        configInputs.appendChild(separator);
        configInputs.appendChild(rowsInput);
        configField.appendChild(configLabel);
        configField.appendChild(configInputs);

        const sizeField = document.createElement('div');
        sizeField.className = 'asset-field';
        const sizeLabel = document.createElement('label');
        sizeLabel.className = 'panel-label';
        sizeLabel.textContent = msg('spriteSize', 'Sprite size');
        const sizeInputs = document.createElement('div');
        sizeInputs.className = 'asset-inline-inputs';
        const widthInput = document.createElement('input');
        widthInput.className = 'asset-input';
        widthInput.type = 'number';
        widthInput.min = '1';
        widthInput.max = '256';
        widthInput.value = String(asset.spriteWidth);
        const heightInput = document.createElement('input');
        heightInput.className = 'asset-input';
        heightInput.type = 'number';
        heightInput.min = '1';
        heightInput.max = '256';
        heightInput.value = String(asset.spriteHeight);
        const sizeSeparator = document.createElement('span');
        sizeSeparator.className = 'grid-separator';
        sizeSeparator.textContent = 'x';
        sizeInputs.appendChild(widthInput);
        sizeInputs.appendChild(sizeSeparator);
        sizeInputs.appendChild(heightInput);
        sizeField.appendChild(sizeLabel);
        sizeField.appendChild(sizeInputs);

        const countField = document.createElement('div');
        countField.className = 'asset-field';
        const countLabel = document.createElement('label');
        countLabel.className = 'panel-label';
        countLabel.textContent = msg('sprites', 'Sprites');
        const countInput = document.createElement('input');
        countInput.className = 'asset-input';
        countInput.type = 'number';
        countInput.min = '1';
        countInput.max = String(asset.cols * asset.rows);
        countInput.value = String(asset.spriteCount);
        countField.appendChild(countLabel);
        countField.appendChild(countInput);

        const assetTypeField = document.createElement('div');
        assetTypeField.className = 'asset-field';
        const assetTypeLabel = document.createElement('label');
        assetTypeLabel.className = 'panel-label';
        assetTypeLabel.textContent = msg('type', 'Type');
        const assetTypeInput = document.createElement('input');
        assetTypeInput.className = 'asset-input';
        assetTypeInput.type = 'text';
        assetTypeInput.value = asset.assetType || '';
        assetTypeField.appendChild(assetTypeLabel);
        assetTypeField.appendChild(assetTypeInput);

        const collisionField = document.createElement('div');
        collisionField.className = 'asset-field';
        const collisionLabel = document.createElement('label');
        collisionLabel.className = 'panel-label';
        collisionLabel.textContent = msg('collision', 'Collision');
        const collisionSelect = document.createElement('select');
        collisionSelect.className = 'asset-select';
        const optionBlocking = document.createElement('option');
        optionBlocking.value = 'blocking';
        optionBlocking.textContent = msg('blocking', 'Blocking');
        const optionPassable = document.createElement('option');
        optionPassable.value = 'passable';
        optionPassable.textContent = msg('passable', 'Passable');
        collisionSelect.appendChild(optionBlocking);
        collisionSelect.appendChild(optionPassable);
        collisionSelect.value = asset.type;
        collisionField.appendChild(collisionLabel);
        collisionField.appendChild(collisionSelect);

        const collisionModeField = document.createElement('div');
        collisionModeField.className = 'asset-field asset-mask-mode-field';
        const collisionModeLabel = document.createElement('label');
        collisionModeLabel.className = 'panel-label';
        collisionModeLabel.textContent = msg('collisionMode', 'Collision mode');
        const collisionModeSelect = document.createElement('select');
        collisionModeSelect.className = 'asset-select';
        const simpleOption = document.createElement('option');
        simpleOption.value = 'simple';
        simpleOption.textContent = msg('collisionModeSimple', 'Simple');
        const maskOption = document.createElement('option');
        maskOption.value = 'mask';
        maskOption.textContent = msg('collisionModeMask', 'Painted mask');
        collisionModeSelect.appendChild(simpleOption);
        collisionModeSelect.appendChild(maskOption);
        collisionModeSelect.value = asset.collisionMode === 'mask' ? 'mask' : 'simple';
        collisionModeField.appendChild(collisionModeLabel);
        collisionModeField.appendChild(collisionModeSelect);

        const maskButtonField = document.createElement('div');
        maskButtonField.className = 'asset-field asset-mask-button-field';
        const maskButtonLabel = document.createElement('label');
        maskButtonLabel.className = 'panel-label';
        maskButtonLabel.textContent = msg('collisionMask', 'Mask 4x4');
        const editMaskButton = document.createElement('button');
        editMaskButton.type = 'button';
        editMaskButton.className = 'button-secondary';
        editMaskButton.textContent = msg('editMask', 'Edit Mask');
        editMaskButton.disabled = asset.collisionMode !== 'mask';
        maskButtonField.appendChild(maskButtonLabel);
        maskButtonField.appendChild(editMaskButton);

        const depthField = document.createElement('div');
        depthField.className = 'asset-field';
        const depthLabel = document.createElement('label');
        depthLabel.className = 'panel-label';
        depthLabel.textContent = msg('playerDepth', 'Player depth');
        const depthSelect = document.createElement('select');
        depthSelect.className = 'asset-select';
        const depthFront = document.createElement('option');
        depthFront.value = 'front';
        depthFront.textContent = msg('depthFront', 'Player in front');
        const depthCover = document.createElement('option');
        depthCover.value = 'cover';
        depthCover.textContent = msg('depthCover', 'Hide player');
        depthSelect.appendChild(depthFront);
        depthSelect.appendChild(depthCover);
        depthSelect.value = asset.playerDepth;
        depthField.appendChild(depthLabel);
        depthField.appendChild(depthSelect);

        const orderControls = document.createElement('div');
        orderControls.className = 'asset-order-controls';
        const upButton = document.createElement('button');
        upButton.type = 'button';
        upButton.className = 'asset-order-button';
        upButton.textContent = msg('up', 'Up');
        const downButton = document.createElement('button');
        downButton.type = 'button';
        downButton.className = 'asset-order-button';
        downButton.textContent = msg('down', 'Down');
        if (state.assets.indexOf(asset) === 0) upButton.disabled = true;
        if (state.assets.indexOf(asset) === state.assets.length - 1) downButton.disabled = true;
        orderControls.appendChild(upButton);
        orderControls.appendChild(downButton);

        const selectButton = document.createElement('button');
        selectButton.type = 'button';
        selectButton.className = 'button-secondary asset-select-button';
        selectButton.textContent = msg('select', 'Select');

        row.appendChild(uploadField);
        row.appendChild(nameField);
        row.appendChild(colorField);
        row.appendChild(numberField);
        row.appendChild(configField);
        row.appendChild(sizeField);
        row.appendChild(countField);
        row.appendChild(assetTypeField);
        row.appendChild(collisionField);
        row.appendChild(collisionModeField);
        row.appendChild(maskButtonField);
        row.appendChild(depthField);
        row.appendChild(orderControls);
        row.appendChild(selectButton);

        fileInput.addEventListener('change', () => {
          const file = fileInput.files?.[0];
          if (!file) return;
          asset.fileName = file.name;
          if (!asset.name) asset.name = file.name.replace(/\.[^/.]+$/, '');
          asset.imageUrl = URL.createObjectURL(file);
          cacheAssetImage(file).then((key) => {
            if (key) {
              asset.cacheKey = key;
              if (cacheModal && !cacheModal.classList.contains('is-hidden')) updateCacheModal();
            }
          });
          renderAssetList();
          renderAssetGrid();
          renderMapGrid();
          scheduleSave();
          fileInput.value = '';
        });

        nameInput.addEventListener('input', () => {
          asset.name = nameInput.value;
          renderAssetGrid();
          scheduleSave();
        });
        colorInput.addEventListener('input', () => {
          asset.color = colorInput.value.toLowerCase();
          renderMapGrid();
          scheduleSave();
        });
        numberInput.addEventListener('change', () => {
          const desired = clamp(Number.parseInt(numberInput.value, 10) || 1, 1, 9999);
          const existing = state.assets.find((entry) => entry.id !== asset.id && entry.number === desired);
          if (existing) existing.number = asset.number;
          asset.number = desired;
          normalizeAssetNumbers();
          renderAssetList();
          renderAssetGrid();
          renderMapGrid();
          scheduleSave();
        });
        colsInput.addEventListener('change', () => {
          asset.cols = clamp(Number.parseInt(colsInput.value, 10) || 1, 1, 64);
          asset.spriteCount = clamp(asset.spriteCount, 1, asset.cols * asset.rows);
          renderAssetGrid();
          renderMapGrid();
          scheduleSave();
        });
        rowsInput.addEventListener('change', () => {
          asset.rows = clamp(Number.parseInt(rowsInput.value, 10) || 1, 1, 64);
          asset.spriteCount = clamp(asset.spriteCount, 1, asset.cols * asset.rows);
          renderAssetGrid();
          renderMapGrid();
          scheduleSave();
        });
        widthInput.addEventListener('change', () => {
          asset.spriteWidth = clamp(Number.parseInt(widthInput.value, 10) || 16, 1, 256);
          renderMapGrid();
          scheduleSave();
        });
        heightInput.addEventListener('change', () => {
          asset.spriteHeight = clamp(Number.parseInt(heightInput.value, 10) || 16, 1, 256);
          renderMapGrid();
          scheduleSave();
        });
        countInput.addEventListener('change', () => {
          asset.spriteCount = clamp(Number.parseInt(countInput.value, 10) || 1, 1, asset.cols * asset.rows);
          if (state.selectedSpriteIndex > asset.spriteCount) state.selectedSpriteIndex = asset.spriteCount;
          renderAssetGrid();
          renderMapGrid();
          scheduleSave();
        });
        assetTypeInput.addEventListener('input', () => {
          asset.assetType = String(assetTypeInput.value || '').trim();
          renderAssetTypeFilters();
          scheduleSave();
        });
        assetTypeInput.addEventListener('change', () => {
          asset.assetType = String(assetTypeInput.value || '').trim();
          renderAssetList();
          renderAssetGrid();
          scheduleSave();
        });
        collisionSelect.addEventListener('change', () => {
          asset.type = collisionSelect.value === 'passable' ? 'passable' : 'blocking';
          renderAssetList();
          renderMapGrid();
          scheduleSave();
        });
        collisionModeSelect.addEventListener('change', () => {
          asset.collisionMode = collisionModeSelect.value === 'mask' ? 'mask' : 'simple';
          if (asset.collisionMode === 'mask') {
            getCollisionMaskForSprite(asset, getAssetMaskEditorSpriteIndex(asset), { create: true });
          } else if (maskEditorAssetId === asset.id) {
            maskModal?.classList.add('is-hidden');
            maskModal?.setAttribute('aria-hidden', 'true');
            maskEditorAssetId = null;
          }
          renderAssetList();
          renderMapGrid();
          scheduleSave();
        });
        depthSelect.addEventListener('change', () => {
          asset.playerDepth = depthSelect.value === 'cover' ? 'cover' : 'front';
          renderMapGrid();
          scheduleSave();
        });
        selectButton.addEventListener('click', () => {
          state.selectedAssetId = asset.id;
          state.selectedSpriteIndex = Math.min(state.selectedSpriteIndex, asset.spriteCount);
          renderAssetList();
          renderAssetGrid();
        });
        editMaskButton.addEventListener('click', () => {
          if (asset.collisionMode !== 'mask') return;
          maskEditorAssetId = asset.id;
          renderMaskEditor();
          maskModal?.classList.remove('is-hidden');
          maskModal?.setAttribute('aria-hidden', 'false');
        });
        upButton.addEventListener('click', (event) => {
          event.stopPropagation();
          moveAssetSelection(asset, -1);
        });
        downButton.addEventListener('click', (event) => {
          event.stopPropagation();
          moveAssetSelection(asset, 1);
        });

        assetList.appendChild(row);
      });
    };

    const buildSpriteLayer = (asset, spriteIndex, cellSize) => {
      if (!asset) return null;
      const row = Math.floor((spriteIndex - 1) / asset.cols);
      const col = (spriteIndex - 1) % asset.cols;
      return {
        imageUrl: asset.imageUrl || '',
        size: `${asset.cols * cellSize}px ${asset.rows * cellSize}px`,
        position: `${-col * cellSize}px ${-row * cellSize}px`
      };
    };

    const getBaseNeighbors = (x, y, assetNumber) => {
      const { width, height, cells } = state.baseMap.map;
      const isSame = (cx, cy) => {
        if (cx < 0 || cy < 0 || cx >= width || cy >= height) return false;
        return Number(cells[cy * width + cx]?.assetNumber) === assetNumber;
      };
      return {
        n: isSame(x, y - 1),
        s: isSame(x, y + 1),
        w: isSame(x - 1, y),
        e: isSame(x + 1, y),
        nw: isSame(x - 1, y - 1),
        ne: isSame(x + 1, y - 1),
        sw: isSame(x - 1, y + 1),
        se: isSame(x + 1, y + 1)
      };
    };

    const autoTileOrder = [
      'center',
      'edge-top',
      'edge-bottom',
      'edge-left',
      'edge-right',
      'corner-out-top-left',
      'corner-out-top-right',
      'corner-out-bottom-left',
      'corner-out-bottom-right',
      'corner-in-top-left',
      'corner-in-top-right',
      'corner-in-bottom-left',
      'corner-in-bottom-right'
    ];

    const getBaseTileIdX13 = (assetNumber, x, y) => {
      const { width, height } = state.baseMap.map;
      const { n, s, w, e, nw, ne, sw, se } = getBaseNeighbors(x, y, assetNumber);
      const isBorder = x === 0 || y === 0 || x === width - 1 || y === height - 1;
      if (isBorder) {
        if (x === 0 && y === 0) return 'corner-in-top-left';
        if (x === width - 1 && y === 0) return 'corner-in-top-right';
        if (x === 0 && y === height - 1) return 'corner-in-bottom-left';
        if (x === width - 1 && y === height - 1) return 'corner-in-bottom-right';
        if (y === 0) return 'edge-bottom';
        if (y === height - 1) return 'edge-top';
        if (x === 0) return 'edge-right';
        if (x === width - 1) return 'edge-left';
      }
      const sample = [nw, n, ne, w, true, e, sw, s, se];
      const patterns = [
        { id: 'corner-in-bottom-right', mask: patternFromRows(['OX+', 'XXX', '+X+']) },
        { id: 'corner-in-bottom-left', mask: patternFromRows(['+XO', 'XXX', '+X+']) },
        { id: 'corner-in-top-right', mask: patternFromRows(['+X+', 'XXX', 'OX+']) },
        { id: 'corner-in-top-left', mask: patternFromRows(['+X+', 'XXX', '+XO']) },
        { id: 'corner-out-bottom-right', mask: patternFromRows(['OO+', 'OXX', '+XX']) },
        { id: 'corner-out-bottom-left', mask: patternFromRows(['+OO', 'XXO', 'XX+']) },
        { id: 'corner-out-top-right', mask: patternFromRows(['+XX', 'OXX', 'OO+']) },
        { id: 'corner-out-top-left', mask: patternFromRows(['XX+', 'XXO', '+OO']) },
        { id: 'edge-top', mask: patternFromRows(['OOO', 'XXX', 'XXX']) },
        { id: 'edge-bottom', mask: patternFromRows(['XXX', 'XXX', 'OOO']) },
        { id: 'edge-left', mask: patternFromRows(['OXX', 'OXX', 'OXX']) },
        { id: 'edge-right', mask: patternFromRows(['XXO', 'XXO', 'XXO']) },
        { id: 'edge-top', mask: patternFromRows(['+O+', 'XXX', '+++']) },
        { id: 'edge-bottom', mask: patternFromRows(['+++', 'XXX', '+O+']) },
        { id: 'edge-left', mask: patternFromRows(['+X+', 'OX+', '+X+']) },
        { id: 'edge-right', mask: patternFromRows(['+X+', '+XO', '+X+']) },
        { id: 'center', mask: patternFromRows(['XXX', 'XXX', 'XXX']) }
      ];
      for (let i = 0; i < patterns.length; i += 1) {
        if (matchesPattern(patterns[i].mask, sample)) return patterns[i].id;
      }
      return 'center';
    };

    const getBaseSpriteIndex = (cell, asset, x, y) => {
      if (!cell || !asset) return 1;
      const manualIndex = Number.isInteger(cell.spriteIndex) ? clamp(cell.spriteIndex, 1, asset.spriteCount || 1) : null;
      if (cell.auto === false) return manualIndex || 1;
      if (manualIndex) return manualIndex;
      if ((asset.spriteCount || 0) < 13) return 1;
      const tileId = getBaseTileIdX13(asset.number, x, y);
      const index = autoTileOrder.indexOf(tileId);
      return index >= 0 ? clamp(index + 1, 1, asset.spriteCount || 1) : 1;
    };

    const getBaseCollision = (index) => {
      const cell = state.baseMap.map.cells[index];
      if (!cell) return 'passable';
      const asset = getBaseAssetByNumber(cell.assetNumber);
      return asset?.type === 'blocking' ? 'blocking' : 'passable';
    };

    const getUniformCollisionMask = (collision) => createDefaultCollisionMask(collision === 'blocking' ? 'blocking' : 'passable');

    const getEffectiveCollisionMask = (index) => {
      const itemCell = state.layout.cells[index];
      if (itemCell) {
        const itemAsset = getItemAssetById(itemCell.assetId);
        if (itemAsset?.collisionMode === 'mask') {
          return getCollisionMaskForSprite(itemAsset, itemCell.spriteIndex || 1);
        }
        if (itemAsset) {
          return getUniformCollisionMask(itemAsset.type === 'blocking' ? 'blocking' : 'passable');
        }
      }
      return getUniformCollisionMask(getBaseCollision(index));
    };

    const getEffectiveCollision = (index) => {
      const mask = getEffectiveCollisionMask(index);
      if (mask.every(Boolean)) return 'blocking';
      if (mask.every((entry) => !entry)) return 'passable';
      return 'mixed';
    };

    const getPlayerDepth = (index) => {
      const itemCell = state.layout.cells[index];
      if (!itemCell) return null;
      const itemAsset = getItemAssetById(itemCell.assetId);
      return itemAsset?.playerDepth === 'cover' ? 'cover' : itemAsset ? 'front' : null;
    };

    const renderMapCell = (cell, index) => {
      const width = state.layout.width;
      const x = index % width;
      const y = Math.floor(index / width);
      const baseCell = state.baseMap.map.cells[index];
      const itemCell = state.layout.cells[index];
      const marker = state.baseMap.map.markers[index];
      const baseAsset = baseCell ? getBaseAssetByNumber(baseCell.assetNumber) : null;
      const itemAsset = itemCell ? getItemAssetById(itemCell.assetId) : null;
      const baseSpriteIndex = baseCell && baseAsset ? getBaseSpriteIndex(baseCell, baseAsset, x, y) : 1;
      const itemSpriteIndex = itemCell ? clamp(Number.parseInt(itemCell.spriteIndex, 10) || 1, 1, itemAsset?.spriteCount || 1) : 1;
      const baseLayer = baseAsset ? buildSpriteLayer(baseAsset, baseSpriteIndex, state.layout.cellSize) : null;
      const itemLayer = itemAsset ? buildSpriteLayer(itemAsset, itemSpriteIndex, state.layout.cellSize) : null;
      const view = state.view;

      cell.classList.toggle('is-empty', !baseCell && !itemCell);
      cell.classList.toggle('has-marker', Boolean(marker));
      cell.classList.toggle('marker-entry', marker === 'portal');
      cell.classList.toggle('marker-exit', marker === 'portal');
      cell.style.backgroundImage = '';
      cell.style.backgroundSize = '';
      cell.style.backgroundPosition = '';
      cell.style.backgroundRepeat = '';
      cell.style.backgroundColor = '';
      cell.replaceChildren();

      const applyLayers = () => {
        const layers = [itemLayer, baseLayer].filter(Boolean);
        if (layers.length) {
          cell.style.backgroundImage = layers.map((layer) => `url(${layer.imageUrl})`).join(', ');
          cell.style.backgroundSize = layers.map((layer) => layer.size).join(', ');
          cell.style.backgroundPosition = layers.map((layer) => layer.position).join(', ');
          cell.style.backgroundRepeat = layers.map(() => 'no-repeat').join(', ');
        } else if (itemAsset) {
          cell.style.backgroundColor = itemAsset.color || '#2a2a2a';
        } else if (baseAsset) {
          cell.style.backgroundColor = baseAsset.color || '#20242a';
        }
      };

      const appendMaskOverlay = (mask) => {
        const overlay = document.createElement('div');
        overlay.className = 'map-mask-overlay';
        mask.forEach((isBlocking) => {
          const part = document.createElement('span');
          part.className = `map-mask-cell ${isBlocking ? 'is-blocking' : 'is-passable'}`;
          overlay.appendChild(part);
        });
        cell.appendChild(overlay);
      };

      const appendDebugCode = (value) => {
        const code = document.createElement('span');
        code.className = 'map-debug-code';
        code.textContent = value;
        cell.appendChild(code);
      };

      if (view === 'collision') {
        const collision = getEffectiveCollision(index);
        applyLayers();
        if (collision === 'mixed') {
          appendMaskOverlay(getEffectiveCollisionMask(index));
          appendDebugCode('M');
        } else {
          cell.style.backgroundColor = collision === 'blocking' ? '#7a1f1f' : '#1f6f3a';
          appendDebugCode(collision === 'blocking' ? '1' : '0');
        }
        return;
      }

      if (view === 'depth') {
        const depth = getPlayerDepth(index);
        if (!itemCell) {
          cell.style.backgroundColor = baseCell ? '#1f2933' : '#0d0d0d';
          appendDebugCode('0');
        } else if (depth === 'cover') {
          cell.style.backgroundColor = '#6e2d1d';
          appendDebugCode('C');
        } else {
          cell.style.backgroundColor = '#1d4c6e';
          appendDebugCode('F');
        }
        return;
      }

      if (view === 'items') {
        if (itemLayer?.imageUrl) {
          cell.style.backgroundImage = `url(${itemLayer.imageUrl})`;
          cell.style.backgroundSize = itemLayer.size;
          cell.style.backgroundPosition = itemLayer.position;
          cell.style.backgroundRepeat = 'no-repeat';
        } else if (itemAsset) {
          cell.style.backgroundColor = itemAsset.color || '#2a2a2a';
        } else if (baseAsset) {
          cell.style.backgroundColor = 'rgba(255,255,255,0.05)';
        }
        return;
      }

      applyLayers();
    };

    const renderMapGrid = () => {
      ensureCells();
      mapGrid.innerHTML = '';
      mapGrid.style.setProperty('--map-columns', state.layout.width);
      mapGrid.style.setProperty('--map-cell-size', `${state.layout.cellSize}px`);
      const total = state.layout.width * state.layout.height;
      for (let i = 0; i < total; i += 1) {
        const cell = document.createElement('div');
        cell.className = 'map-cell';
        cell.dataset.index = String(i);
        renderMapCell(cell, i);
        mapGrid.appendChild(cell);
      }
    };

    const createPaintCell = () => {
      const asset = getItemAssetById(state.selectedAssetId);
      if (!asset) return null;
      return {
        assetId: asset.id,
        spriteIndex: clamp(state.selectedSpriteIndex, 1, asset.spriteCount || 1)
      };
    };

    const getFillKey = (cell) => {
      if (!cell) return 'empty';
      return `${cell.assetId}:${cell.spriteIndex}`;
    };

    const floodFill = (startIndex) => {
      if (startIndex < 0 || startIndex >= state.layout.cells.length) return;
      const width = state.layout.width;
      const height = state.layout.height;
      const targetKey = getFillKey(state.layout.cells[startIndex]);
      const paintCell = createPaintCell();
      if (!paintCell) return;
      const paintKey = getFillKey(paintCell);
      if (targetKey === paintKey) return;
      ensureHistorySnapshot();
      const stack = [startIndex];
      const visited = new Set();
      while (stack.length) {
        const index = stack.pop();
        if (visited.has(index)) continue;
        visited.add(index);
        if (getFillKey(state.layout.cells[index]) !== targetKey) continue;
        state.layout.cells[index] = createPaintCell();
        const x = index % width;
        const y = Math.floor(index / width);
        if (x > 0) stack.push(index - 1);
        if (x < width - 1) stack.push(index + 1);
        if (y > 0) stack.push(index - width);
        if (y < height - 1) stack.push(index + width);
      }
      renderMapGrid();
      scheduleSave();
    };

    const applyCell = (index) => {
      if (index < 0 || index >= state.layout.cells.length) return;
      const tool = getEffectiveTool();
      if (tool === 'eyedropper') {
        const itemCell = state.layout.cells[index];
        if (!itemCell) return;
        const asset = getItemAssetById(itemCell.assetId);
        if (!asset) return;
        state.selectedAssetId = asset.id;
        state.selectedSpriteIndex = itemCell.spriteIndex || 1;
        renderAssetList();
        renderAssetGrid();
        return;
      }
      if (tool === 'fill') {
        floodFill(index);
        return;
      }
      if (tool === 'eraser') {
        ensureHistorySnapshot();
        state.layout.cells[index] = null;
      } else {
        const paintCell = createPaintCell();
        if (!paintCell) return;
        ensureHistorySnapshot();
        state.layout.cells[index] = paintCell;
      }
      const cell = mapGrid.querySelector(`.map-cell[data-index="${index}"]`);
      if (cell) renderMapCell(cell, index);
      renderMapGrid();
      scheduleSave();
    };

    const resizeWorkspace = (nextWidth, nextHeight) => {
      const width = clamp(nextWidth, 4, 200);
      const height = clamp(nextHeight, 4, 200);
      ensureHistorySnapshot();
      const resizedBase = Array.from({ length: width * height }, () => null);
      const resizedMarkers = Array.from({ length: width * height }, () => null);
      const resizedItems = Array.from({ length: width * height }, () => null);
      const copyWidth = Math.min(state.layout.width, width);
      const copyHeight = Math.min(state.layout.height, height);
      for (let row = 0; row < copyHeight; row += 1) {
        for (let col = 0; col < copyWidth; col += 1) {
          const prevIndex = row * state.layout.width + col;
          const nextIndex = row * width + col;
          resizedBase[nextIndex] = cloneBaseCell(state.baseMap.map.cells[prevIndex]);
          resizedMarkers[nextIndex] = state.baseMap.map.markers[prevIndex] || null;
          resizedItems[nextIndex] = cloneItemCell(state.layout.cells[prevIndex]);
        }
      }
      state.layout.width = width;
      state.layout.height = height;
      state.baseMap.map.width = width;
      state.baseMap.map.height = height;
      state.layout.cells = resizedItems;
      state.baseMap.map.cells = resizedBase;
      state.baseMap.map.markers = resizedMarkers;
      if (mapWidthInput) mapWidthInput.value = String(width);
      if (mapHeightInput) mapHeightInput.value = String(height);
      renderMapGrid();
      scheduleSave();
    };

    const updateBaseMapLabel = () => {
      if (!baseMapLabel) return;
      const label = state.baseMap.map.name || state.baseMap.sourceFile || msg('baseMapEmpty', 'No base map loaded.');
      baseMapLabel.textContent = label;
    };

    const updateInteractionControls = () => {
      qsa('[data-item-tool]').forEach((button) => {
        button.classList.toggle('is-active', (button.dataset.itemTool || 'pencil') === state.tool);
      });
      qsa('[data-item-view]').forEach((button) => {
        button.classList.toggle('is-active', (button.dataset.itemView || 'normal') === state.view);
      });
    };

    const buildBasePayload = () => ({
      version: 1,
      assetColorPalette: state.baseMap.assetColorPalette || 'studio',
      assets: state.baseMap.assets.map((asset) => ({
        name: asset.name,
        fileName: asset.fileName,
        assetType: asset.assetType || '',
        number: asset.number,
        color: asset.color,
        cacheKey: asset.cacheKey,
        cols: asset.cols,
        rows: asset.rows,
        spriteWidth: asset.spriteWidth,
        spriteHeight: asset.spriteHeight,
        spriteCount: asset.spriteCount,
        type: asset.type
      })),
      map: {
        name: state.baseMap.map.name || '',
        width: state.baseMap.map.width,
        height: state.baseMap.map.height,
        cellSize: state.baseMap.map.cellSize,
        assetColorPalette: state.baseMap.assetColorPalette || 'studio',
        cells: state.baseMap.map.cells.map((cell) => {
          if (!cell) return null;
          return {
            assetNumber: cell.assetNumber ?? null,
            spriteIndex: cell.spriteIndex ?? null,
            auto: cell.auto !== false
          };
        }),
        markers: state.baseMap.map.markers.slice()
      }
    });

    const buildExportPayload = () => {
      const basePayload = buildBasePayload();
      return {
        ...basePayload,
        editor: 'item-creator',
        name: state.layout.name || state.baseMap.map.name || '',
        sourceFile: state.baseMap.sourceFile || '',
        itemAssets: state.assets.map((asset) => ({
          name: asset.name,
          fileName: asset.fileName,
          assetType: asset.assetType || '',
          number: asset.number,
          color: asset.color,
          cacheKey: asset.cacheKey,
          cols: asset.cols,
          rows: asset.rows,
          spriteWidth: asset.spriteWidth,
          spriteHeight: asset.spriteHeight,
          spriteCount: asset.spriteCount,
          type: asset.type,
          collisionMode: asset.collisionMode,
          collisionMasks: cloneCollisionMasks(asset.collisionMasks),
          playerDepth: asset.playerDepth
        })),
        itemLayer: {
          name: state.layout.name || '',
          width: state.layout.width,
          height: state.layout.height,
          cellSize: state.layout.cellSize,
          cells: state.layout.cells.map((cell) => {
            if (!cell) return null;
            const asset = getItemAssetById(cell.assetId);
            return {
              assetNumber: asset?.number ?? null,
              spriteIndex: cell.spriteIndex ?? 1,
              collision: asset?.type === 'passable' ? 'passable' : 'blocking',
              collisionMode: asset?.collisionMode === 'mask' ? 'mask' : 'simple',
              playerDepth: asset?.playerDepth === 'cover' ? 'cover' : 'front'
            };
          }),
          effectiveCollision: state.layout.cells.map((_, index) => getEffectiveCollision(index) === 'blocking' ? 'blocking' : 'passable'),
          effectiveCollisionMasks: state.layout.cells.map((_, index) => getEffectiveCollisionMask(index)),
          effectiveDepth: state.layout.cells.map((_, index) => getPlayerDepth(index))
        }
      };
    };

    const normalizeImportedBaseMap = (payload, fileName = '') => {
      const width = clamp(Number.parseInt(payload?.map?.width, 10) || 50, 4, 200);
      const height = clamp(Number.parseInt(payload?.map?.height, 10) || 50, 4, 200);
      const total = width * height;
      const assets = Array.isArray(payload?.assets) ? payload.assets.map((asset, index) => normalizeBaseAsset(asset, index + 1)) : [];
      const cells = Array.from({ length: total }, () => null);
      const rawCells = Array.isArray(payload?.map?.cells) ? payload.map.cells : [];
      for (let i = 0; i < Math.min(rawCells.length, total); i += 1) {
        const entry = rawCells[i];
        if (!entry || !entry.assetNumber) continue;
        cells[i] = {
          assetNumber: Number.parseInt(entry.assetNumber, 10) || null,
          spriteIndex: Number.isInteger(entry.spriteIndex) ? entry.spriteIndex : null,
          auto: entry.auto !== false
        };
      }
      const markers = Array.from({ length: total }, () => null);
      const rawMarkers = Array.isArray(payload?.map?.markers) ? payload.map.markers : [];
      for (let i = 0; i < Math.min(rawMarkers.length, total); i += 1) {
        const marker = rawMarkers[i];
        markers[i] = (marker === 'portal' || marker === 'entry' || marker === 'exit' || marker === 1 || marker === true) ? 'portal' : null;
      }
      return {
        sourceFile: fileName,
        assetColorPalette: payload?.assetColorPalette || payload?.map?.assetColorPalette || 'studio',
        assets,
        map: {
          name: payload?.map?.name || payload?.name || (fileName ? fileName.replace(/\.[^/.]+$/, '') : ''),
          width,
          height,
          cellSize: clamp(Number.parseInt(payload?.map?.cellSize, 10) || 16, 10, 32),
          cells,
          markers
        }
      };
    };

    const applyBaseMapPayload = async (payload, fileName = '', options = {}) => {
      const { clearItems = true } = options;
      const normalized = normalizeImportedBaseMap(payload, fileName);
      state.baseMap = normalized;
      state.layout.width = normalized.map.width;
      state.layout.height = normalized.map.height;
      state.layout.cellSize = normalized.map.cellSize;
      if (clearItems) {
        state.layout.cells = Array.from({ length: state.layout.width * state.layout.height }, () => null);
      } else {
        ensureCells();
      }
      if (!state.layout.name) {
        state.layout.name = normalized.map.name || '';
      }
      if (mapNameInput) mapNameInput.value = state.layout.name;
      if (mapWidthInput) mapWidthInput.value = String(state.layout.width);
      if (mapHeightInput) mapHeightInput.value = String(state.layout.height);
      if (mapCellSize) mapCellSize.value = String(state.layout.cellSize);
      updateBaseMapLabel();
      await loadCachedImages();
      renderMapGrid();
      scheduleSave();
    };

    const applyItemPayload = async (payload, fileName = '') => {
      await applyBaseMapPayload(payload, fileName || payload?.sourceFile || '', { clearItems: true });
      state.assets = Array.isArray(payload?.itemAssets) ? payload.itemAssets.map((asset, index) => normalizeItemAsset(asset, index + 1)) : [];
      normalizeAssetNumbers();
      const assetByNumber = new Map(state.assets.map((asset) => [asset.number, asset.id]));
      const layer = payload?.itemLayer || {};
      state.layout.name = layer.name || payload?.name || state.baseMap.map.name || '';
      const layerWidth = clamp(Number.parseInt(layer.width, 10) || state.baseMap.map.width, 4, 200);
      const layerHeight = clamp(Number.parseInt(layer.height, 10) || state.baseMap.map.height, 4, 200);
      state.layout.width = layerWidth;
      state.layout.height = layerHeight;
      state.layout.cellSize = clamp(Number.parseInt(layer.cellSize, 10) || state.baseMap.map.cellSize || 16, 10, 32);
      state.baseMap.map.width = layerWidth;
      state.baseMap.map.height = layerHeight;
      ensureCells();
      state.layout.cells = Array.from({ length: layerWidth * layerHeight }, () => null);
      const rawCells = Array.isArray(layer.cells) ? layer.cells : [];
      for (let i = 0; i < Math.min(rawCells.length, state.layout.cells.length); i += 1) {
        const entry = rawCells[i];
        if (!entry || !entry.assetNumber) continue;
        const assetId = assetByNumber.get(Number.parseInt(entry.assetNumber, 10));
        if (!assetId) continue;
        state.layout.cells[i] = {
          assetId,
          spriteIndex: clamp(Number.parseInt(entry.spriteIndex, 10) || 1, 1, 9999)
        };
      }
      state.selectedAssetId = state.assets[0]?.id || null;
      state.selectedSpriteIndex = 1;
      if (mapNameInput) mapNameInput.value = state.layout.name;
      if (mapWidthInput) mapWidthInput.value = String(state.layout.width);
      if (mapHeightInput) mapHeightInput.value = String(state.layout.height);
      if (mapCellSize) mapCellSize.value = String(state.layout.cellSize);
      await loadCachedImages();
      renderAssetList();
      renderAssetGrid();
      renderMapGrid();
      updateInteractionControls();
      scheduleSave();
    };

    const importJson = (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const payload = JSON.parse(String(reader.result || '{}'));
          if (payload?.map && Array.isArray(payload.assets)) {
            pushHistorySnapshot();
          }
          if (payload?.itemLayer && Array.isArray(payload?.itemAssets) && payload?.map && Array.isArray(payload?.assets)) {
            await applyItemPayload(payload, file.name);
          } else if (payload?.map && Array.isArray(payload?.assets)) {
            await applyBaseMapPayload(payload, file.name, { clearItems: true });
            renderAssetList();
            renderAssetGrid();
            renderMapGrid();
          }
        } catch (error) {
          // ignore invalid JSON
        }
      };
      reader.readAsText(file);
    };

    const loadCachedState = async () => {
      if (!window.localStorage) return false;
      try {
        const raw = localStorage.getItem(itemCacheKey);
        if (!raw) return false;
        const payload = JSON.parse(raw);
        if (!payload) return false;
        if (payload?.itemLayer && Array.isArray(payload?.itemAssets) && payload?.map && Array.isArray(payload?.assets)) {
          await applyItemPayload(payload, payload?.sourceFile || '');
          return true;
        }
        if (payload?.map && Array.isArray(payload?.assets)) {
          await applyBaseMapPayload(payload, payload?.sourceFile || '', { clearItems: true });
          return true;
        }
        return false;
      } catch (error) {
        return false;
      }
    };

    const exportJson = () => {
      const payload = buildExportPayload();
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${sanitizeFilename(state.layout.name || state.baseMap.map.name || 'item_map')}.json`;
      link.click();
      URL.revokeObjectURL(url);
    };

    const updateMaskBrushButtons = () => {
      maskBlockingButton?.classList.toggle('is-active', maskBrush === 'blocking');
      maskPassableButton?.classList.toggle('is-active', maskBrush === 'passable');
    };

    const closeMaskEditor = () => {
      maskPainting = false;
      maskEditorAssetId = null;
      maskModal?.classList.add('is-hidden');
      maskModal?.setAttribute('aria-hidden', 'true');
    };

    const paintMaskValue = (asset, spriteIndex, maskIndex) => {
      if (!asset || asset.collisionMode !== 'mask') return;
      const mask = getCollisionMaskForSprite(asset, spriteIndex, { create: true });
      const nextValue = maskBrush === 'blocking';
      if (mask[maskIndex] === nextValue) return;
      mask[maskIndex] = nextValue;
      renderMaskEditor();
      renderMapGrid();
      scheduleSave();
    };

    const renderMaskEditor = () => {
      if (!maskSpriteGrid) return;
      const asset = getMaskEditorAsset();
      updateMaskBrushButtons();
      maskSpriteGrid.innerHTML = '';
      if (!asset) return;
      if (maskSubtitle) {
        const assetName = asset.name || asset.fileName || `Item ${asset.number}`;
        maskSubtitle.textContent = `${assetName} - ${msg('collisionMask', 'Mask 4x4')}`;
      }
      for (let spriteIndex = 1; spriteIndex <= Math.max(1, asset.spriteCount || 1); spriteIndex += 1) {
        const card = document.createElement('div');
        card.className = 'item-mask-sprite-card';
        const preview = document.createElement('div');
        preview.className = 'item-mask-sprite-preview';
        const layer = buildSpriteLayer(asset, spriteIndex, 32);
        if (layer?.imageUrl) {
          preview.style.backgroundImage = `url(${layer.imageUrl})`;
          preview.style.backgroundSize = layer.size;
          preview.style.backgroundPosition = layer.position;
          preview.style.backgroundRepeat = 'no-repeat';
        } else {
          preview.style.backgroundColor = asset.color || '#2a2a2a';
        }
        const grid = document.createElement('div');
        grid.className = 'item-mask-edit-grid';
        const mask = getCollisionMaskForSprite(asset, spriteIndex, { create: true });
        mask.forEach((isBlocking, maskIndex) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = `item-mask-edit-cell ${isBlocking ? 'is-blocking' : 'is-passable'}`;
          button.dataset.spriteIndex = String(spriteIndex);
          button.dataset.maskIndex = String(maskIndex);
          button.title = isBlocking ? msg('blockingZone', 'Blocking') : msg('passableZone', 'Passable');
          grid.appendChild(button);
        });
        preview.appendChild(grid);
        const meta = document.createElement('div');
        meta.className = 'item-mask-sprite-meta';
        meta.textContent = `${msg('collisionMaskSprite', 'Sprite')} ${spriteIndex}`;
        card.appendChild(preview);
        card.appendChild(meta);
        maskSpriteGrid.appendChild(card);
      }
    };

    const bindGrid = () => {
      mapGrid.addEventListener('pointerdown', (event) => {
        const target = event.target.closest('.map-cell');
        if (!target) return;
        const currentTool = getEffectiveTool();
        event.preventDefault();
        state.isDrawing = true;
        mapGrid.setPointerCapture(event.pointerId);
        if (currentTool !== 'eyedropper') beginHistoryBatch();
        applyCell(Number.parseInt(target.dataset.index, 10));
      });

      mapGrid.addEventListener('pointermove', (event) => {
        const target = event.target.closest('.map-cell');
        if (!target) return;
        const currentTool = getEffectiveTool();
        const index = Number.parseInt(target.dataset.index, 10);
        const altEraserHover = (itemAltEraserActive || event.altKey) && currentTool === 'eraser';
        const hoverPaintActive = state.shiftPaint || altEraserHover;
        if (currentTool === 'eyedropper' || currentTool === 'fill') {
          if (!state.isDrawing) return;
        }
        if (state.isDrawing) {
          if (!historyBatchActive && currentTool !== 'eyedropper') beginHistoryBatch();
          applyCell(index);
          return;
        }
        if (hoverPaintActive) {
          if (!historyBatchActive && currentTool !== 'eyedropper') beginHistoryBatch();
          if (state.shiftPaintIndex === index) return;
          state.shiftPaintIndex = index;
          applyCell(index);
        }
      });

      const stopDrawing = (event) => {
        if (!state.isDrawing) return;
        state.isDrawing = false;
        try {
          mapGrid.releasePointerCapture(event.pointerId);
        } catch (error) {
          // ignore
        }
        endHistoryBatch();
      };

      mapGrid.addEventListener('pointerup', stopDrawing);
      mapGrid.addEventListener('pointerleave', stopDrawing);
      mapGrid.addEventListener('pointerleave', () => {
        state.shiftPaintIndex = null;
        endHistoryBatch();
      });
    };

    const bindControls = () => {
      addAssetButton?.addEventListener('click', () => {
        createAsset();
        state.assetTypeFilter = 'all';
        renderAssetList();
        renderAssetGrid();
        scheduleSave();
      });
      mapApplyButton?.addEventListener('click', () => {
        const width = clamp(Number.parseInt(mapWidthInput?.value, 10) || state.layout.width, 4, 200);
        const height = clamp(Number.parseInt(mapHeightInput?.value, 10) || state.layout.height, 4, 200);
        if (width === state.layout.width && height === state.layout.height) return;
        resizeWorkspace(width, height);
      });
      mapWidthInput?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') mapApplyButton?.click();
      });
      mapHeightInput?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') mapApplyButton?.click();
      });
      mapCellSize?.addEventListener('input', () => {
        state.layout.cellSize = clamp(Number.parseInt(mapCellSize.value, 10) || 16, 10, 32);
        renderMapGrid();
        scheduleSave();
      });
      mapNameInput?.addEventListener('input', () => {
        state.layout.name = mapNameInput.value;
        scheduleSave();
      });
      qsa('[data-item-tool]').forEach((button) => {
        button.addEventListener('click', () => {
          state.tool = button.dataset.itemTool || 'pencil';
          updateInteractionControls();
        });
      });
      qsa('[data-item-view]').forEach((button) => {
        button.addEventListener('click', () => {
          state.view = button.dataset.itemView || 'normal';
          updateInteractionControls();
          renderMapGrid();
        });
      });
      undoButton?.addEventListener('click', undoHistory);
      redoButton?.addEventListener('click', redoHistory);
      exportButton?.addEventListener('click', exportJson);
      importButton?.addEventListener('click', () => importFile?.click());
      importFile?.addEventListener('change', () => {
        const file = importFile.files?.[0];
        if (file) importJson(file);
        importFile.value = '';
      });
      optionsButton?.addEventListener('click', async () => {
        if (!cacheModal) return;
        cacheModal.classList.remove('is-hidden');
        cacheModal.setAttribute('aria-hidden', 'false');
        await updateCacheModal();
      });
      cacheCloseButton?.addEventListener('click', () => {
        cacheModal?.classList.add('is-hidden');
        cacheModal?.setAttribute('aria-hidden', 'true');
      });
      cacheModal?.addEventListener('click', (event) => {
        if (event.target === cacheModal) {
          cacheModal.classList.add('is-hidden');
          cacheModal.setAttribute('aria-hidden', 'true');
        }
      });
      cachePurgeButton?.addEventListener('click', () => {
        cacheClear().then(updateCacheModal);
      });
      maskBlockingButton?.addEventListener('click', () => {
        maskBrush = 'blocking';
        updateMaskBrushButtons();
      });
      maskPassableButton?.addEventListener('click', () => {
        maskBrush = 'passable';
        updateMaskBrushButtons();
      });
      maskCloseButton?.addEventListener('click', closeMaskEditor);
      maskModal?.addEventListener('click', (event) => {
        if (event.target === maskModal) closeMaskEditor();
      });
      maskSpriteGrid?.addEventListener('pointerdown', (event) => {
        const target = event.target.closest('.item-mask-edit-cell');
        if (!target) return;
        const asset = getMaskEditorAsset();
        if (!asset) return;
        event.preventDefault();
        maskPainting = true;
        paintMaskValue(
          asset,
          Number.parseInt(target.dataset.spriteIndex, 10) || 1,
          Number.parseInt(target.dataset.maskIndex, 10) || 0
        );
      });
      maskSpriteGrid?.addEventListener('pointerover', (event) => {
        if (!maskPainting) return;
        const target = event.target.closest('.item-mask-edit-cell');
        if (!target) return;
        const asset = getMaskEditorAsset();
        if (!asset) return;
        paintMaskValue(
          asset,
          Number.parseInt(target.dataset.spriteIndex, 10) || 1,
          Number.parseInt(target.dataset.maskIndex, 10) || 0
        );
      });
      window.addEventListener('pointerup', () => {
        maskPainting = false;
      });
    };

    const handleModifierKeys = (event) => {
      if (isEditableTarget(event.target)) return;
      if (event.key === 'Control') {
        state.shiftPaint = event.type === 'keydown';
        if (!state.shiftPaint) {
          state.shiftPaintIndex = null;
          endHistoryBatch();
        }
        return;
      }
      if (event.key === 'Alt') {
        event.preventDefault();
        itemAltEraserActive = event.type === 'keydown';
        refreshTemporaryTool();
        if (!itemAltEraserActive && !state.shiftPaint) {
          state.shiftPaintIndex = null;
          endHistoryBatch();
        }
        return;
      }
      if (event.code === 'Space') {
        if (event.type === 'keydown') event.preventDefault();
        itemSpaceEyedropperActive = event.type === 'keydown';
        refreshTemporaryTool();
      }
    };

    const handleUndoRedoShortcuts = (event) => {
      if (isEditableTarget(event.target)) return;
      const isMac = /mac/i.test(navigator.platform || '');
      const modKey = isMac ? event.metaKey : event.ctrlKey;
      if (!modKey) return;
      const key = event.key.toLowerCase();
      if (key === 'z' && !event.shiftKey) {
        event.preventDefault();
        undoHistory();
      } else if (key === 'y' || (key === 'z' && event.shiftKey)) {
        event.preventDefault();
        redoHistory();
      }
    };

    window.addEventListener('keydown', handleModifierKeys);
    window.addEventListener('keyup', handleModifierKeys);
    window.addEventListener('keydown', handleUndoRedoShortcuts);
    window.addEventListener('blur', () => {
      state.shiftPaint = false;
      state.shiftPaintIndex = null;
      itemAltEraserActive = false;
      itemSpaceEyedropperActive = false;
      itemTemporaryTool = null;
      maskPainting = false;
      endHistoryBatch();
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        cacheModal?.classList.add('is-hidden');
        cacheModal?.setAttribute('aria-hidden', 'true');
        closeMaskEditor();
      }
    });

    document.addEventListener('languagechange', () => {
      updateBaseMapLabel();
      renderAssetList();
      renderAssetGrid();
      renderMaskEditor();
    });

    bindGrid();
    bindControls();
    ensureCells();
    renderAssetList();
    renderAssetGrid();
    renderMapGrid();
    updateBaseMapLabel();
    updateInteractionControls();
    updateUndoRedoButtons();

    loadCachedState().then((loaded) => {
      if (!loaded && !state.assets.length) {
        createAsset();
        renderAssetList();
        renderAssetGrid();
        renderMapGrid();
        scheduleSave();
      } else {
        renderAssetList();
        renderAssetGrid();
        renderMapGrid();
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
