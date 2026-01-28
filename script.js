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
      'workspace.meta.grid': 'Grid',
      'workspace.meta.preview': 'Preview',
      'workspace.meta.previewValue': 'Tiling enabled',
      'panel.tools': 'Tools',
      'tool.pencil': 'Pencil',
      'tool.eraser': 'Eraser',
      'tool.eyedropper': 'Eyedropper',
      'tool.fill': 'Fill Bucket',
      'panel.activeTool': 'Active Tool',
      'panel.canvas': 'Pixel Canvas',
      'panel.canvasSubtitle': 'Base grid 16x16. Each pixel is 10px.',
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
      'workspace.meta.grid': 'Grille',
      'workspace.meta.preview': 'Aperçu',
      'workspace.meta.previewValue': 'Répétition activée',
      'panel.tools': 'Outils',
      'tool.pencil': 'Crayon',
      'tool.eraser': 'Gomme',
      'tool.eyedropper': 'Pipette',
      'tool.fill': 'Pot de remplissage',
      'panel.activeTool': 'Outil actif',
      'panel.canvas': 'Canvas pixel',
      'panel.canvasSubtitle': 'Grille de base 16x16. Chaque pixel fait 10px.',
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

  const buildPixelCanvas = () => {
    const canvas = document.getElementById('pixel-canvas');
    if (!canvas) return;

    const gridSize = 16;
    for (let row = 0; row < gridSize; row += 1) {
      for (let col = 0; col < gridSize; col += 1) {
        const cell = document.createElement('div');
        cell.className = 'pixel-cell';
        if ((row + col) % 2 === 0) {
          cell.classList.add('is-checker-light');
        }
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
      '#006d9c',
      '#0094ae',
      '#00b78f',
      '#78cf4e',
      '#ffd500',
      '#f2f2f2',
      '#b4b4b4',
      '#7a7a7a',
      '#3b3b3b',
      '#151515'
    ];

    paletteColors.forEach((color, index) => {
      const swatch = document.createElement('button');
      swatch.type = 'button';
      swatch.className = 'palette-color-swatch';
      swatch.style.background = color;
      swatch.dataset.color = color;
      const labelText = translations[currentLanguage]?.['palette.selectColor'] ?? 'Select color';
      swatch.setAttribute('aria-label', `${labelText} ${color}`);
      if (index === 4) {
        swatch.classList.add('is-active');
        activeChip.style.background = color;
      }
      swatch.addEventListener('click', () => {
        const activeSwatch = swatchContainer.querySelector('.is-active');
        if (activeSwatch) {
          activeSwatch.classList.remove('is-active');
        }
        swatch.classList.add('is-active');
        activeChip.style.background = color;
      });
      swatchContainer.appendChild(swatch);
    });
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

    document.querySelectorAll('.palette-color-swatch').forEach((swatch) => {
      const labelText = dictionary['palette.selectColor'] || 'Select color';
      const color = swatch.dataset.color || '';
      swatch.setAttribute('aria-label', `${labelText} ${color}`.trim());
    });

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
    bindLanguageToggle();
    const storedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    applyTranslations(storedLanguage);
  });
})();
