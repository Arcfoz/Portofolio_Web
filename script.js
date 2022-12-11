function buttonalert() {
  alert("AHSIAPPP!!!");
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

setInterval(() => {
  data = {
    temperature: randomNumber(25,30)
  }
  console.log(data)
  document.getElementById("temp").innerHTML = data.temperature
}, 1000 )