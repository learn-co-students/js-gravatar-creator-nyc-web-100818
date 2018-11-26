class Identicon {
  constructor() {
    this.boardCells = [];
    this.color = '#'; 
  }

  generateCells() {
    let cellsHTML = Array.from(document.getElementById('identicon').children);
    cellsHTML.forEach( cell => {
      this.boardCells.push({active: Math.floor(Math.random() * 2), id: cell.id});
    });
  }

  generateRandomColor() {
    let hexLetters = '0123456789ABCDEF';
    for(let i = 0; i < 6; i++) {
      this.color += hexLetters[Math.floor(Math.random() * 16)];
    }
    
    this.boardCells.forEach( cell => {
      let cellBox = document.getElementById(cell.id)
      if(cell.active) {
        cellBox.style = `background-color: ${this.color}`;
      }
      else {
        cellBox.style = "";
      }
    });
  }

  returnBoardColor() {
    this.boardCells.forEach( cell => {
      let cellBox = document.getElementById(cell.id)
      if(cell.active) {
        cellBox.style = `background-color: ${this.color}`;
      }
      else {
        cellBox.style = "";
      }
    });
  }
}
