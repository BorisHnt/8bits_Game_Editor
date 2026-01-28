(() => {
  const translations = {
    en: {
      'title.home': '8bits Game Editor — Creative Lab for Pixel Makers',
      'title.graphic': '8bits Game Editor — Graphic Assets Design',
      'nav.home': 'Home',
      'nav.graphic': 'Graphic Assets Design',
      'hero.kicker': 'Experimental Studio / Creative Workshop',
      'hero.subtitle': 'A professional digital workshop for pixel makers, indie developers, and sound architects.',
      'section.toolchain.title': 'Toolchain',
      'section.toolchain.subtitle': 'A modular platform built for 8-bit visual systems. Precise, expandable, and studio-ready.',
      'module.pixel.title': 'Pixel Editor',
      'module.pixel.body': 'Build sprites and tiles on a true 16x16 grid with controlled zoom, clean outlines, and instant previews.',
      'module.pixel.tag': 'Core Editor',
      'module.palette.title': 'Palette Engine',
      'module.palette.body': 'Limited but powerful palettes. Fast swaps, active color focus, and export-ready color sheets.',
      'module.palette.tag': 'Color Lab',
      'module.tile.title': 'Tile Intelligence',
      'module.tile.body': 'See how your textures repeat in real time. Build floors, walls, and world layers with clarity.',
      'module.tile.tag': 'Preview Grid',
      'module.future.title': 'Future Labs',
      'module.future.body': 'Architecture prepared for new tools: animation frames, lighting passes, procedural brushes.',
      'module.future.tag': 'In Progress',
      'section.philosophy.title': 'Workshop Philosophy',
      'section.philosophy.subtitle': 'Professional, playful, controlled. The lab is designed for focus and experimentation.',
      'philosophy.experimental.title': 'Experimental, Not Chaotic',
      'philosophy.experimental.body': 'Every interaction is intentional, with soft motion, clean states, and minimal UI noise.',
      'philosophy.studio.title': 'A Studio, Not a Landing Page',
      'philosophy.studio.body': 'We keep marketing away from the bench. Tools, grids, and production language are the center.',
      'philosophy.bilingual.title': 'Bilingual by Design',
      'philosophy.bilingual.body': 'Two voices, one lab. English and French coexist across the platform, tuned for global teams.',
      'callout.title': 'Next Surface: Graphic Assets Design',
      'callout.text': 'Open the editor to build sprite systems, refine tile loops, and export ready PNGs.',
      'callout.button': 'Open Graphic Assets Design',
      'footer.main': '8bits Game Editor — Creative Lab for Indie Makers',
      'footer.note': 'Prototype responsibly.',
      'workspace.title': 'Graphic Assets Design',
      'workspace.subtitle': 'Pixel editor workspace for sprites, tiles, and texture systems.',
      'panel.tools': 'Tools',
      'tool.pencil': 'Pencil',
      'tool.eraser': 'Eraser',
      'tool.eyedropper': 'Eyedropper',
      'tool.fill': 'Fill Bucket',
      'panel.activeTool': 'Active Tool',
      'panel.canvas': 'Pixel Canvas',
      'panel.canvasSubtitle': 'Adjustable grid. Pixel size follows zoom.',
      'panel.grid': 'Grid',
      'panel.gridApply': 'Apply',
      'panel.zoom': 'Zoom',
      'panel.palette': 'Palette',
      'panel.paletteSubtitle': 'Predefined pixel-art colors.',
      'panel.activeColor': 'Active',
      'panel.export': 'Export',
      'panel.exportSubtitle': 'Ready for PNG output. Transparent background preserved.',
      'panel.exportButton': 'Export PNG',
      'panel.preview': 'Tile Preview',
      'panel.previewSubtitle': 'See repetition at scale.',
      'panel.previewMode': 'Mode',
      'panel.previewModeValue': 'Walls / Floors / Continuous',
      'palette.selectColor': 'Select color'
    },
    fr: {
      'title.home': "8bits Game Editor — Laboratoire créatif pour makers indés",
      'title.graphic': "8bits Game Editor — Design d'assets graphiques",
      'nav.home': 'Accueil',
      'nav.graphic': "Design d'assets graphiques",
      'hero.kicker': 'Atelier expérimental / Studio de création',
      'hero.subtitle': 'Un atelier numérique professionnel pour pixel artists, développeurs indés et designers sonores.',
      'section.toolchain.title': 'Chaîne de production',
      'section.toolchain.subtitle': 'Une plateforme modulaire pensée pour les systèmes visuels 8 bits. Précise, extensible, prête pour le studio.',
      'module.pixel.title': 'Éditeur pixel',
      'module.pixel.body': 'Crée des sprites et des tiles sur une vraie grille 16x16 avec zoom contrôlé, contours nets et prévisualisation instantanée.',
      'module.pixel.tag': 'Éditeur central',
      'module.palette.title': 'Moteur de palette',
      'module.palette.body': 'Palettes limitées mais puissantes. Changements rapides, focus sur la couleur active, palettes prêtes à exporter.',
      'module.palette.tag': 'Laboratoire couleur',
      'module.tile.title': 'Intelligence de tiling',
      'module.tile.body': 'Visualise la répétition en temps réel. Construis sols, murs et couches de monde avec clarté.',
      'module.tile.tag': 'Grille de prévisualisation',
      'module.future.title': 'Futurs laboratoires',
      'module.future.body': "Architecture prête pour de nouveaux outils : images d'animation, passes de lumière, brosses procédurales.",
      'module.future.tag': 'En cours',
      'section.philosophy.title': "Philosophie de l'atelier",
      'section.philosophy.subtitle': "Professionnel, ludique, maîtrisé. Le labo est conçu pour la concentration et l'expérimentation.",
      'philosophy.experimental.title': 'Expérimental, pas chaotique',
      'philosophy.experimental.body': 'Chaque interaction est intentionnelle, avec des mouvements doux, des états nets et un minimum de bruit UI.',
      'philosophy.studio.title': 'Un studio, pas une landing page',
      'philosophy.studio.body': "On laisse le marketing hors de l'établi. Outils, grilles, langage de production au centre.",
      'philosophy.bilingual.title': 'Bilingue par design',
      'philosophy.bilingual.body': 'Deux voix, un seul labo. Anglais et français cohabitent sur la plateforme, pensée pour les équipes globales.',
      'callout.title': "Prochaine surface : Design d'assets graphiques",
      'callout.text': "Ouvre l'éditeur pour construire des systèmes de sprites, affiner les boucles de tiles et exporter des PNG prêts.",
      'callout.button': "Ouvrir Design d'assets graphiques",
      'footer.main': "8bits Game Editor — Laboratoire créatif pour makers indés",
      'footer.note': 'Prototyper avec soin.',
      'workspace.title': "Design d'assets graphiques",
      'workspace.subtitle': "Espace d'édition pixel pour sprites, tiles et systèmes de textures.",
      'panel.tools': 'Outils',
      'tool.pencil': 'Crayon',
      'tool.eraser': 'Gomme',
      'tool.eyedropper': 'Pipette',
      'tool.fill': 'Pot de remplissage',
      'panel.activeTool': 'Outil actif',
      'panel.canvas': 'Canvas pixel',
      'panel.canvasSubtitle': "Grille ajustable. La taille suit le zoom.",
      'panel.grid': 'Grille',
      'panel.gridApply': 'Appliquer',
      'panel.zoom': 'Zoom',
      'panel.palette': 'Palette',
      'panel.paletteSubtitle': 'Couleurs pixel-art prédéfinies.',
      'panel.activeColor': 'Actif',
      'panel.export': 'Export',
      'panel.exportSubtitle': "Prêt pour l'export PNG. Transparence préservée.",
      'panel.exportButton': 'Exporter PNG',
      'panel.preview': 'Aperçu de tiling',
      'panel.previewSubtitle': "Voir la répétition à l'échelle.",
      'panel.previewMode': 'Mode',
      'panel.previewModeValue': 'Murs / Sols / Continu',
      'palette.selectColor': 'Sélectionner la couleur'
    }
  };

  let currentLanguage = 'en';
  let gridWidth = 16;
  let gridHeight = 16;
  let pixelData = [];
  let pixelCells = [];
  let activeTool = 'pencil';
  let activeColor = 'rgb(255,255,255)';
  let paletteSwatchMap = new Map();
  let transparentSwatch = null;
  const createHeroAmbient = () => {
    const linesContainer = document.querySelector('.hero-ambient-lines');
    const pixelsContainer = document.getElementById('hero-pixels');

    if (linesContainer) {
      const lineCount = 12;
      for (let i = 0; i < lineCount; i += 1) {
        const line = document.createElement('div');
        line.className = 'scanline';
        line.style.top = `${10 + i * 24}px`;
        line.style.opacity = `${0.04 + (i % 4) * 0.03}`;
        linesContainer.appendChild(line);
      }
    }

    if (pixelsContainer) {
      const pixelCount = 18;
      for (let i = 0; i < pixelCount; i += 1) {
        const pixel = document.createElement('span');
        pixel.className = 'drift-pixel';
        pixel.style.left = `${Math.random() * 100}%`;
        pixel.style.top = `${Math.random() * 100}%`;
        pixel.style.animationDelay = `${Math.random() * 6}s`;
        pixel.style.animationDuration = `${10 + Math.random() * 10}s`;
        pixelsContainer.appendChild(pixel);
      }
    }
  };

  const buildPixelCanvas = (columns = gridWidth, rows = gridHeight) => {
    const canvas = document.getElementById('pixel-canvas');
    if (!canvas) return;

    gridWidth = columns;
    gridHeight = rows;
    document.documentElement.style.setProperty('--grid-columns', gridWidth);
    document.documentElement.style.setProperty('--grid-rows', gridHeight);

    pixelData = Array.from({ length: gridWidth * gridHeight }, () => null);
    pixelCells = [];
    canvas.innerHTML = '';

    for (let row = 0; row < gridHeight; row += 1) {
      for (let col = 0; col < gridWidth; col += 1) {
        const index = row * gridWidth + col;
        const cell = document.createElement('div');
        cell.className = 'pixel-cell';
        cell.dataset.index = String(index);
        cell.dataset.row = String(row);
        cell.dataset.col = String(col);
        if ((row + col) % 2 === 0) {
          cell.classList.add('is-checker-light');
        }
        pixelCells[index] = cell;
        canvas.appendChild(cell);
      }
    }
  };

  const buildTilePreview = () => {
    const preview = document.getElementById('tile-preview');
    if (!preview) return;

    const highlightPalette = ['#006d9c', '#0094ae', '#00b78f', '#78cf4e'];
    for (let i = 0; i < 36; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'tile-preview-cell';
      if (i % 7 === 0 || i % 11 === 0) {
        const color = highlightPalette[i % highlightPalette.length];
        cell.style.background = color;
        cell.style.borderColor = color;
      }
      preview.appendChild(cell);
    }
  };

  const buildPalette = () => {
    const swatchContainer = document.getElementById('palette-swatches');
    const activeChip = document.getElementById('active-color-chip');
    if (!swatchContainer || !activeChip) return;

    const paletteColors = [
      { name: 'Black', value: 'rgb(0,0,0)' },
      { name: 'Dark Gray', value: 'rgb(60,60,60)' },
      { name: 'Gray', value: 'rgb(120,120,120)' },
      { name: 'Medium Gray', value: 'rgb(170,170,170)' },
      { name: 'Light Gray', value: 'rgb(210,210,210)' },
      { name: 'White', value: 'rgb(255,255,255)' },
      { name: 'Deep Red', value: 'rgb(96,0,24)' },
      { name: 'Dark Red', value: 'rgb(165,14,30)' },
      { name: 'Red', value: 'rgb(237,28,36)' },
      { name: 'Light Red', value: 'rgb(250,128,114)' },
      { name: 'Dark Orange', value: 'rgb(228,92,26)' },
      { name: 'Orange', value: 'rgb(255,127,39)' },
      { name: 'Gold', value: 'rgb(246,170,9)' },
      { name: 'Yellow', value: 'rgb(249,221,59)' },
      { name: 'Light Yellow', value: 'rgb(255,250,188)' },
      { name: 'Dark Goldenrod', value: 'rgb(156,132,49)' },
      { name: 'Goldenrod', value: 'rgb(197,173,49)' },
      { name: 'Light Goldenrod', value: 'rgb(232,212,95)' },
      { name: 'Dark Olive', value: 'rgb(74,107,58)' },
      { name: 'Olive', value: 'rgb(90,148,74)' },
      { name: 'Light Olive', value: 'rgb(132,197,115)' },
      { name: 'Dark Green', value: 'rgb(14,185,104)' },
      { name: 'Green', value: 'rgb(19,230,123)' },
      { name: 'Light Green', value: 'rgb(135,255,94)' },
      { name: 'Dark Teal', value: 'rgb(12,129,110)' },
      { name: 'Teal', value: 'rgb(16,174,166)' },
      { name: 'Light Teal', value: 'rgb(19,225,190)' },
      { name: 'Dark Cyan', value: 'rgb(15,121,159)' },
      { name: 'Cyan', value: 'rgb(96,247,242)' },
      { name: 'Light Cyan', value: 'rgb(187,250,242)' },
      { name: 'Dark Blue', value: 'rgb(40,80,158)' },
      { name: 'Blue', value: 'rgb(64,147,228)' },
      { name: 'Light Blue', value: 'rgb(125,199,255)' },
      { name: 'Dark Indigo', value: 'rgb(77,49,184)' },
      { name: 'Indigo', value: 'rgb(107,80,246)' },
      { name: 'Light Indigo', value: 'rgb(153,177,251)' },
      { name: 'Dark Slate Blue', value: 'rgb(74,66,132)' },
      { name: 'Slate Blue', value: 'rgb(122,113,196)' },
      { name: 'Light Slate Blue', value: 'rgb(181,174,241)' },
      { name: 'Dark Purple', value: 'rgb(120,12,153)' },
      { name: 'Purple', value: 'rgb(170,56,185)' },
      { name: 'Light Purple', value: 'rgb(224,159,249)' },
      { name: 'Dark Pink', value: 'rgb(203,0,122)' },
      { name: 'Pink', value: 'rgb(236,31,128)' },
      { name: 'Light Pink', value: 'rgb(243,141,169)' },
      { name: 'Dark Peach', value: 'rgb(155,82,73)' },
      { name: 'Peach', value: 'rgb(209,128,120)' },
      { name: 'Light Peach', value: 'rgb(250,182,164)' },
      { name: 'Dark Brown', value: 'rgb(104,70,52)' },
      { name: 'Brown', value: 'rgb(149,104,42)' },
      { name: 'Light Brown', value: 'rgb(219,164,99)' },
      { name: 'Dark Tan', value: 'rgb(123,99,82)' },
      { name: 'Tan', value: 'rgb(156,132,107)' },
      { name: 'Light Tan', value: 'rgb(214,181,148)' },
      { name: 'Dark Beige', value: 'rgb(209,128,81)' },
      { name: 'Beige', value: 'rgb(248,178,119)' },
      { name: 'Light Beige', value: 'rgb(255,197,165)' },
      { name: 'Dark Stone', value: 'rgb(109,100,63)' },
      { name: 'Stone', value: 'rgb(148,140,107)' },
      { name: 'Light Stone', value: 'rgb(205,197,158)' },
      { name: 'Dark Slate', value: 'rgb(51,57,65)' },
      { name: 'Slate', value: 'rgb(109,117,141)' },
      { name: 'Light Slate', value: 'rgb(179,185,209)' },
      { name: 'Transparent', value: null, transparent: true }
    ];

    paletteSwatchMap = new Map();
    transparentSwatch = null;
    swatchContainer.innerHTML = '';

    paletteColors.forEach((swatchInfo) => {
      const swatch = document.createElement('button');
      swatch.type = 'button';
      swatch.className = 'palette-color-swatch';
      swatch.dataset.label = swatchInfo.name;

      if (swatchInfo.transparent) {
        swatch.classList.add('is-transparent');
        swatch.dataset.transparent = 'true';
        transparentSwatch = swatch;
      } else {
        swatch.style.background = swatchInfo.value;
        swatch.dataset.color = swatchInfo.value;
        paletteSwatchMap.set(swatchInfo.value, swatch);
      }

      swatch.addEventListener('click', () => {
        setActiveColor(swatchInfo.transparent ? null : swatchInfo.value);
      });

      swatchContainer.appendChild(swatch);
    });

    setActiveColor(activeColor);
    updatePaletteAriaLabels();
  };

  const updatePaletteAriaLabels = () => {
    const labelText = translations[currentLanguage]?.['palette.selectColor'] ?? 'Select color';
    document.querySelectorAll('.palette-color-swatch').forEach((swatch) => {
      const label = swatch.dataset.label || swatch.dataset.color || '';
      swatch.setAttribute('aria-label', `${labelText} ${label}`.trim());
    });
  };

  const setActiveColor = (color) => {
    activeColor = color;
    const activeChip = document.getElementById('active-color-chip');
    const activeSwatch = document.querySelector('.palette-color-swatch.is-active');
    if (activeSwatch) {
      activeSwatch.classList.remove('is-active');
    }

    if (color === null) {
      if (transparentSwatch) {
        transparentSwatch.classList.add('is-active');
      }
      if (activeChip) {
        activeChip.classList.add('is-transparent');
        activeChip.style.background = '';
      }
    } else {
      const swatch = paletteSwatchMap.get(color);
      if (swatch) {
        swatch.classList.add('is-active');
      }
      if (activeChip) {
        activeChip.classList.remove('is-transparent');
        activeChip.style.background = color;
      }
    }
  };

  const paintCell = (index, color) => {
    if (index < 0 || index >= pixelData.length) return;
    if (pixelData[index] === color) return;

    pixelData[index] = color;
    const cell = pixelCells[index];
    if (!cell) return;

    if (color === null) {
      cell.style.background = '';
      cell.classList.remove('is-painted');
      cell.removeAttribute('data-color');
    } else {
      cell.style.background = color;
      cell.classList.add('is-painted');
      cell.dataset.color = color;
    }
  };

  const floodFill = (startIndex, newColor) => {
    if (startIndex < 0 || startIndex >= pixelData.length) return;
    const targetColor = pixelData[startIndex];
    if (targetColor === newColor) return;

    const visited = new Uint8Array(pixelData.length);
    const stack = [startIndex];

    while (stack.length) {
      const index = stack.pop();
      if (index < 0 || index >= pixelData.length) continue;
      if (visited[index]) continue;
      if (pixelData[index] !== targetColor) continue;

      visited[index] = 1;
      paintCell(index, newColor);

      const row = Math.floor(index / gridWidth);
      const col = index % gridWidth;

      if (row > 0) stack.push(index - gridWidth);
      if (row < gridHeight - 1) stack.push(index + gridWidth);
      if (col > 0) stack.push(index - 1);
      if (col < gridWidth - 1) stack.push(index + 1);
    }
  };

  const applyToolToCell = (cell, { dragging = false } = {}) => {
    if (!cell) return;
    const index = Number(cell.dataset.index);
    if (Number.isNaN(index)) return;

    if (activeTool === 'pencil') {
      paintCell(index, activeColor);
    } else if (activeTool === 'eraser') {
      paintCell(index, null);
    } else if (activeTool === 'eyedropper' && !dragging) {
      setActiveColor(pixelData[index] ?? null);
    } else if (activeTool === 'fill' && !dragging) {
      floodFill(index, activeColor);
    }
  };

  const getActiveToolLabel = () => {
    const activeButton = document.querySelector('.tool-selector-button.is-active');
    if (!activeButton) return '';
    const label = activeButton.querySelector('.tool-label');
    return label ? label.textContent.trim() : activeButton.textContent.trim();
  };

  const updateActiveToolLabel = () => {
    const activeLabel = document.getElementById('active-tool-label');
    if (!activeLabel) return;
    activeLabel.textContent = getActiveToolLabel();
  };

  const bindToolSelection = () => {
    const toolButtons = document.querySelectorAll('.tool-selector-button');
    if (!toolButtons.length) return;

    toolButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const activeButton = document.querySelector('.tool-selector-button.is-active');
        if (activeButton) {
          activeButton.classList.remove('is-active');
        }
        button.classList.add('is-active');
        activeTool = button.dataset.tool || 'pencil';
        updateActiveToolLabel();
      });
    });
  };

  const bindZoomControl = () => {
    const zoomRange = document.getElementById('zoom-range');
    const zoomValue = document.getElementById('zoom-value');
    if (!zoomRange || !zoomValue) return;

    const updateZoom = () => {
      const size = `${zoomRange.value}px`;
      document.documentElement.style.setProperty('--pixel-size', size);
      zoomValue.textContent = size;
    };

    zoomRange.addEventListener('input', updateZoom);
    updateZoom();
  };

  const bindGridControls = () => {
    const widthInput = document.getElementById('grid-width');
    const heightInput = document.getElementById('grid-height');
    const applyButton = document.getElementById('apply-grid');
    if (!widthInput || !heightInput || !applyButton) return;

    const applyGrid = () => {
      const widthValue = Number.parseInt(widthInput.value, 10);
      const heightValue = Number.parseInt(heightInput.value, 10);
      const nextWidth = Number.isFinite(widthValue) ? Math.min(Math.max(widthValue, 1), 128) : gridWidth;
      const nextHeight = Number.isFinite(heightValue) ? Math.min(Math.max(heightValue, 1), 128) : gridHeight;

      widthInput.value = String(nextWidth);
      heightInput.value = String(nextHeight);
      buildPixelCanvas(nextWidth, nextHeight);
    };

    applyButton.addEventListener('click', applyGrid);
    [widthInput, heightInput].forEach((input) => {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          applyGrid();
        }
      });
    });
  };

  const bindCanvasInteraction = () => {
    const canvas = document.getElementById('pixel-canvas');
    if (!canvas) return;

    let isDrawing = false;

    const handlePointerDown = (event) => {
      const cell = event.target.closest('.pixel-cell');
      if (!cell) return;
      event.preventDefault();
      isDrawing = true;
      canvas.setPointerCapture(event.pointerId);
      applyToolToCell(cell);
    };

    const handlePointerMove = (event) => {
      if (!isDrawing) return;
      if (activeTool !== 'pencil' && activeTool !== 'eraser') return;
      const cell = event.target.closest('.pixel-cell');
      if (!cell) return;
      applyToolToCell(cell, { dragging: true });
    };

    const stopDrawing = (event) => {
      if (!isDrawing) return;
      isDrawing = false;
      try {
        canvas.releasePointerCapture(event.pointerId);
      } catch (error) {
        // Ignore if pointer is already released.
      }
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', stopDrawing);
    canvas.addEventListener('pointerleave', stopDrawing);
  };

  const applyTranslations = (language) => {
    currentLanguage = language;
    document.documentElement.lang = language;

    const dictionary = translations[language] || {};
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    const pageTitleKey = document.body.classList.contains('page-home') ? 'title.home' : 'title.graphic';
    if (dictionary[pageTitleKey]) {
      document.title = dictionary[pageTitleKey];
    }

    document.querySelectorAll('[data-lang-block]').forEach((block) => {
      block.classList.toggle('is-active', block.dataset.langBlock === language);
    });

    document.querySelectorAll('.language-toggle-button').forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    updatePaletteAriaLabels();

    updateActiveToolLabel();
  };

  const bindLanguageToggle = () => {
    const toggleButtons = document.querySelectorAll('.language-toggle-button');
    if (!toggleButtons.length) return;

    toggleButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const language = button.dataset.lang || 'en';
        localStorage.setItem('preferredLanguage', language);
        applyTranslations(language);
      });
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    createHeroAmbient();
    buildPixelCanvas();
    buildTilePreview();
    buildPalette();
    bindToolSelection();
    bindZoomControl();
    bindGridControls();
    bindCanvasInteraction();
    bindLanguageToggle();
    const storedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    applyTranslations(storedLanguage);
  });
})();
