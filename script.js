const gridContainer = document.getElementById("grid-container");
const cells = document.querySelectorAll('.cell')
const tools = document.querySelectorAll('.tool')
const btnClear = document.getElementById('clear')
const colorPicker = document.getElementById('color-picker')
const colorDisplay = document.getElementById('color-display')
const sizePicker = document.getElementById('size-picker')
const sizeText = document.getElementById('size-text')


let size = 16
let tool = 'pencil'
let color = 'black'
let opacity = 0.0

sizePicker.addEventListener('input', (e) => {
  size = Number(e.target.value)
  updateGrid(gridContainer, size)
  sizeText.textContent = `${size}x${size}`
  opacity = 0.0
})

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
      }else if (tool === 'eraser') {
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
  opacity = 0.1
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white'
  })
}


tools.forEach(toolElement => {
  toolElement.addEventListener('click', (e) => {
    tools.forEach(toolElement => toolElement.classList.remove('active'))
    e.target.classList.add('active')
    opacity = 0.1
    tool = e.target.textContent.toLowerCase()
  })
});

btnClear.addEventListener('click', () => clear())

colorPicker.addEventListener('input', (e) => {
  color = e.target.value
  opacity = 0.0
  colorDisplay.style.backgroundColor = color
})


colorDisplay.style.backgroundColor = color
generateGrid(size);
attachEventListeners()