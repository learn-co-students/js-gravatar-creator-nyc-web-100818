// gridMaker classes
class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(strValue, gridSize, gridLayout) {
    this.strValue = strValue
    this.gridSize = gridSize
    this.gridLayout = gridLayout
    this.md5array = md5.array(strValue)
    this.colors = this.getColors()
    this.colorRGB = `rgb(${this.colors.join(",")})`
    this.grid = this.getGrid()
  }

  // returns RGB string value
  getColors() {
    return this.md5array.slice(0,3)
  }

  // calls grid class to make grid
  getGrid() {
    let grid;
    switch (this.gridLayout) {
      case 'horizontal':
        grid = new HorizontallyMirroredGrid(this.md5array, this.gridSize)
        break
      case 'vertical':
        grid = new VerticallyMirroredGrid(this.md5array, this.gridSize)
        break
      case 'rotational':
        grid = new RotationallyMirroredGrid(this.md5array, this.gridSize)
        break
      default:
        grid = new HorizontallyMirroredGrid(this.md5array, this.gridSize)
        break
    }
    return grid.gridArray
  }
}