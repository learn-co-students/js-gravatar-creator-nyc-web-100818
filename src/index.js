
const identiconLogic = () => {
  const identiconDivLeft = document.querySelectorAll('.left')
  const identiconDivRight = document.querySelectorAll('.right')
  let newHash = ""
  newHash = findUser(newHash);
  let rgbArray = newHash.rgbArray.join()
  for (let i = 0; i < identiconDivLeft.length; i++) {
      colorBlocks(i, newHash, identiconDivLeft, identiconDivRight, rgbArray)
  }
}

const colorBlocks = (i, newHash, identiconDivLeft, identiconDivRight, rgbArray) => {
  let x = 0, y = 0, j = 0, k = 0;
  if (i < 3) {
    x = i + 1;
    y = i - 1;
    j = 0;
    k = 1;
  } else if ((i >= 3) && (i < 5)) {
    x = i;
    y = i - 2;
    j = 3;
    k = 4;
  } else if ((i >= 5) && (i < 9)) {
    x = i - 1;
    y = i - 3;
    j = 6;
    k = 7;
  } else if ((i >= 9) && (i < 12)) {
    x = i - 2;
    y = i - 4;
    j = 9;
    k = 10;
  } else if ((i >= 12) && (i < 15)) {
    x = i - 3;
    y = i - 5;
    j = 12;
    k = 13;
  }
  let test = newHash.hashedArr[i]
  if (test > (256/2)) {
    identiconDivLeft[i].style.backgroundColor = `rgb(${rgbArray})`
    if (i === j) {
      identiconDivRight[x].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
    } else if (i === k) {
      identiconDivRight[y].style.backgroundColor = identiconDivLeft[i].style.backgroundColor
    }
  }
}

const findUser = (newHash) => {
  if (identiconz.find(i => (i.userInput == userInput)) != undefined) {
    newHash = identiconz.find(i => (i.userInput == userInput))
  } else {
    newHash = new Identicon(userInput)
  }
  return newHash
}

const resetIdenticon = () => {
  const identiconDiv = document.getElementById('identicon')
  for (let i = 0; i < identiconDiv.childElementCount; i++) {
    identiconDiv.children[i].style = ''
  }
}
