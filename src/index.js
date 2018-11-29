let gridArray = Array.from(document.getElementById('identicon').children)
let form = document.getElementById("identicon-form")
let input = document.querySelector('#text-input')

document.addEventListener("DOMContentLoaded", init)
function init () {
  addSubmitEvent()
}

function addSubmitEvent() {
  form.addEventListener("submit", handleSubmit)
}

function handleSubmit(event) {
  event.preventDefault()
  gridArray.forEach((block) => block.style = "background-color: rgb(240, 240, 240)")
  const firstValues = md5.array(input.value)
  assignValues(firstValues)
}

function assignValues(firstValues) {
  const blockColor = `background-color: rgb(${firstValues[0]}, ${firstValues[1]}, ${firstValues[2]});`
  let values = [...firstValues]
  let myArray = []
  let j = 0
  while (j < 5) {
    myArray[j] = values.splice(0, 3);
    myArray[j][3] = myArray[j][1], myArray[j][4] = myArray[j][0];
    j++
  }
  let gridStyler = myArray.flat()
  for (let i = 0; i < gridStyler.length; i++) {
    if ((gridStyler[i] % 2) === 0) {
      gridArray[i].style = blockColor
    }
  }
}
