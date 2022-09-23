import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

console.log("javascript betöltve!");

let gomb_kattints = document.getElementById("gomb-kattints");
let gratulalok = document.getElementById("gratulalok");
let gomb_bezar = document.getElementById("gomb-bezar");

gomb_kattints.addEventListener("click", function () {
    gratulalok.classList.remove("d-none");
})

gomb_bezar.addEventListener("click", function () {
    gratulalok.classList.add("d-none");
})
