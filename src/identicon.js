const identiconz = [];

class Identicon {
  constructor(string) {
    this.userInput = string
    this.hashedArr = md5.array(string)
    let i = 0;
    this.rgbArray = [];
    while (i < 3) {
      this.rgbArray.push(this.hashedArr[Math.floor(Math.random()*this.hashedArr.length)])
      i++
    }
    identiconz.push(this)
  }
}
