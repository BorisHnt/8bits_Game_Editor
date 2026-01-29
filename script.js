(() => {
  const translations = {
    en: {
      'title.home': '8bits Game Editor — Creative Lab for Pixel Makers',
      'title.graphic': '8bits Game Editor — Graphic Assets Design',
      'title.tiles': '8bits Game Editor — Tiles Designer',
      'title.sprite': '8bits Game Editor — Sprite Designer',
      'title.walls': '8bits Game Editor — Walls Designer',
      'nav.home': 'Home',
      'nav.tiles': 'Tiles Designer',
      'nav.sprite': 'Sprite Designer',
      'nav.walls': 'Walls Designer',
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
      'workspace.titleTiles': 'Tiles Designer',
      'workspace.titleSprite': 'Sprite Designer',
      'workspace.titleWalls': 'Walls Designer',
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
      'panel.exportJson': 'Export JSON',
      'panel.importJson': 'Import JSON',
      'panel.clearCanvas': 'Clear Canvas',
      'panel.exportSingle': 'Single frame',
      'panel.exportSequence': 'Sequence 001-999',
      'panel.exportSheet': 'Spritesheet (single row)',
      'panel.addPalette': 'Add Palette',
      'panel.importPalette': 'Import TXT',
      'panel.exportPalette': 'Export TXT',
      'panel.paletteModalTitle': 'Add Palette',
      'panel.paletteName': 'Palette Name',
      'panel.paletteValues': 'Colors',
      'panel.paletteHint': 'Use spaces between colors. Accepts rgb(x,y,z) or #hex.',
      'panel.save': 'Save Palette',
      'panel.cancel': 'Cancel',
      'panel.preview': 'Preview',
      'panel.previewTilesTitle': 'Tiles Preview',
      'panel.previewSpriteTitle': 'Sprite Preview',
      'panel.previewWallsTitle': 'Walls Preview',
      'panel.previewTiles': 'Tiles',
      'panel.previewSprite': 'Sprite',
      'panel.previewWalls': 'Walls',
      'panel.previewGrid': 'Grid',
      'panel.previewApply': 'Apply',
      'panel.previewOverlay': 'Overlay',
      'panel.previewZoom': 'Zoom',
      'panel.previewBackground': 'Background',
      'panel.previewPlayback': 'Playback',
      'panel.previewPlay': 'Play',
      'panel.previewPause': 'Pause',
      'panel.previewStep': 'Step',
      'panel.previewFps': 'FPS',
      'panel.wallGrid': 'Wall Grid',
      'panel.wallPaint': 'Wall Paint Grid',
      'panel.wallResult': 'Rendered Walls',
      'panel.wallMode': 'Wall Mode',
      'panel.wallMode13': 'Mode x13 (Minimal)',
      'panel.wallMode47': 'Mode x47 (RPG / Advanced)',
      'panel.wallRandom': 'Random Map',
      'panel.wallRandomButton': 'Generate',
      'panel.frames': 'Frames',
      'panel.framesSubtitle': 'Add, reorder, and preview animation frames.',
      'panel.onionSkin': 'Onion Skin',
      'panel.addFrame': 'Add Frame',
      'panel.wallTiles': 'Wall Tiles',
      'panel.wallTilesSubtitle': 'Select a wall segment to edit.',
      'palette.selectColor': 'Select color'
    },
    fr: {
      'title.home': "8bits Game Editor — Laboratoire créatif pour makers indés",
      'title.graphic': "8bits Game Editor — Design d'assets graphiques",
      'title.tiles': "8bits Game Editor — Design de tiles",
      'title.sprite': "8bits Game Editor — Design de sprites",
      'title.walls': "8bits Game Editor — Design de murs",
      'nav.home': 'Accueil',
      'nav.tiles': 'Designer Tiles',
      'nav.sprite': 'Designer Sprite',
      'nav.walls': 'Designer Murs',
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
      'workspace.titleTiles': 'Designer Tiles',
      'workspace.titleSprite': 'Designer Sprite',
      'workspace.titleWalls': 'Designer Murs',
      'workspace.subtitle': "Espace d'édition pixel pour sprites, tiles et systèmes de textures.",
      'panel.tools': 'Outils',
      'tool.pencil': 'Crayon',
      'tool.eraser': 'Gomme',
      'tool.eyedropper': 'Pipette',
      'tool.fill': 'Pot de remplissage',
      'panel.activeTool': 'Outil actif',
      'panel.canvas': 'Canvas pixel',
      'panel.canvasSubtitle': 'Grille ajustable. La taille suit le zoom.',
      'panel.grid': 'Grille',
      'panel.gridApply': 'Appliquer',
      'panel.zoom': 'Zoom',
      'panel.palette': 'Palette',
      'panel.paletteSubtitle': 'Couleurs pixel-art prédéfinies.',
      'panel.activeColor': 'Actif',
      'panel.export': 'Export',
      'panel.exportSubtitle': "Prêt pour l'export PNG. Transparence préservée.",
      'panel.exportButton': 'Exporter PNG',
      'panel.exportJson': 'Exporter JSON',
      'panel.importJson': 'Importer JSON',
      'panel.clearCanvas': 'Effacer le canvas',
      'panel.exportSingle': 'Une frame',
      'panel.exportSequence': 'Sequence 001-999',
      'panel.exportSheet': 'Spritesheet (ligne unique)',
      'panel.addPalette': 'Ajouter une palette',
      'panel.importPalette': 'Importer TXT',
      'panel.exportPalette': 'Exporter TXT',
      'panel.paletteModalTitle': 'Ajouter une palette',
      'panel.paletteName': 'Nom de palette',
      'panel.paletteValues': 'Couleurs',
      'panel.paletteHint': 'Utiliser des espaces. Accepte rgb(x,y,z) ou #hex.',
      'panel.save': 'Enregistrer',
      'panel.cancel': 'Annuler',
      'panel.preview': 'Aperçu',
      'panel.previewTilesTitle': 'Aperçu Tiles',
      'panel.previewSpriteTitle': 'Aperçu Sprite',
      'panel.previewWallsTitle': 'Aperçu Murs',
      'panel.previewTiles': 'Tiles',
      'panel.previewSprite': 'Sprite',
      'panel.previewWalls': 'Murs',
      'panel.previewGrid': 'Grille',
      'panel.previewApply': 'Appliquer',
      'panel.previewOverlay': 'Overlay',
      'panel.previewZoom': 'Zoom',
      'panel.previewBackground': 'Fond',
      'panel.previewPlayback': 'Lecture',
      'panel.previewPlay': 'Lecture',
      'panel.previewPause': 'Pause',
      'panel.previewStep': 'Step',
      'panel.previewFps': 'FPS',
      'panel.wallGrid': 'Grille murs',
      'panel.wallPaint': 'Grille de peinture',
      'panel.wallResult': 'Rendu des murs',
      'panel.wallMode': 'Mode de mur',
      'panel.wallMode13': 'Mode x13 (Minimal)',
      'panel.wallMode47': 'Mode x47 (RPG / Avancé)',
      'panel.wallRandom': 'Carte aléatoire',
      'panel.wallRandomButton': 'Générer',
      'panel.frames': 'Frames',
      'panel.framesSubtitle': 'Ajouter, réordonner, prévisualiser les frames.',
      'panel.onionSkin': 'Onion Skin',
      'panel.addFrame': 'Ajouter',
      'panel.wallTiles': 'Tiles de mur',
      'panel.wallTilesSubtitle': 'Sélectionner un segment à éditer.',
      'palette.selectColor': 'Sélectionner la couleur'
    }
  };

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const createId = () => `id-${Math.random().toString(36).slice(2, 9)}`;

  let currentLanguage = 'en';
  let pixelCells = [];
  let activeTool = 'pencil';
  let activeColor = 'rgb(255,255,255)';
  let paletteSwatchMap = new Map();
  let transparentSwatch = null;
  let palettes = [];
  let activePaletteIndex = 0;
  let spriteTimerId = null;
  let isCtrlDrawing = false;
  let copiedFramePixels = null;

  const state = {
    grid: {
      width: 16,
      height: 16,
      pixelSize: 10
    },
    frames: [],
    activeFrameIndex: 0,
    wallTiles: [],
    activeWallTileIndex: 0,
    wallMode: 'x13',
    wallLayout: {
      width: 10,
      height: 10,
      cells: []
    },
    preview: {
      mode: 'tiles',
      tile: {
        cols: 10,
        rows: 10,
        zoom: 3,
        showGrid: true,
        background: '#050505'
      },
      sprite: {
        fps: 6,
        zoom: 3,
        playing: true,
        currentFrame: 0
      },
      walls: {
        cols: 10,
        rows: 10,
        zoom: 2,
        showGrid: true
      }
    },
    onionSkin: false,
    onionFrameIndex: null,
    onionSelecting: false
  };

  const wallTileSets = {
    x13: [
      { id: 'center', label: 'Center' },
      { id: 'edge-top', label: 'Edge Top' },
      { id: 'edge-bottom', label: 'Edge Bottom' },
      { id: 'edge-left', label: 'Edge Left' },
      { id: 'edge-right', label: 'Edge Right' },
      { id: 'corner-out-top-left', label: 'Corner Top Left' },
      { id: 'corner-out-top-right', label: 'Corner Top Right' },
      { id: 'corner-out-bottom-left', label: 'Corner Bottom Left' },
      { id: 'corner-out-bottom-right', label: 'Corner Bottom Right' },
      { id: 'corner-in-top-left', label: 'Inner Corner Top Left' },
      { id: 'corner-in-top-right', label: 'Inner Corner Top Right' },
      { id: 'corner-in-bottom-left', label: 'Inner Corner Bottom Left' },
      { id: 'corner-in-bottom-right', label: 'Inner Corner Bottom Right' }
    ],
    x47: [
      { id: 'center', label: 'Center' },
      { id: 'edge-top', label: 'Edge Top' },
      { id: 'edge-bottom', label: 'Edge Bottom' },
      { id: 'edge-left', label: 'Edge Left' },
      { id: 'edge-right', label: 'Edge Right' },
      { id: 'corner-out-top-left', label: 'Corner Top Left' },
      { id: 'corner-out-top-right', label: 'Corner Top Right' },
      { id: 'corner-out-bottom-left', label: 'Corner Bottom Left' },
      { id: 'corner-out-bottom-right', label: 'Corner Bottom Right' },
      { id: 'corner-in-top-left', label: 'Inner Corner Top Left' },
      { id: 'corner-in-top-right', label: 'Inner Corner Top Right' },
      { id: 'corner-in-bottom-left', label: 'Inner Corner Bottom Left' },
      { id: 'corner-in-bottom-right', label: 'Inner Corner Bottom Right' },
      { id: 'cap-top', label: 'End Top' },
      { id: 'cap-bottom', label: 'End Bottom' },
      { id: 'cap-left', label: 'End Left' },
      { id: 'cap-right', label: 'End Right' },
      { id: 't-open-top', label: 'T Open Top' },
      { id: 't-open-bottom', label: 'T Open Bottom' },
      { id: 't-open-left', label: 'T Open Left' },
      { id: 't-open-right', label: 'T Open Right' },
      { id: 'cross', label: 'Cross +' },
      { id: 'isolated', label: 'Isolated' },
      { id: 'column-vertical', label: 'Column Vertical' },
      { id: 'column-horizontal', label: 'Column Horizontal' },
      { id: 'corridor-vertical', label: 'Corridor Vertical' },
      { id: 'corridor-horizontal', label: 'Corridor Horizontal' },
      { id: 'hole-center', label: 'Hole Center' },
      { id: 'hole-edge-top', label: 'Hole Edge Top' },
      { id: 'hole-edge-bottom', label: 'Hole Edge Bottom' },
      { id: 'hole-edge-left', label: 'Hole Edge Left' },
      { id: 'hole-edge-right', label: 'Hole Edge Right' },
      { id: 'hole-corner-top-left', label: 'Hole Corner Top Left' },
      { id: 'hole-corner-top-right', label: 'Hole Corner Top Right' },
      { id: 'hole-corner-bottom-left', label: 'Hole Corner Bottom Left' },
      { id: 'hole-corner-bottom-right', label: 'Hole Corner Bottom Right' },
      { id: 'double-edge-top', label: 'Double Edge Top' },
      { id: 'double-edge-bottom', label: 'Double Edge Bottom' },
      { id: 'double-edge-left', label: 'Double Edge Left' },
      { id: 'double-edge-right', label: 'Double Edge Right' },
      { id: 'mixed-corner-top-left', label: 'Mixed Corner Top Left' },
      { id: 'mixed-corner-top-right', label: 'Mixed Corner Top Right' },
      { id: 'mixed-corner-bottom-left', label: 'Mixed Corner Bottom Left' },
      { id: 'mixed-corner-bottom-right', label: 'Mixed Corner Bottom Right' },
      { id: 'separator-horizontal', label: 'Separator Horizontal' },
      { id: 'separator-vertical', label: 'Separator Vertical' },
      { id: 'center-alt', label: 'Center Alt' }
    ]
  };

  const getWallTileDefinitions = () => wallTileSets[state.wallMode] || wallTileSets.x13;

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

  const materialPaletteFamilies = [
    { name: 'Red', values: ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c'] },
    { name: 'Pink', values: ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f'] },
    { name: 'Purple', values: ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c'] },
    { name: 'Deep Purple', values: ['#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92'] },
    { name: 'Indigo', values: ['#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e'] },
    { name: 'Blue', values: ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1'] },
    { name: 'Light Blue', values: ['#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b'] },
    { name: 'Cyan', values: ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064'] },
    { name: 'Teal', values: ['#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40'] },
    { name: 'Green', values: ['#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20'] },
    { name: 'Light Green', values: ['#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e'] },
    { name: 'Lime', values: ['#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717'] },
    { name: 'Yellow', values: ['#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17'] },
    { name: 'Amber', values: ['#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00'] },
    { name: 'Orange', values: ['#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100'] },
    { name: 'Deep Orange', values: ['#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c'] },
    { name: 'Brown', values: ['#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723'] },
    { name: 'Grey', values: ['#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'] },
    { name: 'Blue Grey', values: ['#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238'] }
  ];

  const buildMaterialPalette = () => {
    const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
    const columns = [];
    materialPaletteFamilies.forEach((family) => {
      family.values.forEach((value, index) => {
        columns.push({ label: `${family.name} ${shades[index]}`, value });
      });
    });
    columns.push({ label: 'Black', value: '#000000' });
    columns.push({ label: 'White', value: '#ffffff' });
    return columns;
  };

  const materialPalette = buildMaterialPalette();

  const createEmptyPixels = (width, height) => Array.from({ length: width * height }, () => null);

  const normalizeColor = (value) => value.replace(/\s+/g, '').toLowerCase();

  const parseColorToken = (token) => {
    const trimmed = token.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith('#')) {
      const hex = trimmed.slice(1);
      if (![3, 6].includes(hex.length)) return null;
      return `#${hex}`.toLowerCase();
    }
    const rgbMatch = trimmed.match(/^rgb\\((\\d{1,3}),(\\d{1,3}),(\\d{1,3})\\)$/i);
    if (rgbMatch) {
      const parts = rgbMatch.slice(1).map((value) => clamp(Number.parseInt(value, 10), 0, 255));
      return `rgb(${parts[0]},${parts[1]},${parts[2]})`;
    }
    return null;
  };

  const parsePaletteInput = (input) => {
    const tokens = input.split(/\\s+/).filter(Boolean);
    const colors = [];
    tokens.forEach((token) => {
      const parsed = parseColorToken(token);
      if (parsed) colors.push(parsed);
    });
    return colors;
  };

  const resizePixelBuffer = (pixels, oldWidth, oldHeight, newWidth, newHeight) => {
    const resized = createEmptyPixels(newWidth, newHeight);
    const copyWidth = Math.min(oldWidth, newWidth);
    const copyHeight = Math.min(oldHeight, newHeight);
    for (let row = 0; row < copyHeight; row += 1) {
      for (let col = 0; col < copyWidth; col += 1) {
        resized[row * newWidth + col] = pixels[row * oldWidth + col];
      }
    }
    return resized;
  };

  function setWallMode(mode, { preserve = true } = {}) {
    const nextMode = mode === 'x47' ? 'x47' : 'x13';
    if (state.wallMode === nextMode && preserve) return;
    state.wallMode = nextMode;

    const definitions = getWallTileDefinitions();
    const existing = new Map(state.wallTiles.map((tile) => [tile.id, tile]));
    state.wallTiles = definitions.map((definition) => {
      const source = preserve ? existing.get(definition.id) : null;
      const pixels = source?.pixels
        ? resizePixelBuffer(source.pixels, state.grid.width, state.grid.height, state.grid.width, state.grid.height)
        : createEmptyPixels(state.grid.width, state.grid.height);
      return {
        id: definition.id,
        label: definition.label,
        pixels
      };
    });
    state.activeWallTileIndex = 0;
  }

  function generateWallLayout(mode, cols, rows) {
    const total = cols * rows;
    let cells = Array.from({ length: total }, () => 0);

    const fillRect = (startX, startY, width, height, value) => {
      for (let y = startY; y < startY + height; y += 1) {
        for (let x = startX; x < startX + width; x += 1) {
          if (x < 0 || y < 0 || x >= cols || y >= rows) continue;
          cells[y * cols + x] = value;
        }
      }
    };

    if (mode === 'x13') {
      if (cols >= 3 && rows >= 3) {
        fillRect(0, 0, cols, 1, 1);
        fillRect(0, rows - 1, cols, 1, 1);
        fillRect(0, 0, 1, rows, 1);
        fillRect(cols - 1, 0, 1, rows, 1);
      }

      const blockCount = Math.max(2, Math.floor(total / 55));
      const maxBlockWidth = Math.max(3, Math.min(6, cols - 4));
      const maxBlockHeight = Math.max(3, Math.min(6, rows - 4));
      const innerMinX = 2;
      const innerMinY = 2;
      const innerMaxX = cols - 3;
      const innerMaxY = rows - 3;

      const canPlace = (startX, startY, width, height) => {
        for (let y = startY; y < startY + height; y += 1) {
          for (let x = startX; x < startX + width; x += 1) {
            if (cells[y * cols + x] === 1) return false;
          }
        }
        return true;
      };

      if (innerMaxX - innerMinX + 1 >= 3 && innerMaxY - innerMinY + 1 >= 3) {
        for (let i = 0; i < blockCount; i += 1) {
          const blockWidth = 3 + Math.floor(Math.random() * Math.max(1, maxBlockWidth - 2));
          const blockHeight = 3 + Math.floor(Math.random() * Math.max(1, maxBlockHeight - 2));
          let attempts = 18;
          while (attempts > 0) {
            const startX = innerMinX + Math.floor(Math.random() * Math.max(1, innerMaxX - innerMinX - blockWidth + 2));
            const startY = innerMinY + Math.floor(Math.random() * Math.max(1, innerMaxY - innerMinY - blockHeight + 2));
            if (canPlace(startX, startY, blockWidth, blockHeight)) {
              fillRect(startX, startY, blockWidth, blockHeight, 1);
              break;
            }
            attempts -= 1;
          }
        }
      }

      const holeCount = Math.max(2, Math.floor(total / 75));
      for (let i = 0; i < holeCount; i += 1) {
        const holeX = 2 + Math.floor(Math.random() * Math.max(1, cols - 4));
        const holeY = 2 + Math.floor(Math.random() * Math.max(1, rows - 4));
        fillRect(holeX, holeY, 2, 2, 0);
      }

      const pruneThinCells = () => {
        const next = cells.slice();
        for (let y = 1; y < rows - 1; y += 1) {
          for (let x = 1; x < cols - 1; x += 1) {
            const index = y * cols + x;
            if (cells[index] !== 1) continue;
            const h = cells[index - 1] === 1 || cells[index + 1] === 1;
            const v = cells[index - cols] === 1 || cells[index + cols] === 1;
            if (!(h && v)) {
              next[index] = 0;
            }
          }
        }
        cells = next;
      };

      pruneThinCells();
      pruneThinCells();

      return cells;
    }

    cells = Array.from({ length: total }, () => (Math.random() > 0.45 ? 1 : 0));

    const countNeighbors = (x, y) => {
      let count = 0;
      for (let dy = -1; dy <= 1; dy += 1) {
        for (let dx = -1; dx <= 1; dx += 1) {
          if (dx === 0 && dy === 0) continue;
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
          if (cells[ny * cols + nx] === 1) count += 1;
        }
      }
      return count;
    };

    const smooth = (iterations) => {
      for (let i = 0; i < iterations; i += 1) {
        cells = cells.map((value, index) => {
          const x = index % cols;
          const y = Math.floor(index / cols);
          const neighbors = countNeighbors(x, y);
          if (neighbors >= 5) return 1;
          if (neighbors <= 2) return 0;
          return value;
        });
      }
    };

    smooth(4);

    cells = cells.map((value, index) => {
      if (!value) return 0;
      const x = index % cols;
      const y = Math.floor(index / cols);
      const neighbors = countNeighbors(x, y);
      if (neighbors >= 7 && Math.random() < 0.08) {
        return 0;
      }
      return value;
    });

    return cells;
  }

  const getDesignerKey = () => document.body.dataset.designer || 'tiles';
  const getCacheKey = () => `8bits-editor:${getDesignerKey()}`;
  let cacheTimer = null;

  const buildCachePayload = () => ({
    version: 1,
    width: state.grid.width,
    height: state.grid.height,
    pixelSize: state.grid.pixelSize,
    wallMode: state.wallMode,
    grid: {
      width: state.grid.width,
      height: state.grid.height,
      pixelSize: state.grid.pixelSize
    },
    preview: state.preview,
    frames: state.frames.map((frame) => ({ id: frame.id, pixels: frame.pixels })),
    activeFrameIndex: state.activeFrameIndex,
    wallTiles: state.wallTiles.map((tile) => ({
      id: tile.id,
      label: tile.label,
      pixels: tile.pixels
    })),
    activeWallTileIndex: state.activeWallTileIndex,
    wallLayout: {
      width: state.wallLayout.width,
      height: state.wallLayout.height,
      cells: state.wallLayout.cells
    },
    exportName: qs('#export-name')?.value || ''
  });

  const saveCache = () => {
    try {
      localStorage.setItem(getCacheKey(), JSON.stringify(buildCachePayload()));
    } catch (error) {
      // Ignore storage errors.
    }
  };

  const scheduleCacheSave = (immediate = false) => {
    if (cacheTimer) {
      window.clearTimeout(cacheTimer);
      cacheTimer = null;
    }
    if (immediate) {
      saveCache();
      return;
    }
    cacheTimer = window.setTimeout(saveCache, 250);
  };

  const loadCachedState = () => {
    try {
      const raw = localStorage.getItem(getCacheKey());
      if (!raw) return false;
      const payload = JSON.parse(raw);
      if (!payload) return false;
      if (!payload.width && payload.grid?.width) {
        payload.width = payload.grid.width;
        payload.height = payload.grid.height;
        payload.pixelSize = payload.grid.pixelSize;
      }
      if (!payload.name && payload.exportName) {
        payload.name = payload.exportName;
      }
      return applyAssetPayload(payload, { fromCache: true });
    } catch (error) {
      return false;
    }
  };

  const initializeState = () => {
    state.frames = [{ id: createId(), pixels: createEmptyPixels(state.grid.width, state.grid.height) }];
    state.activeFrameIndex = 0;
    state.wallTiles = getWallTileDefinitions().map((tile) => ({
      id: tile.id,
      label: tile.label,
      pixels: createEmptyPixels(state.grid.width, state.grid.height)
    }));
    state.activeWallTileIndex = 0;
    state.wallLayout.cells = generateWallLayout(state.wallMode, state.wallLayout.width, state.wallLayout.height);
  };

  const createHeroAmbient = () => {
    const linesContainer = qs('.hero-ambient-lines');
    const pixelsContainer = qs('#hero-pixels');

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

  const setActiveColor = (color) => {
    activeColor = color;
    const activeChip = qs('#active-color-chip');
    const activeSwatch = qs('.palette-color-swatch.is-active');
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

  const updatePaletteAriaLabels = () => {
    const labelText = translations[currentLanguage]?.['palette.selectColor'] ?? 'Select color';
    qsa('.palette-color-swatch').forEach((swatch) => {
      const label = swatch.dataset.label || swatch.dataset.color || '';
      swatch.setAttribute('aria-label', `${labelText} ${label}`.trim());
    });
  };

  const buildPalette = () => {
    const swatchContainer = qs('#palette-swatches');
    if (!swatchContainer) return;

    if (!palettes.length) {
      palettes = [
        {
          name: 'Default 64',
          colors: paletteColors.filter((item) => !item.transparent).map((item) => ({
            value: item.value,
            label: item.name
          })),
          columns: 16,
          flow: 'row'
        },
        {
          name: 'Material 19x10',
          colors: materialPalette,
          columns: 20,
          rows: 10,
          flow: 'column'
        }
      ];
      activePaletteIndex = 0;
    }

    const paletteSelect = qs('#palette-select');
    if (paletteSelect) {
      paletteSelect.innerHTML = '';
      palettes.forEach((palette, index) => {
        const option = document.createElement('option');
        option.value = String(index);
        option.textContent = palette.name;
        if (index === activePaletteIndex) option.selected = true;
        paletteSelect.appendChild(option);
      });
    }

    const selectedPalette = palettes[activePaletteIndex] || palettes[0];
    const paletteColumns = selectedPalette?.columns || 16;
    document.documentElement.style.setProperty('--palette-columns', paletteColumns);
    swatchContainer.style.gridAutoFlow = selectedPalette?.flow || 'row';
    swatchContainer.style.gridTemplateRows = selectedPalette?.rows
      ? `repeat(${selectedPalette.rows}, 32px)`
      : '';

    paletteSwatchMap = new Map();
    transparentSwatch = null;
    swatchContainer.innerHTML = '';

    const entries = (selectedPalette?.colors || [])
      .map((entry) => {
        if (typeof entry === 'string') {
          return { value: entry, label: entry };
        }
        const value = entry.value || entry.color || '';
        return {
          value,
          label: entry.label || entry.name || value
        };
      })
      .filter((entry) => entry.value);

    entries.forEach((entry) => {
      const swatch = document.createElement('button');
      swatch.type = 'button';
      swatch.className = 'palette-color-swatch';
      swatch.dataset.label = entry.label;
      swatch.title = entry.label;
      swatch.style.background = entry.value;
      swatch.dataset.color = entry.value;
      paletteSwatchMap.set(entry.value, swatch);
      swatch.addEventListener('click', () => {
        setActiveColor(entry.value);
      });
      swatchContainer.appendChild(swatch);
    });

    const transparentInfo = paletteColors.find((item) => item.transparent);
    if (transparentInfo) {
      const swatch = document.createElement('button');
      swatch.type = 'button';
      swatch.className = 'palette-color-swatch';
      swatch.dataset.label = transparentInfo.name;
      swatch.title = transparentInfo.name;
      swatch.classList.add('is-transparent');
      swatch.dataset.transparent = 'true';
      transparentSwatch = swatch;
      swatch.addEventListener('click', () => {
        setActiveColor(null);
      });
      swatchContainer.appendChild(swatch);
    }

    setActiveColor(activeColor);
    updatePaletteAriaLabels();
  };

  const updateActiveToolLabel = () => {
    const activeLabel = qs('#active-tool-label');
    const activeButton = qs('.tool-selector-button.is-active');
    if (!activeLabel || !activeButton) return;
    const label = activeButton.querySelector('.tool-label');
    activeLabel.textContent = label ? label.textContent.trim() : activeButton.textContent.trim();
  };

  const setCellColor = (cell, color) => {
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

  const getActivePixels = () => {
    if (state.preview.mode === 'walls') {
      return state.wallTiles[state.activeWallTileIndex]?.pixels;
    }
    return state.frames[state.activeFrameIndex]?.pixels;
  };

  const renderActivePixelGrid = () => {
    const pixels = getActivePixels();
    if (!pixels || pixelCells.length === 0) return;

    const onionFrame = state.preview.mode === 'sprite'
      && state.onionSkin
      && Number.isInteger(state.onionFrameIndex)
      ? state.frames[state.onionFrameIndex]
      : null;

    pixelCells.forEach((cell, index) => {
      const color = pixels[index] ?? null;
      setCellColor(cell, color);
      cell.style.boxShadow = '';
      cell.style.opacity = '';
      const onionColor = onionFrame?.pixels?.[index];
      if (!color && onionColor) {
        cell.style.background = onionColor;
        cell.style.opacity = '0.45';
        cell.style.boxShadow = 'inset 0 0 0 2px var(--color-accent-2)';
      }
    });
  };

  const buildPixelCanvas = () => {
    const canvas = qs('#pixel-canvas');
    if (!canvas) return;

    const { width, height } = state.grid;
    document.documentElement.style.setProperty('--grid-columns', width);
    document.documentElement.style.setProperty('--grid-rows', height);

    pixelCells = [];
    canvas.innerHTML = '';

    for (let row = 0; row < height; row += 1) {
      for (let col = 0; col < width; col += 1) {
        const index = row * width + col;
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

  const paintCell = (index, color) => {
    const pixels = getActivePixels();
    if (!pixels || index < 0 || index >= pixels.length) return;
    if (pixels[index] === color) return;

    pixels[index] = color;
    setCellColor(pixelCells[index], color);
    renderFrameThumbnail(state.activeFrameIndex);
    renderWallTileThumbnail(state.activeWallTileIndex);
    renderPreviews();
    scheduleCacheSave();
  };

  const floodFill = (startIndex, newColor) => {
    const pixels = getActivePixels();
    if (!pixels || startIndex < 0 || startIndex >= pixels.length) return;
    const targetColor = pixels[startIndex];
    if (targetColor === newColor) return;

    const visited = new Uint8Array(pixels.length);
    const stack = [startIndex];
    const { width, height } = state.grid;

    while (stack.length) {
      const index = stack.pop();
      if (index < 0 || index >= pixels.length) continue;
      if (visited[index]) continue;
      if (pixels[index] !== targetColor) continue;

      visited[index] = 1;
      pixels[index] = newColor;
      setCellColor(pixelCells[index], newColor);

      const row = Math.floor(index / width);
      const col = index % width;

      if (row > 0) stack.push(index - width);
      if (row < height - 1) stack.push(index + width);
      if (col > 0) stack.push(index - 1);
      if (col < width - 1) stack.push(index + 1);
    }

    renderFrameThumbnail(state.activeFrameIndex);
    renderWallTileThumbnail(state.activeWallTileIndex);
    renderPreviews();
    scheduleCacheSave();
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
      const pixels = getActivePixels();
      setActiveColor(pixels?.[index] ?? null);
    } else if (activeTool === 'fill' && !dragging) {
      floodFill(index, activeColor);
    }
  };

  const bindCanvasInteraction = () => {
    const canvas = qs('#pixel-canvas');
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
      const cell = event.target.closest('.pixel-cell');
      if (!cell) return;
      const allowDragTool = activeTool === 'pencil' || activeTool === 'eraser';

      if (isDrawing) {
        if (!allowDragTool) return;
        applyToolToCell(cell, { dragging: true });
        return;
      }

      if ((isCtrlDrawing || event.ctrlKey) && allowDragTool) {
        applyToolToCell(cell, { dragging: true });
      }
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

  const bindCtrlDrawing = () => {
    const handleKeyDown = (event) => {
      if (event.key === 'Control') {
        isCtrlDrawing = true;
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'Control') {
        isCtrlDrawing = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', () => {
      isCtrlDrawing = false;
    });
  };

  const bindToolSelection = () => {
    const toolButtons = qsa('.tool-selector-button');
    if (!toolButtons.length) return;

    toolButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const activeButton = qs('.tool-selector-button.is-active');
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
    const zoomRange = qs('#zoom-range');
    const zoomValue = qs('#zoom-value');
    if (!zoomRange || !zoomValue) return;

    const updateZoom = () => {
      const size = `${zoomRange.value}px`;
      state.grid.pixelSize = Number.parseInt(zoomRange.value, 10);
      document.documentElement.style.setProperty('--pixel-size', size);
      zoomValue.textContent = size;
      scheduleCacheSave();
    };

    zoomRange.addEventListener('input', updateZoom);
    updateZoom();
  };

  const bindGridControls = () => {
    const widthInput = qs('#grid-width');
    const heightInput = qs('#grid-height');
    const applyButton = qs('#apply-grid');
    if (!widthInput || !heightInput || !applyButton) return;

    const applyGrid = () => {
      const widthValue = Number.parseInt(widthInput.value, 10);
      const heightValue = Number.parseInt(heightInput.value, 10);
      const nextWidth = clamp(Number.isFinite(widthValue) ? widthValue : state.grid.width, 1, 128);
      const nextHeight = clamp(Number.isFinite(heightValue) ? heightValue : state.grid.height, 1, 128);

      widthInput.value = String(nextWidth);
      heightInput.value = String(nextHeight);

      const oldWidth = state.grid.width;
      const oldHeight = state.grid.height;
      state.grid.width = nextWidth;
      state.grid.height = nextHeight;

      state.frames = state.frames.map((frame) => ({
        ...frame,
        pixels: resizePixelBuffer(frame.pixels, oldWidth, oldHeight, nextWidth, nextHeight)
      }));

      state.wallTiles = state.wallTiles.map((tile) => ({
        ...tile,
        pixels: resizePixelBuffer(tile.pixels, oldWidth, oldHeight, nextWidth, nextHeight)
      }));

      buildPixelCanvas();
      renderActivePixelGrid();
      renderFramesStrip();
      renderWallTilesGrid();
      renderPreviews();
      scheduleCacheSave(true);
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

  const renderFrameThumbnail = (frameIndex) => {
    const frame = state.frames[frameIndex];
    const frameItem = qs(`.frame-item[data-frame-index="${frameIndex}"]`);
    if (!frame || !frameItem) return;
    const canvas = frameItem.querySelector('canvas');
    if (!canvas) return;
    drawPixelsToCanvas(frame.pixels, canvas, state.grid.width, state.grid.height, 1);
  };

  const renderFramesStrip = () => {
    const strip = qs('#frames-strip');
    if (!strip) return;
    strip.innerHTML = '';

    state.frames.forEach((frame, index) => {
      const item = document.createElement('div');
      item.className = 'frame-item';
      item.dataset.frameIndex = String(index);
      if (index === state.activeFrameIndex) {
        item.classList.add('is-active');
      }
      if (state.onionSkin && index === state.onionFrameIndex) {
        item.classList.add('is-onion');
      }

      const canvas = document.createElement('canvas');
      canvas.className = 'frame-thumb';
      canvas.width = state.grid.width;
      canvas.height = state.grid.height;
      item.appendChild(canvas);

      const controls = document.createElement('div');
      controls.className = 'frame-controls';

      const upButton = document.createElement('button');
      upButton.type = 'button';
      upButton.className = 'frame-control-button';
      upButton.textContent = 'Up';
      upButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (index === 0) return;
        const temp = state.frames[index - 1];
        state.frames[index - 1] = state.frames[index];
        state.frames[index] = temp;
        state.activeFrameIndex = index - 1;
        renderFramesStrip();
        renderActivePixelGrid();
        renderPreviews();
        scheduleCacheSave();
      });

      const downButton = document.createElement('button');
      downButton.type = 'button';
      downButton.className = 'frame-control-button';
      downButton.textContent = 'Down';
      downButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (index === state.frames.length - 1) return;
        const temp = state.frames[index + 1];
        state.frames[index + 1] = state.frames[index];
        state.frames[index] = temp;
        state.activeFrameIndex = index + 1;
        renderFramesStrip();
        renderActivePixelGrid();
        renderPreviews();
        scheduleCacheSave();
      });

      const duplicateButton = document.createElement('button');
      duplicateButton.type = 'button';
      duplicateButton.className = 'frame-control-button';
      duplicateButton.textContent = 'Dup';
      duplicateButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const copy = {
          id: createId(),
          pixels: frame.pixels.slice()
        };
        state.frames.splice(index + 1, 0, copy);
        state.activeFrameIndex = index + 1;
        renderFramesStrip();
        renderActivePixelGrid();
        renderPreviews();
        scheduleCacheSave();
      });

      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.className = 'frame-control-button';
      deleteButton.textContent = 'Del';
      deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (state.frames.length === 1) return;
        state.frames.splice(index, 1);
        state.activeFrameIndex = clamp(state.activeFrameIndex, 0, state.frames.length - 1);
        if (state.onionFrameIndex === index) {
          state.onionFrameIndex = null;
        } else if (state.onionFrameIndex > index) {
          state.onionFrameIndex -= 1;
        }
        renderFramesStrip();
        renderActivePixelGrid();
        renderPreviews();
        scheduleCacheSave();
      });

      const copyButton = document.createElement('button');
      copyButton.type = 'button';
      copyButton.className = 'frame-control-button';
      copyButton.textContent = 'Copy';
      copyButton.addEventListener('click', (event) => {
        event.stopPropagation();
        copiedFramePixels = frame.pixels.slice();
      });

      const pasteButton = document.createElement('button');
      pasteButton.type = 'button';
      pasteButton.className = 'frame-control-button';
      pasteButton.textContent = 'Paste';
      pasteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        if (!copiedFramePixels) return;
        frame.pixels = normalizePixels(copiedFramePixels, state.grid.width, state.grid.height);
        renderFrameThumbnail(index);
        if (index === state.activeFrameIndex) {
          renderActivePixelGrid();
          renderPreviews();
        }
        scheduleCacheSave();
      });

      controls.appendChild(upButton);
      controls.appendChild(downButton);
      controls.appendChild(duplicateButton);
      controls.appendChild(deleteButton);
      controls.appendChild(copyButton);
      controls.appendChild(pasteButton);
      item.appendChild(controls);

      item.addEventListener('click', () => {
        if (state.onionSkin && state.onionSelecting) {
          state.onionFrameIndex = index;
          state.onionSelecting = false;
          renderFramesStrip();
          renderActivePixelGrid();
          return;
        }
        state.activeFrameIndex = index;
        state.preview.sprite.currentFrame = index;
        renderFramesStrip();
        renderActivePixelGrid();
        renderPreviews();
        scheduleCacheSave();
      });

      strip.appendChild(item);
      drawPixelsToCanvas(frame.pixels, canvas, state.grid.width, state.grid.height, 1);
    });
  };

  const renderWallTileThumbnail = (tileIndex) => {
    const tile = state.wallTiles[tileIndex];
    const tileItem = qs(`.wall-tile-item[data-tile-index="${tileIndex}"]`);
    if (!tile || !tileItem) return;
    const canvas = tileItem.querySelector('canvas');
    if (!canvas) return;
    drawPixelsToCanvas(tile.pixels, canvas, state.grid.width, state.grid.height, 1);
  };

  const renderWallTilesGrid = () => {
    const grid = qs('#wall-tiles-grid');
    if (!grid) return;
    grid.innerHTML = '';

    state.wallTiles.forEach((tile, index) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'wall-tile-item';
      item.dataset.tileIndex = String(index);
      if (index === state.activeWallTileIndex) {
        item.classList.add('is-active');
      }

      const canvas = document.createElement('canvas');
      canvas.className = 'wall-tile-canvas';
      canvas.width = state.grid.width;
      canvas.height = state.grid.height;

      const label = document.createElement('span');
      label.className = 'wall-tile-label';
      label.textContent = tile.label;

      item.appendChild(canvas);
      item.appendChild(label);

      item.addEventListener('click', () => {
        state.activeWallTileIndex = index;
        renderWallTilesGrid();
        renderActivePixelGrid();
        renderPreviews();
      });

      grid.appendChild(item);
      drawPixelsToCanvas(tile.pixels, canvas, state.grid.width, state.grid.height, 1);
    });
  };

  const bindFramesControls = () => {
    const addButton = qs('#add-frame');
    const onionButton = qs('#toggle-onion');
    if (addButton) {
      addButton.addEventListener('click', () => {
        state.frames.push({ id: createId(), pixels: createEmptyPixels(state.grid.width, state.grid.height) });
        state.activeFrameIndex = state.frames.length - 1;
        state.preview.sprite.currentFrame = state.activeFrameIndex;
        renderFramesStrip();
        renderActivePixelGrid();
        renderPreviews();
        scheduleCacheSave();
      });
    }

    if (onionButton) {
      onionButton.addEventListener('click', () => {
        state.onionSkin = !state.onionSkin;
        state.onionSelecting = state.onionSkin;
        if (!state.onionSkin) {
          state.onionFrameIndex = null;
        }
        onionButton.setAttribute('aria-pressed', String(state.onionSkin));
        onionButton.classList.toggle('is-active', state.onionSkin);
        renderActivePixelGrid();
        renderFramesStrip();
      });
    }
  };

  const setPreviewMode = (mode) => {
    state.preview.mode = mode;
    qsa('.preview-mode-tab').forEach((tab) => {
      const isActive = tab.dataset.previewMode === mode;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });

    qsa('.preview-mode-panel').forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.previewPanel === mode);
    });

    const framesPanel = qs('#frames-panel');
    const wallTilesPanel = qs('#wall-tiles-panel');
    if (framesPanel) {
      framesPanel.classList.toggle('is-hidden', mode !== 'sprite');
    }
    if (wallTilesPanel) {
      wallTilesPanel.classList.toggle('is-hidden', mode !== 'walls');
    }

    if (mode === 'sprite') {
      state.preview.sprite.currentFrame = state.activeFrameIndex;
      startSpritePlayback();
    } else {
      stopSpritePlayback();
    }

    renderActivePixelGrid();
    renderPreviews();
  };

  const bindPreviewModeTabs = () => {
    qsa('.preview-mode-tab').forEach((button) => {
      button.addEventListener('click', () => {
        setPreviewMode(button.dataset.previewMode || 'tiles');
      });
    });
  };

  const bindPreviewControls = () => {
    const tilesApply = qs('#tiles-apply');
    const tilesCols = qs('#tiles-cols');
    const tilesRows = qs('#tiles-rows');
    const tilesGridToggle = qs('#tiles-grid-toggle');
    const tilesZoom = qs('#tiles-zoom');
    const tilesBg = qs('#tiles-bg');

    const applyTilesGrid = () => {
      const cols = clamp(Number.parseInt(tilesCols?.value, 10) || state.preview.tile.cols, 1, 30);
      const rows = clamp(Number.parseInt(tilesRows?.value, 10) || state.preview.tile.rows, 1, 30);
      state.preview.tile.cols = cols;
      state.preview.tile.rows = rows;
      if (tilesCols) tilesCols.value = String(cols);
      if (tilesRows) tilesRows.value = String(rows);
      renderTilesPreview();
    };

    tilesApply?.addEventListener('click', applyTilesGrid);

    tilesCols?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') applyTilesGrid();
    });
    tilesRows?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') applyTilesGrid();
    });

    tilesGridToggle?.addEventListener('change', () => {
      state.preview.tile.showGrid = tilesGridToggle.checked;
      renderTilesPreview();
    });

    tilesZoom?.addEventListener('input', () => {
      state.preview.tile.zoom = Number.parseInt(tilesZoom.value, 10);
      renderTilesPreview();
    });

    tilesBg?.addEventListener('input', () => {
      state.preview.tile.background = tilesBg.value;
      renderTilesPreview();
    });

    const spritePlay = qs('#sprite-play');
    const spritePause = qs('#sprite-pause');
    const spriteStep = qs('#sprite-step');
    const spriteFps = qs('#sprite-fps');
    const spriteZoom = qs('#sprite-zoom');

    spritePlay?.addEventListener('click', () => {
      state.preview.sprite.playing = true;
      startSpritePlayback();
    });

    spritePause?.addEventListener('click', () => {
      state.preview.sprite.playing = false;
      stopSpritePlayback();
      renderSpritePreview();
    });

    spriteStep?.addEventListener('click', () => {
      state.preview.sprite.playing = false;
      stopSpritePlayback();
      stepSpriteFrame();
      renderSpritePreview();
    });

    spriteFps?.addEventListener('change', () => {
      state.preview.sprite.fps = clamp(Number.parseInt(spriteFps.value, 10) || 6, 1, 24);
      spriteFps.value = String(state.preview.sprite.fps);
      if (state.preview.sprite.playing) {
        startSpritePlayback();
      }
    });

    spriteZoom?.addEventListener('input', () => {
      state.preview.sprite.zoom = Number.parseInt(spriteZoom.value, 10);
      renderSpritePreview();
    });

    const wallsApply = qs('#walls-apply');
    const wallsCols = qs('#walls-cols');
    const wallsRows = qs('#walls-rows');
    const wallsGridToggle = qs('#walls-grid-toggle');
    const wallsZoom = qs('#walls-zoom');
    const wallModeSelect = qs('#wall-mode');
    const wallsRandomize = qs('#walls-randomize');

    const applyWallsGrid = () => {
      const cols = clamp(Number.parseInt(wallsCols?.value, 10) || state.wallLayout.width, 2, 30);
      const rows = clamp(Number.parseInt(wallsRows?.value, 10) || state.wallLayout.height, 2, 30);
      resizeWallLayout(cols, rows);
      if (wallsCols) wallsCols.value = String(cols);
      if (wallsRows) wallsRows.value = String(rows);
      renderWallsPreview();
      renderWallPaintGrid();
    };

    wallsApply?.addEventListener('click', applyWallsGrid);

    wallsCols?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') applyWallsGrid();
    });
    wallsRows?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') applyWallsGrid();
    });

    wallsGridToggle?.addEventListener('change', () => {
      state.preview.walls.showGrid = wallsGridToggle.checked;
      renderWallPaintGrid();
    });

    wallsZoom?.addEventListener('input', () => {
      state.preview.walls.zoom = Number.parseInt(wallsZoom.value, 10);
      renderWallPaintGrid();
      renderWallsPreview();
    });

    wallModeSelect?.addEventListener('change', () => {
      const mode = wallModeSelect.value || 'x13';
      setWallMode(mode, { preserve: true });
      state.wallLayout.cells = generateWallLayout(state.wallMode, state.wallLayout.width, state.wallLayout.height);
      renderWallTilesGrid();
      renderActivePixelGrid();
      renderWallPaintGrid();
      renderWallsPreview();
      scheduleCacheSave(true);
    });

    wallsRandomize?.addEventListener('click', () => {
      state.wallLayout.cells = generateWallLayout(state.wallMode, state.wallLayout.width, state.wallLayout.height);
      renderWallPaintGrid();
      renderWallsPreview();
      scheduleCacheSave(true);
    });
  };

  const resizeWallLayout = (cols, rows) => {
    const { width, height, cells } = state.wallLayout;
    const resized = Array.from({ length: cols * rows }, () => 0);
    const copyWidth = Math.min(width, cols);
    const copyHeight = Math.min(height, rows);
    for (let row = 0; row < copyHeight; row += 1) {
      for (let col = 0; col < copyWidth; col += 1) {
        resized[row * cols + col] = cells[row * width + col];
      }
    }
    state.wallLayout.width = cols;
    state.wallLayout.height = rows;
    state.wallLayout.cells = resized;
    scheduleCacheSave(true);
  };

  const drawPixelsToCanvas = (pixels, canvas, width, height, zoom) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width * zoom;
    canvas.height = height * zoom;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < height; row += 1) {
      for (let col = 0; col < width; col += 1) {
        const color = pixels[row * width + col];
        if (!color) continue;
        ctx.fillStyle = color;
        ctx.fillRect(col * zoom, row * zoom, zoom, zoom);
      }
    }
  };

  const downloadCanvas = (canvas, filename) => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = filename;
    link.click();
  };

  const sanitizeFilename = (name) => name.replace(/[^a-z0-9-_]/gi, '_').replace(/_+/g, '_').trim() || 'export';
  const getExportName = () => (qs('#export-name')?.value || '').trim() || 'export';
  const getExportFilename = (extension) => `${sanitizeFilename(getExportName())}.${extension}`;

  const normalizePixels = (pixels, width, height) => {
    const size = width * height;
    if (!Array.isArray(pixels)) {
      return createEmptyPixels(width, height);
    }
    const normalized = pixels.slice(0, size).map((color) => (typeof color === 'string' ? color : null));
    while (normalized.length < size) normalized.push(null);
    return normalized;
  };

  const buildAssetPayload = () => {
    const { width, height } = state.grid;
    const payload = {
      version: 1,
      type: state.preview.mode,
      name: getExportName(),
      width,
      height,
      pixelSize: state.grid.pixelSize
    };

    if (state.preview.mode === 'sprite') {
      payload.frames = state.frames.map((frame) => frame.pixels);
      payload.activeFrameIndex = state.activeFrameIndex;
    } else if (state.preview.mode === 'walls') {
      payload.wallMode = state.wallMode;
      payload.wallTiles = state.wallTiles.map((tile) => ({
        id: tile.id,
        label: tile.label,
        pixels: tile.pixels
      }));
      payload.activeWallTileIndex = state.activeWallTileIndex;
      payload.wallLayout = {
        width: state.wallLayout.width,
        height: state.wallLayout.height,
        cells: state.wallLayout.cells
      };
      payload.pixels = getActivePixels();
    } else {
      payload.pixels = getActivePixels();
    }

    return payload;
  };

  const applyAssetPayload = (payload, { fromCache = false } = {}) => {
    if (!payload || !payload.width || !payload.height) return false;
    const width = clamp(Number.parseInt(payload.width, 10), 1, 128);
    const height = clamp(Number.parseInt(payload.height, 10), 1, 128);

    const oldWidth = state.grid.width;
    const oldHeight = state.grid.height;
    state.grid.width = width;
    state.grid.height = height;

    if (payload.pixelSize) {
      const size = clamp(Number.parseInt(payload.pixelSize, 10), 6, 40);
      state.grid.pixelSize = size;
      document.documentElement.style.setProperty('--pixel-size', `${size}px`);
      const zoomRange = qs('#zoom-range');
      const zoomValue = qs('#zoom-value');
      if (zoomRange) zoomRange.value = String(size);
      if (zoomValue) zoomValue.textContent = `${size}px`;
    }

    if (Array.isArray(payload.frames) && payload.frames.length) {
      state.frames = payload.frames.map((pixels) => ({
        id: createId(),
        pixels: normalizePixels(pixels, width, height)
      }));
      state.activeFrameIndex = clamp(Number.parseInt(payload.activeFrameIndex, 10) || 0, 0, state.frames.length - 1);
    } else if (Array.isArray(payload.pixels)) {
      state.frames = [{ id: createId(), pixels: normalizePixels(payload.pixels, width, height) }];
      state.activeFrameIndex = 0;
    } else {
      state.frames = [{ id: createId(), pixels: resizePixelBuffer(state.frames[0]?.pixels || [], oldWidth, oldHeight, width, height) }];
      state.activeFrameIndex = 0;
    }

    if (payload.wallMode) {
      setWallMode(payload.wallMode, { preserve: false });
    }

    const wallDefinitions = getWallTileDefinitions();
    if (Array.isArray(payload.wallTiles) && payload.wallTiles.length) {
      const tileMap = new Map(payload.wallTiles.map((tile) => [tile.id, tile]));
      state.wallTiles = wallDefinitions.map((definition) => {
        const source = tileMap.get(definition.id);
        return {
          id: definition.id,
          label: definition.label,
          pixels: normalizePixels(source?.pixels, width, height)
        };
      });
      state.activeWallTileIndex = clamp(
        Number.parseInt(payload.activeWallTileIndex, 10) || 0,
        0,
        state.wallTiles.length - 1
      );
    } else {
      state.wallTiles = wallDefinitions.map((definition) => ({
        id: definition.id,
        label: definition.label,
        pixels: resizePixelBuffer(
          state.wallTiles.find((tile) => tile.id === definition.id)?.pixels || [],
          oldWidth,
          oldHeight,
          width,
          height
        )
      }));
      state.activeWallTileIndex = 0;
    }

    if (payload.wallLayout?.cells) {
      const layoutWidth = clamp(Number.parseInt(payload.wallLayout.width, 10) || state.wallLayout.width, 2, 40);
      const layoutHeight = clamp(Number.parseInt(payload.wallLayout.height, 10) || state.wallLayout.height, 2, 40);
      const size = layoutWidth * layoutHeight;
      const cells = Array.isArray(payload.wallLayout.cells)
        ? payload.wallLayout.cells.slice(0, size)
        : [];
      while (cells.length < size) cells.push(0);
      state.wallLayout.width = layoutWidth;
      state.wallLayout.height = layoutHeight;
      state.wallLayout.cells = cells.map((value) => (value ? 1 : 0));
    }

    if (fromCache && payload.preview) {
      state.preview = {
        ...state.preview,
        ...payload.preview
      };
    }

    if (payload.name) {
      const exportInput = qs('#export-name');
      if (exportInput) exportInput.value = payload.name;
    }

    const wallModeSelect = qs('#wall-mode');
    if (wallModeSelect) wallModeSelect.value = state.wallMode;

    const widthInput = qs('#grid-width');
    const heightInput = qs('#grid-height');
    if (widthInput) widthInput.value = String(state.grid.width);
    if (heightInput) heightInput.value = String(state.grid.height);

    buildPixelCanvas();
    renderActivePixelGrid();
    renderFramesStrip();
    renderWallTilesGrid();
    renderPreviews();
    return true;
  };

  const exportActivePixels = () => {
    const { width, height } = state.grid;
    const baseName = sanitizeFilename(getExportName());

    if (state.preview.mode === 'sprite') {
      const mode = qs('input[name=\"sprite-export\"]:checked')?.value || 'single';
      if (mode === 'sequence') {
        state.frames.forEach((frame, index) => {
          const canvas = document.createElement('canvas');
          drawPixelsToCanvas(frame.pixels, canvas, width, height, 1);
          const number = String(index + 1).padStart(3, '0');
          downloadCanvas(canvas, `${baseName}_${number}.png`);
        });
        return;
      }
      if (mode === 'sheet') {
        const canvas = document.createElement('canvas');
        const frameCount = Math.max(state.frames.length, 1);
        canvas.width = width * frameCount;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        state.frames.forEach((frame, index) => {
          const tempCanvas = document.createElement('canvas');
          drawPixelsToCanvas(frame.pixels, tempCanvas, width, height, 1);
          ctx.drawImage(tempCanvas, index * width, 0);
        });
        downloadCanvas(canvas, `${baseName}_sheet.png`);
        return;
      }
    }

    const pixels = getActivePixels();
    if (!pixels) return;
    const canvas = document.createElement('canvas');
    drawPixelsToCanvas(pixels, canvas, width, height, 1);
    downloadCanvas(canvas, `${baseName}.png`);
  };

  const exportJson = () => {
    const payload = buildAssetPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = getExportFilename('json');
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearActiveCanvas = () => {
    const pixels = getActivePixels();
    if (!pixels) return;
    pixels.fill(null);
    renderActivePixelGrid();
    renderFrameThumbnail(state.activeFrameIndex);
    renderWallTileThumbnail(state.activeWallTileIndex);
    renderPreviews();
    scheduleCacheSave(true);
  };

  const renderTilesPreview = () => {
    const canvas = qs('#tiles-preview-canvas');
    if (!canvas) return;

    const { width, height } = state.grid;
    const pixels = state.frames[state.activeFrameIndex]?.pixels || [];
    const { cols, rows, zoom, showGrid, background } = state.preview.tile;

    const tileCanvas = document.createElement('canvas');
    tileCanvas.width = width;
    tileCanvas.height = height;
    drawPixelsToCanvas(pixels, tileCanvas, width, height, 1);

    const tileWidth = width * zoom;
    const tileHeight = height * zoom;
    canvas.width = tileWidth * cols;
    canvas.height = tileHeight * rows;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        ctx.drawImage(tileCanvas, col * tileWidth, row * tileHeight, tileWidth, tileHeight);
      }
    }

    if (showGrid) {
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      for (let x = 0; x <= cols; x += 1) {
        ctx.beginPath();
        ctx.moveTo(x * tileWidth, 0);
        ctx.lineTo(x * tileWidth, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= rows; y += 1) {
        ctx.beginPath();
        ctx.moveTo(0, y * tileHeight);
        ctx.lineTo(canvas.width, y * tileHeight);
        ctx.stroke();
      }
    }
  };

  const stepSpriteFrame = () => {
    if (state.frames.length === 0) return;
    state.preview.sprite.currentFrame = (state.preview.sprite.currentFrame + 1) % state.frames.length;
  };

  const renderSpritePreview = () => {
    const canvas = qs('#sprite-preview-canvas');
    if (!canvas) return;

    const { width, height } = state.grid;
    const { zoom } = state.preview.sprite;
    const frameIndex = clamp(state.preview.sprite.currentFrame, 0, state.frames.length - 1);
    const pixels = state.frames[frameIndex]?.pixels || [];

    drawPixelsToCanvas(pixels, canvas, width, height, zoom);
  };

  const startSpritePlayback = () => {
    if (!state.preview.sprite.playing) return;
    if (spriteTimerId) {
      clearInterval(spriteTimerId);
    }
    const interval = Math.max(1, Math.floor(1000 / state.preview.sprite.fps));
    spriteTimerId = setInterval(() => {
      stepSpriteFrame();
      renderSpritePreview();
    }, interval);
  };

  const stopSpritePlayback = () => {
    if (spriteTimerId) {
      clearInterval(spriteTimerId);
      spriteTimerId = null;
    }
  };

  const getWallNeighbors = (x, y) => {
    const { width, height, cells } = state.wallLayout;
    const isWall = (cx, cy) => {
      if (cx < 0 || cy < 0 || cx >= width || cy >= height) return false;
      return cells[cy * width + cx] === 1;
    };

    const n = isWall(x, y - 1);
    const s = isWall(x, y + 1);
    const w = isWall(x - 1, y);
    const e = isWall(x + 1, y);
    const nw = isWall(x - 1, y - 1);
    const ne = isWall(x + 1, y - 1);
    const sw = isWall(x - 1, y + 1);
    const se = isWall(x + 1, y + 1);
    return {
      n, s, w, e, nw, ne, sw, se,
      count: [n, s, w, e].filter(Boolean).length
    };
  };

  const getWallTileIdX13 = ({ n, s, w, e, nw, ne, sw, se, count }, x, y) => {
    const { width, height } = state.wallLayout;
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

    if (count === 4) {
      if (n && w && !nw && s && e) return 'corner-in-top-left';
      if (n && e && !ne && s && w) return 'corner-in-top-right';
      if (s && w && !sw && n && e) return 'corner-in-bottom-left';
      if (s && e && !se && n && w) return 'corner-in-bottom-right';
      return 'center';
    }
    if (count === 3) {
      if (!n) return 'edge-top';
      if (!s) return 'edge-bottom';
      if (!w) return 'edge-left';
      return 'edge-right';
    }
    if (count === 2) {
      if (s && e) return 'corner-out-top-left';
      if (s && w) return 'corner-out-top-right';
      if (n && e) return 'corner-out-bottom-left';
      if (n && w) return 'corner-out-bottom-right';
      if (n && s) return 'edge-left';
      if (e && w) return 'edge-top';
    }
    if (count === 1) {
      if (n) return 'edge-bottom';
      if (s) return 'edge-top';
      if (w) return 'edge-right';
      return 'edge-left';
    }
    return 'center';
  };

  const getWallTileIdX47 = ({ n, s, w, e, nw, ne, sw, se, count }, x, y) => {
    if (count === 4) {
      if (!nw) return 'corner-in-top-left';
      if (!ne) return 'corner-in-top-right';
      if (!sw) return 'corner-in-bottom-left';
      if (!se) return 'corner-in-bottom-right';
      if ((x + y) % 6 === 0) return 'center-alt';
      if (x % 5 === 0) return 'separator-vertical';
      if (y % 5 === 0) return 'separator-horizontal';
      return 'center';
    }
    if (count === 3) {
      if (!n) return 't-open-top';
      if (!s) return 't-open-bottom';
      if (!w) return 't-open-left';
      return 't-open-right';
    }
    if (count === 2) {
      if (n && s) return 'corridor-vertical';
      if (e && w) return 'corridor-horizontal';
      if (n && e) return 'corner-out-top-right';
      if (n && w) return 'corner-out-top-left';
      if (s && e) return 'corner-out-bottom-right';
      return 'corner-out-bottom-left';
    }
    if (count === 1) {
      if (n) return 'cap-top';
      if (s) return 'cap-bottom';
      if (w) return 'cap-left';
      return 'cap-right';
    }
    return 'isolated';
  };

  const getHoleTileIdX47 = ({ n, s, w, e, nw, ne, sw, se, count }) => {
    if (count === 4) {
      if (nw && ne && sw && se) return 'hole-center';
      if (!nw) return 'hole-corner-top-left';
      if (!ne) return 'hole-corner-top-right';
      if (!sw) return 'hole-corner-bottom-left';
      if (!se) return 'hole-corner-bottom-right';
      return 'hole-center';
    }
    if (count === 3) {
      if (!n) return 'hole-edge-top';
      if (!s) return 'hole-edge-bottom';
      if (!w) return 'hole-edge-left';
      return 'hole-edge-right';
    }
    if (count === 2) {
      if (n && e) return 'hole-corner-top-right';
      if (n && w) return 'hole-corner-top-left';
      if (s && e) return 'hole-corner-bottom-right';
      return 'hole-corner-bottom-left';
    }
    return null;
  };

  const getWallTileId = (x, y) => {
    const neighbors = getWallNeighbors(x, y);
    if (state.wallMode === 'x47') {
      return getWallTileIdX47(neighbors, x, y);
    }
    return getWallTileIdX13(neighbors, x, y);
  };

  const getHoleTileId = (x, y) => {
    if (state.wallMode !== 'x47') return null;
    const neighbors = getWallNeighbors(x, y);
    return getHoleTileIdX47(neighbors);
  };

  const renderWallPaintGrid = () => {
    const canvas = qs('#walls-paint-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height, cells } = state.wallLayout;
    const zoom = state.preview.walls.zoom;
    const cellSize = Math.max(4, zoom * 6);

    canvas.width = width * cellSize;
    canvas.height = height * cellSize;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0b0b0b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const isWall = cells[y * width + x] === 1;
        if (isWall) {
          ctx.fillStyle = 'rgba(0, 148, 174, 0.7)';
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
      }
    }

    if (state.preview.walls.showGrid) {
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      for (let x = 0; x <= width; x += 1) {
        ctx.beginPath();
        ctx.moveTo(x * cellSize, 0);
        ctx.lineTo(x * cellSize, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += 1) {
        ctx.beginPath();
        ctx.moveTo(0, y * cellSize);
        ctx.lineTo(canvas.width, y * cellSize);
        ctx.stroke();
      }
    }
  };

  const renderWallsPreview = () => {
    const canvas = qs('#walls-preview-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width: gridWidth, height: gridHeight } = state.grid;
    const { width, height, cells } = state.wallLayout;
    const zoom = state.preview.walls.zoom;

    const tileWidth = gridWidth * zoom;
    const tileHeight = gridHeight * zoom;

    canvas.width = width * tileWidth;
    canvas.height = height * tileHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0b0b0b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const tileMap = new Map(state.wallTiles.map((tile) => [tile.id, tile]));

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const isWallCell = cells[y * width + x] === 1;
        const tileId = isWallCell ? getWallTileId(x, y) : getHoleTileId(x, y);
        if (!tileId) continue;
        const tile = tileMap.get(tileId);
        if (!tile) continue;

        const tempCanvas = document.createElement('canvas');
        drawPixelsToCanvas(tile.pixels, tempCanvas, gridWidth, gridHeight, zoom);
        ctx.drawImage(tempCanvas, x * tileWidth, y * tileHeight);
      }
    }
  };

  const renderPreviews = () => {
    renderTilesPreview();
    renderSpritePreview();
    renderWallPaintGrid();
    renderWallsPreview();
  };

  const bindWallPaintInteraction = () => {
    const canvas = qs('#walls-paint-canvas');
    if (!canvas) return;

    let isDrawing = false;

    const getCellFromEvent = (event) => {
      const rect = canvas.getBoundingClientRect();
      const { width, height } = state.wallLayout;
      const zoom = state.preview.walls.zoom;
      const cellSize = Math.max(4, zoom * 6);
      const x = Math.floor((event.clientX - rect.left) / cellSize);
      const y = Math.floor((event.clientY - rect.top) / cellSize);
      if (x < 0 || y < 0 || x >= width || y >= height) return null;
      return { x, y };
    };

  const paintWallCell = (x, y, value) => {
    const index = y * state.wallLayout.width + x;
    state.wallLayout.cells[index] = value;
    scheduleCacheSave();
  };

    const handlePointerDown = (event) => {
      if (state.preview.mode !== 'walls') return;
      const cell = getCellFromEvent(event);
      if (!cell) return;
      event.preventDefault();
      isDrawing = true;
      canvas.setPointerCapture(event.pointerId);
      if (activeTool === 'eraser') {
        paintWallCell(cell.x, cell.y, 0);
      } else if (activeTool === 'fill') {
        floodFillWall(cell.x, cell.y, 1);
      } else {
        paintWallCell(cell.x, cell.y, 1);
      }
      renderWallPaintGrid();
      renderWallsPreview();
    };

    const handlePointerMove = (event) => {
      const cell = getCellFromEvent(event);
      if (!cell) return;
      const allowDragTool = activeTool === 'pencil' || activeTool === 'eraser';

      if (!isDrawing && !(isCtrlDrawing || event.ctrlKey)) return;
      if (!allowDragTool) return;

      if (activeTool === 'eraser') {
        paintWallCell(cell.x, cell.y, 0);
      } else {
        paintWallCell(cell.x, cell.y, 1);
      }
      renderWallPaintGrid();
      renderWallsPreview();
    };

    const stopDrawing = (event) => {
      if (!isDrawing) return;
      isDrawing = false;
      try {
        canvas.releasePointerCapture(event.pointerId);
      } catch (error) {
        // ignore
      }
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', stopDrawing);
    canvas.addEventListener('pointerleave', stopDrawing);
  };

  const floodFillWall = (startX, startY, fillValue) => {
    const { width, height, cells } = state.wallLayout;
    const startIndex = startY * width + startX;
    const target = cells[startIndex];
    if (target === fillValue) return;

    const stack = [startIndex];
    const visited = new Uint8Array(cells.length);

    while (stack.length) {
      const index = stack.pop();
      if (index < 0 || index >= cells.length) continue;
      if (visited[index]) continue;
      if (cells[index] !== target) continue;

      visited[index] = 1;
      cells[index] = fillValue;

      const row = Math.floor(index / width);
      const col = index % width;

      if (row > 0) stack.push(index - width);
      if (row < height - 1) stack.push(index + width);
      if (col > 0) stack.push(index - 1);
      if (col < width - 1) stack.push(index + 1);
    }
    scheduleCacheSave();
  };

  const applyTranslations = (language) => {
    currentLanguage = language;
    document.documentElement.lang = language;

    const dictionary = translations[language] || {};
    qsa('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    let pageTitleKey = 'title.graphic';
    if (document.body.classList.contains('page-home')) {
      pageTitleKey = 'title.home';
    } else {
      const designer = document.body.dataset.designer;
      if (designer === 'tiles') pageTitleKey = 'title.tiles';
      if (designer === 'sprite') pageTitleKey = 'title.sprite';
      if (designer === 'walls') pageTitleKey = 'title.walls';
    }
    if (dictionary[pageTitleKey]) {
      document.title = dictionary[pageTitleKey];
    }

    qsa('[data-lang-block]').forEach((block) => {
      block.classList.toggle('is-active', block.dataset.langBlock === language);
    });

    qsa('.language-toggle-button').forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    updatePaletteAriaLabels();
  };

  const bindExportButton = () => {
    const exportButton = qs('#export-png');
    const exportJsonButton = qs('#export-json');
    const importJsonButton = qs('#import-json');
    const importJsonFile = qs('#import-json-file');
    const clearButton = qs('#clear-canvas');

    exportButton?.addEventListener('click', exportActivePixels);
    exportJsonButton?.addEventListener('click', exportJson);
    clearButton?.addEventListener('click', clearActiveCanvas);

    importJsonButton?.addEventListener('click', () => {
      importJsonFile?.click();
    });

    importJsonFile?.addEventListener('change', () => {
      const file = importJsonFile.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const payload = JSON.parse(String(reader.result || '{}'));
          const applied = applyAssetPayload(payload);
          if (applied) scheduleCacheSave(true);
        } catch (error) {
          // Ignore invalid JSON.
        }
      };
      reader.readAsText(file);
      importJsonFile.value = '';
    });
  };

  const bindLanguageToggle = () => {
    qsa('.language-toggle-button').forEach((button) => {
      button.addEventListener('click', () => {
        const language = button.dataset.lang || 'en';
        localStorage.setItem('preferredLanguage', language);
        applyTranslations(language);
      });
    });
  };

  const bindPaletteControls = () => {
    const paletteSelect = qs('#palette-select');
    const addButton = qs('#add-palette');
    const importButton = qs('#import-palette');
    const exportButton = qs('#export-palette');
    const fileInput = qs('#palette-file');
    const modal = qs('#palette-modal');
    const closeButton = qs('#palette-modal-close');
    const cancelButton = qs('#palette-modal-cancel');
    const saveButton = qs('#palette-modal-save');
    const nameInput = qs('#palette-name');
    const valuesInput = qs('#palette-values');

    if (paletteSelect) {
      paletteSelect.addEventListener('change', () => {
        activePaletteIndex = Number.parseInt(paletteSelect.value, 10) || 0;
        buildPalette();
      });
    }

    const openModal = () => {
      if (!modal) return;
      modal.classList.remove('is-hidden');
      modal.setAttribute('aria-hidden', 'false');
      if (nameInput) nameInput.focus();
    };

    const closeModal = () => {
      if (!modal) return;
      modal.classList.add('is-hidden');
      modal.setAttribute('aria-hidden', 'true');
    };

    addButton?.addEventListener('click', openModal);
    closeButton?.addEventListener('click', closeModal);
    cancelButton?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });

    const savePalette = (nameOverride = '') => {
      const name = (nameInput?.value || '').trim() || nameOverride || 'Custom Palette';
      const values = valuesInput?.value || '';
      const parsed = parsePaletteInput(values);
      const unique = Array.from(new Map(parsed.map((color) => [normalizeColor(color), color])).values());
      if (!unique.length) return;
      palettes.push({ name, colors: unique, columns: 16 });
      activePaletteIndex = palettes.length - 1;
      buildPalette();
      if (paletteSelect) paletteSelect.value = String(activePaletteIndex);
      if (nameInput) nameInput.value = '';
      if (valuesInput) valuesInput.value = '';
      closeModal();
    };

    saveButton?.addEventListener('click', () => savePalette());

    importButton?.addEventListener('click', () => {
      fileInput?.click();
    });

    fileInput?.addEventListener('change', () => {
      const file = fileInput.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const content = String(reader.result || '');
        const name = file.name.replace(/\.[^/.]+$/, '');
        if (nameInput) nameInput.value = name;
        if (valuesInput) valuesInput.value = content.trim();
        openModal();
      };
      reader.readAsText(file);
      fileInput.value = '';
    });

    exportButton?.addEventListener('click', () => {
      const palette = palettes[activePaletteIndex] || palettes[0];
      if (!palette) return;
      const name = sanitizeFilename(palette.name || 'palette');
      const colors = palette.colors.map((entry) => (typeof entry === 'string' ? entry : entry.value)).filter(Boolean);
      const text = colors.join(' ');
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${name}.txt`;
      link.click();
      URL.revokeObjectURL(url);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initializeState();
    createHeroAmbient();
    buildPalette();
    const cacheLoaded = loadCachedState();
    if (!cacheLoaded) {
      buildPixelCanvas();
      renderActivePixelGrid();
      renderFramesStrip();
      renderWallTilesGrid();
    }
    bindCanvasInteraction();
    bindCtrlDrawing();
    bindToolSelection();
    bindZoomControl();
    bindGridControls();
    bindFramesControls();
    bindPreviewModeTabs();
    bindPreviewControls();
    bindWallPaintInteraction();
    bindExportButton();
    bindPaletteControls();
    bindLanguageToggle();

    const storedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    applyTranslations(storedLanguage);
    updateActiveToolLabel();
    const designer = document.body.dataset.designer || 'tiles';
    setPreviewMode(designer);
    const wallModeSelect = qs('#wall-mode');
    if (wallModeSelect) wallModeSelect.value = state.wallMode;
    renderPreviews();
  });
})();
