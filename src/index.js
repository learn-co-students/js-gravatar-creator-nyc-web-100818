document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  const container = document.getElementById('identicon')
  const gridSize = document.getElementById("gridSize")
  const gridLayout = document.getElementById('gridLayout')
  const strValue = document.getElementById('strValue')

  function handleSubmit(e) {
    e.preventDefault()
    updateDOM(container, strValue.value, gridSize.value, gridLayout.value)
    //e.target.reset()
  }
  
  function validateForm(e) {
    if (gridLayout.value === 'rotational' && (parseInt(gridSize.value) % 2) === 0) {
      gridSize.setCustomValidity("Odd number required for rotational symetry")
    } else {
      gridSize.setCustomValidity("")
    }
  }

  form.addEventListener("submit", handleSubmit)
  form.addEventListener("input", validateForm)
})
