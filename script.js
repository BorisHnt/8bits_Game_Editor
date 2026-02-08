(() => {
  const translations = {
    en: {
      'title.home': '8bits Game Editor — Creative Lab for Pixel Makers',
      'title.graphic': '8bits Game Editor — Graphic Assets Design',
      'title.tiles': '8bits Game Editor — Tiles Designer',
      'title.sprite': '8bits Game Editor — Sprite Designer',
      'title.walls': '8bits Game Editor — Walls Designer',
      'title.floor': '8bits Game Editor — Floor Designer',
      'title.map': '8bits Game Editor — Map Creator',
      'title.world': '8bits Game Editor — World Creator',
      'title.tester': '8bits Game Editor — Map Tester',
      'nav.home': 'Home',
      'nav.tiles': 'Tiles Designer',
      'nav.sprite': 'Sprite Designer',
      'nav.walls': 'Walls Designer',
      'nav.floor': 'Floor Designer',
      'nav.map': 'Map Creator',
      'nav.world': 'World Creator',
      'nav.tester': 'Map Tester',
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
      'workspace.titleFloor': 'Floor Designer',
      'workspace.subtitle': 'Pixel editor workspace for sprites, tiles, and texture systems.',
      'panel.tools': 'Tools',
      'tool.pencil': 'Pencil',
      'tool.eraser': 'Eraser',
      'tool.eyedropper': 'Eyedropper',
      'tool.fill': 'Fill Bucket',
      'tool.copy': 'Copy Mode',
      'panel.activeTool': 'Active Tool',
      'panel.copyMode': 'Copy workflow',
      'panel.copySelection': 'Copy',
      'panel.copySetOrigin': 'Set origin',
      'panel.copyRotateLeft': 'Rotate -90',
      'panel.copyRotateRight': 'Rotate +90',
      'panel.copyPaste': 'Paste',
      'panel.copyReset': 'Reset',
      'panel.copySelectionSize': 'Selection',
      'panel.copySelectionSizeNone': 'No selection',
      'panel.copyStatusInactive': 'Activate Copy Mode to start.',
      'panel.copyStatusSelect': 'Drag to select pixels, then press Copy.',
      'panel.copyStatusSquare': 'Rotation needs a square selection.',
      'panel.copyStatusReady': 'Selection copied. Pick an origin pixel.',
      'panel.copyStatusOrigin': 'Click a pixel to set top-left origin.',
      'panel.copyStatusPaste': 'Origin selected. Press Paste.',
      'panel.canvas': 'Pixel Canvas',
      'panel.canvasSubtitle': 'Adjustable grid. Pixel size follows zoom.',
      'panel.grid': 'Grid',
      'panel.gridApply': 'Apply',
      'panel.zoom': 'Zoom',
      'panel.checker': 'Checker White',
      'panel.palette': 'Palette',
      'panel.paletteSubtitle': 'Predefined pixel-art colors.',
      'panel.activeColor': 'Active',
      'panel.export': 'Export',
      'panel.exportSubtitle': 'Ready for PNG output. Transparent background preserved.',
      'panel.exportButton': 'Export PNG',
      'panel.exportTiles': 'Export Tiles PNG',
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
      'panel.previewBackgroundTransparent': 'Transparent',
      'panel.previewBackgroundBlack': 'Black',
      'panel.previewBackgroundWhite': 'White',
      'panel.previewBackgroundDark': 'Dark Gray',
      'panel.previewBackgroundMid': 'Mid Gray',
      'panel.previewBackgroundLight': 'Light Gray',
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
      'palette.selectColor': 'Select color',
      'map.title': 'Map Creator',
      'map.subtitle': 'Import assets, map sprites, and paint layouts on a custom grid.',
      'map.assets': 'Assets',
      'map.assetsSubtitle': 'Add images and configure sprite metadata.',
      'map.addAsset': 'Add Asset',
      'map.importAsset': 'Import',
      'map.assetGrid': 'Asset Grid',
      'map.assetGridHint': 'Select an asset to preview its sprites.',
      'map.mapBuilder': 'Map Builder',
      'map.mapBuilderHint': 'Configure grid size and paint tiles.',
      'map.mapSize': 'Map Size',
      'map.cellSize': 'Cell Size',
      'map.mode': 'Mode',
      'map.modeManual': 'Manual',
      'map.modeAuto': 'Auto (x13)',
      'map.tool': 'Tool',
      'map.toolPencil': 'Pencil',
      'map.toolEraser': 'Eraser',
      'map.toolEyedropper': 'Eyedropper',
      'map.toolFill': 'Fill Bucket',
      'map.markers': 'Markers',
      'map.markerPortal': 'Entry/Exit',
      'map.view': 'View',
      'map.viewNormal': 'Normal',
      'map.viewAssets': 'Assets',
      'map.viewCollision': 'Passable/Blocking',
      'map.name': 'Map name',
      'map.shift': 'Shift',
      'map.shiftUp': 'Up',
      'map.shiftDown': 'Down',
      'map.shiftLeft': 'Left',
      'map.shiftRight': 'Right',
      'map.options': 'Options',
      'map.cacheTitle': 'Cache',
      'map.cacheClose': 'Close',
      'map.cacheCount': 'Items',
      'map.cacheSize': 'Estimated size',
      'map.cacheEmpty': 'Cache is empty.',
      'map.cachePurge': 'Purge cache',
      'world.title': 'World Creator',
      'world.subtitle': 'Import maps and connect portals to build a world graph.',
      'world.maps': 'Maps',
      'world.mapsSubtitle': 'Import map JSON files with portal markers.',
      'world.import': 'Import Map',
      'world.assets': 'Assets',
      'world.assetsSubtitle': 'Images required by imported maps.',
      'world.assetUpload': 'Upload',
      'world.assetReplace': 'Replace',
      'world.assetCached': 'Cached',
      'world.assetMissing': 'Missing',
      'world.connections': 'Connections',
      'world.connectionsSubtitle': 'Link portals between maps.',
      'world.export': 'Export World',
      'world.namePlaceholder': 'World name',
      'world.from': 'From',
      'world.to': 'To',
      'world.addConnection': 'Add Connection',
      'world.noConnections': 'No connections yet.',
      'world.previewTitle': 'World Preview',
      'world.previewSubtitle': 'Overview of maps and links.',
      'world.zoom': 'Zoom',
      'world.zoomReset': 'Reset',
      'world.opacity': 'Transparency',
      'world.previewEmpty': 'Import maps to see the world preview.',
      'world.mapName': 'Map name',
      'world.portals': 'Portals',
      'world.file': 'File',
      'world.remove': 'Remove',
      'tester.title': 'Map Tester',
      'tester.subtitle': 'Import a map and test your character movement.',
      'tester.controlsTitle': 'Controls',
      'tester.controlsSubtitle': 'Use keyboard to move.',
      'tester.instructions': 'Arrow keys or WASD to move the character.',
      'tester.reset': 'Reset',
      'tester.position': 'Position',
      'tester.direction': 'Direction',
      'tester.importMap': 'Import Map',
      'tester.importWorld': 'Import World',
      'tester.mapLabel': 'Map',
      'tester.loaded': 'Loaded',
      'tester.loadedNone': 'None',
      'tester.zoom': 'Zoom',
      'tester.dirUp': 'Up',
      'tester.dirDown': 'Down',
      'tester.dirLeft': 'Left',
      'tester.dirRight': 'Right',
      'tester.previewTitle': 'Preview',
      'tester.previewSubtitle': 'Sprites are 16x16 px.',
      'map.data': 'Data',
      'map.exportJson': 'Export JSON',
      'map.importJson': 'Import JSON',
      'map.undo': 'Undo',
      'map.redo': 'Redo',
      'map.randomize': 'Randomize',
      'map.randomizePlaceholder': '1-4, 7, 9-11',
      'map.assetName': 'Asset name',
      'map.assetColor': 'Color',
      'map.assetNumber': 'Image number',
      'map.assetUp': 'Up',
      'map.assetDown': 'Down',
      'map.assetConfig': 'Config',
      'map.spriteSize': 'Sprite size',
      'map.spriteCount': 'Sprites',
      'map.assetType': 'Type',
      'map.typeBlocking': 'Blocking',
      'map.typePassable': 'Passable',
      'map.selectAsset': 'Select'
    },
    fr: {
      'title.home': "8bits Game Editor — Laboratoire créatif pour makers indés",
      'title.graphic': "8bits Game Editor — Design d'assets graphiques",
      'title.tiles': "8bits Game Editor — Design de tiles",
      'title.sprite': "8bits Game Editor — Design de sprites",
      'title.walls': "8bits Game Editor — Design de murs",
      'title.floor': "8bits Game Editor — Design de sols",
      'title.map': "8bits Game Editor — Créateur de maps",
      'title.world': "8bits Game Editor — Créateur de monde",
      'title.tester': "8bits Game Editor — Map Tester",
      'nav.home': 'Accueil',
      'nav.tiles': 'Designer Tiles',
      'nav.sprite': 'Designer Sprite',
      'nav.walls': 'Designer Murs',
      'nav.floor': 'Designer Sols',
      'nav.map': 'Créateur de map',
      'nav.world': 'Créateur de monde',
      'nav.tester': 'Map Tester',
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
      'workspace.titleFloor': 'Designer Sols',
      'workspace.subtitle': "Espace d'édition pixel pour sprites, tiles et systèmes de textures.",
      'panel.tools': 'Outils',
      'tool.pencil': 'Crayon',
      'tool.eraser': 'Gomme',
      'tool.eyedropper': 'Pipette',
      'tool.fill': 'Pot de remplissage',
      'tool.copy': 'Mode copie',
      'panel.activeTool': 'Outil actif',
      'panel.copyMode': 'Workflow copie',
      'panel.copySelection': 'Copier',
      'panel.copySetOrigin': 'Choisir origine',
      'panel.copyRotateLeft': 'Rotation -90',
      'panel.copyRotateRight': 'Rotation +90',
      'panel.copyPaste': 'Coller',
      'panel.copyReset': 'Reset',
      'panel.copySelectionSize': 'Selection',
      'panel.copySelectionSizeNone': 'Aucune selection',
      'panel.copyStatusInactive': 'Activez le mode copie pour commencer.',
      'panel.copyStatusSelect': 'Glissez pour selectionner, puis cliquez sur Copier.',
      'panel.copyStatusSquare': 'La rotation demande une selection carree.',
      'panel.copyStatusReady': "Selection copiee. Choisissez un pixel d'origine.",
      'panel.copyStatusOrigin': "Cliquez un pixel pour l'origine haut-gauche.",
      'panel.copyStatusPaste': "Origine choisie. Cliquez sur Coller.",
      'panel.canvas': 'Canvas pixel',
      'panel.canvasSubtitle': 'Grille ajustable. La taille suit le zoom.',
      'panel.grid': 'Grille',
      'panel.gridApply': 'Appliquer',
      'panel.zoom': 'Zoom',
      'panel.checker': 'Damier blanc',
      'panel.palette': 'Palette',
      'panel.paletteSubtitle': 'Couleurs pixel-art prédéfinies.',
      'panel.activeColor': 'Actif',
      'panel.export': 'Export',
      'panel.exportSubtitle': "Prêt pour l'export PNG. Transparence préservée.",
      'panel.exportButton': 'Exporter PNG',
      'panel.exportTiles': 'Exporter Tiles PNG',
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
      'panel.previewBackgroundTransparent': 'Transparent',
      'panel.previewBackgroundBlack': 'Noir',
      'panel.previewBackgroundWhite': 'Blanc',
      'panel.previewBackgroundDark': 'Gris foncé',
      'panel.previewBackgroundMid': 'Gris moyen',
      'panel.previewBackgroundLight': 'Gris clair',
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
      'palette.selectColor': 'Sélectionner la couleur',
      'map.title': 'Créateur de map',
      'map.subtitle': 'Importer des assets, mapper les sprites et peindre une grille personnalisée.',
      'map.assets': 'Assets',
      'map.assetsSubtitle': 'Ajoutez des images et configurez les sprites.',
      'map.addAsset': 'Ajouter un asset',
      'map.importAsset': 'Importer',
      'map.assetGrid': 'Grille de sprites',
      'map.assetGridHint': 'Sélectionnez un asset pour afficher ses sprites.',
      'map.mapBuilder': 'Construction de map',
      'map.mapBuilderHint': 'Configurez la grille et dessinez la map.',
      'map.mapSize': 'Taille de map',
      'map.cellSize': 'Taille de cellule',
      'map.mode': 'Mode',
      'map.modeManual': 'Manuel',
      'map.modeAuto': 'Auto (x13)',
      'map.tool': 'Outil',
      'map.toolPencil': 'Crayon',
      'map.toolEraser': 'Gomme',
      'map.toolEyedropper': 'Pipette',
      'map.toolFill': 'Pot de peinture',
      'map.markers': 'Marqueurs',
      'map.markerPortal': 'Entree/Sortie',
      'map.view': 'Vue',
      'map.viewNormal': 'Normal',
      'map.viewAssets': 'Assets',
      'map.viewCollision': 'Passant/Bloquant',
      'map.name': 'Nom de map',
      'map.shift': 'Deplacer',
      'map.shiftUp': 'Haut',
      'map.shiftDown': 'Bas',
      'map.shiftLeft': 'Gauche',
      'map.shiftRight': 'Droite',
      'map.options': 'Options',
      'map.cacheTitle': 'Cache',
      'map.cacheClose': 'Fermer',
      'map.cacheCount': 'Elements',
      'map.cacheSize': 'Taille estimee',
      'map.cacheEmpty': 'Cache vide.',
      'map.cachePurge': 'Purger le cache',
      'world.title': 'Créateur de monde',
      'world.subtitle': 'Importer des maps et connecter les portails.',
      'world.maps': 'Maps',
      'world.mapsSubtitle': 'Importer des JSON de map avec portails.',
      'world.import': 'Importer map',
      'world.assets': 'Assets',
      'world.assetsSubtitle': 'Images requises par les maps importees.',
      'world.assetUpload': 'Televerser',
      'world.assetReplace': 'Remplacer',
      'world.assetCached': 'En cache',
      'world.assetMissing': 'Manquant',
      'world.connections': 'Connexions',
      'world.connectionsSubtitle': 'Relier les portails entre maps.',
      'world.export': 'Exporter monde',
      'world.namePlaceholder': 'Nom du monde',
      'world.from': 'De',
      'world.to': 'Vers',
      'world.addConnection': 'Ajouter connexion',
      'world.noConnections': 'Aucune connexion.',
      'world.previewTitle': 'Apercu du monde',
      'world.previewSubtitle': 'Vue generale des maps et liens.',
      'world.zoom': 'Zoom',
      'world.zoomReset': 'Reinitialiser',
      'world.opacity': 'Transparence',
      'world.previewEmpty': "Importez des maps pour voir l'apercu du monde.",
      'world.mapName': 'Nom de map',
      'world.portals': 'Portails',
      'world.file': 'Fichier',
      'world.remove': 'Supprimer',
      'tester.title': 'Map Tester',
      'tester.subtitle': 'Importe une map et teste les deplacements.',
      'tester.controlsTitle': 'Controles',
      'tester.controlsSubtitle': 'Utilisez le clavier pour bouger.',
      'tester.instructions': 'Fleches ou ZQSD pour deplacer le personnage.',
      'tester.reset': 'Reinitialiser',
      'tester.position': 'Position',
      'tester.direction': 'Direction',
      'tester.importMap': 'Importer map',
      'tester.importWorld': 'Importer monde',
      'tester.mapLabel': 'Map',
      'tester.loaded': 'Charge',
      'tester.loadedNone': 'Aucune',
      'tester.zoom': 'Zoom',
      'tester.dirUp': 'Haut',
      'tester.dirDown': 'Bas',
      'tester.dirLeft': 'Gauche',
      'tester.dirRight': 'Droite',
      'tester.previewTitle': 'Apercu',
      'tester.previewSubtitle': 'Sprites en 16x16 px.',
      'map.data': 'Data',
      'map.exportJson': 'Exporter JSON',
      'map.importJson': 'Importer JSON',
      'map.undo': 'Annuler',
      'map.redo': 'Retablir',
      'map.randomize': 'Randomiser',
      'map.randomizePlaceholder': '1-4, 7, 9-11',
      'map.assetName': "Nom de l'asset",
      'map.assetColor': 'Couleur',
      'map.assetNumber': 'Numero image',
      'map.assetUp': 'Monter',
      'map.assetDown': 'Descendre',
      'map.assetConfig': 'Config',
      'map.spriteSize': 'Taille sprite',
      'map.spriteCount': 'Sprites',
      'map.assetType': 'Type',
      'map.typeBlocking': 'Bloquant',
      'map.typePassable': 'Passant',
      'map.selectAsset': 'Selectionner'
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
  let undoStack = [];
  let redoStack = [];
  let historyBatchActive = false;
  const historyLimit = 10;
  const copyModeState = {
    startIndex: null,
    selection: null,
    copied: null,
    originIndex: null,
    awaitingOrigin: false
  };
  const sharedClipboardStorageKey = '8bits-shared-pixel-clipboard-v1';
  let sharedClipboard = null;

  const state = {
    grid: {
      width: 16,
      height: 16,
      pixelSize: 10,
      checkerWhite: false
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
        currentFrame: 0,
        background: 'transparent'
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

  const clonePixels = (pixels) => (Array.isArray(pixels) ? pixels.slice() : []);
  const cloneFrames = (frames) => frames.map((frame) => ({ id: frame.id, pixels: clonePixels(frame.pixels) }));
  const cloneWallTiles = (tiles) => tiles.map((tile) => ({
    id: tile.id,
    label: tile.label,
    pixels: clonePixels(tile.pixels)
  }));

  const buildHistorySnapshot = () => ({
    grid: {
      width: state.grid.width,
      height: state.grid.height
    },
    frames: cloneFrames(state.frames),
    activeFrameIndex: state.activeFrameIndex,
    wallMode: state.wallMode,
    wallTiles: cloneWallTiles(state.wallTiles),
    activeWallTileIndex: state.activeWallTileIndex,
    wallLayout: {
      width: state.wallLayout.width,
      height: state.wallLayout.height,
      cells: clonePixels(state.wallLayout.cells)
    }
  });

  const pushHistorySnapshot = () => {
    undoStack.push(buildHistorySnapshot());
    if (undoStack.length > historyLimit) {
      undoStack.shift();
    }
    redoStack = [];
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

  const applyHistorySnapshot = (snapshot) => {
    if (!snapshot) return;
    state.grid.width = snapshot.grid.width;
    state.grid.height = snapshot.grid.height;
    state.frames = cloneFrames(snapshot.frames);
    state.activeFrameIndex = clamp(snapshot.activeFrameIndex ?? 0, 0, state.frames.length - 1);
    state.preview.sprite.currentFrame = state.activeFrameIndex;

    state.wallMode = snapshot.wallMode || 'x13';
    state.wallTiles = cloneWallTiles(snapshot.wallTiles);
    state.activeWallTileIndex = clamp(
      snapshot.activeWallTileIndex ?? 0,
      0,
      state.wallTiles.length - 1
    );
    state.wallLayout = {
      width: snapshot.wallLayout.width,
      height: snapshot.wallLayout.height,
      cells: clonePixels(snapshot.wallLayout.cells)
    };

    if (state.onionFrameIndex !== null && state.onionFrameIndex >= state.frames.length) {
      state.onionFrameIndex = null;
    }

    const widthInput = qs('#grid-width');
    const heightInput = qs('#grid-height');
    if (widthInput) widthInput.value = String(state.grid.width);
    if (heightInput) heightInput.value = String(state.grid.height);

    const wallModeSelect = qs('#wall-mode');
    if (wallModeSelect) wallModeSelect.value = state.wallMode;

    const wallsCols = qs('#walls-cols');
    const wallsRows = qs('#walls-rows');
    if (wallsCols) wallsCols.value = String(state.wallLayout.width);
    if (wallsRows) wallsRows.value = String(state.wallLayout.height);

    buildPixelCanvas();
    renderActivePixelGrid();
    renderFramesStrip();
    renderWallTilesGrid();
    renderPreviews();
    scheduleCacheSave(true);
  };

  const undoHistory = () => {
    if (!undoStack.length) return;
    const snapshot = undoStack.pop();
    redoStack.push(buildHistorySnapshot());
    if (redoStack.length > historyLimit) {
      redoStack.shift();
    }
    endHistoryBatch();
    applyHistorySnapshot(snapshot);
  };

  const redoHistory = () => {
    if (!redoStack.length) return;
    const snapshot = redoStack.pop();
    undoStack.push(buildHistorySnapshot());
    if (undoStack.length > historyLimit) {
      undoStack.shift();
    }
    endHistoryBatch();
    applyHistorySnapshot(snapshot);
  };

  const wallTileSets = {
    x13: [
      { id: 'center', label: 'Center' },
      { id: 'edge-top', label: 'Edge Top' },
      { id: 'edge-bottom', label: 'Edge Bottom' },
      { id: 'edge-left', label: 'Edge Left' },
      { id: 'edge-right', label: 'Edge Right' },
      { id: 'corner-out-top-left', label: 'Corner Bottom Right' },
      { id: 'corner-out-top-right', label: 'Corner Bottom Left' },
      { id: 'corner-out-bottom-left', label: 'Corner Top Right' },
      { id: 'corner-out-bottom-right', label: 'Corner Top Left' },
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
      { id: 'corner-out-top-left', label: 'Corner Bottom Right' },
      { id: 'corner-out-top-right', label: 'Corner Bottom Left' },
      { id: 'corner-out-bottom-left', label: 'Corner Top Right' },
      { id: 'corner-out-bottom-right', label: 'Corner Top Left' },
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

  const buildFloorTileSet = (tiles) => {
    const withoutCenter = tiles.filter((tile) => tile.id !== 'center' && tile.id !== 'center-alt');
    return [
      { id: 'center-1', label: 'Center 1' },
      { id: 'center-2', label: 'Center 2' },
      { id: 'center-3', label: 'Center 3' },
      { id: 'center-4', label: 'Center 4' },
      ...withoutCenter
    ];
  };

  const floorTileSets = {
    x13: buildFloorTileSet(wallTileSets.x13),
    x47: buildFloorTileSet(wallTileSets.x47)
  };

  const isFloorDesigner = () => document.body.dataset.designer === 'floor';
  const getDesignerWallTileSets = () => (isFloorDesigner() ? floorTileSets : wallTileSets);
  const getWallTileDefinitions = () => {
    const sets = getDesignerWallTileSets();
    return sets[state.wallMode] || sets.x13;
  };

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

  const studioPalette = [
    { label: 'Deep Red', value: '#600018' },
    { label: 'Mid Red 1', value: '#a50223' },
    { label: 'Red', value: '#ed1c24' },
    { label: 'Mid Red 2', value: '#f46350' },
    { label: 'Light Red', value: '#fa8072' },
    { label: 'Dark Goldenrod', value: '#9c8431' },
    { label: 'Mid Goldenrod 1', value: '#b19931' },
    { label: 'Goldenrod', value: '#c5ad31' },
    { label: 'Mid Goldenrod 2', value: '#d8c84f' },
    { label: 'Light Goldenrod', value: '#e8d45f' },
    { label: 'Dark Olive', value: '#4a6b3a' },
    { label: 'Mid Olive 1', value: '#507e42' },
    { label: 'Olive', value: '#5a944a' },
    { label: 'Mid Olive 2', value: '#6fb86a' },
    { label: 'Light Olive', value: '#84c573' },
    { label: 'Dark Green', value: '#0eb968' },
    { label: 'Mid Green 1', value: '#14cb71' },
    { label: 'Green', value: '#13e67b' },
    { label: 'Mid Green 2', value: '#4ff39b' },
    { label: 'Light Green', value: '#87ff5e' },
    { label: 'Dark Teal', value: '#0c816e' },
    { label: 'Mid Teal 1', value: '#0e988e' },
    { label: 'Teal', value: '#10aea6' },
    { label: 'Mid Teal 2', value: '#11cbb0' },
    { label: 'Light Teal', value: '#13e1be' },
    { label: 'Dark Cyan', value: '#0f799f' },
    { label: 'Mid Cyan 1', value: '#368bbe' },
    { label: 'Cyan', value: '#60f7f2' },
    { label: 'Mid Cyan 2', value: '#8cf9f7' },
    { label: 'Light Cyan', value: '#bbfaf2' },
    { label: 'Dark Blue', value: '#28509e' },
    { label: 'Mid Blue 1', value: '#345fbf' },
    { label: 'Blue', value: '#4093e4' },
    { label: 'Mid Blue 2', value: '#5fb1f2' },
    { label: 'Light Blue', value: '#7dc7ff' },
    { label: 'Dark Indigo', value: '#4d31b8' },
    { label: 'Mid Indigo 1', value: '#5c40cf' },
    { label: 'Indigo', value: '#6b50f6' },
    { label: 'Mid Indigo 2', value: '#8294fc' },
    { label: 'Light Indigo', value: '#99b1fb' },
    { label: 'Dark Slate Blue', value: '#4a4284' },
    { label: 'Mid Slate Blue 1', value: '#6257a0' },
    { label: 'Slate Blue', value: '#7a71c4' },
    { label: 'Mid Slate Blue 2', value: '#9f9be2' },
    { label: 'Light Slate Blue', value: '#b5aef1' },
    { label: 'Dark Purple', value: '#780c99' },
    { label: 'Mid Purple 1', value: '#9031a6' },
    { label: 'Purple', value: '#aa38b9' },
    { label: 'Mid Purple 2', value: '#c47ad1' },
    { label: 'Light Purple', value: '#e09ff9' },
    { label: 'Dark Pink', value: '#cb007a' },
    { label: 'Mid Pink 1', value: '#d61c87' },
    { label: 'Pink', value: '#ec1f80' },
    { label: 'Mid Pink 2', value: '#f06a9c' },
    { label: 'Light Pink', value: '#f38da9' },
    { label: 'Dark Peach', value: '#9b5249' },
    { label: 'Mid Peach 1', value: '#b36c5c' },
    { label: 'Peach', value: '#d18078' },
    { label: 'Mid Peach 2', value: '#e9a49a' },
    { label: 'Light Peach', value: '#fab6a4' },
    { label: 'Dark Brown', value: '#684634' },
    { label: 'Mid Brown 1', value: '#7f5833' },
    { label: 'Brown', value: '#95682a' },
    { label: 'Mid Brown 2', value: '#b78e4f' },
    { label: 'Light Brown', value: '#dba463' },
    { label: 'Dark Tan', value: '#7b6352' },
    { label: 'Mid Tan 1', value: '#8b735f' },
    { label: 'Tan', value: '#9c846b' },
    { label: 'Mid Tan 2', value: '#b9a689' },
    { label: 'Light Tan', value: '#d6b594' },
    { label: 'Dark Beige', value: '#d18051' },
    { label: 'Mid Beige 1', value: '#de9a66' },
    { label: 'Beige', value: '#f8b277' },
    { label: 'Mid Beige 2', value: '#fbc297' },
    { label: 'Light Beige', value: '#ffc5a5' },
    { label: 'Dark Stone', value: '#6d643f' },
    { label: 'Mid Stone 1', value: '#7f7856' },
    { label: 'Stone', value: '#948c6b' },
    { label: 'Mid Stone 2', value: '#b0a98b' },
    { label: 'Light Stone', value: '#cdc59e' },
    { label: 'Dark Slate', value: '#333941' },
    { label: 'Mid Slate 1', value: '#4e5560' },
    { label: 'Slate', value: '#6d758d' },
    { label: 'Mid Slate 2', value: '#9299b0' },
    { label: 'Light Slate', value: '#b3b9d1' },
    { label: 'Black 0%', value: '#000000' },
    { label: 'Black 10%', value: '#1a1a1a' },
    { label: 'Black 20%', value: '#333333' },
    { label: 'Black 30%', value: '#4d4d4d' },
    { label: 'Black 40%', value: '#666666' },
    { label: 'Black 50%', value: '#808080' },
    { label: 'Black 60%', value: '#999999' },
    { label: 'Black 70%', value: '#b3b3b3' },
    { label: 'Black 80%', value: '#cccccc' },
    { label: 'Black 90%', value: '#e6e6e6' },
    { label: 'White 100%', value: '#ffffff' }
  ];

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
  const loadSharedClipboard = () => {
    if (sharedClipboard) return sharedClipboard;
    try {
      const raw = localStorage.getItem(sharedClipboardStorageKey);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.pixels)) return null;
      const width = Number.parseInt(parsed.width, 10);
      const height = Number.parseInt(parsed.height, 10);
      if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) return null;
      if (parsed.pixels.length !== width * height) return null;
      sharedClipboard = {
        version: 1,
        source: String(parsed.source || 'unknown'),
        width,
        height,
        pixels: parsed.pixels.map((value) => (typeof value === 'string' ? value : null)),
        copiedAt: Number(parsed.copiedAt) || Date.now()
      };
      return sharedClipboard;
    } catch (error) {
      return null;
    }
  };

  const saveSharedClipboard = (copied) => {
    if (!copied || !Array.isArray(copied.pixels)) return;
    const width = Number.parseInt(copied.width, 10);
    const height = Number.parseInt(copied.height, 10);
    if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) return;
    if (copied.pixels.length !== width * height) return;
    sharedClipboard = {
      version: 1,
      source: getDesignerKey(),
      width,
      height,
      pixels: copied.pixels.map((value) => (typeof value === 'string' ? value : null)),
      copiedAt: Date.now()
    };
    try {
      localStorage.setItem(sharedClipboardStorageKey, JSON.stringify(sharedClipboard));
    } catch (error) {
      // Ignore storage errors.
    }
  };

  const getAvailableCopiedData = () => {
    if (copyModeState.copied) {
      return copyModeState.copied;
    }
    const clipboard = loadSharedClipboard();
    if (!clipboard) return null;
    return {
      width: clipboard.width,
      height: clipboard.height,
      pixels: clipboard.pixels
    };
  };

  const getCacheKey = () => `8bits-editor:${getDesignerKey()}`;
  let cacheTimer = null;

  const buildCachePayload = () => ({
    version: 1,
    width: state.grid.width,
    height: state.grid.height,
    pixelSize: state.grid.pixelSize,
    checkerWhite: state.grid.checkerWhite,
    wallMode: state.wallMode,
    grid: {
      width: state.grid.width,
      height: state.grid.height,
      pixelSize: state.grid.pixelSize,
      checkerWhite: state.grid.checkerWhite
    },
    preview: state.preview,
    frames: state.frames.map((frame) => frame.pixels),
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
    wallGrid: {
      width: state.wallLayout.width,
      height: state.wallLayout.height
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

  const flushCache = () => {
    if (cacheTimer) {
      window.clearTimeout(cacheTimer);
      cacheTimer = null;
    }
    saveCache();
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
      if (!payload.wallLayout && payload.wallGrid) {
        payload.wallLayout = {
          width: payload.wallGrid.width,
          height: payload.wallGrid.height,
          cells: []
        };
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
          name: 'Studio 95 + Grayscale',
          colors: studioPalette,
          columns: 19,
          rows: 5,
          flow: 'column'
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

  const isGraphicDesigner = () => document.body.classList.contains('page-graphic-assets');

  const getCopySelectionRect = (indexA, indexB) => {
    const width = state.grid.width;
    const rowA = Math.floor(indexA / width);
    const colA = indexA % width;
    const rowB = Math.floor(indexB / width);
    const colB = indexB % width;
    return {
      minRow: Math.min(rowA, rowB),
      maxRow: Math.max(rowA, rowB),
      minCol: Math.min(colA, colB),
      maxCol: Math.max(colA, colB)
    };
  };

  const clearCopyModeState = ({ keepCopied = false } = {}) => {
    copyModeState.startIndex = null;
    copyModeState.selection = null;
    copyModeState.originIndex = null;
    copyModeState.awaitingOrigin = false;
    if (!keepCopied) {
      copyModeState.copied = null;
    }
  };

  const getCopySelectionDimensions = () => {
    if (!copyModeState.selection) return null;
    const { minRow, maxRow, minCol, maxCol } = copyModeState.selection;
    return {
      width: maxCol - minCol + 1,
      height: maxRow - minRow + 1
    };
  };

  const hasSquareCopySelection = () => {
    const dimensions = getCopySelectionDimensions();
    return Boolean(dimensions && dimensions.width === dimensions.height);
  };

  const getCopyStatusText = () => {
    const getText = (key, fallback) => translations[currentLanguage]?.[key] ?? fallback;
    const availableCopied = getAvailableCopiedData();
    if (activeTool !== 'copy') {
      return getText('panel.copyStatusInactive', 'Activate Copy Mode to start.');
    }
    if (copyModeState.awaitingOrigin) {
      return getText('panel.copyStatusOrigin', 'Click a pixel to set top-left origin.');
    }
    if (!copyModeState.selection) {
      if (availableCopied) {
        return getText('panel.copyStatusReady', 'Selection copied. Pick an origin pixel.');
      }
      return getText('panel.copyStatusSelect', 'Drag to select pixels, then press Copy.');
    }
    if (!hasSquareCopySelection()) {
      return getText('panel.copyStatusSquare', 'Rotation needs a square selection.');
    }
    if (!availableCopied) {
      return getText('panel.copyStatusSelect', 'Drag to select pixels, then press Copy.');
    }
    if (copyModeState.originIndex === null) {
      return getText('panel.copyStatusReady', 'Selection copied. Pick an origin pixel.');
    }
    const originX = (copyModeState.originIndex % state.grid.width) + 1;
    const originY = Math.floor(copyModeState.originIndex / state.grid.width) + 1;
    const baseText = getText('panel.copyStatusPaste', 'Origin selected. Press Paste.');
    return `${baseText} (${originX},${originY})`;
  };

  const renderCopyModeState = () => {
    const panel = qs('#copy-mode-panel');
    if (!panel) return;
    const canvas = qs('#pixel-canvas');
    const copySelectionButton = qs('#copy-selection');
    const setOriginButton = qs('#copy-set-origin');
    const rotateLeftButton = qs('#copy-rotate-left');
    const rotateRightButton = qs('#copy-rotate-right');
    const pasteButton = qs('#copy-paste');
    const resetButton = qs('#copy-reset');
    const status = qs('#copy-status');
    const selectionSize = qs('#copy-selection-size');
    const availableCopied = getAvailableCopiedData();

    panel.classList.toggle('is-hidden', !isGraphicDesigner());

    if (status) {
      status.textContent = getCopyStatusText();
    }

    if (selectionSize) {
      const getText = (key, fallback) => translations[currentLanguage]?.[key] ?? fallback;
      const dimensions = getCopySelectionDimensions();
      if (!dimensions) {
        selectionSize.textContent = getText('panel.copySelectionSizeNone', 'No selection');
      } else {
        selectionSize.textContent = `${getText('panel.copySelectionSize', 'Selection')}: ${dimensions.width} x ${dimensions.height} px`;
      }
    }

    if (copySelectionButton) {
      copySelectionButton.disabled = activeTool !== 'copy' || !copyModeState.selection;
    }
    if (setOriginButton) {
      setOriginButton.disabled = activeTool !== 'copy' || !availableCopied;
    }
    if (rotateLeftButton) {
      rotateLeftButton.disabled = activeTool !== 'copy' || !hasSquareCopySelection();
    }
    if (rotateRightButton) {
      rotateRightButton.disabled = activeTool !== 'copy' || !hasSquareCopySelection();
    }
    if (pasteButton) {
      pasteButton.disabled = activeTool !== 'copy' || !availableCopied || copyModeState.originIndex === null;
    }
    if (resetButton) {
      const hasState = Boolean(copyModeState.selection || copyModeState.copied || copyModeState.awaitingOrigin || copyModeState.originIndex !== null);
      resetButton.disabled = !hasState;
    }

    if (canvas) {
      canvas.classList.toggle('is-copy-origin-pick', activeTool === 'copy' && copyModeState.awaitingOrigin);
    }

    if (!pixelCells.length) return;
    pixelCells.forEach((cell) => {
      cell.classList.remove('is-copy-selected', 'is-copy-origin');
    });

    if (copyModeState.selection) {
      const { minRow, maxRow, minCol, maxCol } = copyModeState.selection;
      for (let row = minRow; row <= maxRow; row += 1) {
        for (let col = minCol; col <= maxCol; col += 1) {
          const index = row * state.grid.width + col;
          pixelCells[index]?.classList.add('is-copy-selected');
        }
      }
    }

    if (copyModeState.originIndex !== null) {
      pixelCells[copyModeState.originIndex]?.classList.add('is-copy-origin');
    }
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
    renderCopyModeState();
  };

  const buildPixelCanvas = () => {
    const canvas = qs('#pixel-canvas');
    if (!canvas) return;

    const { width, height } = state.grid;
    document.documentElement.style.setProperty('--grid-columns', width);
    document.documentElement.style.setProperty('--grid-rows', height);
    canvas.classList.toggle('checker-white', state.grid.checkerWhite);

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

    ensureHistorySnapshot();
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

    ensureHistorySnapshot();
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
    const resolveCellFromEvent = (event) => {
      const direct = event.target?.closest?.('.pixel-cell');
      if (direct) return direct;
      const pointed = document.elementFromPoint(event.clientX, event.clientY);
      const fromPoint = pointed?.closest?.('.pixel-cell');
      if (fromPoint && canvas.contains(fromPoint)) return fromPoint;
      return null;
    };

    const handlePointerDown = (event) => {
      const cell = resolveCellFromEvent(event);
      if (!cell) return;
      event.preventDefault();
      isDrawing = true;
      canvas.setPointerCapture(event.pointerId);
      if (activeTool === 'copy' && isGraphicDesigner()) {
        const index = Number(cell.dataset.index);
        if (Number.isNaN(index)) return;
        if (copyModeState.awaitingOrigin) {
          copyModeState.originIndex = index;
          copyModeState.awaitingOrigin = false;
          renderCopyModeState();
          return;
        }
        copyModeState.startIndex = index;
        copyModeState.selection = getCopySelectionRect(index, index);
        copyModeState.originIndex = null;
        renderCopyModeState();
        return;
      }
      if (activeTool === 'pencil' || activeTool === 'eraser' || activeTool === 'fill') {
        beginHistoryBatch();
      }
      applyToolToCell(cell);
    };

    const handlePointerMove = (event) => {
      const cell = resolveCellFromEvent(event);
      if (!cell) return;
      if (activeTool === 'copy' && isGraphicDesigner()) {
        if (!isDrawing || copyModeState.awaitingOrigin || copyModeState.startIndex === null) return;
        const index = Number(cell.dataset.index);
        if (Number.isNaN(index)) return;
        copyModeState.selection = getCopySelectionRect(copyModeState.startIndex, index);
        renderCopyModeState();
        return;
      }
      const allowDragTool = activeTool === 'pencil' || activeTool === 'eraser';

      if (isDrawing) {
        if (!allowDragTool) return;
        applyToolToCell(cell, { dragging: true });
        return;
      }

      if ((isCtrlDrawing || event.ctrlKey) && allowDragTool) {
        if (!historyBatchActive) {
          beginHistoryBatch();
        }
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
      if (activeTool === 'copy') {
        copyModeState.startIndex = null;
        renderCopyModeState();
        return;
      }
      endHistoryBatch();
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
        endHistoryBatch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', () => {
      isCtrlDrawing = false;
      endHistoryBatch();
    });
  };

  const bindToolSelection = () => {
    const toolButtons = qsa('.tool-selector-button');
    if (!toolButtons.length) return;

    toolButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const previousTool = activeTool;
        const activeButton = qs('.tool-selector-button.is-active');
        if (activeButton) {
          activeButton.classList.remove('is-active');
        }
        button.classList.add('is-active');
        activeTool = button.dataset.tool || 'pencil';
        if (previousTool === 'copy' && activeTool !== 'copy') {
          copyModeState.awaitingOrigin = false;
          copyModeState.startIndex = null;
        }
        updateActiveToolLabel();
        renderCopyModeState();
      });
    });
  };

  const bindCopyModeControls = () => {
    const copySelectionButton = qs('#copy-selection');
    const setOriginButton = qs('#copy-set-origin');
    const rotateLeftButton = qs('#copy-rotate-left');
    const rotateRightButton = qs('#copy-rotate-right');
    const pasteButton = qs('#copy-paste');
    const resetButton = qs('#copy-reset');
    if (!copySelectionButton && !setOriginButton && !rotateLeftButton && !rotateRightButton && !pasteButton && !resetButton) return;

    copySelectionButton?.addEventListener('click', () => {
      if (activeTool !== 'copy' || !copyModeState.selection) return;
      const pixels = getActivePixels();
      if (!pixels) return;
      const { minRow, maxRow, minCol, maxCol } = copyModeState.selection;
      const width = maxCol - minCol + 1;
      const height = maxRow - minRow + 1;
      const data = [];

      for (let row = minRow; row <= maxRow; row += 1) {
        for (let col = minCol; col <= maxCol; col += 1) {
          data.push(pixels[row * state.grid.width + col] ?? null);
        }
      }

      copyModeState.copied = {
        width,
        height,
        pixels: data
      };
      saveSharedClipboard(copyModeState.copied);
      copyModeState.originIndex = null;
      copyModeState.awaitingOrigin = false;
      renderCopyModeState();
    });

    setOriginButton?.addEventListener('click', () => {
      const availableCopied = getAvailableCopiedData();
      if (activeTool !== 'copy' || !availableCopied) return;
      if (!copyModeState.copied) {
        copyModeState.copied = {
          width: availableCopied.width,
          height: availableCopied.height,
          pixels: availableCopied.pixels.slice()
        };
      }
      copyModeState.awaitingOrigin = true;
      copyModeState.originIndex = null;
      renderCopyModeState();
    });

    const rotateSelection = (clockwise) => {
      if (activeTool !== 'copy' || !copyModeState.selection || !hasSquareCopySelection()) return;
      const pixels = getActivePixels();
      if (!pixels) return;
      const { minRow, maxRow, minCol, maxCol } = copyModeState.selection;
      const size = maxCol - minCol + 1;
      const source = [];

      for (let row = minRow; row <= maxRow; row += 1) {
        for (let col = minCol; col <= maxCol; col += 1) {
          source.push(pixels[row * state.grid.width + col] ?? null);
        }
      }

      let changed = false;
      for (let row = 0; row < size; row += 1) {
        for (let col = 0; col < size; col += 1) {
          const targetIndex = (minRow + row) * state.grid.width + (minCol + col);
          const sourceRow = clockwise ? size - 1 - col : col;
          const sourceCol = clockwise ? row : size - 1 - row;
          const sourceIndex = sourceRow * size + sourceCol;
          const nextColor = source[sourceIndex] ?? null;
          if (pixels[targetIndex] === nextColor) continue;
          if (!changed) {
            ensureHistorySnapshot();
          }
          changed = true;
          pixels[targetIndex] = nextColor;
          setCellColor(pixelCells[targetIndex], nextColor);
        }
      }

      if (!changed) return;
      renderFrameThumbnail(state.activeFrameIndex);
      renderWallTileThumbnail(state.activeWallTileIndex);
      renderPreviews();
      scheduleCacheSave();
    };

    rotateLeftButton?.addEventListener('click', () => {
      rotateSelection(false);
    });

    rotateRightButton?.addEventListener('click', () => {
      rotateSelection(true);
    });

    pasteButton?.addEventListener('click', () => {
      const availableCopied = getAvailableCopiedData();
      if (activeTool !== 'copy' || !availableCopied || copyModeState.originIndex === null) return;
      const pixels = getActivePixels();
      if (!pixels) return;

      const originRow = Math.floor(copyModeState.originIndex / state.grid.width);
      const originCol = copyModeState.originIndex % state.grid.width;
      const { width, height, pixels: copiedPixels } = availableCopied;

      let changed = false;

      for (let row = 0; row < height; row += 1) {
        const destinationRow = originRow + row;
        if (destinationRow < 0 || destinationRow >= state.grid.height) continue;
        for (let col = 0; col < width; col += 1) {
          const destinationCol = originCol + col;
          if (destinationCol < 0 || destinationCol >= state.grid.width) continue;
          const targetIndex = destinationRow * state.grid.width + destinationCol;
          const sourceIndex = row * width + col;
          const nextColor = copiedPixels[sourceIndex] ?? null;
          if (pixels[targetIndex] === nextColor) continue;
          if (!changed) {
            ensureHistorySnapshot();
          }
          changed = true;
          pixels[targetIndex] = nextColor;
          setCellColor(pixelCells[targetIndex], nextColor);
        }
      }

      if (!changed) return;
      copyModeState.awaitingOrigin = false;
      renderCopyModeState();
      renderFrameThumbnail(state.activeFrameIndex);
      renderWallTileThumbnail(state.activeWallTileIndex);
      renderPreviews();
      scheduleCacheSave();
    });

    resetButton?.addEventListener('click', () => {
      clearCopyModeState();
      renderCopyModeState();
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
    const checkerToggle = qs('#checker-toggle');
    if (!widthInput || !heightInput || !applyButton) return;

    const applyGrid = () => {
      const widthValue = Number.parseInt(widthInput.value, 10);
      const heightValue = Number.parseInt(heightInput.value, 10);
      const nextWidth = clamp(Number.isFinite(widthValue) ? widthValue : state.grid.width, 1, 128);
      const nextHeight = clamp(Number.isFinite(heightValue) ? heightValue : state.grid.height, 1, 128);

      widthInput.value = String(nextWidth);
      heightInput.value = String(nextHeight);

      if (nextWidth === state.grid.width && nextHeight === state.grid.height) return;
      pushHistorySnapshot();

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

      clearCopyModeState({ keepCopied: true });
      buildPixelCanvas();
      renderActivePixelGrid();
      renderFramesStrip();
      renderWallTilesGrid();
      renderPreviews();
      scheduleCacheSave(true);
    };

    applyButton.addEventListener('click', applyGrid);
    if (checkerToggle) {
      checkerToggle.checked = state.grid.checkerWhite;
      checkerToggle.addEventListener('change', () => {
        state.grid.checkerWhite = checkerToggle.checked;
        const canvas = qs('#pixel-canvas');
        if (canvas) {
          canvas.classList.toggle('checker-white', state.grid.checkerWhite);
        }
        scheduleCacheSave();
      });
    }
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
        pushHistorySnapshot();
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
        pushHistorySnapshot();
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
        pushHistorySnapshot();
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
        pushHistorySnapshot();
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
        pushHistorySnapshot();
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
        pushHistorySnapshot();
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
    const resolvedMode = mode === 'floor' ? 'walls' : mode;
    state.preview.mode = resolvedMode;
    qsa('.preview-mode-tab').forEach((tab) => {
      const isActive = tab.dataset.previewMode === resolvedMode;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });

    qsa('.preview-mode-panel').forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.previewPanel === resolvedMode);
    });

    const framesPanel = qs('#frames-panel');
    const wallTilesPanel = qs('#wall-tiles-panel');
    if (framesPanel) {
      framesPanel.classList.toggle('is-hidden', resolvedMode !== 'sprite');
    }
    if (wallTilesPanel) {
      wallTilesPanel.classList.toggle('is-hidden', resolvedMode !== 'walls');
    }

    if (resolvedMode === 'sprite') {
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
    const spriteBg = qs('#sprite-bg');

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

    spriteBg?.addEventListener('change', () => {
      state.preview.sprite.background = spriteBg.value || 'transparent';
      renderSpritePreview();
      scheduleCacheSave();
    });

    const wallsApply = qs('#walls-apply');
    const wallsCols = qs('#walls-cols');
    const wallsRows = qs('#walls-rows');
    const wallsGridToggle = qs('#walls-grid-toggle');
    const wallsZoom = qs('#walls-zoom');
    const wallModeSelect = qs('#wall-mode');
    const wallsRandomize = qs('#walls-randomize');

    const applyWallsGrid = () => {
      const cols = clamp(Number.parseInt(wallsCols?.value, 10) || state.wallLayout.width, 2, 32);
      const rows = clamp(Number.parseInt(wallsRows?.value, 10) || state.wallLayout.height, 2, 32);
      if (cols === state.wallLayout.width && rows === state.wallLayout.height) return;
      pushHistorySnapshot();
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
      pushHistorySnapshot();
      setWallMode(mode, { preserve: true });
      state.wallLayout.cells = generateWallLayout(state.wallMode, state.wallLayout.width, state.wallLayout.height);
      renderWallTilesGrid();
      renderActivePixelGrid();
      renderWallPaintGrid();
      renderWallsPreview();
      scheduleCacheSave(true);
    });

    wallsRandomize?.addEventListener('click', () => {
      pushHistorySnapshot();
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
    if (payload.checkerWhite !== undefined) {
      state.grid.checkerWhite = Boolean(payload.checkerWhite);
    } else if (payload.grid?.checkerWhite !== undefined) {
      state.grid.checkerWhite = Boolean(payload.grid.checkerWhite);
    }

    if (Array.isArray(payload.frames) && payload.frames.length) {
      state.frames = payload.frames.map((entry) => {
        const pixels = Array.isArray(entry) ? entry : entry?.pixels;
        return {
          id: createId(),
          pixels: normalizePixels(pixels, width, height)
        };
      });
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
        let source = tileMap.get(definition.id);
        if (!source && definition.id.startsWith('center-')) {
          source = tileMap.get('center') || tileMap.get('center-alt');
        }
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
      const layoutWidth = clamp(Number.parseInt(payload.wallLayout.width, 10) || state.wallLayout.width, 2, 32);
      const layoutHeight = clamp(Number.parseInt(payload.wallLayout.height, 10) || state.wallLayout.height, 2, 32);
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
    const spriteBg = qs('#sprite-bg');
    if (spriteBg && state.preview.sprite?.background) {
      spriteBg.value = state.preview.sprite.background;
    }
    const checkerToggle = qs('#checker-toggle');
    if (checkerToggle) checkerToggle.checked = state.grid.checkerWhite;

    clearCopyModeState();
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

  const exportWallTilesPng = () => {
    if (!state.wallTiles.length) return;
    const { width, height } = state.grid;
    const count = state.wallTiles.length;
    const columns = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / columns);
    const canvas = document.createElement('canvas');
    canvas.width = width * columns;
    canvas.height = height * rows;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    state.wallTiles.forEach((tile, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);
      const tempCanvas = document.createElement('canvas');
      drawPixelsToCanvas(tile.pixels, tempCanvas, width, height, 1);
      ctx.drawImage(tempCanvas, col * width, row * height);
    });

    const baseName = sanitizeFilename(getExportName());
    downloadCanvas(canvas, `${baseName}_tiles.png`);
  };

  const clearActiveCanvas = () => {
    const pixels = getActivePixels();
    if (!pixels) return;
    pushHistorySnapshot();
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

    const background = state.preview.sprite.background || 'transparent';
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width * zoom;
    canvas.height = height * zoom;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (background === 'transparent') {
      const size = Math.max(4, Math.floor(zoom * 2));
      for (let y = 0; y < canvas.height; y += size) {
        for (let x = 0; x < canvas.width; x += size) {
          const isLight = (x / size + y / size) % 2 === 0;
          ctx.fillStyle = isLight ? '#0f0f0f' : '#1a1a1a';
          ctx.fillRect(x, y, size, size);
        }
      }
    } else {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    for (let row = 0; row < height; row += 1) {
      for (let col = 0; col < width; col += 1) {
        const color = pixels[row * width + col];
        if (!color) continue;
        ctx.fillStyle = color;
        ctx.fillRect(col * zoom, row * zoom, zoom, zoom);
      }
    }
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

  const matchesPattern = (pattern, sample) => {
    for (let i = 0; i < pattern.length; i += 1) {
      const expected = pattern[i];
      if (expected === null) continue;
      if (sample[i] !== expected) return false;
    }
    return true;
  };

  const patternFromRows = (rows) => rows.join('').split('').map((char) => {
    if (char === '+') return null;
    if (char === 'X') return true;
    return false;
  });

  const getWallTileIdX13 = ({ n, s, w, e, nw, ne, sw, se }, x, y) => {
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

    const sample = [
      nw, n, ne,
      w, true, e,
      sw, s, se
    ];

    const patterns = [
      // Inner corners (concave)
      { id: 'corner-in-bottom-right', mask: patternFromRows(['OX+', 'XXX', '+X+']) },
      { id: 'corner-in-bottom-left', mask: patternFromRows(['+XO', 'XXX', '+X+']) },
      { id: 'corner-in-top-right', mask: patternFromRows(['+X+', 'XXX', 'OX+']) },
      { id: 'corner-in-top-left', mask: patternFromRows(['+X+', 'XXX', '+XO']) },

      // Outer corners (convex)
      { id: 'corner-out-bottom-right', mask: patternFromRows(['OO+', 'OXX', '+XX']) },
      { id: 'corner-out-bottom-left', mask: patternFromRows(['+OO', 'XXO', 'XX+']) },
      { id: 'corner-out-top-right', mask: patternFromRows(['+XX', 'OXX', 'OO+']) },
      { id: 'corner-out-top-left', mask: patternFromRows(['XX+', 'XXO', '+OO']) },

      // Edges (strict + relaxed)
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
      const { id, mask } = patterns[i];
      if (matchesPattern(mask, sample)) return id;
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
      if (n && e) return 'corner-out-bottom-left';
      if (n && w) return 'corner-out-bottom-right';
      if (s && e) return 'corner-out-top-left';
      return 'corner-out-top-right';
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

  const resolveFloorCenterTileId = (tileId, x, y) => {
    if (!isFloorDesigner()) return tileId;
    if (tileId !== 'center' && tileId !== 'center-alt') return tileId;
    const seed = Math.abs((((x + 1) * 73856093) ^ ((y + 1) * 19349663)) >>> 0);
    return `center-${(seed % 4) + 1}`;
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
        const rawTileId = isWallCell ? getWallTileId(x, y) : getHoleTileId(x, y);
        if (!rawTileId) continue;
        const tileId = resolveFloorCenterTileId(rawTileId, x, y);
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
    ensureHistorySnapshot();
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
      if (activeTool === 'pencil' || activeTool === 'eraser' || activeTool === 'fill') {
        beginHistoryBatch();
      }
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

      if (!isDrawing && !historyBatchActive) {
        beginHistoryBatch();
      }
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
      endHistoryBatch();
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

    ensureHistorySnapshot();
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

    qsa('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (dictionary[key]) {
        element.setAttribute('placeholder', dictionary[key]);
      }
    });

    let pageTitleKey = 'title.graphic';
    if (document.body.classList.contains('page-home')) {
      pageTitleKey = 'title.home';
    } else if (document.body.classList.contains('page-map')) {
      pageTitleKey = 'title.map';
    } else if (document.body.classList.contains('page-world')) {
      pageTitleKey = 'title.world';
    } else if (document.body.classList.contains('page-tester')) {
      pageTitleKey = 'title.tester';
    } else {
      const designer = document.body.dataset.designer;
      if (designer === 'tiles') pageTitleKey = 'title.tiles';
      if (designer === 'sprite') pageTitleKey = 'title.sprite';
      if (designer === 'walls') pageTitleKey = 'title.walls';
      if (designer === 'floor') pageTitleKey = 'title.floor';
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
    renderCopyModeState();
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
  };

  const bindExportButton = () => {
    const exportButton = qs('#export-png');
    const exportJsonButton = qs('#export-json');
    const importJsonButton = qs('#import-json');
    const importJsonFile = qs('#import-json-file');
    const clearButton = qs('#clear-canvas');
    const exportTilesButton = qs('#export-tiles-png');

    exportButton?.addEventListener('click', exportActivePixels);
    exportJsonButton?.addEventListener('click', exportJson);
    clearButton?.addEventListener('click', clearActiveCanvas);
    exportTilesButton?.addEventListener('click', exportWallTilesPng);

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
          if (!payload || !payload.width || !payload.height) return;
          const snapshot = buildHistorySnapshot();
          const applied = applyAssetPayload(payload);
          if (applied) {
            undoStack.push(snapshot);
            if (undoStack.length > historyLimit) {
              undoStack.shift();
            }
            redoStack = [];
            scheduleCacheSave(true);
          }
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

  const bindUndoRedo = () => {
    window.addEventListener('keydown', (event) => {
      const target = event.target;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable)) {
        return;
      }

      const platform = navigator.platform || '';
      const isMac = /mac/i.test(platform);
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
    });
  };

  const initMapCreator = () => {
    const assetList = qs('#asset-list');
    const assetGrid = qs('#asset-grid');
    const assetGridLabel = qs('#asset-grid-label');
    const addAssetButton = qs('#add-asset');
    const mapGrid = qs('#map-grid');
    const mapWidthInput = qs('#map-width');
    const mapHeightInput = qs('#map-height');
    const mapApplyButton = qs('#apply-map-size');
    const mapCellSize = qs('#map-cell-size');
    const mapNameInput = qs('#map-name');
    const mapUndoButton = qs('#map-undo');
    const mapRedoButton = qs('#map-redo');
    const mapExportButton = qs('#map-export');
    const mapImportButton = qs('#map-import');
    const mapImportFile = qs('#map-import-file');
    const mapRandomizeButton = qs('#map-randomize');
    const mapRandomizeRangeInput = qs('#map-randomize-range');
    const mapOptionsButton = qs('#map-options');
    const cacheModal = qs('#map-cache-modal');
    const cacheCloseButton = qs('#map-cache-close');
    const cachePurgeButton = qs('#map-cache-purge');
    const cacheList = qs('#map-cache-list');
    const cacheCount = qs('#map-cache-count');
    const cacheSize = qs('#map-cache-size');
    const cacheEmpty = qs('#map-cache-empty');

    if (!assetList || !assetGrid || !mapGrid) return;

    const mapState = {
      assets: [],
      selectedAssetId: null,
      selectedSpriteIndex: 1,
      mode: 'manual',
      tool: 'pencil',
      markerMode: null,
      randomize: false,
      randomizeRange: '',
      view: 'normal',
      shiftPaint: false,
      shiftPaintIndex: null,
      map: {
        name: '',
        width: 50,
        height: 50,
        cellSize: 16,
        cells: [],
        markers: []
      },
      isDrawing: false
    };

    const getText = (key, fallback = '') => translations[currentLanguage]?.[key] ?? fallback;
    const getAssetById = (id) => mapState.assets.find((asset) => asset.id === id);
    const mapCacheKey = '8bits-map-cache-state';
    let mapSaveTimer = null;
    const mapHistoryLimit = 10;
    let mapUndoStack = [];
    let mapRedoStack = [];
    let mapHistoryBatchActive = false;

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
      req.onsuccess = () => {
        const results = req.result || [];
        resolve(results[0] || null);
      };
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
        entries
          .sort((a, b) => String(a.name || '').localeCompare(String(b.name || '')))
          .forEach((entry) => {
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

    const openCacheModal = async () => {
      if (!cacheModal) return;
      cacheModal.classList.remove('is-hidden');
      cacheModal.setAttribute('aria-hidden', 'false');
      await updateCacheModal();
    };

    const closeCacheModal = () => {
      if (!cacheModal) return;
      cacheModal.classList.add('is-hidden');
      cacheModal.setAttribute('aria-hidden', 'true');
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

    const loadCachedImageForAsset = async (asset) => {
      if (!asset || asset.imageUrl) return;
      try {
        let entry = null;
        if (asset.cacheKey) {
          entry = await cacheGet(asset.cacheKey);
        }
        if (!entry && asset.fileName) {
          entry = await cacheGetByName(asset.fileName);
        }
        if (entry?.blob) {
          asset.imageUrl = URL.createObjectURL(entry.blob);
          asset.cacheKey = entry.key;
        }
      } catch (error) {
        // ignore
      }
    };

    const loadCachedImagesForAssets = async () => {
      await Promise.all(mapState.assets.map((asset) => loadCachedImageForAsset(asset)));
    };
    const sortAssetsByNumber = () => {
      mapState.assets.sort((a, b) => (a.number || 0) - (b.number || 0));
    };

    const getNextAvailableNumber = () => {
      const used = new Set(mapState.assets.map((asset) => asset.number));
      let next = 1;
      while (used.has(next)) next += 1;
      return next;
    };

    const swapAssetNumbers = (assetId, desired) => {
      const targetNumber = clamp(Number.parseInt(desired, 10) || 1, 1, 9999);
      const currentAsset = mapState.assets.find((asset) => asset.id === assetId);
      if (!currentAsset) return;
      const currentNumber = currentAsset.number;
      if (targetNumber === currentNumber) return;
      const existing = mapState.assets.find((asset) => asset.id !== assetId && asset.number === targetNumber);
      if (existing) {
        existing.number = currentNumber;
      }
      currentAsset.number = targetNumber;
    };

    const normalizeAssetNumbers = () => {
      const used = new Set();
      mapState.assets.forEach((asset) => {
        let next = Number.parseInt(asset.number, 10);
        if (!Number.isFinite(next) || next < 1) next = 1;
        while (used.has(next)) next += 1;
        asset.number = next;
        used.add(next);
      });
      sortAssetsByNumber();
    };

    const hslToHex = (h, s, l) => {
      const normalize = (value) => {
        const v = Math.round(value * 255);
        return v.toString(16).padStart(2, '0');
      };
      const sNorm = s / 100;
      const lNorm = l / 100;
      const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = lNorm - c / 2;
      let r = 0;
      let g = 0;
      let b = 0;
      if (h < 60) [r, g, b] = [c, x, 0];
      else if (h < 120) [r, g, b] = [x, c, 0];
      else if (h < 180) [r, g, b] = [0, c, x];
      else if (h < 240) [r, g, b] = [0, x, c];
      else if (h < 300) [r, g, b] = [x, 0, c];
      else [r, g, b] = [c, 0, x];
      return `#${normalize(r + m)}${normalize(g + m)}${normalize(b + m)}`;
    };

    const getAssetColor = (number) => {
      const hue = (number * 47) % 360;
      return hslToHex(hue, 55, 38);
    };

    const createAsset = () => {
      const id = createId();
      const number = getNextAvailableNumber();
      const asset = {
        id,
        name: '',
        fileName: '',
        imageUrl: '',
        number,
        cols: 4,
        rows: 4,
        spriteWidth: 16,
        spriteHeight: 16,
        spriteCount: 16,
        type: 'blocking',
        color: getAssetColor(number),
        cacheKey: null
      };
      mapState.assets.push(asset);
      if (!mapState.selectedAssetId) {
        mapState.selectedAssetId = id;
      }
    };

    const resizeMap = (nextWidth, nextHeight) => {
      const width = clamp(nextWidth, 4, 200);
      const height = clamp(nextHeight, 4, 200);
      ensureMapHistorySnapshot();
      const resized = Array.from({ length: width * height }, () => null);
      const resizedMarkers = Array.from({ length: width * height }, () => null);
      const copyWidth = Math.min(mapState.map.width, width);
      const copyHeight = Math.min(mapState.map.height, height);
      for (let row = 0; row < copyHeight; row += 1) {
        for (let col = 0; col < copyWidth; col += 1) {
          const prevIndex = row * mapState.map.width + col;
          const nextIndex = row * width + col;
          resized[nextIndex] = mapState.map.cells[prevIndex];
          resizedMarkers[nextIndex] = mapState.map.markers[prevIndex] || null;
        }
      }
      mapState.map.width = width;
      mapState.map.height = height;
      mapState.map.cells = resized;
      mapState.map.markers = resizedMarkers;
    };

    const ensureMapCells = () => {
      const size = mapState.map.width * mapState.map.height;
      if (mapState.map.cells.length !== size) {
        mapState.map.cells = Array.from({ length: size }, () => null);
      }
      if (mapState.map.markers.length !== size) {
        mapState.map.markers = Array.from({ length: size }, () => null);
      }
    };

    const cloneMapCell = (cell) => {
      if (!cell) return null;
      return {
        assetId: cell.assetId || null,
        spriteIndex: Number.isInteger(cell.spriteIndex) ? cell.spriteIndex : null,
        auto: cell.auto !== false
      };
    };

    const cloneMapAssets = (assets) => assets.map((asset) => ({ ...asset }));
    const cloneMapCells = (cells) => cells.map((cell) => cloneMapCell(cell));

    const buildMapHistorySnapshot = () => ({
      assets: cloneMapAssets(mapState.assets),
      selectedAssetId: mapState.selectedAssetId,
      selectedSpriteIndex: mapState.selectedSpriteIndex,
      mode: mapState.mode,
      tool: mapState.tool,
      markerMode: mapState.markerMode,
      randomize: mapState.randomize,
      randomizeRange: mapState.randomizeRange,
      view: mapState.view,
      map: {
        name: mapState.map.name || '',
        width: mapState.map.width,
        height: mapState.map.height,
        cellSize: mapState.map.cellSize,
        cells: cloneMapCells(mapState.map.cells),
        markers: mapState.map.markers.slice()
      }
    });

    const updateMapUndoRedoControls = () => {
      if (mapUndoButton) mapUndoButton.disabled = mapUndoStack.length === 0;
      if (mapRedoButton) mapRedoButton.disabled = mapRedoStack.length === 0;
    };

    const pushMapHistorySnapshot = () => {
      mapUndoStack.push(buildMapHistorySnapshot());
      if (mapUndoStack.length > mapHistoryLimit) {
        mapUndoStack.shift();
      }
      mapRedoStack = [];
      updateMapUndoRedoControls();
    };

    const ensureMapHistorySnapshot = () => {
      if (mapHistoryBatchActive) return;
      pushMapHistorySnapshot();
    };

    const beginMapHistoryBatch = () => {
      if (mapHistoryBatchActive) return;
      pushMapHistorySnapshot();
      mapHistoryBatchActive = true;
    };

    const endMapHistoryBatch = () => {
      mapHistoryBatchActive = false;
    };

    const applyMapHistorySnapshot = (snapshot) => {
      if (!snapshot?.map) return;
      mapState.assets = cloneMapAssets(snapshot.assets || []);
      mapState.selectedAssetId = snapshot.selectedAssetId || mapState.assets[0]?.id || null;
      mapState.selectedSpriteIndex = snapshot.selectedSpriteIndex || 1;
      mapState.mode = snapshot.mode || 'manual';
      mapState.tool = snapshot.tool || 'pencil';
      mapState.markerMode = snapshot.markerMode || null;
      mapState.randomize = Boolean(snapshot.randomize);
      mapState.randomizeRange = String(snapshot.randomizeRange || '');
      mapState.view = snapshot.view || 'normal';
      mapState.map.name = snapshot.map.name || '';
      mapState.map.width = clamp(Number.parseInt(snapshot.map.width, 10) || 50, 4, 200);
      mapState.map.height = clamp(Number.parseInt(snapshot.map.height, 10) || 50, 4, 200);
      mapState.map.cellSize = clamp(Number.parseInt(snapshot.map.cellSize, 10) || 16, 10, 32);
      mapState.map.cells = cloneMapCells(Array.isArray(snapshot.map.cells) ? snapshot.map.cells : []);
      mapState.map.markers = Array.isArray(snapshot.map.markers) ? snapshot.map.markers.slice() : [];
      ensureMapCells();

      if (mapNameInput) mapNameInput.value = mapState.map.name;
      if (mapWidthInput) mapWidthInput.value = String(mapState.map.width);
      if (mapHeightInput) mapHeightInput.value = String(mapState.map.height);
      if (mapCellSize) mapCellSize.value = String(mapState.map.cellSize);

      qsa('[data-map-mode]').forEach((button) => {
        button.classList.toggle('is-active', (button.dataset.mapMode || 'manual') === mapState.mode);
      });
      qsa('[data-map-tool]').forEach((button) => {
        button.classList.toggle('is-active', (button.dataset.mapTool || 'pencil') === mapState.tool);
      });
      qsa('[data-map-marker]').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.mapMarker === mapState.markerMode);
      });
      qsa('[data-map-view]').forEach((button) => {
        button.classList.toggle('is-active', (button.dataset.mapView || 'normal') === mapState.view);
      });

      renderAssetList();
      renderAssetGrid();
      renderMapGrid();
      updateRandomizeControls();
      scheduleMapSave();
    };

    const undoMapHistory = () => {
      if (!mapUndoStack.length) return;
      const snapshot = mapUndoStack.pop();
      mapRedoStack.push(buildMapHistorySnapshot());
      if (mapRedoStack.length > mapHistoryLimit) {
        mapRedoStack.shift();
      }
      endMapHistoryBatch();
      applyMapHistorySnapshot(snapshot);
      updateMapUndoRedoControls();
    };

    const redoMapHistory = () => {
      if (!mapRedoStack.length) return;
      const snapshot = mapRedoStack.pop();
      mapUndoStack.push(buildMapHistorySnapshot());
      if (mapUndoStack.length > mapHistoryLimit) {
        mapUndoStack.shift();
      }
      endMapHistoryBatch();
      applyMapHistorySnapshot(snapshot);
      updateMapUndoRedoControls();
    };

    const scheduleMapSave = () => {
      if (!window.localStorage) return;
      if (mapSaveTimer) {
        clearTimeout(mapSaveTimer);
      }
      mapSaveTimer = setTimeout(() => {
        try {
          localStorage.setItem(mapCacheKey, JSON.stringify(buildMapPayload()));
        } catch (error) {
          // ignore storage errors
        }
      }, 200);
    };

    const loadCachedMapState = () => {
      if (!window.localStorage) return false;
      try {
        const raw = localStorage.getItem(mapCacheKey);
        if (!raw) return false;
        const payload = JSON.parse(raw);
        applyMapPayload(payload);
        return true;
      } catch (error) {
        return false;
      }
    };

    const shiftMap = (dx, dy) => {
      const width = mapState.map.width;
      const height = mapState.map.height;
      if (!Number.isFinite(dx) || !Number.isFinite(dy) || (dx === 0 && dy === 0)) return;
      ensureMapHistorySnapshot();
      ensureMapCells();
      const total = width * height;
      const nextCells = Array.from({ length: total }, () => null);
      const nextMarkers = Array.from({ length: total }, () => null);

      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          const index = y * width + x;
          const cell = mapState.map.cells[index];
          const marker = mapState.map.markers[index];
          if (!cell && !marker) continue;
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
          const nextIndex = ny * width + nx;
          if (cell) nextCells[nextIndex] = cell;
          if (marker) nextMarkers[nextIndex] = marker;
        }
      }

      mapState.map.cells = nextCells;
      mapState.map.markers = nextMarkers;
      renderMapGrid();
      scheduleMapSave();
    };

    const getFillKey = (cell) => {
      if (!cell) return 'empty';
      const assetId = cell.assetId || 'none';
      if (cell.auto !== false) return `auto:${assetId}`;
      const spriteIndex = Number.isInteger(cell.spriteIndex) ? cell.spriteIndex : 1;
      return `manual:${assetId}:${spriteIndex}`;
    };

    const parseRandomizeRange = (value, maxSpriteIndex) => {
      const max = Math.max(1, Number.parseInt(maxSpriteIndex, 10) || 1);
      const text = String(value || '').trim();
      if (!text) return [];
      const selected = new Set();
      text.split(',').forEach((chunk) => {
        const token = chunk.trim();
        if (!token) return;
        const rangeMatch = token.match(/^(\d+)\s*-\s*(\d+)$/);
        if (rangeMatch) {
          let start = Number.parseInt(rangeMatch[1], 10);
          let end = Number.parseInt(rangeMatch[2], 10);
          if (!Number.isFinite(start) || !Number.isFinite(end)) return;
          if (start > end) {
            const temp = start;
            start = end;
            end = temp;
          }
          for (let valueIndex = start; valueIndex <= end; valueIndex += 1) {
            if (valueIndex >= 1 && valueIndex <= max) {
              selected.add(valueIndex);
            }
          }
          return;
        }
        if (!/^\d+$/.test(token)) return;
        const single = Number.parseInt(token, 10);
        if (single >= 1 && single <= max) {
          selected.add(single);
        }
      });
      return Array.from(selected).sort((a, b) => a - b);
    };

    const getRandomSpriteIndex = (asset) => {
      const maxIndex = Math.max(1, asset?.spriteCount || 1);
      const allowed = parseRandomizeRange(mapState.randomizeRange, maxIndex);
      if (allowed.length) {
        return allowed[Math.floor(Math.random() * allowed.length)];
      }
      return 1 + Math.floor(Math.random() * maxIndex);
    };

    const createPaintCell = () => {
      const asset = getAssetById(mapState.selectedAssetId);
      if (!asset) return null;
      const isManual = mapState.mode === 'manual';
      const useRandom = isManual && mapState.randomize;
      const nextSpriteIndex = useRandom
        ? getRandomSpriteIndex(asset)
        : mapState.selectedSpriteIndex;
      return {
        assetId: asset.id,
        spriteIndex: isManual ? nextSpriteIndex : null,
        auto: !isManual
      };
    };

    const floodFill = (startIndex) => {
      if (startIndex < 0 || startIndex >= mapState.map.cells.length) return;
      const width = mapState.map.width;
      const height = mapState.map.height;
      ensureMapCells();
      const targetKey = getFillKey(mapState.map.cells[startIndex]);
      const paintCell = createPaintCell();
      if (!paintCell) return;
      const paintKey = getFillKey(paintCell);
      if (!mapState.randomize && targetKey === paintKey) return;
      ensureMapHistorySnapshot();

      const stack = [startIndex];
      const visited = new Set();
      while (stack.length) {
        const index = stack.pop();
        if (visited.has(index)) continue;
        visited.add(index);
        if (getFillKey(mapState.map.cells[index]) !== targetKey) continue;

        const x = index % width;
        const y = Math.floor(index / width);

        mapState.map.cells[index] = createPaintCell();

        if (x > 0) stack.push(index - 1);
        if (x < width - 1) stack.push(index + 1);
        if (y > 0) stack.push(index - width);
        if (y < height - 1) stack.push(index + width);
      }
      renderMapGrid();
      scheduleMapSave();
    };

    const getMapNeighbors = (x, y, assetId) => {
      const { width, height, cells } = mapState.map;
      const isSame = (cx, cy) => {
        if (cx < 0 || cy < 0 || cx >= width || cy >= height) return false;
        const cell = cells[cy * width + cx];
        return cell?.assetId === assetId;
      };

      const n = isSame(x, y - 1);
      const s = isSame(x, y + 1);
      const w = isSame(x - 1, y);
      const e = isSame(x + 1, y);
      const nw = isSame(x - 1, y - 1);
      const ne = isSame(x + 1, y - 1);
      const sw = isSame(x - 1, y + 1);
      const se = isSame(x + 1, y + 1);
      return { n, s, w, e, nw, ne, sw, se };
    };

    const getMapTileIdX13 = (assetId, x, y) => {
      const { width, height } = mapState.map;
      const { n, s, w, e, nw, ne, sw, se } = getMapNeighbors(x, y, assetId);
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

      const sample = [
        nw, n, ne,
        w, true, e,
        sw, s, se
      ];

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
        const { id, mask } = patterns[i];
        if (matchesPattern(mask, sample)) return id;
      }

      return 'center';
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

    const computeAutoSpriteIndex = (asset, x, y) => {
      if (!asset || asset.spriteCount < 13) return 1;
      const tileId = getMapTileIdX13(asset.id, x, y);
      const index = autoTileOrder.indexOf(tileId);
      const spriteIndex = index >= 0 ? index + 1 : 1;
      return spriteIndex <= asset.spriteCount ? spriteIndex : 1;
    };

    const renderAssetGrid = () => {
      assetGrid.innerHTML = '';
      const asset = getAssetById(mapState.selectedAssetId);
      if (!asset) {
        if (assetGridLabel) assetGridLabel.textContent = getText('map.assetGridHint', 'Select an asset to preview its sprites.');
        return;
      }

      if (assetGridLabel) {
        const name = asset.name || asset.fileName || `Asset ${asset.number}`;
        assetGridLabel.textContent = name;
      }

      const cellSize = 40;
      assetGrid.style.setProperty('--asset-grid-columns', asset.cols);
      assetGrid.style.setProperty('--asset-cell-size', `${cellSize}px`);

      for (let row = 0; row < asset.rows; row += 1) {
        for (let col = 0; col < asset.cols; col += 1) {
          const spriteIndex = row * asset.cols + col + 1;
          const cell = document.createElement('button');
          cell.type = 'button';
          cell.className = 'asset-sprite';
          cell.textContent = String(spriteIndex);

          if (spriteIndex > asset.spriteCount) {
            cell.classList.add('is-disabled');
          }
          if (spriteIndex === mapState.selectedSpriteIndex) {
            cell.classList.add('is-active');
          }
          if (asset.imageUrl) {
            cell.style.backgroundImage = `url(${asset.imageUrl})`;
            cell.style.backgroundSize = `${asset.cols * cellSize}px ${asset.rows * cellSize}px`;
            cell.style.backgroundPosition = `${-col * cellSize}px ${-row * cellSize}px`;
          }

          if (spriteIndex <= asset.spriteCount) {
            cell.addEventListener('click', () => {
              mapState.selectedSpriteIndex = spriteIndex;
              renderAssetGrid();
              renderMapGrid();
            });
          }

          assetGrid.appendChild(cell);
        }
      }
    };

    const renderAssetList = () => {
      assetList.innerHTML = '';
      normalizeAssetNumbers();

      mapState.assets.forEach((asset) => {
        const row = document.createElement('div');
        row.className = 'asset-row';
        if (asset.id === mapState.selectedAssetId) {
          row.classList.add('is-active');
        }

        const uploadField = document.createElement('label');
        uploadField.className = 'asset-upload button-secondary';
        uploadField.textContent = getText('map.importAsset', 'Import');
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        uploadField.appendChild(fileInput);

        const nameField = document.createElement('div');
        nameField.className = 'asset-field asset-name';
        const nameLabel = document.createElement('label');
        nameLabel.className = 'panel-label';
        nameLabel.textContent = getText('map.assetName', 'Asset name');
        const nameInput = document.createElement('input');
        nameInput.className = 'asset-input';
        nameInput.type = 'text';
        nameInput.value = asset.name;
        nameInput.placeholder = asset.fileName || `Asset ${asset.number}`;
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
        colorLabel.textContent = getText('map.assetColor', 'Color');
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
        numberLabel.textContent = getText('map.assetNumber', 'Image number');
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
        configLabel.textContent = getText('map.assetConfig', 'Config');
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
        sizeLabel.textContent = getText('map.spriteSize', 'Sprite size');
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
        countLabel.textContent = getText('map.spriteCount', 'Sprites');
        const countInput = document.createElement('input');
        countInput.className = 'asset-input';
        countInput.type = 'number';
        countInput.min = '1';
        countInput.max = String(asset.cols * asset.rows);
        countInput.value = String(asset.spriteCount);
        countField.appendChild(countLabel);
        countField.appendChild(countInput);

        const typeField = document.createElement('div');
        typeField.className = 'asset-field';
        const typeLabel = document.createElement('label');
        typeLabel.className = 'panel-label';
        typeLabel.textContent = getText('map.assetType', 'Type');
        const typeSelect = document.createElement('select');
        typeSelect.className = 'asset-select';
        const optionBlocking = document.createElement('option');
        optionBlocking.value = 'blocking';
        optionBlocking.textContent = getText('map.typeBlocking', 'Blocking');
        const optionPassable = document.createElement('option');
        optionPassable.value = 'passable';
        optionPassable.textContent = getText('map.typePassable', 'Passable');
        typeSelect.appendChild(optionBlocking);
        typeSelect.appendChild(optionPassable);
        typeSelect.value = asset.type;
        typeField.appendChild(typeLabel);
        typeField.appendChild(typeSelect);

        const selectButton = document.createElement('button');
        selectButton.type = 'button';
        selectButton.className = 'button-secondary asset-select-button';
        selectButton.textContent = getText('map.selectAsset', 'Select');

        const orderControls = document.createElement('div');
        orderControls.className = 'asset-order-controls';
        const upButton = document.createElement('button');
        upButton.type = 'button';
        upButton.className = 'asset-order-button';
        upButton.textContent = getText('map.assetUp', 'Up');
        const downButton = document.createElement('button');
        downButton.type = 'button';
        downButton.className = 'asset-order-button';
        downButton.textContent = getText('map.assetDown', 'Down');
        if (mapState.assets.indexOf(asset) === 0) upButton.disabled = true;
        if (mapState.assets.indexOf(asset) === mapState.assets.length - 1) downButton.disabled = true;
        orderControls.appendChild(upButton);
        orderControls.appendChild(downButton);

        row.appendChild(uploadField);
        row.appendChild(nameField);
        row.appendChild(colorField);
        row.appendChild(numberField);
        row.appendChild(configField);
        row.appendChild(sizeField);
        row.appendChild(countField);
        row.appendChild(typeField);
        row.appendChild(orderControls);
        row.appendChild(selectButton);

        fileInput.addEventListener('change', () => {
          const file = fileInput.files?.[0];
          if (!file) return;
          asset.fileName = file.name;
          if (!asset.name) asset.name = file.name.replace(/\\.[^/.]+$/, '');
          if (asset.imageUrl) URL.revokeObjectURL(asset.imageUrl);
          asset.imageUrl = URL.createObjectURL(file);
          cacheAssetImage(file).then((key) => {
            if (key) {
              asset.cacheKey = key;
              if (cacheModal && !cacheModal.classList.contains('is-hidden')) {
                updateCacheModal();
              }
            }
          });
          renderAssetList();
          renderAssetGrid();
          renderMapGrid();
          scheduleMapSave();
        });

        nameInput.addEventListener('input', () => {
          asset.name = nameInput.value;
          renderAssetGrid();
          scheduleMapSave();
        });

        colorInput.addEventListener('input', () => {
          asset.color = colorInput.value;
          renderMapGrid();
          scheduleMapSave();
        });

        numberInput.addEventListener('change', () => {
          swapAssetNumbers(asset.id, numberInput.value);
          sortAssetsByNumber();
          renderAssetList();
          renderAssetGrid();
          renderMapGrid();
          scheduleMapSave();
        });

        colsInput.addEventListener('change', () => {
          asset.cols = clamp(Number.parseInt(colsInput.value, 10) || 1, 1, 64);
          colsInput.value = String(asset.cols);
          countInput.max = String(asset.cols * asset.rows);
          asset.spriteCount = clamp(asset.spriteCount, 1, asset.cols * asset.rows);
          countInput.value = String(asset.spriteCount);
          renderAssetGrid();
          renderMapGrid();
          scheduleMapSave();
        });

        rowsInput.addEventListener('change', () => {
          asset.rows = clamp(Number.parseInt(rowsInput.value, 10) || 1, 1, 64);
          rowsInput.value = String(asset.rows);
          countInput.max = String(asset.cols * asset.rows);
          asset.spriteCount = clamp(asset.spriteCount, 1, asset.cols * asset.rows);
          countInput.value = String(asset.spriteCount);
          renderAssetGrid();
          renderMapGrid();
          scheduleMapSave();
        });

        widthInput.addEventListener('change', () => {
          asset.spriteWidth = clamp(Number.parseInt(widthInput.value, 10) || 1, 1, 256);
          widthInput.value = String(asset.spriteWidth);
          renderMapGrid();
          scheduleMapSave();
        });

        heightInput.addEventListener('change', () => {
          asset.spriteHeight = clamp(Number.parseInt(heightInput.value, 10) || 1, 1, 256);
          heightInput.value = String(asset.spriteHeight);
          renderMapGrid();
          scheduleMapSave();
        });

        countInput.addEventListener('change', () => {
          asset.spriteCount = clamp(Number.parseInt(countInput.value, 10) || 1, 1, asset.cols * asset.rows);
          countInput.value = String(asset.spriteCount);
          if (mapState.selectedSpriteIndex > asset.spriteCount) {
            mapState.selectedSpriteIndex = asset.spriteCount;
          }
          renderAssetGrid();
          scheduleMapSave();
        });

        typeSelect.addEventListener('change', () => {
          asset.type = typeSelect.value;
          scheduleMapSave();
        });

        selectButton.addEventListener('click', () => {
          mapState.selectedAssetId = asset.id;
          mapState.selectedSpriteIndex = Math.min(mapState.selectedSpriteIndex, asset.spriteCount);
          renderAssetList();
          renderAssetGrid();
        });

        upButton.addEventListener('click', (event) => {
          event.stopPropagation();
          sortAssetsByNumber();
          const index = mapState.assets.indexOf(asset);
          if (index <= 0) return;
          mapState.selectedAssetId = mapState.assets[index - 1].id;
          renderAssetList();
          renderAssetGrid();
          renderMapGrid();
        });

        downButton.addEventListener('click', (event) => {
          event.stopPropagation();
          sortAssetsByNumber();
          const index = mapState.assets.indexOf(asset);
          if (index === -1 || index >= mapState.assets.length - 1) return;
          mapState.selectedAssetId = mapState.assets[index + 1].id;
          renderAssetList();
          renderAssetGrid();
          renderMapGrid();
        });

        assetList.appendChild(row);
      });
    };

    const renderMapCell = (cell, index) => {
      const { width, cellSize } = mapState.map;
      const x = index % width;
      const y = Math.floor(index / width);
      const data = mapState.map.cells[index];

      const marker = mapState.map.markers[index];

      if (!data) {
        cell.classList.add('is-empty');
        cell.textContent = '0';
        cell.style.backgroundImage = '';
        cell.style.backgroundColor = '';
        cell.classList.toggle('has-marker', Boolean(marker));
        cell.classList.toggle('marker-entry', marker === 'portal');
        cell.classList.toggle('marker-exit', marker === 'portal');
        return;
      }

      const asset = getAssetById(data.assetId);
      const assetNumber = asset?.number ?? '?';
      const isAuto = data.auto !== false;
      let spriteIndex = data.spriteIndex || 1;
      if (isAuto) {
        spriteIndex = computeAutoSpriteIndex(asset, x, y);
      }

      const blockFlag = asset?.type === 'blocking' ? 1 : 0;
      cell.classList.remove('is-empty');
      cell.textContent = `${assetNumber}:${spriteIndex}:${isAuto ? 1 : 0}:${blockFlag}`;
      cell.style.backgroundColor = '';

      const view = mapState.view;
      if (view === 'collision') {
        cell.style.backgroundImage = '';
        cell.style.backgroundColor = asset?.type === 'blocking' ? '#7a1f1f' : '#1f6f3a';
      } else if (view === 'assets') {
        cell.style.backgroundImage = '';
        cell.style.backgroundColor = asset?.color || '#2a2a2a';
      } else if (asset?.imageUrl) {
        const spriteRow = Math.floor((spriteIndex - 1) / asset.cols);
        const spriteCol = (spriteIndex - 1) % asset.cols;
        cell.style.backgroundImage = `url(${asset.imageUrl})`;
        cell.style.backgroundSize = `${asset.cols * cellSize}px ${asset.rows * cellSize}px`;
        cell.style.backgroundPosition = `${-spriteCol * cellSize}px ${-spriteRow * cellSize}px`;
      } else {
        const numericAsset = Number.isFinite(Number(assetNumber)) ? Number(assetNumber) : 0;
        const hue = (numericAsset * 37) % 360;
        cell.style.backgroundImage = '';
        cell.style.backgroundColor = `hsla(${hue}, 55%, 24%, 0.9)`;
      }

      cell.classList.toggle('has-marker', Boolean(marker));
      cell.classList.toggle('marker-entry', marker === 'portal');
      cell.classList.toggle('marker-exit', marker === 'portal');
    };

    const renderMapGrid = () => {
      ensureMapCells();
      mapGrid.innerHTML = '';
      mapGrid.style.setProperty('--map-columns', mapState.map.width);
      mapGrid.style.setProperty('--map-cell-size', `${mapState.map.cellSize}px`);

      const total = mapState.map.width * mapState.map.height;
      for (let i = 0; i < total; i += 1) {
        const cell = document.createElement('div');
        cell.className = 'map-cell';
        cell.dataset.index = String(i);
        renderMapCell(cell, i);
        mapGrid.appendChild(cell);
      }
    };

    const applyMapCell = (index) => {
      if (index < 0 || index >= mapState.map.cells.length) return;
      if (mapState.tool === 'eyedropper') {
        const data = mapState.map.cells[index];
        if (!data) return;
        const asset = getAssetById(data.assetId);
        if (!asset) return;
        mapState.selectedAssetId = asset.id;
        if (data.auto === false && Number.isInteger(data.spriteIndex)) {
          mapState.selectedSpriteIndex = data.spriteIndex;
        }
        renderAssetList();
        renderAssetGrid();
        return;
      }
      if (mapState.tool === 'fill') {
        floodFill(index);
        return;
      }
      if (mapState.markerMode) {
        ensureMapHistorySnapshot();
        const current = mapState.map.markers[index];
        mapState.map.markers[index] = current === mapState.markerMode ? null : mapState.markerMode;
      } else if (mapState.tool === 'eraser') {
        ensureMapHistorySnapshot();
        mapState.map.cells[index] = null;
      } else {
        const asset = getAssetById(mapState.selectedAssetId);
        if (!asset) return;
        ensureMapHistorySnapshot();
        const isManual = mapState.mode === 'manual';
        const useRandom = isManual && mapState.randomize;
        const nextSpriteIndex = useRandom
          ? getRandomSpriteIndex(asset)
          : mapState.selectedSpriteIndex;
        mapState.map.cells[index] = {
          assetId: asset.id,
          spriteIndex: isManual ? nextSpriteIndex : null,
          auto: !isManual
        };
      }
      const cell = mapGrid.querySelector(`.map-cell[data-index=\"${index}\"]`);
      if (cell) renderMapCell(cell, index);

      renderMapGrid();
      scheduleMapSave();
    };

    const bindMapGrid = () => {
      mapGrid.addEventListener('pointerdown', (event) => {
        const target = event.target.closest('.map-cell');
        if (!target) return;
        event.preventDefault();
        mapState.isDrawing = true;
        mapGrid.setPointerCapture(event.pointerId);
        if (mapState.markerMode || mapState.tool !== 'eyedropper') {
          beginMapHistoryBatch();
        }
        applyMapCell(Number.parseInt(target.dataset.index, 10));
      });

      mapGrid.addEventListener('pointermove', (event) => {
        const target = event.target.closest('.map-cell');
        if (!target) return;
        const index = Number.parseInt(target.dataset.index, 10);
        if (mapState.tool === 'eyedropper' || mapState.tool === 'fill') {
          return;
        }
        if (mapState.isDrawing) {
          if (!mapHistoryBatchActive && (mapState.markerMode || mapState.tool !== 'eyedropper')) {
            beginMapHistoryBatch();
          }
          applyMapCell(index);
          return;
        }
        if (mapState.shiftPaint) {
          if (!mapHistoryBatchActive && (mapState.markerMode || mapState.tool !== 'eyedropper')) {
            beginMapHistoryBatch();
          }
          if (mapState.shiftPaintIndex === index) return;
          mapState.shiftPaintIndex = index;
          applyMapCell(index);
        }
      });

      const stopDrawing = (event) => {
        if (!mapState.isDrawing) return;
        mapState.isDrawing = false;
        try {
          mapGrid.releasePointerCapture(event.pointerId);
        } catch (error) {
          // ignore
        }
        endMapHistoryBatch();
      };

      mapGrid.addEventListener('pointerup', stopDrawing);
      mapGrid.addEventListener('pointerleave', stopDrawing);
      mapGrid.addEventListener('pointerleave', () => {
        mapState.shiftPaintIndex = null;
        endMapHistoryBatch();
      });
    };

    const updateRandomizeControls = () => {
      mapRandomizeButton?.classList.toggle('is-active', mapState.randomize);
      if (mapRandomizeRangeInput) {
        mapRandomizeRangeInput.value = mapState.randomizeRange;
        mapRandomizeRangeInput.disabled = !mapState.randomize;
      }
    };

    const bindMapControls = () => {
      mapApplyButton?.addEventListener('click', () => {
        const width = clamp(Number.parseInt(mapWidthInput?.value, 10) || mapState.map.width, 4, 200);
        const height = clamp(Number.parseInt(mapHeightInput?.value, 10) || mapState.map.height, 4, 200);
        if (width === mapState.map.width && height === mapState.map.height) return;
        resizeMap(width, height);
        if (mapWidthInput) mapWidthInput.value = String(mapState.map.width);
        if (mapHeightInput) mapHeightInput.value = String(mapState.map.height);
        renderMapGrid();
        scheduleMapSave();
      });

      mapWidthInput?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') mapApplyButton?.click();
      });
      mapHeightInput?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') mapApplyButton?.click();
      });

      mapCellSize?.addEventListener('input', () => {
        mapState.map.cellSize = clamp(Number.parseInt(mapCellSize.value, 10) || 16, 10, 32);
        renderMapGrid();
        scheduleMapSave();
      });

      mapNameInput?.addEventListener('input', () => {
        mapState.map.name = mapNameInput.value;
        scheduleMapSave();
      });

      qsa('[data-map-mode]').forEach((button) => {
        button.addEventListener('click', () => {
          const mode = button.dataset.mapMode || 'manual';
          mapState.mode = mode;
          qsa('[data-map-mode]').forEach((btn) => btn.classList.toggle('is-active', btn === button));
          renderMapGrid();
        });
      });

      qsa('[data-map-tool]').forEach((button) => {
        button.addEventListener('click', () => {
          const tool = button.dataset.mapTool || 'pencil';
          mapState.tool = tool;
          qsa('[data-map-tool]').forEach((btn) => btn.classList.toggle('is-active', btn === button));
        });
      });

      qsa('[data-map-marker]').forEach((button) => {
        button.addEventListener('click', () => {
          const marker = button.dataset.mapMarker || null;
          mapState.markerMode = mapState.markerMode === marker ? null : marker;
          qsa('[data-map-marker]').forEach((btn) => {
            btn.classList.toggle('is-active', btn.dataset.mapMarker === mapState.markerMode);
          });
        });
      });

      qsa('[data-map-view]').forEach((button) => {
        button.addEventListener('click', () => {
          const view = button.dataset.mapView || 'normal';
          mapState.view = view;
          qsa('[data-map-view]').forEach((btn) => btn.classList.toggle('is-active', btn === button));
          renderMapGrid();
        });
      });

      qsa('[data-map-shift]').forEach((button) => {
        button.addEventListener('click', () => {
          const direction = button.dataset.mapShift;
          if (direction === 'up') shiftMap(0, -1);
          if (direction === 'down') shiftMap(0, 1);
          if (direction === 'left') shiftMap(-1, 0);
          if (direction === 'right') shiftMap(1, 0);
        });
      });

      mapRandomizeButton?.addEventListener('click', () => {
        mapState.randomize = !mapState.randomize;
        updateRandomizeControls();
        scheduleMapSave();
      });

      mapRandomizeRangeInput?.addEventListener('input', () => {
        mapState.randomizeRange = mapRandomizeRangeInput.value;
        scheduleMapSave();
      });

      mapUndoButton?.addEventListener('click', undoMapHistory);
      mapRedoButton?.addEventListener('click', redoMapHistory);
    };

    const buildMapPayload = () => ({
      version: 1,
      assets: mapState.assets.map((asset) => ({
        name: asset.name,
        fileName: asset.fileName,
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
        name: mapState.map.name || '',
        width: mapState.map.width,
        height: mapState.map.height,
        cellSize: mapState.map.cellSize,
        randomize: {
          enabled: mapState.randomize,
          range: mapState.randomizeRange
        },
        cells: mapState.map.cells.map((cell) => {
          if (!cell) return null;
          const asset = getAssetById(cell.assetId);
          return {
            assetNumber: asset?.number ?? null,
            spriteIndex: cell.spriteIndex ?? null,
            auto: cell.auto !== false
          };
        }),
        markers: mapState.map.markers.slice()
      }
    });

    const applyMapPayload = (payload) => {
      if (!payload?.map || !Array.isArray(payload.assets)) return;
      mapState.assets = payload.assets.map((asset) => {
        const cols = clamp(Number.parseInt(asset.cols, 10) || 1, 1, 64);
        const rows = clamp(Number.parseInt(asset.rows, 10) || 1, 1, 64);
        const maxSprites = cols * rows;
        return {
        id: createId(),
        name: asset.name || '',
        fileName: asset.fileName || '',
        imageUrl: '',
        number: clamp(Number.parseInt(asset.number, 10) || 1, 1, 9999),
        cols,
        rows,
        spriteWidth: clamp(Number.parseInt(asset.spriteWidth, 10) || 16, 1, 256),
        spriteHeight: clamp(Number.parseInt(asset.spriteHeight, 10) || 16, 1, 256),
        spriteCount: clamp(Number.parseInt(asset.spriteCount, 10) || 1, 1, maxSprites),
        type: asset.type === 'passable' ? 'passable' : 'blocking',
        color: asset.color || getAssetColor(Number.parseInt(asset.number, 10) || 1),
        cacheKey: asset.cacheKey || null
        };
      });

      normalizeAssetNumbers();

      const assetByNumber = new Map(mapState.assets.map((asset) => [asset.number, asset.id]));
      mapState.selectedAssetId = mapState.assets[0]?.id || null;
      mapState.selectedSpriteIndex = 1;

      mapState.map.name = payload.map.name || payload.name || '';
      mapState.map.width = clamp(Number.parseInt(payload.map.width, 10) || 50, 4, 200);
      mapState.map.height = clamp(Number.parseInt(payload.map.height, 10) || 50, 4, 200);
      mapState.map.cellSize = clamp(Number.parseInt(payload.map.cellSize, 10) || 16, 10, 32);
      const randomizeConfig = payload.map.randomize || {};
      const legacyRandomizeEnabled = typeof payload.map.randomize === 'boolean'
        ? payload.map.randomize
        : false;
      mapState.randomize = Boolean(
        randomizeConfig.enabled
        || legacyRandomizeEnabled
        || payload.map.randomizeEnabled
        || payload.randomizeEnabled
      );
      mapState.randomizeRange = String(
        randomizeConfig.range
        || payload.map.randomizeRange
        || payload.randomizeRange
        || ''
      );

      const total = mapState.map.width * mapState.map.height;
      const nextCells = Array.from({ length: total }, () => null);
      const cells = Array.isArray(payload.map.cells) ? payload.map.cells : [];
      const nextMarkers = Array.from({ length: total }, () => null);
      const markers = Array.isArray(payload.map.markers) ? payload.map.markers : [];

      for (let i = 0; i < Math.min(cells.length, total); i += 1) {
        const entry = cells[i];
        if (!entry || !entry.assetNumber) continue;
        const assetId = assetByNumber.get(entry.assetNumber);
        if (!assetId) continue;
        nextCells[i] = {
          assetId,
          spriteIndex: Number.isInteger(entry.spriteIndex) ? entry.spriteIndex : null,
          auto: entry.auto !== false
        };
      }

      mapState.map.cells = nextCells;
      for (let i = 0; i < Math.min(markers.length, total); i += 1) {
        const marker = markers[i];
        if (marker === 'portal' || marker === 'entry' || marker === 'exit' || marker === 1 || marker === true) {
          nextMarkers[i] = 'portal';
        } else {
          nextMarkers[i] = null;
        }
      }
      mapState.map.markers = nextMarkers;
      if (mapNameInput) mapNameInput.value = mapState.map.name;
      if (mapWidthInput) mapWidthInput.value = String(mapState.map.width);
      if (mapHeightInput) mapHeightInput.value = String(mapState.map.height);
      if (mapCellSize) mapCellSize.value = String(mapState.map.cellSize);
      updateRandomizeControls();
      renderAssetList();
      renderAssetGrid();
      renderMapGrid();
      loadCachedImagesForAssets().then(() => {
        renderAssetList();
        renderAssetGrid();
        renderMapGrid();
      });
      scheduleMapSave();
    };

    const exportMapJson = () => {
      const payload = buildMapPayload();
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const name = sanitizeFilename(mapState.map.name || 'map');
      link.download = `${name}.json`;
      link.click();
      URL.revokeObjectURL(url);
    };

    const importMapJson = (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const payload = JSON.parse(String(reader.result || '{}'));
          if (payload?.map && Array.isArray(payload.assets)) {
            pushMapHistorySnapshot();
          }
          applyMapPayload(payload);
        } catch (error) {
          // Ignore invalid JSON.
        }
      };
      reader.readAsText(file);
    };

    document.addEventListener('languagechange', () => {
      renderAssetList();
      renderAssetGrid();
    });

    const cacheLoaded = loadCachedMapState();
    if (!cacheLoaded && !mapState.assets.length) {
      createAsset();
      scheduleMapSave();
    }

    if (mapNameInput && !cacheLoaded) mapNameInput.value = mapState.map.name || '';
    if (mapWidthInput) mapWidthInput.value = String(mapState.map.width);
    if (mapHeightInput) mapHeightInput.value = String(mapState.map.height);
    if (mapCellSize) mapCellSize.value = String(mapState.map.cellSize);

    ensureMapCells();
    renderAssetList();
    renderAssetGrid();
    renderMapGrid();
    bindMapGrid();
    bindMapControls();
    updateRandomizeControls();
    updateMapUndoRedoControls();

    const handleShiftKey = (event) => {
      if (event.key !== 'Shift') return;
      mapState.shiftPaint = event.type === 'keydown';
      if (!mapState.shiftPaint) {
        mapState.shiftPaintIndex = null;
        endMapHistoryBatch();
      }
    };

    const handleMapUndoRedo = (event) => {
      const target = event.target;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable)) {
        return;
      }
      const platform = navigator.platform || '';
      const isMac = /mac/i.test(platform);
      const modKey = isMac ? event.metaKey : event.ctrlKey;
      if (!modKey) return;
      const key = event.key.toLowerCase();
      if (key === 'z' && !event.shiftKey) {
        event.preventDefault();
        undoMapHistory();
      } else if (key === 'y' || (key === 'z' && event.shiftKey)) {
        event.preventDefault();
        redoMapHistory();
      }
    };

    window.addEventListener('keydown', handleShiftKey);
    window.addEventListener('keyup', handleShiftKey);
    window.addEventListener('keydown', handleMapUndoRedo);
    window.addEventListener('blur', endMapHistoryBatch);

    addAssetButton?.addEventListener('click', () => {
      createAsset();
      renderAssetList();
      renderAssetGrid();
      scheduleMapSave();
    });

    mapExportButton?.addEventListener('click', exportMapJson);
    mapImportButton?.addEventListener('click', () => mapImportFile?.click());
    mapImportFile?.addEventListener('change', () => {
      const file = mapImportFile.files?.[0];
      if (file) {
        importMapJson(file);
      }
      mapImportFile.value = '';
    });
    mapOptionsButton?.addEventListener('click', openCacheModal);
    cacheCloseButton?.addEventListener('click', closeCacheModal);
    cacheModal?.addEventListener('click', (event) => {
      if (event.target === cacheModal) closeCacheModal();
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeCacheModal();
    });
    cachePurgeButton?.addEventListener('click', () => {
      cacheClear().then(updateCacheModal);
    });
  };

  const initWorldCreator = () => {
    const importButton = qs('#world-import');
    const importFile = qs('#world-import-file');
    const mapList = qs('#world-map-list');
    const assetList = qs('#world-asset-list');
    const fromMapSelect = qs('#world-from-map');
    const fromPortalSelect = qs('#world-from-portal');
    const toMapSelect = qs('#world-to-map');
    const toPortalSelect = qs('#world-to-portal');
    const addConnectionButton = qs('#world-add-connection');
    const connectionList = qs('#world-connection-list');
    const emptyState = qs('#world-empty');
    const exportButton = qs('#world-export');
    const worldNameInput = qs('#world-name');
    const previewEmpty = qs('#world-preview-empty');
    const zoomRange = qs('#world-zoom');
    const zoomValue = qs('#world-zoom-value');
    const zoomReset = qs('#world-zoom-reset');
    const opacityRange = qs('#world-opacity');
    const opacityValue = qs('#world-opacity-value');
    const sandbox = qs('#world-sandbox');
    const sandboxContent = qs('#world-sandbox-content');
    const sandboxLinks = qs('#world-sandbox-links');
    const sandboxNodes = qs('#world-sandbox-nodes');
    const sandboxViewport = qs('#world-sandbox-viewport');

    if (!mapList || !fromMapSelect || !fromPortalSelect || !toMapSelect || !toPortalSelect || !connectionList || !assetList || !previewEmpty || !sandbox || !sandboxContent || !sandboxLinks || !sandboxNodes || !sandboxViewport) return;

    const worldState = {
      maps: [],
      connections: [],
      assets: [],
      zoom: 0.8,
      opacity: 0.55,
      drag: null,
      name: ''
    };

    const getText = (key, fallback = '') => translations[currentLanguage]?.[key] ?? fallback;
    const getMapName = (map) => map.name || map.fileName || `Map ${map.id}`;
    const sandboxConfig = {
      minWidth: 2800,
      minHeight: 1600,
      defaultNodeWidth: 200,
      defaultNodeHeight: 160,
      padding: 80
    };

    const clampNodePosition = (x, y) => ({
      x: Math.max(0, x),
      y: Math.max(0, y)
    });

    const setZoom = (value) => {
      const zoom = clamp(value, 0.1, 1.5);
      worldState.zoom = zoom;
      sandboxContent.style.transform = `scale(${zoom})`;
      if (zoomValue) {
        zoomValue.textContent = `${Math.round(zoom * 100)}%`;
      }
      if (zoomRange) {
        zoomRange.value = String(zoom);
      }
    };

    const setOpacity = (value) => {
      const opacity = clamp(value, 0.2, 1);
      worldState.opacity = opacity;
      const textAlpha = clamp(opacity + 0.35, 0.4, 1);
      const metaAlpha = clamp(opacity + 0.2, 0.3, 1);
      const mapAlpha = clamp(opacity + 0.25, 0.35, 1);
      sandbox.style.setProperty('--world-node-alpha', opacity.toFixed(2));
      sandbox.style.setProperty('--world-node-text-alpha', textAlpha.toFixed(2));
      sandbox.style.setProperty('--world-node-meta-alpha', metaAlpha.toFixed(2));
      sandbox.style.setProperty('--world-node-map-alpha', mapAlpha.toFixed(2));
      if (opacityValue) {
        opacityValue.textContent = `${Math.round(opacity * 100)}%`;
      }
      if (opacityRange) {
        opacityRange.value = String(opacity);
      }
    };

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

    const buildPortalList = (payload) => {
      const markers = Array.isArray(payload?.map?.markers) ? payload.map.markers : [];
      const width = clamp(Number.parseInt(payload?.map?.width, 10) || 1, 1, 9999);
      const portals = [];
      markers.forEach((marker, index) => {
        if (marker === 'portal' || marker === 'entry' || marker === 'exit' || marker === 1 || marker === true) {
          const row = Math.floor(index / width);
          const col = index % width;
          portals.push({ index, row, col });
        }
      });
      return portals;
    };

    const ensureAssetImage = (assetEntry) => {
      if (!assetEntry?.imageUrl) return null;
      if (assetEntry.imageElement) return assetEntry.imageElement;
      const img = new Image();
      img.onload = () => {
        assetEntry.imageLoaded = true;
        renderWorldPreview();
      };
      img.onerror = () => {
        assetEntry.imageLoaded = false;
      };
      img.src = assetEntry.imageUrl;
      assetEntry.imageElement = img;
      return img;
    };

    const resolveAssetCache = async (assetEntry) => {
      if (!assetEntry) return;
      const previousCacheKey = assetEntry.cacheKey;
      const previousFileName = assetEntry.fileName;
      try {
        let entry = null;
        if (assetEntry.cacheKey) {
          entry = await cacheGet(assetEntry.cacheKey);
        }
        if (!entry && assetEntry.fileName) {
          entry = await cacheGetByName(assetEntry.fileName);
        }
        if (entry?.blob) {
          assetEntry.cacheKey = entry.key;
          assetEntry.fileName = entry.name || assetEntry.fileName;
          assetEntry.cached = true;
          assetEntry.imageUrl = URL.createObjectURL(entry.blob);
          ensureAssetImage(assetEntry);
          if (assetEntry.cacheKey !== previousCacheKey) {
            updateMapsForAsset(assetEntry, previousFileName, previousCacheKey);
          }
        } else {
          assetEntry.cached = false;
        }
      } catch (error) {
        assetEntry.cached = false;
      }
    };

    const rebuildAssets = async () => {
      const previous = worldState.assets;
      const previousByKey = new Map();
      previous.forEach((entry) => {
        entry.maps = new Set();
        if (entry.cacheKey) previousByKey.set(`cache:${entry.cacheKey}`, entry);
        if (entry.fileName) previousByKey.set(`name:${entry.fileName}`, entry);
      });

      const next = [];
      const seen = new Map();
      worldState.maps.forEach((mapEntry) => {
        const assets = Array.isArray(mapEntry?.payload?.assets) ? mapEntry.payload.assets : [];
        assets.forEach((asset, index) => {
          const key = asset.fileName
            ? `name:${asset.fileName}`
            : asset.cacheKey
              ? `cache:${asset.cacheKey}`
              : `id:${asset.name || index}`;
          let entry = seen.get(key) || previousByKey.get(key);
          if (!entry) {
            entry = {
              key,
              name: asset.name || asset.fileName || 'Asset',
              fileName: asset.fileName || '',
              cacheKey: asset.cacheKey || null,
              color: asset.color || '#2a2a2a',
              cached: false,
              imageUrl: '',
              imageElement: null,
              imageLoaded: false,
              maps: new Set()
            };
          } else {
            entry.name = asset.name || entry.name || asset.fileName || 'Asset';
            entry.fileName = asset.fileName || entry.fileName || '';
            entry.cacheKey = asset.cacheKey || entry.cacheKey || null;
            entry.color = asset.color || entry.color || '#2a2a2a';
          }
          entry.maps.add(mapEntry.id);
          if (!seen.has(key)) {
            seen.set(key, entry);
            next.push(entry);
          }
        });
      });
      worldState.assets = next;
      await Promise.all(worldState.assets.map((assetEntry) => resolveAssetCache(assetEntry)));
      renderAssetList();
      renderWorldPreview();
    };

    const updateMapsForAsset = (assetEntry, previousFileName, previousCacheKey) => {
      worldState.maps.forEach((mapEntry) => {
        const assets = Array.isArray(mapEntry?.payload?.assets) ? mapEntry.payload.assets : [];
        assets.forEach((asset) => {
          const matches = (
            (previousCacheKey && asset.cacheKey === previousCacheKey) ||
            (previousFileName && asset.fileName === previousFileName) ||
            (assetEntry.cacheKey && asset.cacheKey === assetEntry.cacheKey) ||
            (assetEntry.fileName && asset.fileName === assetEntry.fileName)
          );
          if (matches) {
            asset.cacheKey = assetEntry.cacheKey || asset.cacheKey || null;
            asset.fileName = assetEntry.fileName || asset.fileName || '';
          }
        });
      });
    };

    const handleAssetUpload = async (assetEntry, file) => {
      if (!assetEntry || !file) return;
      const previousFileName = assetEntry.fileName;
      const previousCacheKey = assetEntry.cacheKey;
      const cacheKey = await cacheAssetImage(file);
      if (!cacheKey) return;
      assetEntry.cacheKey = cacheKey;
      assetEntry.fileName = file.name;
      assetEntry.cached = true;
      assetEntry.imageUrl = URL.createObjectURL(file);
      assetEntry.imageElement = null;
      assetEntry.imageLoaded = false;
      ensureAssetImage(assetEntry);
      updateMapsForAsset(assetEntry, previousFileName, previousCacheKey);
      renderAssetList();
      renderWorldPreview();
    };

    const renderAssetList = () => {
      assetList.innerHTML = '';
      if (!worldState.assets.length) return;
      worldState.assets.forEach((assetEntry) => {
        const row = document.createElement('div');
        row.className = 'world-asset-row';

        const meta = document.createElement('div');
        meta.className = 'world-asset-meta';
        const color = document.createElement('span');
        color.className = 'world-asset-color';
        color.style.backgroundColor = assetEntry.color || '#2a2a2a';

        const text = document.createElement('div');
        text.className = 'world-asset-text';
        const name = document.createElement('div');
        name.className = 'world-asset-name';
        name.textContent = assetEntry.name || assetEntry.fileName || 'Asset';
        const file = document.createElement('div');
        file.className = 'world-asset-file';
        file.textContent = assetEntry.fileName || assetEntry.cacheKey || '';
        text.appendChild(name);
        text.appendChild(file);

        meta.appendChild(color);
        meta.appendChild(text);

        const actions = document.createElement('div');
        actions.className = 'world-asset-actions';
        const status = document.createElement('span');
        status.className = `world-asset-status ${assetEntry.cached ? 'is-cached' : 'is-missing'}`;
        status.textContent = assetEntry.cached ? getText('world.assetCached', 'Cached') : getText('world.assetMissing', 'Missing');

        const uploadButton = document.createElement('button');
        uploadButton.type = 'button';
        uploadButton.className = 'button-secondary';
        uploadButton.textContent = assetEntry.cached ? getText('world.assetReplace', 'Replace') : getText('world.assetUpload', 'Upload');

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.className = 'world-file-input';

        uploadButton.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', () => {
          const fileEntry = fileInput.files?.[0];
          if (fileEntry) {
            handleAssetUpload(assetEntry, fileEntry);
          }
          fileInput.value = '';
        });

        actions.appendChild(status);
        actions.appendChild(uploadButton);
        actions.appendChild(fileInput);

        row.appendChild(meta);
        row.appendChild(actions);
        assetList.appendChild(row);
      });
    };

    const findAssetEntryForDef = (assetDef) => {
      if (!assetDef) return null;
      if (assetDef.cacheKey) {
        const match = worldState.assets.find((entry) => entry.cacheKey === assetDef.cacheKey);
        if (match) return match;
      }
      if (assetDef.fileName) {
        const match = worldState.assets.find((entry) => entry.fileName === assetDef.fileName);
        if (match) return match;
      }
      return null;
    };

    const getMapNeighbors = (cells, width, height, x, y, assetNumber) => {
      const isSame = (cx, cy) => {
        if (cx < 0 || cy < 0 || cx >= width || cy >= height) return false;
        const cell = cells[cy * width + cx];
        return Number(cell?.assetNumber) === assetNumber;
      };
      const n = isSame(x, y - 1);
      const s = isSame(x, y + 1);
      const w = isSame(x - 1, y);
      const e = isSame(x + 1, y);
      const nw = isSame(x - 1, y - 1);
      const ne = isSame(x + 1, y - 1);
      const sw = isSame(x - 1, y + 1);
      const se = isSame(x + 1, y + 1);
      return { n, s, w, e, nw, ne, sw, se };
    };

    const getMapTileIdX13 = (cells, width, height, x, y, assetNumber) => {
      const { n, s, w, e, nw, ne, sw, se } = getMapNeighbors(cells, width, height, x, y, assetNumber);
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

      const sample = [
        nw, n, ne,
        w, true, e,
        sw, s, se
      ];

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
        const { id, mask } = patterns[i];
        if (matchesPattern(mask, sample)) return id;
      }

      return 'center';
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

    const computeAutoSpriteIndex = (cells, width, height, assetDef, x, y, assetNumber) => {
      if (!assetDef || Number.parseInt(assetDef.spriteCount, 10) < 13) return 1;
      const tileId = getMapTileIdX13(cells, width, height, x, y, assetNumber);
      const index = autoTileOrder.indexOf(tileId);
      return index >= 0 ? index + 1 : 1;
    };

    const ensureNodePosition = (mapEntry, index) => {
      if (mapEntry.position) return;
      const columns = Math.max(1, Math.ceil(Math.sqrt(worldState.maps.length || 1)));
      const spacingX = 220;
      const spacingY = 160;
      const col = index % columns;
      const row = Math.floor(index / columns);
      const x = sandboxConfig.padding + col * spacingX;
      const y = sandboxConfig.padding + row * spacingY;
      mapEntry.position = clampNodePosition(x, y);
    };

    const applyNodePosition = (node, position) => {
      node.style.transform = `translate(${position.x}px, ${position.y}px)`;
    };

    const updateConnectionLines = () => {
      const groups = qsa('g[data-connection]', sandboxLinks);
      groups.forEach((group) => {
        const line = qs('line', group);
        const fromDot = qs('circle[data-role=\"from\"]', group);
        const toDot = qs('circle[data-role=\"to\"]', group);
        if (!line) return;
        const fromId = line.dataset.from || '';
        const toId = line.dataset.to || '';
        const fromPortal = Number.parseInt(line.dataset.fromPortal ?? '', 10);
        const toPortal = Number.parseInt(line.dataset.toPortal ?? '', 10);
        const from = worldState.maps.find((entry) => entry.id === fromId);
        const to = worldState.maps.find((entry) => entry.id === toId);
        if (!from?.position || !to?.position) return;

        const fromOffset = Number.isFinite(fromPortal) ? from.portalOffsets?.[fromPortal] : null;
        const toOffset = Number.isFinite(toPortal) ? to.portalOffsets?.[toPortal] : null;
        const fromX = fromOffset ? from.position.x + fromOffset.x : from.position.x + (from.nodeSize?.width || 0) / 2;
        const fromY = fromOffset ? from.position.y + fromOffset.y : from.position.y + (from.nodeSize?.height || 0) / 2;
        const toX = toOffset ? to.position.x + toOffset.x : to.position.x + (to.nodeSize?.width || 0) / 2;
        const toY = toOffset ? to.position.y + toOffset.y : to.position.y + (to.nodeSize?.height || 0) / 2;

        line.setAttribute('x1', String(fromX));
        line.setAttribute('y1', String(fromY));
        line.setAttribute('x2', String(toX));
        line.setAttribute('y2', String(toY));
        if (fromDot) {
          fromDot.setAttribute('cx', String(fromX));
          fromDot.setAttribute('cy', String(fromY));
        }
        if (toDot) {
          toDot.setAttribute('cx', String(toX));
          toDot.setAttribute('cy', String(toY));
        }
      });
    };

    const renderSandboxMapPreview = (mapEntry, canvas, cellSize) => {
      if (!mapEntry?.payload?.map || !canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const map = mapEntry.payload.map;
      const width = clamp(Number.parseInt(map.width, 10) || 1, 1, 200);
      const height = clamp(Number.parseInt(map.height, 10) || 1, 1, 200);
      const cells = Array.isArray(map.cells) ? map.cells : [];
      const markers = Array.isArray(map.markers) ? map.markers : [];
      const assets = Array.isArray(mapEntry.payload.assets) ? mapEntry.payload.assets : [];
      const assetByNumber = new Map(assets.map((asset) => [Number(asset.number), asset]));
      const safeCellSize = clamp(Number.parseInt(cellSize, 10) || 6, 2, 16);

      canvas.width = width * safeCellSize;
      canvas.height = height * safeCellSize;
      ctx.imageSmoothingEnabled = false;
      ctx.fillStyle = '#0b0b0b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          const index = y * width + x;
          const entry = cells[index];
          if (!entry || entry.assetNumber == null) continue;
          const assetNumber = Number(entry.assetNumber);
          const assetDef = assetByNumber.get(assetNumber);
          if (!assetDef) continue;
          const assetEntry = findAssetEntryForDef(assetDef);
          const image = assetEntry ? ensureAssetImage(assetEntry) : null;
          const isAuto = entry.auto !== false;
          let spriteIndex = entry.spriteIndex || 1;
          if (isAuto) {
            spriteIndex = computeAutoSpriteIndex(cells, width, height, assetDef, x, y, assetNumber);
          }

          if (image && image.complete && image.naturalWidth > 0) {
            const cols = Math.max(1, Number.parseInt(assetDef.cols, 10) || 1);
            const rows = Math.max(1, Number.parseInt(assetDef.rows, 10) || 1);
            const spriteWidth = Math.max(1, Number.parseInt(assetDef.spriteWidth, 10) || Math.floor(image.naturalWidth / cols));
            const spriteHeight = Math.max(1, Number.parseInt(assetDef.spriteHeight, 10) || Math.floor(image.naturalHeight / rows));
            const spriteCol = (spriteIndex - 1) % cols;
            const spriteRow = Math.floor((spriteIndex - 1) / cols);
            const sx = spriteCol * spriteWidth;
            const sy = spriteRow * spriteHeight;
            ctx.drawImage(
              image,
              sx,
              sy,
              spriteWidth,
              spriteHeight,
              x * safeCellSize,
              y * safeCellSize,
              safeCellSize,
              safeCellSize
            );
          } else {
            ctx.fillStyle = assetDef.color || '#2a2a2a';
            ctx.fillRect(x * safeCellSize, y * safeCellSize, safeCellSize, safeCellSize);
          }
        }
      }

      for (let i = 0; i < Math.min(markers.length, width * height); i += 1) {
        const marker = markers[i];
        if (marker !== 'portal' && marker !== 'entry' && marker !== 'exit' && marker !== 1 && marker !== true) continue;
        const row = Math.floor(i / width);
        const col = i % width;
        const size = Math.max(2, Math.floor(safeCellSize * 0.5));
        const offset = Math.floor((safeCellSize - size) / 2);
        ctx.fillStyle = '#ff3b3b';
        ctx.fillRect(col * safeCellSize + offset, row * safeCellSize + offset, size, size);
      }

      mapEntry.sandboxCellSize = safeCellSize;
      mapEntry.sandboxMapWidth = width;
      mapEntry.sandboxMapHeight = height;
    };

    const updatePortalOffsets = () => {
      const zoom = worldState.zoom || 1;
      worldState.maps.forEach((mapEntry) => {
        const node = sandboxNodes.querySelector(`.world-node[data-map-id=\"${mapEntry.id}\"]`);
        const canvas = node ? qs('canvas', node) : null;
        if (!node || !canvas) return;
        const nodeRect = node.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        const nodeWidth = nodeRect.width / zoom;
        const nodeHeight = nodeRect.height / zoom;
        mapEntry.nodeSize = { width: nodeWidth, height: nodeHeight };

        const canvasOffsetX = (canvasRect.left - nodeRect.left) / zoom;
        const canvasOffsetY = (canvasRect.top - nodeRect.top) / zoom;
        const cellSize = mapEntry.sandboxCellSize || 1;
        const offsets = {};
        mapEntry.portals.forEach((portal) => {
          const x = canvasOffsetX + (portal.col + 0.5) * cellSize;
          const y = canvasOffsetY + (portal.row + 0.5) * cellSize;
          offsets[portal.index] = { x, y };
        });
        mapEntry.portalOffsets = offsets;
      });
      updateConnectionLines();
    };

    const updateSandboxSize = () => {
      let width = sandboxConfig.minWidth;
      let height = sandboxConfig.minHeight;
      worldState.maps.forEach((mapEntry) => {
        const nodeSize = mapEntry.nodeSize || { width: sandboxConfig.defaultNodeWidth, height: sandboxConfig.defaultNodeHeight };
        const maxX = mapEntry.position.x + nodeSize.width + sandboxConfig.padding;
        const maxY = mapEntry.position.y + nodeSize.height + sandboxConfig.padding;
        width = Math.max(width, maxX);
        height = Math.max(height, maxY);
      });
      sandboxContent.style.width = `${Math.ceil(width)}px`;
      sandboxContent.style.height = `${Math.ceil(height)}px`;
      sandboxLinks.setAttribute('viewBox', `0 0 ${Math.ceil(width)} ${Math.ceil(height)}`);
    };

    const renderWorldSandbox = () => {
      sandboxLinks.innerHTML = '';
      sandboxNodes.innerHTML = '';

      worldState.maps.forEach((mapEntry, index) => {
        ensureNodePosition(mapEntry, index);
      });

      const sharedCellSize = 16;

      worldState.connections.forEach((connection, index) => {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.dataset.connection = String(index);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.dataset.from = connection.fromMapId;
        line.dataset.to = connection.toMapId;
        line.dataset.fromPortal = String(connection.fromPortalIndex);
        line.dataset.toPortal = String(connection.toPortalIndex);
        line.setAttribute('stroke', 'rgba(0, 178, 204, 0.7)');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('stroke-linecap', 'round');
        const fromDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        fromDot.dataset.role = 'from';
        fromDot.setAttribute('r', '4');
        fromDot.setAttribute('fill', '#00f0ff');
        const toDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        toDot.dataset.role = 'to';
        toDot.setAttribute('r', '4');
        toDot.setAttribute('fill', '#ff7a59');
        group.appendChild(line);
        group.appendChild(fromDot);
        group.appendChild(toDot);
        sandboxLinks.appendChild(group);
      });

      worldState.maps.forEach((mapEntry) => {
        const node = document.createElement('div');
        node.className = 'world-node';
        node.dataset.mapId = mapEntry.id;

        const title = document.createElement('div');
        title.className = 'world-node-title';
        title.textContent = getMapName(mapEntry);

        const meta = document.createElement('div');
        meta.className = 'world-node-meta';
        const mapData = mapEntry.payload?.map;
        const width = clamp(Number.parseInt(mapData?.width, 10) || 1, 1, 200);
        const height = clamp(Number.parseInt(mapData?.height, 10) || 1, 1, 200);
        const sizeLabel = document.createElement('span');
        sizeLabel.textContent = `${width}x${height}`;
        const portalLabel = document.createElement('span');
        portalLabel.textContent = `${mapEntry.portals.length} ${getText('world.portals', 'Portals')}`;
        meta.appendChild(sizeLabel);
        meta.appendChild(portalLabel);

        const canvas = document.createElement('canvas');
        canvas.className = 'world-node-map';
        renderSandboxMapPreview(mapEntry, canvas, sharedCellSize);
        const nodeWidth = canvas.width + 24;
        const nodeHeight = canvas.height + 64;
        mapEntry.nodeSize = { width: nodeWidth, height: nodeHeight };
        node.style.width = `${nodeWidth}px`;
        node.style.height = `${nodeHeight}px`;

        node.appendChild(title);
        node.appendChild(meta);
        node.appendChild(canvas);
        applyNodePosition(node, mapEntry.position);
        sandboxNodes.appendChild(node);

        node.addEventListener('pointerdown', (event) => {
          if (event.button !== 0) return;
          node.setPointerCapture(event.pointerId);
          worldState.drag = {
            id: mapEntry.id,
            node,
            originX: mapEntry.position.x,
            originY: mapEntry.position.y,
            startX: event.clientX,
            startY: event.clientY
          };
        });
      });

      requestAnimationFrame(() => {
        updatePortalOffsets();
        updateSandboxSize();
      });
    };

    const renderWorldPreview = () => {
      renderWorldSandbox();
      if (!previewEmpty) return;
      previewEmpty.classList.toggle('is-hidden', worldState.maps.length > 0);
    };

    const handlePointerMove = (event) => {
      if (!worldState.drag) return;
      const mapEntry = worldState.maps.find((entry) => entry.id === worldState.drag.id);
      if (!mapEntry || !mapEntry.position) return;
      const dx = (event.clientX - worldState.drag.startX) / worldState.zoom;
      const dy = (event.clientY - worldState.drag.startY) / worldState.zoom;
      const next = clampNodePosition(worldState.drag.originX + dx, worldState.drag.originY + dy);
      mapEntry.position = next;
      applyNodePosition(worldState.drag.node, next);
      updateConnectionLines();
      updateSandboxSize();
    };

    const handlePointerUp = () => {
      if (!worldState.drag) return;
      worldState.drag = null;
    };

    const createMapEntry = (payload, fileName = '') => {
      const id = createId();
      const name = payload?.map?.name || payload?.name || (fileName ? fileName.replace(/\.[^/.]+$/, '') : `Map ${worldState.maps.length + 1}`);
      const portals = buildPortalList(payload);
      worldState.maps.push({
        id,
        name,
        fileName,
        payload,
        portals
      });
    };

    const renderMapList = () => {
      mapList.innerHTML = '';
      worldState.maps.forEach((mapEntry) => {
        const row = document.createElement('div');
        row.className = 'world-map-row';

        const nameField = document.createElement('div');
        nameField.className = 'world-map-field';
        const nameLabel = document.createElement('label');
        nameLabel.className = 'panel-label';
        nameLabel.textContent = getText('world.mapName', 'Map name');
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'world-input';
        nameInput.value = mapEntry.name;
        nameField.appendChild(nameLabel);
        nameField.appendChild(nameInput);

        const portalField = document.createElement('div');
        portalField.className = 'world-map-field';
        const portalLabel = document.createElement('label');
        portalLabel.className = 'panel-label';
        portalLabel.textContent = getText('world.portals', 'Portals');
        const portalValue = document.createElement('span');
        portalValue.className = 'panel-value';
        portalValue.textContent = String(mapEntry.portals.length);
        portalField.appendChild(portalLabel);
        portalField.appendChild(portalValue);

        const fileField = document.createElement('div');
        fileField.className = 'world-map-field';
        const fileLabel = document.createElement('label');
        fileLabel.className = 'panel-label';
        fileLabel.textContent = getText('world.file', 'File');
        const fileValue = document.createElement('span');
        fileValue.className = 'panel-value';
        fileValue.textContent = mapEntry.fileName || '—';
        fileField.appendChild(fileLabel);
        fileField.appendChild(fileValue);

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.className = 'button-secondary world-remove';
        removeButton.textContent = getText('world.remove', 'Remove');

        row.appendChild(nameField);
        row.appendChild(portalField);
        row.appendChild(fileField);
        row.appendChild(removeButton);
        mapList.appendChild(row);

        nameInput.addEventListener('input', () => {
          mapEntry.name = nameInput.value;
          refreshSelects();
          renderConnections();
          renderWorldPreview();
        });

        removeButton.addEventListener('click', () => {
          worldState.maps = worldState.maps.filter((entry) => entry.id !== mapEntry.id);
          worldState.connections = worldState.connections.filter((connection) => (
            connection.fromMapId !== mapEntry.id && connection.toMapId !== mapEntry.id
          ));
          renderMapList();
          refreshSelects();
          renderConnections();
          rebuildAssets();
        });
      });
    };

    const renderPortalOptions = (select, mapId) => {
      select.innerHTML = '';
      const mapEntry = worldState.maps.find((entry) => entry.id === mapId);
      if (!mapEntry || mapEntry.portals.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = '—';
        select.appendChild(option);
        return;
      }
      mapEntry.portals.forEach((portal, idx) => {
        const option = document.createElement('option');
        option.value = String(portal.index);
        option.textContent = `#${idx + 1} (${portal.row},${portal.col})`;
        select.appendChild(option);
      });
    };

    const refreshSelects = () => {
      [fromMapSelect, toMapSelect].forEach((select) => {
        select.innerHTML = '';
        worldState.maps.forEach((mapEntry) => {
          const option = document.createElement('option');
          option.value = mapEntry.id;
          option.textContent = getMapName(mapEntry);
          select.appendChild(option);
        });
      });

      renderPortalOptions(fromPortalSelect, fromMapSelect.value);
      renderPortalOptions(toPortalSelect, toMapSelect.value);
    };

    const renderConnections = () => {
      connectionList.innerHTML = '';
      if (!worldState.connections.length) {
        emptyState?.classList.remove('is-hidden');
        renderWorldPreview();
        return;
      }
      emptyState?.classList.add('is-hidden');
      worldState.connections.forEach((connection, index) => {
        const row = document.createElement('div');
        row.className = 'world-connection-row';
        const fromMap = worldState.maps.find((entry) => entry.id === connection.fromMapId);
        const toMap = worldState.maps.find((entry) => entry.id === connection.toMapId);
        const fromName = fromMap ? getMapName(fromMap) : 'Unknown';
        const toName = toMap ? getMapName(toMap) : 'Unknown';

        const label = document.createElement('span');
        label.textContent = `${fromName} [${connection.fromPortalIndex}] -> ${toName} [${connection.toPortalIndex}]`;

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.className = 'button-secondary world-remove';
        removeButton.textContent = getText('world.remove', 'Remove');
        removeButton.addEventListener('click', () => {
          worldState.connections.splice(index, 1);
          renderConnections();
        });

        row.appendChild(label);
        row.appendChild(removeButton);
        connectionList.appendChild(row);
      });
      renderWorldPreview();
    };

    const addConnection = () => {
      const fromMapId = fromMapSelect.value;
      const toMapId = toMapSelect.value;
      const fromPortalIndex = Number.parseInt(fromPortalSelect.value, 10);
      const toPortalIndex = Number.parseInt(toPortalSelect.value, 10);
      if (!fromMapId || !toMapId || Number.isNaN(fromPortalIndex) || Number.isNaN(toPortalIndex)) return;
      worldState.connections.push({
        fromMapId,
        fromPortalIndex,
        toMapId,
        toPortalIndex
      });
      renderConnections();
    };

    const exportWorld = () => {
      const payload = {
        version: 1,
        name: worldState.name || '',
        maps: worldState.maps.map((entry) => ({
          id: entry.id,
          name: entry.name,
          fileName: entry.fileName,
          payload: entry.payload
        })),
        connections: worldState.connections
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const fileName = sanitizeFilename(worldState.name || 'world');
      link.download = `${fileName}.json`;
      link.click();
      URL.revokeObjectURL(url);
    };

    const importMap = (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const payload = JSON.parse(String(reader.result || '{}'));
          if (!payload?.map) return;
          createMapEntry(payload, file.name);
          renderMapList();
          refreshSelects();
          renderConnections();
          await rebuildAssets();
        } catch (error) {
          // Ignore invalid JSON.
        }
      };
      reader.readAsText(file);
    };

    importButton?.addEventListener('click', () => importFile?.click());
    importFile?.addEventListener('change', () => {
      const file = importFile.files?.[0];
      if (file) importMap(file);
      importFile.value = '';
    });

    fromMapSelect.addEventListener('change', () => renderPortalOptions(fromPortalSelect, fromMapSelect.value));
    toMapSelect.addEventListener('change', () => renderPortalOptions(toPortalSelect, toMapSelect.value));
    addConnectionButton?.addEventListener('click', addConnection);
    exportButton?.addEventListener('click', exportWorld);
    worldNameInput?.addEventListener('input', () => {
      worldState.name = worldNameInput.value.trim();
    });
    zoomRange?.addEventListener('input', () => {
      const value = Number.parseFloat(zoomRange.value);
      if (Number.isFinite(value)) {
        setZoom(value);
      }
    });
    opacityRange?.addEventListener('input', () => {
      const value = Number.parseFloat(opacityRange.value);
      if (Number.isFinite(value)) {
        setOpacity(value);
      }
    });
    zoomReset?.addEventListener('click', () => {
      setZoom(0.8);
    });
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    renderMapList();
    refreshSelects();
    renderConnections();
    renderWorldPreview();

    setZoom(worldState.zoom);
    setOpacity(worldState.opacity);

    window.addEventListener('resize', () => {
      renderWorldPreview();
    });

    document.addEventListener('languagechange', () => {
      renderMapList();
      refreshSelects();
      renderConnections();
      renderAssetList();
      renderWorldPreview();
    });
  };

  const initTester = () => {
    const canvas = qs('#tester-canvas');
    const positionValue = qs('#tester-position');
    const directionValue = qs('#tester-direction');
    const loadedValue = qs('#tester-loaded');
    const resetButton = qs('#tester-reset');
    const importMapButton = qs('#tester-import-map');
    const importWorldButton = qs('#tester-import-world');
    const mapFileInput = qs('#tester-map-file');
    const worldFileInput = qs('#tester-world-file');
    const mapSelect = qs('#tester-map-select');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const spriteSize = 16;
    const tileSize = 16;
    const speed = 70;
    const frameDuration = 0.18;
    const pressedKeys = new Set();

    const sheets = {
      down: Object.assign(new Image(), { src: 'assets/characters/human_001_face.png' }),
      up: Object.assign(new Image(), { src: 'assets/characters/human_001_back.png' }),
      side: Object.assign(new Image(), { src: 'assets/characters/human_001_side.png' })
    };

    const sheetInfo = {
      down: { frames: 3, idle: 2 },
      up: { frames: 3, idle: 2 },
      side: { frames: 2, idle: 0 }
    };

    const state = {
      x: Math.floor(canvas.width / 2 - spriteSize / 2),
      y: Math.floor(canvas.height / 2 - spriteSize / 2),
      dir: 'down',
      frame: 0,
      frameTimer: 0,
      mapPayload: null,
      mapCanvas: null,
      collision: [],
      mapWidth: 0,
      mapHeight: 0,
      zoom: 1,
      assetImages: new Map()
    };

    const mapState = {
      maps: [],
      currentIndex: -1
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

    const getDirLabel = (dir) => {
      if (dir === 'up') return translations[currentLanguage]?.['tester.dirUp'] ?? 'Up';
      if (dir === 'down') return translations[currentLanguage]?.['tester.dirDown'] ?? 'Down';
      if (dir === 'left') return translations[currentLanguage]?.['tester.dirLeft'] ?? 'Left';
      return translations[currentLanguage]?.['tester.dirRight'] ?? 'Right';
    };

    const setLoadedLabel = (text) => {
      if (!loadedValue) return;
      loadedValue.textContent = text || translations[currentLanguage]?.['tester.loadedNone'] || 'None';
    };

    const resetPosition = () => {
      if (state.mapPayload) {
        const spawn = findSpawn();
        state.x = spawn.x;
        state.y = spawn.y;
      } else {
        state.x = Math.floor(canvas.width / 2 - spriteSize / 2);
        state.y = Math.floor(canvas.height / 2 - spriteSize / 2);
      }
      state.dir = 'down';
      state.frame = 0;
      state.frameTimer = 0;
    };

    const handleKey = (event) => {
      const key = event.key;
      const tracked = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        'w', 'a', 's', 'd', 'W', 'A', 'S', 'D',
        'z', 'q', 'Z', 'Q'
      ];
      if (!tracked.includes(key)) return;
      event.preventDefault();
      if (event.type === 'keydown') {
        pressedKeys.add(key);
      } else {
        pressedKeys.delete(key);
      }
    };

    const normalizeMapPayloads = (payload, fallbackName = '') => {
      if (payload?.map && Array.isArray(payload.assets)) {
        const name = payload.map.name || payload.name || fallbackName || 'Map';
        return [{ name, payload }];
      }
      if (Array.isArray(payload?.maps)) {
        return payload.maps.map((entry, index) => {
          const mapPayload = entry.payload || entry;
          const name = entry.name || entry.fileName || mapPayload?.map?.name || `Map ${index + 1}`;
          return { name, payload: mapPayload };
        });
      }
      return [];
    };

    const getMapNeighbors = (cells, width, height, x, y, assetNumber) => {
      const isSame = (cx, cy) => {
        if (cx < 0 || cy < 0 || cx >= width || cy >= height) return false;
        const cell = cells[cy * width + cx];
        return Number(cell?.assetNumber) === assetNumber;
      };
      const n = isSame(x, y - 1);
      const s = isSame(x, y + 1);
      const w = isSame(x - 1, y);
      const e = isSame(x + 1, y);
      const nw = isSame(x - 1, y - 1);
      const ne = isSame(x + 1, y - 1);
      const sw = isSame(x - 1, y + 1);
      const se = isSame(x + 1, y + 1);
      return { n, s, w, e, nw, ne, sw, se };
    };

    const getMapTileIdX13 = (cells, width, height, x, y, assetNumber) => {
      const { n, s, w, e, nw, ne, sw, se } = getMapNeighbors(cells, width, height, x, y, assetNumber);
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

      const sample = [
        nw, n, ne,
        w, true, e,
        sw, s, se
      ];

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
        const { id, mask } = patterns[i];
        if (matchesPattern(mask, sample)) return id;
      }

      return 'center';
    };

    const computeAutoSpriteIndex = (cells, width, height, asset, x, y, assetNumber) => {
      if (!asset || Number.parseInt(asset.spriteCount, 10) < 13) return 1;
      const tileId = getMapTileIdX13(cells, width, height, x, y, assetNumber);
      const index = autoTileOrder.indexOf(tileId);
      return index >= 0 ? index + 1 : 1;
    };

    const buildCollision = (payload) => {
      const map = payload?.map || {};
      const width = clamp(Number.parseInt(map.width, 10) || 0, 0, 2000);
      const height = clamp(Number.parseInt(map.height, 10) || 0, 0, 2000);
      const total = width * height;
      const collision = Array.from({ length: total }, () => false);
      const assets = Array.isArray(payload?.assets) ? payload.assets : [];
      const assetByNumber = new Map(assets.map((asset) => [Number(asset.number), asset]));
      const cells = Array.isArray(map.cells) ? map.cells : [];
      for (let i = 0; i < Math.min(cells.length, total); i += 1) {
        const entry = cells[i];
        if (!entry || entry.assetNumber == null) continue;
        const asset = assetByNumber.get(Number(entry.assetNumber));
        if (asset?.type === 'blocking') {
          collision[i] = true;
        }
      }
      return { collision, width, height };
    };

    const loadAssetImages = async (payload) => {
      state.assetImages = new Map();
      const assets = Array.isArray(payload?.assets) ? payload.assets : [];
      await Promise.all(assets.map(async (asset) => {
        let entry = null;
        if (asset.cacheKey) {
          entry = await cacheGet(asset.cacheKey).catch(() => null);
        }
        if (!entry && asset.fileName) {
          entry = await cacheGetByName(asset.fileName).catch(() => null);
        }
        if (!entry?.blob) return;
        const url = URL.createObjectURL(entry.blob);
        const img = new Image();
        img.src = url;
        await new Promise((resolve) => {
          if (img.complete) resolve(true);
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
        });
        state.assetImages.set(Number(asset.number), { image: img, asset });
      }));
    };

    const buildMapCanvas = (payload) => {
      const map = payload?.map || {};
      const width = clamp(Number.parseInt(map.width, 10) || 0, 0, 2000);
      const height = clamp(Number.parseInt(map.height, 10) || 0, 0, 2000);
      const canvasMap = document.createElement('canvas');
      canvasMap.width = width * tileSize;
      canvasMap.height = height * tileSize;
      const mapCtx = canvasMap.getContext('2d');
      if (!mapCtx) return canvasMap;
      mapCtx.imageSmoothingEnabled = false;
      mapCtx.fillStyle = '#0b0b0b';
      mapCtx.fillRect(0, 0, canvasMap.width, canvasMap.height);

      const assets = Array.isArray(payload?.assets) ? payload.assets : [];
      const assetByNumber = new Map(assets.map((asset) => [Number(asset.number), asset]));
      const cells = Array.isArray(map.cells) ? map.cells : [];
      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          const index = y * width + x;
          const entry = cells[index];
          if (!entry || entry.assetNumber == null) continue;
          const assetNumber = Number(entry.assetNumber);
          const asset = assetByNumber.get(assetNumber);
          if (!asset) continue;
          const spriteIndex = entry.auto !== false
            ? computeAutoSpriteIndex(cells, width, height, asset, x, y, assetNumber)
            : (Number.isInteger(entry.spriteIndex) ? entry.spriteIndex : 1);

          const cached = state.assetImages.get(assetNumber);
          if (cached?.image && cached.image.naturalWidth > 0) {
            const cols = Math.max(1, Number.parseInt(asset.cols, 10) || 1);
            const rows = Math.max(1, Number.parseInt(asset.rows, 10) || 1);
            const spriteWidth = Math.max(1, Number.parseInt(asset.spriteWidth, 10) || Math.floor(cached.image.naturalWidth / cols));
            const spriteHeight = Math.max(1, Number.parseInt(asset.spriteHeight, 10) || Math.floor(cached.image.naturalHeight / rows));
            const spriteCol = (spriteIndex - 1) % cols;
            const spriteRow = Math.floor((spriteIndex - 1) / cols);
            const sx = spriteCol * spriteWidth;
            const sy = spriteRow * spriteHeight;
            mapCtx.drawImage(
              cached.image,
              sx,
              sy,
              spriteWidth,
              spriteHeight,
              x * tileSize,
              y * tileSize,
              tileSize,
              tileSize
            );
          } else {
            mapCtx.fillStyle = asset.color || (asset.type === 'blocking' ? '#4a1c1c' : '#1f5a38');
            mapCtx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
          }
        }
      }
      return canvasMap;
    };

    const findSpawn = () => {
      if (!state.mapPayload) {
        return {
          x: Math.floor(canvas.width / 2 - spriteSize / 2),
          y: Math.floor(canvas.height / 2 - spriteSize / 2)
        };
      }
      const total = state.mapWidth * state.mapHeight;
      for (let i = 0; i < total; i += 1) {
        if (!state.collision[i]) {
          const col = i % state.mapWidth;
          const row = Math.floor(i / state.mapWidth);
          return {
            x: col * tileSize + Math.floor((tileSize - spriteSize) / 2),
            y: row * tileSize + Math.floor((tileSize - spriteSize) / 2)
          };
        }
      }
      return {
        x: Math.floor(canvas.width / 2 - spriteSize / 2),
        y: Math.floor(canvas.height / 2 - spriteSize / 2)
      };
    };

    const applyMapPayload = async (payload, name = '') => {
      state.mapPayload = payload;
      const { collision, width, height } = buildCollision(payload);
      state.collision = collision;
      state.mapWidth = width;
      state.mapHeight = height;
      await loadAssetImages(payload);
      state.mapCanvas = buildMapCanvas(payload);
      setLoadedLabel(name || payload?.map?.name || payload?.name || 'Map');
      resetPosition();
    };

    const setMapList = (maps) => {
      mapState.maps = maps;
      mapState.currentIndex = maps.length ? 0 : -1;
      if (mapSelect) {
        mapSelect.innerHTML = '';
        if (!maps.length) {
          const option = document.createElement('option');
          option.value = '';
          option.textContent = '—';
          mapSelect.appendChild(option);
        } else {
          maps.forEach((entry, index) => {
            const option = document.createElement('option');
            option.value = String(index);
            option.textContent = entry.name;
            mapSelect.appendChild(option);
          });
        }
      }
      if (mapState.currentIndex >= 0) {
        if (mapSelect) mapSelect.value = String(mapState.currentIndex);
        applyMapPayload(maps[mapState.currentIndex].payload, maps[mapState.currentIndex].name);
      } else {
        state.mapPayload = null;
        state.mapCanvas = null;
        state.collision = [];
        state.mapWidth = 0;
        state.mapHeight = 0;
        setLoadedLabel('');
      }
    };

    const importPayload = (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const payload = JSON.parse(String(reader.result || '{}'));
          const maps = normalizeMapPayloads(payload, file.name.replace(/\.[^/.]+$/, ''));
          if (!maps.length) return;
          setMapList(maps);
        } catch (error) {
          // ignore
        }
      };
      reader.readAsText(file);
    };

    mapSelect?.addEventListener('change', () => {
      const idx = Number.parseInt(mapSelect.value, 10);
      if (!Number.isFinite(idx) || !mapState.maps[idx]) return;
      mapState.currentIndex = idx;
      applyMapPayload(mapState.maps[idx].payload, mapState.maps[idx].name);
    });

    qsa('[data-tester-zoom]').forEach((button) => {
      button.addEventListener('click', () => {
        const zoom = Number.parseInt(button.dataset.testerZoom, 10) || 1;
        state.zoom = zoom;
        qsa('[data-tester-zoom]').forEach((btn) => btn.classList.toggle('is-active', btn === button));
      });
    });

    importMapButton?.addEventListener('click', () => mapFileInput?.click());
    importWorldButton?.addEventListener('click', () => worldFileInput?.click());
    mapFileInput?.addEventListener('change', () => {
      const file = mapFileInput.files?.[0];
      if (file) importPayload(file);
      mapFileInput.value = '';
    });
    worldFileInput?.addEventListener('change', () => {
      const file = worldFileInput.files?.[0];
      if (file) importPayload(file);
      worldFileInput.value = '';
    });

    window.addEventListener('keydown', handleKey);
    window.addEventListener('keyup', handleKey);
    window.addEventListener('blur', () => pressedKeys.clear());
    resetButton?.addEventListener('click', resetPosition);

    let lastTime = performance.now();

    const isBlocked = (px, py) => {
      if (!state.mapPayload) return false;
      const col = Math.floor(px / tileSize);
      const row = Math.floor(py / tileSize);
      if (col < 0 || row < 0 || col >= state.mapWidth || row >= state.mapHeight) return true;
      return Boolean(state.collision[row * state.mapWidth + col]);
    };

    const canMove = (nx, ny) => {
      const corners = [
        [nx, ny],
        [nx + spriteSize - 1, ny],
        [nx, ny + spriteSize - 1],
        [nx + spriteSize - 1, ny + spriteSize - 1]
      ];
      return !corners.some(([cx, cy]) => isBlocked(cx, cy));
    };

    const update = (delta) => {
      let vx = 0;
      let vy = 0;
      const up = pressedKeys.has('ArrowUp') || pressedKeys.has('w') || pressedKeys.has('W') || pressedKeys.has('z') || pressedKeys.has('Z');
      const down = pressedKeys.has('ArrowDown') || pressedKeys.has('s') || pressedKeys.has('S');
      const left = pressedKeys.has('ArrowLeft') || pressedKeys.has('a') || pressedKeys.has('A') || pressedKeys.has('q') || pressedKeys.has('Q');
      const right = pressedKeys.has('ArrowRight') || pressedKeys.has('d') || pressedKeys.has('D');

      if (up) vy -= 1;
      if (down) vy += 1;
      if (left) vx -= 1;
      if (right) vx += 1;

      const moving = vx !== 0 || vy !== 0;
      if (moving) {
        const length = Math.hypot(vx, vy) || 1;
        vx /= length;
        vy /= length;
        const dx = vx * speed * delta;
        const dy = vy * speed * delta;

        let nextX = state.x + dx;
        let nextY = state.y + dy;

        if (state.mapPayload) {
          if (canMove(nextX, state.y)) {
            state.x = nextX;
          }
          if (canMove(state.x, nextY)) {
            state.y = nextY;
          }
        } else {
          state.x = clamp(nextX, 0, canvas.width / state.zoom - spriteSize);
          state.y = clamp(nextY, 0, canvas.height / state.zoom - spriteSize);
        }

        if (Math.abs(vx) > Math.abs(vy)) {
          state.dir = vx < 0 ? 'left' : 'right';
        } else {
          state.dir = vy < 0 ? 'up' : 'down';
        }

        state.frameTimer += delta;
        if (state.frameTimer >= frameDuration) {
          state.frameTimer = 0;
          state.frame = state.frame === 0 ? 1 : 0;
        }
      } else {
        state.frameTimer = 0;
      }

      if (positionValue) {
        positionValue.textContent = `${Math.round(state.x)}, ${Math.round(state.y)}`;
      }
      if (directionValue) {
        directionValue.textContent = getDirLabel(state.dir);
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0b0b0b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      let cameraX = 0;
      let cameraY = 0;
      const viewScale = state.zoom || 1;
      const viewWidth = canvas.width / viewScale;
      const viewHeight = canvas.height / viewScale;

      if (state.mapCanvas) {
        const mapWidthPx = state.mapWidth * tileSize;
        const mapHeightPx = state.mapHeight * tileSize;
        const centerX = state.x + spriteSize / 2;
        const centerY = state.y + spriteSize / 2;
        cameraX = clamp(centerX - viewWidth / 2, 0, Math.max(0, mapWidthPx - viewWidth));
        cameraY = clamp(centerY - viewHeight / 2, 0, Math.max(0, mapHeightPx - viewHeight));
        ctx.drawImage(
          state.mapCanvas,
          cameraX,
          cameraY,
          viewWidth,
          viewHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      const sheet = state.dir === 'up' ? sheets.up : state.dir === 'down' ? sheets.down : sheets.side;
      const info = state.dir === 'up' ? sheetInfo.up : state.dir === 'down' ? sheetInfo.down : sheetInfo.side;
      const isMoving = pressedKeys.size > 0;
      const frameIndex = isMoving ? state.frame : info.idle;
      const sx = frameIndex * spriteSize;
      const drawX = Math.round((state.x - cameraX) * viewScale);
      const drawY = Math.round((state.y - cameraY) * viewScale);
      const drawSize = spriteSize * viewScale;

      if (state.dir === 'left') {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(sheet, sx, 0, spriteSize, spriteSize, -drawX - drawSize, drawY, drawSize, drawSize);
        ctx.restore();
      } else {
        ctx.drawImage(sheet, sx, 0, spriteSize, spriteSize, drawX, drawY, drawSize, drawSize);
      }
    };

    const tick = (time) => {
      const delta = Math.min(0.05, (time - lastTime) / 1000);
      lastTime = time;
      update(delta);
      render();
      requestAnimationFrame(tick);
    };

    const start = () => requestAnimationFrame(tick);
    let loaded = 0;
    const onLoad = () => {
      loaded += 1;
      if (loaded >= 3) start();
    };

    Object.values(sheets).forEach((img) => {
      if (img.complete) {
        onLoad();
      } else {
        img.addEventListener('load', onLoad);
        img.addEventListener('error', onLoad);
      }
    });

    document.addEventListener('languagechange', () => {
      if (directionValue) directionValue.textContent = getDirLabel(state.dir);
      setLoadedLabel(mapState.maps[mapState.currentIndex]?.name || '');
    });

    setLoadedLabel('');
  };

  const bindCacheLifecycle = () => {
    if (!document.body.classList.contains('page-graphic-assets')) return;
    window.addEventListener('pagehide', flushCache);
    window.addEventListener('beforeunload', flushCache);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        flushCache();
      }
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
    const isHomePage = document.body.classList.contains('page-home');
    const isEditorPage = document.body.classList.contains('page-graphic-assets');
    const isMapPage = document.body.classList.contains('page-map');
    const isWorldPage = document.body.classList.contains('page-world');
    const isTesterPage = document.body.classList.contains('page-tester');

    if (isHomePage) {
      createHeroAmbient();
    }

    if (isEditorPage) {
      initializeState();
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
      bindCopyModeControls();
      bindZoomControl();
      bindGridControls();
      bindFramesControls();
      bindPreviewModeTabs();
      bindPreviewControls();
      bindWallPaintInteraction();
      bindExportButton();
      bindPaletteControls();
      bindUndoRedo();
      bindCacheLifecycle();
    }

    if (isMapPage) {
      initMapCreator();
    }
    if (isWorldPage) {
      initWorldCreator();
    }
    if (isTesterPage) {
      initTester();
    }

    bindLanguageToggle();

    const storedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    applyTranslations(storedLanguage);
    if (isEditorPage) {
      updateActiveToolLabel();
      const designer = document.body.dataset.designer || 'tiles';
      setPreviewMode(designer);
      const wallModeSelect = qs('#wall-mode');
      if (wallModeSelect) wallModeSelect.value = state.wallMode;
      renderPreviews();
      renderCopyModeState();
    }
  });
})();
