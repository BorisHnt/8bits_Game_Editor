(() => {
  const pageActive = () => document.body.classList.contains('page-item-dropper');

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
      itemKind: 'Item kind',
      interactionId: 'Interaction ID',
      oneShot: 'One-shot',
      pickup: 'Pickup',
      usable: 'Usable',
      quest: 'Quest',
      trigger: 'Trigger',
      yes: 'Yes',
      no: 'No',
      collision: 'Collision',
      collisionMode: 'Collision mode',
      collisionModeSimple: 'Simple',
      collisionModeMask: 'Painted mask',
      collisionMask: 'Mask 4x4',
      collisionMaskSprite: 'Sprite',
      blockingZone: 'Blocking',
      passableZone: 'Passable',
      editMask: 'Edit Mask',
      editAnimation: 'Edit Animation',
      animation: 'Animation',
      animationStart: 'Start image',
      animationFrames: 'Animation images',
      animationFramesHint: 'Use commas or ranges, for example 2,3,4-6.',
      animationEnd: 'End image',
      animationLoop: 'Loop',
      animationLoopOn: 'Yes',
      animationLoopOff: 'No',
      animationLoopFrom: 'Loop from',
      animationLoopTo: 'Loop to',
      animationPreview: 'Preview',
      animationTarget: 'Sprite picker target',
      animationNone: 'No animation configured',
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
      baseMapEmpty: 'No base map loaded.',
      updateCache: 'Update Cache',
      publishUpdated: 'Updated',
      publishDirty: 'Not published yet',
      syncUpToDate: 'Synced',
      syncNeedsUpdate: 'Upstream updated'
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
      itemKind: "Type d'item",
      interactionId: 'Interaction ID',
      oneShot: 'One-shot',
      pickup: 'Ramassage',
      usable: 'Utilisable',
      quest: 'Quete',
      trigger: 'Trigger',
      yes: 'Oui',
      no: 'Non',
      collision: 'Collision',
      collisionMode: 'Mode collision',
      collisionModeSimple: 'Simple',
      collisionModeMask: 'Mask peint',
      collisionMask: 'Mask 4x4',
      collisionMaskSprite: 'Sprite',
      blockingZone: 'Bloquant',
      passableZone: 'Passant',
      editMask: 'Edit Mask',
      editAnimation: 'Edit Animation',
      animation: 'Animation',
      animationStart: 'Image de depart',
      animationFrames: "Images d'animation",
      animationFramesHint: 'Utilise des virgules ou des intervalles, par exemple 2,3,4-6.',
      animationEnd: 'Image de fin',
      animationLoop: 'Loop',
      animationLoopOn: 'Oui',
      animationLoopOff: 'Non',
      animationLoopFrom: 'Loop de',
      animationLoopTo: 'Loop a',
      animationPreview: 'Apercu',
      animationTarget: 'Cible du picker',
      animationNone: 'Aucune animation configuree',
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
      baseMapEmpty: 'Aucune map de base chargee.',
      updateCache: 'Mettre a jour le cache',
      publishUpdated: 'Mis a jour',
      publishDirty: 'Non publie',
      syncUpToDate: 'Synchronise',
      syncNeedsUpdate: 'Amont mis a jour'
    }
  };

  const getLanguage = () => (document.documentElement.lang === 'fr' ? 'fr' : 'en');
  const msg = (key, fallback = '') => messages[getLanguage()]?.[key] ?? fallback;
  const parseSpriteSequence = (value, maxSprites) => {
    const limit = Math.max(1, Number.parseInt(maxSprites, 10) || 1);
    if (Array.isArray(value)) {
      return value
        .map((entry) => Number.parseInt(entry, 10))
        .filter((entry) => Number.isFinite(entry) && entry >= 1 && entry <= limit)
        .map((entry) => clamp(entry, 1, limit));
    }
    const raw = String(value || '').trim();
    if (!raw) return [];
    const sequence = [];
    raw.split(',').map((part) => part.trim()).filter(Boolean).forEach((part) => {
      const range = part.match(/^(\d+)\s*-\s*(\d+)$/);
      if (range) {
        const start = clamp(Number.parseInt(range[1], 10) || 1, 1, limit);
        const end = clamp(Number.parseInt(range[2], 10) || 1, 1, limit);
        const step = start <= end ? 1 : -1;
        for (let sprite = start; step > 0 ? sprite <= end : sprite >= end; sprite += step) {
          sequence.push(sprite);
        }
        return;
      }
      const spriteIndex = Number.parseInt(part, 10);
      if (Number.isFinite(spriteIndex) && spriteIndex >= 1 && spriteIndex <= limit) {
        sequence.push(spriteIndex);
      }
    });
    return sequence;
  };
  const formatSpriteSequence = (sequence) => sequence.length ? sequence.join(', ') : '';

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
    const mapSelect = qs('#item-map-select');
    const mapNameInput = qs('#item-map-name');
    const mapUpdateButton = qs('#item-map-update');
    const mapPublishStatus = qs('#item-publish-status');
    const baseMapLabel = qs('#item-base-map-label');
    const syncStatusLabel = qs('#item-sync-status');
    const refreshBaseMapButton = qs('#item-refresh-base-map');
    const refreshBaseMapFile = qs('#item-refresh-base-map-file');
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
    const animationModal = qs('#item-animation-modal');
    const animationCloseButton = qs('#item-animation-close');
    const animationSubtitle = qs('#item-animation-subtitle');
    const animationStartInput = qs('#item-animation-start');
    const animationFramesInput = qs('#item-animation-frames');
    const animationEndInput = qs('#item-animation-end');
    const animationLoopEnabled = qs('#item-animation-loop-enabled');
    const animationLoopFromInput = qs('#item-animation-loop-from');
    const animationLoopToInput = qs('#item-animation-loop-to');
    const animationPickerTarget = qs('#item-animation-picker-target');
    const animationPreviewBox = qs('#item-animation-preview-box');
    const animationPreviewFrame = qs('#item-animation-preview-frame');
    const animationPreviewSequence = qs('#item-animation-preview-sequence');
    const animationSpriteGrid = qs('#item-animation-sprite-grid');

    if (!assetList || !assetGrid || !mapGrid) return;
    const projectManager = window.EightBitsProjectManager || null;
    const projectLabels = projectManager?.getLabels?.() || {
      exportProject: 'Export Project',
      importProject: 'Import Project'
    };
    const projectControls = exportButton?.parentElement || null;
    const projectExportButton = document.createElement('button');
    projectExportButton.type = 'button';
    projectExportButton.className = 'button-secondary';
    projectExportButton.textContent = projectLabels.exportProject;
    const projectImportButton = document.createElement('button');
    projectImportButton.type = 'button';
    projectImportButton.className = 'button-secondary';
    projectImportButton.textContent = projectLabels.importProject;
    const projectImportFile = document.createElement('input');
    projectImportFile.className = 'map-file-input';
    projectImportFile.type = 'file';
    projectImportFile.accept = '.json,.zip';
    if (projectControls && projectManager) {
      projectControls.appendChild(projectExportButton);
      projectControls.appendChild(projectImportButton);
      projectControls.appendChild(projectImportFile);
    }

    const itemCacheKey = '8bits-game-item-cache-state';
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
          id: '',
          name: '',
          width: 50,
          height: 50,
          cellSize: 16,
          cells: [],
          markers: []
        }
      },
      inheritedProps: {
        assets: [],
        cells: []
      },
      layout: {
        name: '',
        width: 50,
        height: 50,
        cellSize: 16,
        cells: []
      },
      syncMeta: {
        appliedBaseRev: 0,
        appliedPropsRev: 0
      }
    };

    let itemAltEraserActive = false;
    let itemSpaceEyedropperActive = false;
    let itemTemporaryTool = null;
    let saveTimer = null;
    let publishState = 'updated';
    let undoStack = [];
    let redoStack = [];
    let historyBatchActive = false;
    let currentProjectDocKey = null;
    let currentProjectSelection = '';
    let maskEditorAssetId = null;
    let maskBrush = 'blocking';
    let maskPainting = false;
    let animationEditorAssetId = null;
    let animationPreviewTick = 0;
    let animationPreviewTimer = null;
    const renderPublishStatus = () => {
      if (!mapPublishStatus) return;
      mapPublishStatus.dataset.status = publishState;
      mapPublishStatus.textContent = msg(
        publishState === 'dirty' ? 'publishDirty' : 'publishUpdated',
        publishState === 'dirty' ? 'Not published yet' : 'Updated'
      );
    };
    const setPublishState = (nextState) => {
      publishState = nextState === 'dirty' ? 'dirty' : 'updated';
      renderPublishStatus();
    };

    const getEffectiveTool = () => itemTemporaryTool || state.tool;
    const refreshTemporaryTool = () => {
      itemTemporaryTool = itemSpaceEyedropperActive ? 'eyedropper' : itemAltEraserActive ? 'eraser' : null;
    };
    const currentStageName = 'itemDropper';
    const upstreamStageName = 'propDropper';
    const getLayerVersions = () => projectManager?.getMapLayerVersions?.({
      mapId: state.baseMap.map.id || '',
      lookupName: state.baseMap.map.name || state.layout.name || ''
    }) || { base: 0, props: 0, items: 0, npcs: 0 };
    const updateSyncStatus = () => {
      if (!syncStatusLabel) return;
      const versions = getLayerVersions();
      const appliedBaseRev = Math.max(0, Number.parseInt(state.syncMeta?.appliedBaseRev, 10) || 0);
      const appliedPropsRev = Math.max(0, Number.parseInt(state.syncMeta?.appliedPropsRev, 10) || 0);
      const stale = appliedBaseRev < (versions.base || 0) || appliedPropsRev < (versions.props || 0);
      syncStatusLabel.dataset.status = stale ? 'stale' : 'synced';
      const statusLabel = msg(stale ? 'syncNeedsUpdate' : 'syncUpToDate', stale ? 'Upstream updated' : 'Synced');
      syncStatusLabel.textContent = `Base v${versions.base || 0} · Props v${versions.props || 0} · Items v${versions.items || 0} · Applied b${appliedBaseRev}/p${appliedPropsRev} · ${statusLabel}`;
    };
    const getPayloadMapId = (payload) => String(payload?.map?.id || '').trim();
    const getPayloadLookupName = (payload) => String(payload?.map?.name || payload?.name || '').trim();
    const isPayloadOutdatedAgainstUpstream = (payload) => {
      if (!payload?.map) return false;
      const versions = projectManager?.getMapLayerVersions?.({
        mapId: getPayloadMapId(payload),
        lookupName: getPayloadLookupName(payload)
      }) || { base: 0, props: 0 };
      const appliedBaseRev = Math.max(0, Number.parseInt(payload?.syncMeta?.appliedBaseRev, 10) || 0);
      const appliedPropsRev = Math.max(0, Number.parseInt(payload?.syncMeta?.appliedPropsRev, 10) || 0);
      return appliedBaseRev < (versions.base || 0) || appliedPropsRev < (versions.props || 0);
    };
    const buildProjectOptionValue = (stage, docKey) => `${stage}::${docKey}`;
    const parseProjectOptionValue = (value) => {
      const [stage, ...rest] = String(value || '').split('::');
      return {
        stage,
        docKey: rest.join('::')
      };
    };
    const getProjectMapOptions = () => {
      if (!projectManager) return [];
      const stagePriority = [currentStageName, upstreamStageName, 'mapCreator', 'npcDropper'];
      const maps = projectManager.listUnifiedMaps?.() || [];
      return maps.map((entry) => {
        const selectedStage = stagePriority.find((stage) => entry.docsByStage?.[stage]?.docKey) || entry.preferredStage;
        const selectedDoc = entry.docsByStage?.[selectedStage] || null;
        return selectedDoc ? {
          stage: selectedStage,
          docKey: selectedDoc.docKey,
          payload: selectedDoc.payload,
          label: entry.displayName || entry.lookupName || getPayloadLookupName(selectedDoc.payload) || 'Map'
        } : null;
      }).filter(Boolean).sort((a, b) => a.label.localeCompare(b.label));
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

    const normalizeInteractionAnimation = (animation, maxSprites, fallbackStart = 1) => {
      const limit = Math.max(1, Number.parseInt(maxSprites, 10) || 1);
      const normalizeSprite = (value, fallback = null) => {
        const parsed = Number.parseInt(value, 10);
        if (!Number.isFinite(parsed) || parsed < 1) return fallback;
        return clamp(parsed, 1, limit);
      };
      return {
        startSprite: normalizeSprite(animation?.startSprite, clamp(fallbackStart, 1, limit)),
        animationFrames: parseSpriteSequence(animation?.animationFrames, limit),
        endSprite: normalizeSprite(animation?.endSprite, null),
        loop: animation?.loop === true,
        loopFromSprite: normalizeSprite(animation?.loopFromSprite, null),
        loopToSprite: normalizeSprite(animation?.loopToSprite, null)
      };
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
        itemKind: ['pickup', 'usable', 'quest', 'trigger'].includes(asset?.itemKind) ? asset.itemKind : 'pickup',
        interactionId: String(asset?.interactionId || '').trim(),
        oneShot: asset?.oneShot !== false,
        type: asset?.type === 'passable' ? 'passable' : 'blocking',
        collisionMode: asset?.collisionMode === 'mask' ? 'mask' : 'simple',
        collisionMasks: normalizeCollisionMasks(asset?.collisionMasks || asset?.collisionMask, asset?.type === 'passable' ? 'passable' : 'blocking'),
        interactionAnimation: normalizeInteractionAnimation(asset?.interactionAnimation, maxSprites),
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
      await Promise.all(state.inheritedProps.assets.map((asset) => loadCachedImageForAsset(asset)));
    };

    const getItemAssetById = (id) => state.assets.find((asset) => asset.id === id);
    const getBaseAssetByNumber = (number) => state.baseMap.assets.find((asset) => asset.number === number);
    const getInheritedPropAssetByNumber = (number) => state.inheritedProps.assets.find((asset) => asset.number === number);
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
        if (create) {
          asset.collisionMasks[key] = normalizeCollisionMask(current, asset.type);
          return asset.collisionMasks[key];
        }
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
    const getAnimationEditorAsset = () => getItemAssetById(animationEditorAssetId);
    const getInteractionAnimation = (asset) => normalizeInteractionAnimation(
      asset?.interactionAnimation,
      asset?.cols * asset?.rows || asset?.spriteCount || 1,
      1
    );
    const buildInteractionAnimationSequence = (asset) => {
      const animation = getInteractionAnimation(asset);
      const sequence = [];
      if (animation.startSprite) sequence.push(animation.startSprite);
      sequence.push(...animation.animationFrames);
      if (animation.endSprite) sequence.push(animation.endSprite);
      return sequence.length ? sequence : [1];
    };
    const getInteractionAnimationLoopRange = (asset, sequence = buildInteractionAnimationSequence(asset)) => {
      const animation = getInteractionAnimation(asset);
      if (!animation.loop || !sequence.length) return null;
      const fromSprite = animation.loopFromSprite;
      const toSprite = animation.loopToSprite;
      let startIndex = Number.isFinite(fromSprite) ? sequence.indexOf(fromSprite) : -1;
      let endIndex = Number.isFinite(toSprite) ? sequence.lastIndexOf(toSprite) : -1;
      if (startIndex < 0 || endIndex < startIndex) {
        const startOffset = animation.startSprite ? 1 : 0;
        const frameCount = animation.animationFrames.length;
        if (frameCount > 0) {
          startIndex = startOffset;
          endIndex = startOffset + frameCount - 1;
        } else if (sequence.length > 1) {
          startIndex = 0;
          endIndex = sequence.length - 1;
        } else {
          return null;
        }
      }
      return { start: startIndex, end: endIndex };
    };
    const buildInteractionAnimationSummary = (asset) => {
      const animation = getInteractionAnimation(asset);
      const parts = [];
      if (animation.startSprite) parts.push(`S:${animation.startSprite}`);
      if (animation.animationFrames.length) parts.push(`A:${formatSpriteSequence(animation.animationFrames)}`);
      if (animation.endSprite) parts.push(`E:${animation.endSprite}`);
      if (animation.loop) {
        const range = [animation.loopFromSprite, animation.loopToSprite].filter((value) => Number.isFinite(value));
        parts.push(`L:${range.length ? range.join('-') : 'on'}`);
      }
      return parts.length ? parts.join(' | ') : msg('animationNone', 'No animation configured');
    };

    const ensureCells = () => {
      const total = state.layout.width * state.layout.height;
      if (state.layout.cells.length !== total) {
        state.layout.cells = Array.from({ length: total }, (_, index) => state.layout.cells[index] || null);
      }
      if (state.inheritedProps.cells.length !== total) {
        state.inheritedProps.cells = Array.from({ length: total }, (_, index) => state.inheritedProps.cells[index] || null);
      }
      if (state.baseMap.map.cells.length !== total) {
        state.baseMap.map.cells = Array.from({ length: total }, (_, index) => state.baseMap.map.cells[index] || null);
      }
      if (state.baseMap.map.markers.length !== total) {
        state.baseMap.map.markers = Array.from({ length: total }, (_, index) => state.baseMap.map.markers[index] || null);
      }
    };

    const cloneItemCell = (cell) => (cell ? {
      assetId: cell.assetId || null,
      spriteIndex: Number.isInteger(cell.spriteIndex) ? cell.spriteIndex : 1,
      instanceId: cell.instanceId || createId()
    } : null);
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
      itemKind: asset.itemKind,
      interactionId: asset.interactionId,
      oneShot: asset.oneShot,
      type: asset.type,
      collisionMode: asset.collisionMode,
      collisionMasks: cloneCollisionMasks(asset.collisionMasks),
      interactionAnimation: normalizeInteractionAnimation(asset.interactionAnimation, asset.cols * asset.rows || asset.spriteCount || 1),
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
    const remapLayoutCells = (sourceCells, sourceWidth, sourceHeight, targetWidth, targetHeight) => {
      const resized = Array.from({ length: targetWidth * targetHeight }, () => null);
      const copyWidth = Math.min(sourceWidth, targetWidth);
      const copyHeight = Math.min(sourceHeight, targetHeight);
      for (let row = 0; row < copyHeight; row += 1) {
        for (let col = 0; col < copyWidth; col += 1) {
          const prevIndex = row * sourceWidth + col;
          const nextIndex = row * targetWidth + col;
          resized[nextIndex] = cloneItemCell(sourceCells[prevIndex]);
        }
      }
      return resized;
    };

    const buildSnapshot = () => ({
      assets: state.assets.map(cloneItemAsset),
      assetTypeFilter: state.assetTypeFilter,
      selectedAssetId: state.selectedAssetId,
      selectedSpriteIndex: state.selectedSpriteIndex,
      tool: state.tool,
      view: state.view,
      syncMeta: {
        appliedBaseRev: Math.max(0, Number.parseInt(state.syncMeta?.appliedBaseRev, 10) || 0),
        appliedPropsRev: Math.max(0, Number.parseInt(state.syncMeta?.appliedPropsRev, 10) || 0)
      },
      baseMap: {
        sourceFile: state.baseMap.sourceFile,
        assetColorPalette: state.baseMap.assetColorPalette,
        assets: state.baseMap.assets.map(cloneBaseAsset),
        map: {
          id: state.baseMap.map.id || '',
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
      state.syncMeta.appliedBaseRev = Math.max(0, Number.parseInt(snapshot?.syncMeta?.appliedBaseRev, 10) || 0);
      state.syncMeta.appliedPropsRev = Math.max(0, Number.parseInt(snapshot?.syncMeta?.appliedPropsRev, 10) || 0);
      state.baseMap.sourceFile = snapshot.baseMap.sourceFile || '';
      state.baseMap.assetColorPalette = snapshot.baseMap.assetColorPalette || 'studio';
      state.baseMap.assets = (snapshot.baseMap.assets || []).map((asset, index) => normalizeBaseAsset(asset, index + 1));
      state.baseMap.map.id = String(snapshot.baseMap.map.id || state.baseMap.map.id || window.EightBitsMapSchema?.createMapId?.() || '').trim();
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
      setPublishState('dirty');
      saveTimer = window.setTimeout(() => {
        saveTimer = null;
        const payload = buildExportPayload();
        try {
          localStorage.setItem(itemCacheKey, JSON.stringify(payload));
        } catch (error) {
          // ignore storage errors
        }
        const entry = projectManager?.publishStageDocument('itemDropper', payload, {
          docKey: currentProjectDocKey,
          lookupName: payload?.map?.name || payload?.name || 'item_map',
          displayName: payload?.name || payload?.map?.name || 'Item Dropper'
        });
        currentProjectDocKey = entry?.docKey || currentProjectDocKey;
        setPublishState('updated');
      }, 200);
    };
    const flushSave = () => {
      const payload = buildExportPayload();
      if (saveTimer) {
        clearTimeout(saveTimer);
        saveTimer = null;
      }
      if (window.localStorage) {
        try {
          localStorage.setItem(itemCacheKey, JSON.stringify(payload));
        } catch (error) {
          // ignore storage errors
        }
      }
      const entry = projectManager?.publishStageDocument('itemDropper', payload, {
        docKey: currentProjectDocKey,
        lookupName: payload?.map?.name || payload?.name || 'item_map',
        displayName: payload?.name || payload?.map?.name || 'Item Dropper'
      });
      currentProjectDocKey = entry?.docKey || currentProjectDocKey;
      setPublishState('updated');
      refreshProjectMapOptions();
      return payload;
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
        itemKind: 'pickup',
        interactionId: '',
        oneShot: true,
        type: 'blocking',
        collisionMode: 'simple',
        interactionAnimation: {
          startSprite: 1,
          animationFrames: [],
          endSprite: null,
          loop: false,
          loopFromSprite: null,
          loopToSprite: null
        },
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

        const itemKindField = document.createElement('div');
        itemKindField.className = 'asset-field';
        const itemKindLabel = document.createElement('label');
        itemKindLabel.className = 'panel-label';
        itemKindLabel.textContent = msg('itemKind', 'Item kind');
        const itemKindSelect = document.createElement('select');
        itemKindSelect.className = 'asset-select';
        ['pickup', 'usable', 'quest', 'trigger'].forEach((value) => {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = msg(value, value);
          itemKindSelect.appendChild(option);
        });
        itemKindSelect.value = asset.itemKind || 'pickup';
        itemKindField.appendChild(itemKindLabel);
        itemKindField.appendChild(itemKindSelect);

        const interactionField = document.createElement('div');
        interactionField.className = 'asset-field';
        const interactionLabel = document.createElement('label');
        interactionLabel.className = 'panel-label';
        interactionLabel.textContent = msg('interactionId', 'Interaction ID');
        const interactionInput = document.createElement('input');
        interactionInput.className = 'asset-input';
        interactionInput.type = 'text';
        interactionInput.value = asset.interactionId || '';
        interactionField.appendChild(interactionLabel);
        interactionField.appendChild(interactionInput);

        const oneShotField = document.createElement('div');
        oneShotField.className = 'asset-field';
        const oneShotLabel = document.createElement('label');
        oneShotLabel.className = 'panel-label';
        oneShotLabel.textContent = msg('oneShot', 'One-shot');
        const oneShotSelect = document.createElement('select');
        oneShotSelect.className = 'asset-select';
        const yesOption = document.createElement('option');
        yesOption.value = 'true';
        yesOption.textContent = msg('yes', 'Yes');
        const noOption = document.createElement('option');
        noOption.value = 'false';
        noOption.textContent = msg('no', 'No');
        oneShotSelect.appendChild(yesOption);
        oneShotSelect.appendChild(noOption);
        oneShotSelect.value = asset.oneShot === false ? 'false' : 'true';
        oneShotField.appendChild(oneShotLabel);
        oneShotField.appendChild(oneShotSelect);

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

        const animationField = document.createElement('div');
        animationField.className = 'asset-field asset-animation-button-field';
        const animationLabel = document.createElement('label');
        animationLabel.className = 'panel-label';
        animationLabel.textContent = msg('animation', 'Animation');
        const editAnimationButton = document.createElement('button');
        editAnimationButton.type = 'button';
        editAnimationButton.className = 'button-secondary';
        editAnimationButton.textContent = msg('editAnimation', 'Edit Animation');
        const animationNote = document.createElement('span');
        animationNote.className = 'asset-inline-note';
        animationNote.textContent = buildInteractionAnimationSummary(asset);
        animationField.appendChild(animationLabel);
        animationField.appendChild(editAnimationButton);
        animationField.appendChild(animationNote);

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
        row.appendChild(itemKindField);
        row.appendChild(interactionField);
        row.appendChild(oneShotField);
        row.appendChild(collisionField);
        row.appendChild(collisionModeField);
        row.appendChild(maskButtonField);
        row.appendChild(animationField);
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
          if (animationEditorAssetId === asset.id) renderAnimationEditor();
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
          if (animationEditorAssetId === asset.id) renderAnimationEditor();
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
          asset.interactionAnimation = normalizeInteractionAnimation(asset.interactionAnimation, asset.spriteCount || asset.cols * asset.rows || 1, 1);
          renderAssetGrid();
          renderMapGrid();
          if (animationEditorAssetId === asset.id) renderAnimationEditor();
          scheduleSave();
        });
        rowsInput.addEventListener('change', () => {
          asset.rows = clamp(Number.parseInt(rowsInput.value, 10) || 1, 1, 64);
          asset.spriteCount = clamp(asset.spriteCount, 1, asset.cols * asset.rows);
          asset.interactionAnimation = normalizeInteractionAnimation(asset.interactionAnimation, asset.spriteCount || asset.cols * asset.rows || 1, 1);
          renderAssetGrid();
          renderMapGrid();
          if (animationEditorAssetId === asset.id) renderAnimationEditor();
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
          asset.interactionAnimation = normalizeInteractionAnimation(asset.interactionAnimation, asset.spriteCount || asset.cols * asset.rows || 1, 1);
          if (state.selectedSpriteIndex > asset.spriteCount) state.selectedSpriteIndex = asset.spriteCount;
          renderAssetGrid();
          renderMapGrid();
          if (animationEditorAssetId === asset.id) renderAnimationEditor();
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
        itemKindSelect.addEventListener('change', () => {
          asset.itemKind = ['pickup', 'usable', 'quest', 'trigger'].includes(itemKindSelect.value) ? itemKindSelect.value : 'pickup';
          scheduleSave();
        });
        interactionInput.addEventListener('input', () => {
          asset.interactionId = String(interactionInput.value || '').trim();
          scheduleSave();
        });
        oneShotSelect.addEventListener('change', () => {
          asset.oneShot = oneShotSelect.value !== 'false';
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
        editAnimationButton.addEventListener('click', () => {
          animationEditorAssetId = asset.id;
          animationPreviewTick = 0;
          renderAnimationEditor();
          animationModal?.classList.remove('is-hidden');
          animationModal?.setAttribute('aria-hidden', 'false');
          startAnimationPreview();
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
      const propCell = state.inheritedProps.cells[index];
      if (propCell) {
        const propAsset = getInheritedPropAssetByNumber(propCell.assetNumber);
        if (propAsset?.collisionMode === 'mask') {
          return getCollisionMaskForSprite(propAsset, propCell.spriteIndex || 1);
        }
        if (propAsset) {
          return getUniformCollisionMask(propAsset.type === 'blocking' ? 'blocking' : 'passable');
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
      const itemAsset = itemCell ? getItemAssetById(itemCell.assetId) : null;
      if (itemAsset) return itemAsset.playerDepth === 'cover' ? 'cover' : 'front';
      const propCell = state.inheritedProps.cells[index];
      const propAsset = propCell ? getInheritedPropAssetByNumber(propCell.assetNumber) : null;
      return propAsset?.playerDepth === 'cover' ? 'cover' : propAsset ? 'front' : null;
    };

    const renderMapCell = (cell, index) => {
      const width = state.layout.width;
      const x = index % width;
      const y = Math.floor(index / width);
      const baseCell = state.baseMap.map.cells[index];
      const propCell = state.inheritedProps.cells[index];
      const itemCell = state.layout.cells[index];
      const marker = state.baseMap.map.markers[index];
      const baseAsset = baseCell ? getBaseAssetByNumber(baseCell.assetNumber) : null;
      const propAsset = propCell ? getInheritedPropAssetByNumber(propCell.assetNumber) : null;
      const itemAsset = itemCell ? getItemAssetById(itemCell.assetId) : null;
      const baseSpriteIndex = baseCell && baseAsset ? getBaseSpriteIndex(baseCell, baseAsset, x, y) : 1;
      const propSpriteIndex = propCell ? clamp(Number.parseInt(propCell.spriteIndex, 10) || 1, 1, propAsset?.spriteCount || 1) : 1;
      const itemSpriteIndex = itemCell ? clamp(Number.parseInt(itemCell.spriteIndex, 10) || 1, 1, itemAsset?.spriteCount || 1) : 1;
      const baseLayer = baseAsset ? buildSpriteLayer(baseAsset, baseSpriteIndex, state.layout.cellSize) : null;
      const propLayer = propAsset ? buildSpriteLayer(propAsset, propSpriteIndex, state.layout.cellSize) : null;
      const gameItemLayer = itemAsset ? buildSpriteLayer(itemAsset, itemSpriteIndex, state.layout.cellSize) : null;
      const view = state.view;

      cell.classList.toggle('is-empty', !baseCell && !propCell && !itemCell);
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
        const layers = [gameItemLayer, propLayer, baseLayer].filter(Boolean);
        if (layers.length) {
          cell.style.backgroundImage = layers.map((layer) => `url(${layer.imageUrl})`).join(', ');
          cell.style.backgroundSize = layers.map((layer) => layer.size).join(', ');
          cell.style.backgroundPosition = layers.map((layer) => layer.position).join(', ');
          cell.style.backgroundRepeat = layers.map(() => 'no-repeat').join(', ');
        } else if (itemAsset) {
          cell.style.backgroundColor = itemAsset.color || '#2a2a2a';
        } else if (propAsset) {
          cell.style.backgroundColor = propAsset.color || '#2a2a2a';
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
        if (gameItemLayer?.imageUrl) {
          cell.style.backgroundImage = `url(${gameItemLayer.imageUrl})`;
          cell.style.backgroundSize = gameItemLayer.size;
          cell.style.backgroundPosition = gameItemLayer.position;
          cell.style.backgroundRepeat = 'no-repeat';
        } else if (itemAsset) {
          cell.style.backgroundColor = itemAsset.color || '#2a2a2a';
        } else if (propLayer?.imageUrl) {
          cell.style.backgroundImage = `url(${propLayer.imageUrl})`;
          cell.style.backgroundSize = propLayer.size;
          cell.style.backgroundPosition = propLayer.position;
          cell.style.backgroundRepeat = 'no-repeat';
        } else if (propAsset) {
          cell.style.backgroundColor = propAsset.color || '#2a2a2a';
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
        spriteIndex: clamp(state.selectedSpriteIndex, 1, asset.spriteCount || 1),
        instanceId: createId()
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
      updateSyncStatus();
    };

    const updateInteractionControls = () => {
      qsa('[data-item-tool]').forEach((button) => {
        button.classList.toggle('is-active', (button.dataset.itemTool || 'pencil') === state.tool);
      });
      qsa('[data-item-view]').forEach((button) => {
        button.classList.toggle('is-active', (button.dataset.itemView || 'normal') === state.view);
      });
    };

    const buildBasePayload = () => window.EightBitsMapSchema.compactPayload({
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
        id: state.baseMap.map.id || window.EightBitsMapSchema?.createMapId?.() || '',
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
      return window.EightBitsMapSchema.compactPayload({
        ...basePayload,
        editor: 'item-dropper',
        name: state.layout.name || state.baseMap.map.name || '',
        sourceFile: state.baseMap.sourceFile || '',
        syncMeta: {
          ...(state.syncMeta && typeof state.syncMeta === 'object' ? state.syncMeta : {}),
          appliedBaseRev: Math.max(0, Number.parseInt(state.syncMeta?.appliedBaseRev, 10) || 0),
          appliedPropsRev: Math.max(0, Number.parseInt(state.syncMeta?.appliedPropsRev, 10) || 0)
        },
        itemAssets: state.inheritedProps.assets.map((asset) => ({
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
          cells: state.inheritedProps.cells.map((cell) => {
            if (!cell) return null;
            const asset = getInheritedPropAssetByNumber(cell.assetNumber);
            return {
              assetNumber: cell.assetNumber ?? null,
              spriteIndex: cell.spriteIndex ?? 1,
              collision: asset?.type === 'passable' ? 'passable' : 'blocking',
              collisionMode: asset?.collisionMode === 'mask' ? 'mask' : 'simple',
              playerDepth: asset?.playerDepth === 'cover' ? 'cover' : 'front'
            };
          })
        },
        gameItemAssets: state.assets.map((asset) => ({
          name: asset.name,
          fileName: asset.fileName,
          assetType: asset.assetType || '',
          itemKind: asset.itemKind || 'pickup',
          interactionId: asset.interactionId || '',
          oneShot: asset.oneShot !== false,
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
          interactionAnimation: normalizeInteractionAnimation(asset.interactionAnimation, asset.cols * asset.rows || asset.spriteCount || 1, 1),
          playerDepth: asset.playerDepth
        })),
        gameItemLayer: {
          name: state.layout.name || '',
          width: state.layout.width,
          height: state.layout.height,
          cellSize: state.layout.cellSize,
          cells: state.layout.cells.map((cell) => {
            if (!cell) return null;
            const asset = getItemAssetById(cell.assetId);
            return {
              instanceId: cell.instanceId || createId(),
              assetNumber: asset?.number ?? null,
              spriteIndex: cell.spriteIndex ?? 1,
              itemKind: asset?.itemKind || 'pickup',
              interactionId: asset?.interactionId || '',
              oneShot: asset?.oneShot !== false,
              collision: asset?.type === 'passable' ? 'passable' : 'blocking',
              collisionMode: asset?.collisionMode === 'mask' ? 'mask' : 'simple',
              playerDepth: asset?.playerDepth === 'cover' ? 'cover' : 'front'
            };
          }),
          effectiveCollision: state.layout.cells.map((_, index) => getEffectiveCollision(index) === 'blocking' ? 'blocking' : 'passable'),
          effectiveCollisionMasks: state.layout.cells.map((_, index) => getEffectiveCollisionMask(index)),
          effectiveDepth: state.layout.cells.map((_, index) => getPlayerDepth(index))
        }
      });
    };

    const normalizeImportedBaseMap = (payload, fileName = '') => {
      payload = window.EightBitsMapSchema.normalizePayload(payload);
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
          id: String(payload?.map?.id || payload?.mapId || window.EightBitsMapSchema?.createMapId?.() || '').trim(),
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
      const { clearItems = true, appliedBaseRev = null, appliedPropsRev = null } = options;
      const previousWidth = state.layout.width;
      const previousHeight = state.layout.height;
      const previousCells = state.layout.cells.map(cloneItemCell);
      const normalized = normalizeImportedBaseMap(payload, fileName);
      const total = normalized.map.width * normalized.map.height;
      const propAssets = Array.isArray(payload?.itemAssets)
        ? payload.itemAssets.map((asset, index) => normalizeItemAsset(asset, index + 1))
        : [];
      const propCells = Array.from({ length: total }, () => null);
      const rawPropCells = Array.isArray(payload?.itemLayer?.cells) ? payload.itemLayer.cells : [];
      for (let i = 0; i < Math.min(rawPropCells.length, total); i += 1) {
        const entry = rawPropCells[i];
        if (!entry || !entry.assetNumber) continue;
        propCells[i] = {
          assetNumber: Number.parseInt(entry.assetNumber, 10) || null,
          spriteIndex: Number.isInteger(entry.spriteIndex) ? entry.spriteIndex : 1
        };
      }
      state.baseMap = normalized;
      state.inheritedProps.assets = propAssets;
      state.inheritedProps.cells = propCells;
      state.layout.width = normalized.map.width;
      state.layout.height = normalized.map.height;
      state.layout.cellSize = normalized.map.cellSize;
      if (clearItems) {
        state.layout.cells = Array.from({ length: state.layout.width * state.layout.height }, () => null);
      } else {
        state.layout.cells = remapLayoutCells(previousCells, previousWidth, previousHeight, state.layout.width, state.layout.height);
      }
      if (Number.isFinite(Number.parseInt(appliedBaseRev, 10))) {
        state.syncMeta.appliedBaseRev = Math.max(0, Number.parseInt(appliedBaseRev, 10) || 0);
      }
      if (Number.isFinite(Number.parseInt(appliedPropsRev, 10))) {
        state.syncMeta.appliedPropsRev = Math.max(0, Number.parseInt(appliedPropsRev, 10) || 0);
      }
      ensureCells();
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
      refreshProjectMapOptions();
      scheduleSave();
    };

    const refreshBaseMap = (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const payload = JSON.parse(String(reader.result || '{}'));
          if (!payload?.map || !Array.isArray(payload?.assets)) return;
          pushHistorySnapshot();
          await applyBaseMapPayload(payload, file.name, { clearItems: false });
        } catch (error) {
          // ignore invalid JSON
        }
      };
      reader.readAsText(file);
    };
    const refreshBaseMapFromProject = async (options = {}) => {
      const { recordHistory = true } = options;
      const payload = projectManager?.getUpstreamPayload('itemDropper', {
        mapId: state.baseMap.map.id || '',
        lookupName: state.baseMap.map.name || state.layout.name || ''
      });
      if (!payload?.map || !Array.isArray(payload?.assets)) return false;
      const versions = getLayerVersions();
      if (recordHistory) pushHistorySnapshot();
      await applyBaseMapPayload(payload, payload?.sourceFile || '', {
        clearItems: false,
        appliedBaseRev: versions.base || 0,
        appliedPropsRev: versions.props || 0
      });
      return true;
    };

    const applyItemPayload = async (payload, fileName = '') => {
      payload = window.EightBitsMapSchema.normalizePayload(payload);
      await applyBaseMapPayload(payload, fileName || payload?.sourceFile || '', { clearItems: true });
      state.syncMeta.appliedBaseRev = Math.max(0, Number.parseInt(payload?.syncMeta?.appliedBaseRev, 10) || state.syncMeta.appliedBaseRev || 0);
      state.syncMeta.appliedPropsRev = Math.max(0, Number.parseInt(payload?.syncMeta?.appliedPropsRev, 10) || state.syncMeta.appliedPropsRev || 0);
      updateSyncStatus();
      state.assets = Array.isArray(payload?.gameItemAssets) ? payload.gameItemAssets.map((asset, index) => normalizeItemAsset(asset, index + 1)) : [];
      normalizeAssetNumbers();
      const assetByNumber = new Map(state.assets.map((asset) => [asset.number, asset.id]));
      const layer = payload?.gameItemLayer || {};
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
          spriteIndex: clamp(Number.parseInt(entry.spriteIndex, 10) || 1, 1, 9999),
          instanceId: entry.instanceId || createId()
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
      refreshProjectMapOptions();
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
          if (payload?.gameItemLayer && Array.isArray(payload?.gameItemAssets) && payload?.map && Array.isArray(payload?.assets)) {
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

    const hasUsableBasePayload = (payload) => {
      if (!payload?.map || !Array.isArray(payload?.assets)) return false;
      const mapId = String(payload?.map?.id || '').trim();
      const mapName = String(payload?.map?.name || payload?.name || '').trim();
      const hasBaseAssets = (payload.assets || []).length > 0;
      const hasBaseCells = Array.isArray(payload?.map?.cells) && payload.map.cells.some(Boolean);
      const hasMarkers = Array.isArray(payload?.map?.markers) && payload.map.markers.some((marker) => (
        marker === 'portal' || marker === 'entry' || marker === 'exit' || marker === 1 || marker === true
      ));
      const hasProps = (Array.isArray(payload?.itemAssets) && payload.itemAssets.length > 0)
        || (Array.isArray(payload?.itemLayer?.cells) && payload.itemLayer.cells.some(Boolean));
      const hasItems = (Array.isArray(payload?.gameItemAssets) && payload.gameItemAssets.length > 0)
        || (Array.isArray(payload?.gameItemLayer?.cells) && payload.gameItemLayer.cells.some(Boolean));
      return Boolean(mapId || mapName || hasBaseAssets || hasBaseCells || hasMarkers || hasProps || hasItems);
    };
    const loadCachedState = async () => {
      if (!window.localStorage) return false;
      try {
        const raw = localStorage.getItem(itemCacheKey);
        if (!raw) return false;
        const payload = JSON.parse(raw);
        if (!hasUsableBasePayload(payload)) return false;
        if (payload?.gameItemLayer && Array.isArray(payload?.gameItemAssets) && payload?.map && Array.isArray(payload?.assets)) {
          await applyItemPayload(payload, payload?.sourceFile || '');
          if (isPayloadOutdatedAgainstUpstream(payload)) {
            await refreshBaseMapFromProject({ recordHistory: false });
          }
          return true;
        }
        if (payload?.map && Array.isArray(payload?.assets)) {
          await applyBaseMapPayload(payload, payload?.sourceFile || '', { clearItems: true });
          const versions = getLayerVersions();
          state.syncMeta.appliedBaseRev = versions.base || 0;
          state.syncMeta.appliedPropsRev = versions.props || 0;
          updateSyncStatus();
          return true;
        }
        return false;
      } catch (error) {
        return false;
      }
    };
    const loadProjectState = async () => {
      const activeDoc = projectManager?.getStageActiveDocument('itemDropper');
      const activePayload = activeDoc?.payload || projectManager?.getStageActiveCache('itemDropper') || null;
      const latestProjectMap = projectManager?.getLatestUnifiedMap?.([currentStageName, upstreamStageName, 'mapCreator']);
      const doc = hasUsableBasePayload(activePayload)
        ? {
          stage: currentStageName,
          docKey: activeDoc?.docKey || '',
          payload: activePayload
        }
        : latestProjectMap;
      const payload = doc?.payload || projectManager?.getUpstreamPayload('itemDropper');
      if (!hasUsableBasePayload(payload)) return false;
      currentProjectDocKey = doc?.stage === currentStageName ? (doc?.docKey || currentProjectDocKey) : currentProjectDocKey;
      currentProjectSelection = doc?.stage && doc?.docKey ? buildProjectOptionValue(doc.stage, doc.docKey) : '';
      if (doc?.stage === currentStageName && doc?.docKey) {
        projectManager?.setStageActiveDocument(currentStageName, doc.docKey);
      }
      if (payload?.gameItemLayer && Array.isArray(payload?.gameItemAssets) && payload?.map && Array.isArray(payload?.assets)) {
        await applyItemPayload(payload, payload?.sourceFile || '');
        if (doc?.stage === currentStageName && isPayloadOutdatedAgainstUpstream(payload)) {
          await refreshBaseMapFromProject({ recordHistory: false });
        }
        return true;
      }
      if (payload?.map && Array.isArray(payload?.assets)) {
        const versions = projectManager?.getMapLayerVersions?.({
          mapId: getPayloadMapId(payload),
          lookupName: getPayloadLookupName(payload)
        }) || { base: 0, props: 0 };
        await applyBaseMapPayload(payload, payload?.sourceFile || '', {
          clearItems: true,
          appliedBaseRev: versions.base || 0,
          appliedPropsRev: versions.props || 0
        });
        return true;
      }
      return false;
    };
    const refreshProjectMapOptions = () => {
      if (!mapSelect || !projectManager) return;
      const docs = getProjectMapOptions();
      const previousValue = mapSelect.value;
      mapSelect.innerHTML = '';
      if (!docs.length) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = '—';
        mapSelect.appendChild(option);
        return;
      }
      docs.forEach((doc) => {
        const option = document.createElement('option');
        option.value = buildProjectOptionValue(doc.stage, doc.docKey);
        option.textContent = doc.label || 'Map';
        const currentMapId = state.baseMap.map.id || '';
        const shouldSelect = (
          option.value === currentProjectSelection
          || (!currentProjectSelection && doc.stage === currentStageName && doc.docKey === currentProjectDocKey)
          || (!currentProjectSelection && currentMapId && getPayloadMapId(doc.payload) === currentMapId)
          || (!currentProjectSelection && option.value === previousValue)
        );
        if (shouldSelect) {
          option.selected = true;
        }
        mapSelect.appendChild(option);
      });
    };
    const loadProjectDocument = async (selectionValue) => {
      if (!projectManager || !selectionValue) return false;
      const { stage, docKey } = parseProjectOptionValue(selectionValue);
      const doc = projectManager.getStageDocumentByKey(stage, docKey);
      if (!doc?.payload) return false;
      currentProjectSelection = selectionValue;
      if (stage === currentStageName) {
        currentProjectDocKey = doc.docKey;
        projectManager.setStageActiveDocument(currentStageName, docKey);
      } else {
        const matchingDoc = (projectManager.listStageDocuments(currentStageName) || []).find((entry) => (
          getPayloadMapId(entry.payload) && getPayloadMapId(entry.payload) === getPayloadMapId(doc.payload)
        ));
        currentProjectDocKey = matchingDoc?.docKey || null;
      }
      if (stage === currentStageName && doc.payload?.gameItemLayer && Array.isArray(doc.payload?.gameItemAssets) && doc.payload?.map && Array.isArray(doc.payload?.assets)) {
        await applyItemPayload(doc.payload, doc.payload?.sourceFile || '');
        if (isPayloadOutdatedAgainstUpstream(doc.payload)) {
          await refreshBaseMapFromProject({ recordHistory: false });
        }
        return true;
      }
      if (doc.payload?.map && Array.isArray(doc.payload?.assets)) {
        const versions = projectManager?.getMapLayerVersions?.({
          mapId: getPayloadMapId(doc.payload),
          lookupName: getPayloadLookupName(doc.payload)
        }) || { base: 0, props: 0 };
        await applyBaseMapPayload(doc.payload, doc.payload?.sourceFile || '', {
          clearItems: true,
          appliedBaseRev: versions.base || 0,
          appliedPropsRev: versions.props || 0
        });
        return true;
      }
      return false;
    };
    const renameCurrentProjectMap = () => {
      const nextName = String(mapNameInput?.value || '').trim();
      if (nextName) {
        state.layout.name = nextName;
      } else if (mapNameInput) {
        mapNameInput.value = state.layout.name || '';
      }
      flushSave();
      projectManager?.triggerReload?.('update-cache');
      updateBaseMapLabel();
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
        const layer = buildSpriteLayer(asset, spriteIndex, 64);
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

    const closeAnimationEditor = () => {
      animationEditorAssetId = null;
      animationPreviewTick = 0;
      if (animationPreviewTimer) {
        window.clearInterval(animationPreviewTimer);
        animationPreviewTimer = null;
      }
      animationModal?.classList.add('is-hidden');
      animationModal?.setAttribute('aria-hidden', 'true');
      renderAssetList();
    };

    const updateAnimationPreview = () => {
      const asset = getAnimationEditorAsset();
      if (!asset || !animationPreviewBox || !animationPreviewFrame || !animationPreviewSequence) return;
      const sequence = buildInteractionAnimationSequence(asset);
      const loopRange = getInteractionAnimationLoopRange(asset, sequence);
      let frameIndex = Math.min(animationPreviewTick, Math.max(0, sequence.length - 1));
      if (loopRange && animationPreviewTick > loopRange.end) {
        const loopLength = loopRange.end - loopRange.start + 1;
        frameIndex = loopRange.start + ((animationPreviewTick - loopRange.start) % loopLength);
      } else if (!loopRange && sequence.length) {
        frameIndex = Math.min(animationPreviewTick, sequence.length - 1);
      }
      const spriteIndex = sequence[frameIndex] || 1;
      const layer = buildSpriteLayer(asset, spriteIndex, 96);
      animationPreviewBox.style.backgroundImage = layer?.imageUrl ? `url(${layer.imageUrl})` : '';
      animationPreviewBox.style.backgroundSize = layer?.size || '';
      animationPreviewBox.style.backgroundPosition = layer?.position || '';
      animationPreviewBox.style.backgroundColor = layer?.imageUrl ? '#0f0f0f' : (asset.color || '#2a2a2a');
      animationPreviewFrame.textContent = `Sprite ${spriteIndex}`;
      const sequenceLabel = buildInteractionAnimationSummary(asset);
      animationPreviewSequence.textContent = sequenceLabel;
    };

    const startAnimationPreview = () => {
      if (animationPreviewTimer) window.clearInterval(animationPreviewTimer);
      updateAnimationPreview();
      animationPreviewTimer = window.setInterval(() => {
        const asset = getAnimationEditorAsset();
        if (!asset || animationModal?.classList.contains('is-hidden')) return;
        animationPreviewTick += 1;
        updateAnimationPreview();
      }, 220);
    };

    const syncAnimationEditorInputs = () => {
      const asset = getAnimationEditorAsset();
      if (!asset) return;
      const animation = getInteractionAnimation(asset);
      if (animationStartInput) animationStartInput.value = animation.startSprite ? String(animation.startSprite) : '';
      if (animationFramesInput) animationFramesInput.value = formatSpriteSequence(animation.animationFrames);
      if (animationEndInput) animationEndInput.value = animation.endSprite ? String(animation.endSprite) : '';
      if (animationLoopEnabled) animationLoopEnabled.value = animation.loop ? 'true' : 'false';
      if (animationLoopFromInput) animationLoopFromInput.value = animation.loopFromSprite ? String(animation.loopFromSprite) : '';
      if (animationLoopToInput) animationLoopToInput.value = animation.loopToSprite ? String(animation.loopToSprite) : '';
    };

    const renderAnimationSpritePicker = () => {
      if (!animationSpriteGrid) return;
      const asset = getAnimationEditorAsset();
      animationSpriteGrid.innerHTML = '';
      if (!asset) return;
      const animation = getInteractionAnimation(asset);
      const selectedFrames = new Set(animation.animationFrames);
      for (let spriteIndex = 1; spriteIndex <= Math.max(1, asset.spriteCount || 1); spriteIndex += 1) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'item-animation-sprite-button';
        button.dataset.spriteIndex = String(spriteIndex);
        button.textContent = String(spriteIndex);
        const layer = buildSpriteLayer(asset, spriteIndex, 42);
        if (layer?.imageUrl) {
          button.style.backgroundImage = `url(${layer.imageUrl})`;
          button.style.backgroundSize = layer.size;
          button.style.backgroundPosition = layer.position;
        }
        const pickerTarget = animationPickerTarget?.value || 'start';
        const isSelected = (
          (pickerTarget === 'start' && animation.startSprite === spriteIndex) ||
          (pickerTarget === 'frames' && selectedFrames.has(spriteIndex)) ||
          (pickerTarget === 'end' && animation.endSprite === spriteIndex) ||
          (pickerTarget === 'loopFrom' && animation.loopFromSprite === spriteIndex) ||
          (pickerTarget === 'loopTo' && animation.loopToSprite === spriteIndex)
        );
        button.classList.toggle('is-selected', isSelected);
        animationSpriteGrid.appendChild(button);
      }
    };

    const renderAnimationEditor = () => {
      const asset = getAnimationEditorAsset();
      if (!asset) return;
      if (animationSubtitle) {
        const assetName = asset.name || asset.fileName || `Item ${asset.number}`;
        animationSubtitle.textContent = assetName;
      }
      syncAnimationEditorInputs();
      renderAnimationSpritePicker();
      updateAnimationPreview();
    };

    const applyAnimationEditorValues = () => {
      const asset = getAnimationEditorAsset();
      if (!asset) return;
      const maxSprites = Math.max(1, asset.spriteCount || asset.cols * asset.rows || 1);
      asset.interactionAnimation = normalizeInteractionAnimation({
        startSprite: animationStartInput?.value,
        animationFrames: parseSpriteSequence(animationFramesInput?.value, maxSprites),
        endSprite: animationEndInput?.value,
        loop: animationLoopEnabled?.value === 'true',
        loopFromSprite: animationLoopFromInput?.value,
        loopToSprite: animationLoopToInput?.value
      }, maxSprites, 1);
      animationPreviewTick = 0;
      renderAnimationEditor();
      scheduleSave();
    };

    const applyAnimationSpriteSelection = (spriteIndex) => {
      const asset = getAnimationEditorAsset();
      if (!asset) return;
      const animation = getInteractionAnimation(asset);
      const pickerTarget = animationPickerTarget?.value || 'start';
      if (pickerTarget === 'frames') {
        const frameSet = new Set(animation.animationFrames);
        if (frameSet.has(spriteIndex)) frameSet.delete(spriteIndex);
        else frameSet.add(spriteIndex);
        animation.animationFrames = Array.from(frameSet).sort((a, b) => a - b);
      } else if (pickerTarget === 'start') {
        animation.startSprite = spriteIndex;
      } else if (pickerTarget === 'end') {
        animation.endSprite = spriteIndex;
      } else if (pickerTarget === 'loopFrom') {
        animation.loopFromSprite = spriteIndex;
      } else if (pickerTarget === 'loopTo') {
        animation.loopToSprite = spriteIndex;
      }
      asset.interactionAnimation = normalizeInteractionAnimation(animation, asset.spriteCount || asset.cols * asset.rows || 1, 1);
      animationPreviewTick = 0;
      renderAnimationEditor();
      scheduleSave();
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
      mapNameInput?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          renameCurrentProjectMap();
        }
      });
      mapUpdateButton?.addEventListener('click', renameCurrentProjectMap);
      mapSelect?.addEventListener('change', () => {
        const docKey = mapSelect.value;
        if (!docKey) return;
        loadProjectDocument(docKey);
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
      projectExportButton?.addEventListener('click', () => {
        projectManager?.downloadBundle(state.layout.name || state.baseMap.map.name || '8bits_project');
      });
      projectImportButton?.addEventListener('click', () => projectImportFile.click());
      projectImportFile.addEventListener('change', async () => {
        const file = projectImportFile.files?.[0];
        if (!file) return;
        try {
          await projectManager?.importBundleFile(file);
          projectImportFile.value = '';
          window.location.reload();
          return;
        } catch (error) {
          // ignore invalid project bundles
        }
        projectImportFile.value = '';
      });
      importButton?.addEventListener('click', () => importFile?.click());
      importFile?.addEventListener('change', () => {
        const file = importFile.files?.[0];
        if (file) importJson(file);
        importFile.value = '';
      });
      refreshBaseMapButton?.addEventListener('click', async () => {
        const refreshed = await refreshBaseMapFromProject();
        if (!refreshed) refreshBaseMapFile?.click();
      });
      refreshBaseMapFile?.addEventListener('change', () => {
        const file = refreshBaseMapFile.files?.[0];
        if (file) refreshBaseMap(file);
        refreshBaseMapFile.value = '';
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
      animationCloseButton?.addEventListener('click', closeAnimationEditor);
      animationModal?.addEventListener('click', (event) => {
        if (event.target === animationModal) closeAnimationEditor();
      });
      animationStartInput?.addEventListener('change', applyAnimationEditorValues);
      animationFramesInput?.addEventListener('change', applyAnimationEditorValues);
      animationEndInput?.addEventListener('change', applyAnimationEditorValues);
      animationLoopEnabled?.addEventListener('change', applyAnimationEditorValues);
      animationLoopFromInput?.addEventListener('change', applyAnimationEditorValues);
      animationLoopToInput?.addEventListener('change', applyAnimationEditorValues);
      animationPickerTarget?.addEventListener('change', renderAnimationSpritePicker);
      animationSpriteGrid?.addEventListener('click', (event) => {
        const target = event.target.closest('.item-animation-sprite-button');
        if (!target) return;
        applyAnimationSpriteSelection(Number.parseInt(target.dataset.spriteIndex, 10) || 1);
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
      if (animationPreviewTimer) {
        window.clearInterval(animationPreviewTimer);
        animationPreviewTimer = null;
      }
      endHistoryBatch();
    });
    window.addEventListener('focus', () => {
      if (animationEditorAssetId && animationModal && !animationModal.classList.contains('is-hidden')) {
        startAnimationPreview();
      }
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        cacheModal?.classList.add('is-hidden');
        cacheModal?.setAttribute('aria-hidden', 'true');
        closeMaskEditor();
        closeAnimationEditor();
      }
    });

    document.addEventListener('languagechange', () => {
      updateBaseMapLabel();
      renderPublishStatus();
      renderAssetList();
      renderAssetGrid();
      renderMaskEditor();
      renderAnimationEditor();
      if (projectManager) {
        const labels = projectManager.getLabels();
        projectExportButton.textContent = labels.exportProject;
        projectImportButton.textContent = labels.importProject;
      }
    });
    window.addEventListener('8bits-project-updated', () => {
      refreshProjectMapOptions();
      updateSyncStatus();
    });

    bindGrid();
    bindControls();
    ensureCells();
    renderAssetList();
    renderAssetGrid();
    renderMapGrid();
    renderPublishStatus();
    refreshProjectMapOptions();
    updateBaseMapLabel();
    updateInteractionControls();
    updateUndoRedoButtons();

    loadCachedState().then(async (loaded) => {
      const resolved = loaded || await loadProjectState();
      renderAssetList();
      renderAssetGrid();
      renderMapGrid();
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
