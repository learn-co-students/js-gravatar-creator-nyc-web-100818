identiconDOMSquares = ['0-0','0-1','0-2','1-0','1-1','1-2','2-0','2-1','2-2','3-0','3-1','3-2','4-0','4-1','4-2']

function updateDOM() {
  Array.from(document.getElementById('identicon').children).forEach((square) => {
    square.style = 'background: white'
  })

  for (let i = 0; i < identiconDOMSquares.length; i++) {
    console.log('i:', i)
    const filled = !!newIdenticon[`val${i}`]
    console.log('Square filled:', filled)
    if (filled) {
      document.getElementById(identiconDOMSquares[i]).style = `background: ${color}`
      if (identiconDOMSquares[i][2] == 0) {
        document.getElementById(`${identiconDOMSquares[i][0]}-4`).style = `background: ${color}`
      } else if (identiconDOMSquares[i][2] == 1) {
        document.getElementById(`${identiconDOMSquares[i][0]}-3`).style = `background: ${color}`
      } // end if /elsif
    } // end if
  } // end for
}


// document.getElementById('0-0').style = `background: ${color}`
