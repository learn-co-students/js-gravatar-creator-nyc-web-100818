newIdenticon = new Identicon()
let color = ''

function handleSubmit(e) {
  e.preventDefault()
  const idenString = document.querySelector('#identicon-form-field').value
  const hashedIden = md5.array(idenString)
  color = `rgb(${hashedIden[0]},${hashedIden[1]},${hashedIden[2]})`

  for (let i = 0; i < hashedIden.length; i ++) {
    newIdenticon[`val${i}`] = hashedIden[i] % 2
  }
  if (idenString.length > 0) {
    updateDOM()
  }

  document.querySelector('#identicon-form-field').value = ''
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})

console.log('loaded index.js')
