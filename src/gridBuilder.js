// base class for mirrored gridz
class MirroredGrid {
  constructor(array, gridSize) {
    this.array = array
    this.gridSize = parseInt(gridSize)
    this.mirroredElements = Math.ceil(this.gridSize / 2)
    this.mirroredSquares = this.gridSize * this.mirroredElements
    this.slicedArray = this.getGridArray()
  }

  getGridArray() {
   // repeat array to generate enough values for gridz
   let newArray = [...this.array]
   while (newArray.length <= this.mirroredSquares) {
     newArray = newArray.concat(newArray)
   }
   let booleanArray = newArray.slice(0, this.mirroredSquares).map(number => (number % 2) === 0)
   return booleanArray
  }
}

class RotationallyMirroredGrid extends MirroredGrid { // won't work with an odd number of rows, the middle row can't be mirrored
  constructor(array, gridSize) {
    super(array, gridSize)
    this.gridArray = this.makeGrid()
  }  

  makeGrid() {
    let gridArray = []
    this.slicedArray.forEach((val, index) => {
      let rowIndex = Math.floor(index / this.gridSize)
      let colIndex = index % this.gridSize
      
      if (colIndex === 0) { // create new row/rows
        let arrVal = ((gridArray.length + 2) > this.gridSize) ? [[]] : [[], []] // mirrored
        gridArray.splice(rowIndex,0,...arrVal)
      }
      
      gridArray[rowIndex].push(val) // add to the end
      if ((rowIndex + 1) <= (this.gridSize / 2)) {
        gridArray[rowIndex + 1].unshift(val) // add from the beginning
      }
    })
    return gridArray
  }
}

class VerticallyMirroredGrid extends MirroredGrid {
  constructor(array, gridSize) {
    super(array, gridSize)
    this.gridArray = this.makeGrid()
  }  

  makeGrid() {
    let gridArray = []
    this.slicedArray.forEach((val, index) => {
      let rowIndex = Math.floor(index / this.gridSize)
      let colIndex = index % this.gridSize
      
      if (colIndex === 0) { // create new row/rows
        let arrVal = ((gridArray.length + 2) > this.gridSize) ? [[]] : [[], []] // mirrored
        gridArray.splice(rowIndex,0,...arrVal)
      }
      
      gridArray[rowIndex].push(val)
      if ((rowIndex + 1) <= (this.gridSize / 2)) {
        gridArray[rowIndex + 1].push(val)
      }
    })
    return gridArray
  }
}

class HorizontallyMirroredGrid extends MirroredGrid {
  constructor(array, gridSize) {
    super(array, gridSize)
    this.gridArray = this.makeGrid()
  }

  makeGrid() {
    let gridArray = []
    this.slicedArray.forEach((val, index) => {
      let rowIndex = Math.floor(index / this.mirroredElements)
      let colIndex = index % this.mirroredElements

      if (colIndex === 0)
        gridArray[rowIndex] = []
      
      let arrVal = ((gridArray[rowIndex].length + 2) > this.gridSize) ? [val] : [val, val] // mirrored
      gridArray[rowIndex].splice(colIndex, 0, ...arrVal)
    })
    return gridArray
  }
}