const gridContainer = document.getElementById("grid-container");
const cells = document.querySelectorAll('.cell')

let tool = 'pencil'
let color = 'black'
let opacity = 0.0

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
  attachEventListeners()
};

const attachEventListeners = () => {
  
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      if (tool === 'pencil') {
        cell.style.backgroundColor = color;
      }else if (tool === 'erase') {
        cell.style.backgroundColor = 'white'
      }else if(tool === 'rainbow') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
      }else if (tool === 'progresive'){
        
        if (opacity !== 1.0) {
          opacity += 0.1
        }
        cell.style.backgroundColor = color
        cell.style.opacity = opacity
      }
    });
  });
};

const clear = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white'
  })
}

generateGrid(32);
attachEventListeners()