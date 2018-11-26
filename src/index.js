identiconsHash = {};

function handleSubmit(e) {
  e.preventDefault();
  // console.log(e.target[0].value);
  if (e.target[0].value.length > 0) {
    for(key in identiconsHash) {
      console.log('this here hi');
      if(identiconsHash[key]) {
        console.log('this identicon exists')
      }
      else {
        let identicon = new Identicon();
        identicon.generateCells();
        identicon.generateRandomColor();

        identiconsHash[e.target[0].value] = identicon;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
});