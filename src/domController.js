function updateDOM() {
  let newHash = new Identicon(userInput)
  let rgbArray = newHash.rgbArray.join()
  const identiconDivLeft = document.querySelectorAll('.left')
  const identiconDivRight = document.querySelectorAll('.right')
  // console.log(identiconDivRight.length);
  // debugger
  for (let i = 0; i < identiconDivLeft.length; i++) {
    if (i < 3) {
      let test = Math.random()
      if (test > 0.5) {
        identiconDivLeft[i].style.backgroundColor = `rgb(${rgbArray})`
        if (i === 0) {
          identiconDivRight[i + 1].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
        } else if (i === 1) {
          identiconDivRight[i - 1].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
        }
      }
    } else if ((i >= 3) && (i < 5)) {
      let test = Math.random()
      if (test > 0.5) {
        identiconDivLeft[i].style.backgroundColor = `rgb(${rgbArray})`
        if (i === 3) {
          identiconDivRight[i].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
        } else if (i === 4) {
          identiconDivRight[i - 2].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
        }
      }
    } else if ((i >= 5) && (i < 9)) {
      let test = Math.random()
      if (test > 0.5) {
        identiconDivLeft[i].style.backgroundColor = `rgb(${rgbArray})`
        if (i === 6) {
          identiconDivRight[i - 1].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
        } else if (i === 7) {
          identiconDivRight[i - 3].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
        }
      }
    } else if ((i >= 9) && (i < 12)) {
      let test = Math.random()
      if (test > 0.5) {
        identiconDivLeft[i].style.backgroundColor = `rgb(${rgbArray})`
        if (i === 9) {
          identiconDivRight[i - 2].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
        } else if (i === 10) {
          identiconDivRight[i - 4].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
        }
      }
    } else if ((i >= 12) && (i < 15)) {
      let test = Math.random()
      if (test > 0.5) {
        identiconDivLeft[i].style.backgroundColor = `rgb(${rgbArray})`
        if (i === 12) {
          identiconDivRight[i - 3].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
        } else if (i === 13) {
          identiconDivRight[i - 5].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
        }
      }
    }
  }
}

function resetIdenticon() {
  const identiconDiv = document.getElementById('identicon')
  for (let i = 0; i < identiconDiv.childElementCount; i++) {
    identiconDiv.children[i].style = ''
  }
}
