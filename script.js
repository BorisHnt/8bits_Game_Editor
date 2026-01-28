(() => {
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

    const highlightPalette = ['#0c6c00', '#508300', '#889900', '#c2ab00'];
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
      '#0c6c00',
      '#508300',
      '#889900',
      '#c2ab00',
      '#ffbb00',
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
      swatch.setAttribute('aria-label', `Select color ${color}`);
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

  const bindToolSelection = () => {
    const toolButtons = document.querySelectorAll('.tool-selector-button');
    const activeLabel = document.getElementById('active-tool-label');
    if (!toolButtons.length || !activeLabel) return;

    toolButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const activeButton = document.querySelector('.tool-selector-button.is-active');
        if (activeButton) {
          activeButton.classList.remove('is-active');
        }
        button.classList.add('is-active');
        activeLabel.textContent = button.textContent.trim();
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

  document.addEventListener('DOMContentLoaded', () => {
    createHeroAmbient();
    buildPixelCanvas();
    buildTilePreview();
    buildPalette();
    bindToolSelection();
    bindZoomControl();
  });
})();
