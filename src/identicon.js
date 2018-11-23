class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(strValue) {
    this.strValue = strValue
    this.gridSize = 5 // 5 x 5 grid
    this.mirroredSquaresPerRow = Math.ceil(this.gridSize / 2) // 3 columns per grid (two mirrored)
    this.mirroredSquares = this.gridSize * this.mirroredSquaresPerRow // 15 mirrored squares
    this.md5array = md5.array(strValue).slice(0, this.mirroredSquares) // only take first 15 elements of array (so much math)
    this.colors = this.getColors()
    this.colorRGB = `rgb(${this.colors.join(",")})`
    this.grid = this.getGrid()
  }

  // returns RGB string value
  getColors() {
    return this.md5array.slice(0,3)
  }

  // returns 2D array of booleans to create blocks 
  getGrid() {
    let gridArray = []
    this.md5array.forEach((number, index) => { // 15 element array
      let val = number % 2 === 0 ? true : false // even/odd values
      let rowIndex = Math.floor(index / this.mirroredSquaresPerRow)
      if (!gridArray[rowIndex]) {
        gridArray[rowIndex] = [] // create new array for new rows
      }
      let colIndex = index % this.mirroredSquaresPerRow

      // do mirroring splice fun
      // spread array for doubled values
      if (colIndex + 1 === this.mirroredSquaresPerRow) {
        gridArray[rowIndex].splice(colIndex, 0, val)
      } else {
        gridArray[rowIndex].splice(colIndex, 0, val, val)
      }
    })
    return gridArray
  }
}