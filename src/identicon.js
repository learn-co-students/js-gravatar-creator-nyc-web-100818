class Identicon {
  constructor(string) {
    this.hashedArr = md5.array(string)
    let i = 0;
    this.rgbArray = [];
    while (i < 3) {
      this.rgbArray.push(this.hashedArr[Math.floor(Math.random()*this.hashedArr.length)])
      i++
    }
  }

  // function threeRandom() {
  //   let i = 0;
  //   let rgbArray = [];
  //   while (i < 3) {
  //     rgbArray.push(this.hashedArr[Math.floor(Math.random()*this.hashedArr.length)])
  //     i++
  //   }
  //   console.log(rgbArray);
  // }
}
