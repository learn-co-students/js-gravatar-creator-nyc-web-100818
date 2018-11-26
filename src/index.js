let userInput = ''

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", (event) => {
    resetIdenticon()
    event.preventDefault()
    const formDiv = event.target;
    userInput = formDiv.querySelector('input').value;
    updateDOM()
  })
})
