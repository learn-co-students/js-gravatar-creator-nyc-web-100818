function updateDOM(container, strValue, gridSize, gridLayout) {
  container.innerHTML = ''
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${100 / gridSize}%)`
  container.style.gridTemplateRows = `repeat(${gridSize}, ${100 / gridSize}%)`

  const identicon = new Identicon(strValue, gridSize, gridLayout)
  identicon.grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) =>{
      let block = document.createElement('span')
      block.id = `${rowIndex}-${colIndex}`
      block.style.backgroundColor = cell ? identicon.colorRGB : null
      container.appendChild(block)
    })
  })
}