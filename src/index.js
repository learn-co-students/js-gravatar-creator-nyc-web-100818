function handleSubmit(e) {
  e.preventDefault()
  const strValue = e.target.querySelector('input').value
  updateDOM(strValue)
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
