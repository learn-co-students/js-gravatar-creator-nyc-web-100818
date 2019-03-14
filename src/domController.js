let userInput = ''

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", (event) => {
    const formDiv = event.target;
    resetIdenticon();
    event.preventDefault();
    userInput = formDiv.querySelector('input').value;
    identiconLogic();
  })
})
