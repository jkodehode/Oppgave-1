const suprBtn = document.getElementById("spr-btn");
const btnTwo = document.getElementById("btn-2");
const heml = document.getElementById("container1-el");
const bodyEl = document.getElementById("body-el");
// const welcome = document.getElementById("welcome");

// Glemte åssen jeg gjorde denne. Tar det neste gang ;)
// suprBtn.addEventlistner("click", function () {
//   bodyEl.innerText = "Ny Tekst";
// });

let minHtml =
  "<div class='minHtml'><img src='logo.png'><img src='logo.png'><img src='logo.png'><img src='logo.png'></div>";

function knapp() {
  heml.innerHTML = minHtml;
}

function knapp2() {
  bodyEl.innerHTML = "KRÆSJ";
}
