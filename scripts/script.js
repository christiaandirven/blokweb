// JavaScript Document

var navMove

var navMove =
    document.querySelector("nav:nth-of-type(2)");
navMove.addEventListener("click", leftToRight);

function leftToRight() {

    navMove.classList.toggle("toonMenu");
}