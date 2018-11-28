identiconsHash = {};

function handleSubmit(e) {
  e.preventDefault();
  if (e.target[0].value.length > 0) {
    if(identiconsHash.hasOwnProperty(e.target[0].value)) {
      let identicon = identiconsHash[e.target[0].value];
      identicon.returnBoardColor();
    }
    else {
      let identicon = new Identicon();
      identicon.generateCells();
      identicon.generateRandomColor();

      identiconsHash[e.target[0].value] = identicon;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
});