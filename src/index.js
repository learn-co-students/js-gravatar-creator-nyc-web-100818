identiconsHash = {};

function handleSubmit(e) {
  e.preventDefault();
  if (e.target[0].value.length > 0) {
    console.log('this here hi');
    if(identiconsHash.hasOwnProperty(e.target[0].value)) {
      console.log('this identicon exists')
    }
    else {
      let identicon = new Identicon();
      identicon.generateCells();
      identicon.generateRandomColor();

      identiconsHash[e.target[0].value] = identicon;
    }
  }
  console.log(identiconsHash);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
});