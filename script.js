const gridContainer = document.getElementById("grid-container");

const generateGrid = (size) => {
  const itemSize = `calc(100% / ${size})`;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.flex = `0 0 ${itemSize}`;
      cell.style.height = itemSize;
      gridContainer.appendChild(cell);
    }
  }
};

const deleteGrid = (container) => {
  container.textContent = "";
};

const updateGrid = (container, size) => {
  deleteGrid(container);
  generateGrid(size);
};

generateGrid(32);
