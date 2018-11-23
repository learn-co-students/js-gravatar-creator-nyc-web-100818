function updateDOM(strValue) {
  const identicon = new Identicon(strValue)
  identicon.grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) =>{
      let block = document.getElementById(`${rowIndex}-${colIndex}`)
      if (cell) {
        block.style.backgroundColor = identicon.colorRGB
      } else {
        block.style = null
      }
    })
  })
}