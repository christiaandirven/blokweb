// JavaScript Document

var deButton = document.querySelector("nav:nth-of-type(1) button");
var navMove = document.querySelector("nav:nth-of-type(2)");
var tweedeButton = document.querySelector("nav:nth-of-type(2) button");


deButton.addEventListener("click", leftToRight);
tweedeButton.addEventListener("click", leftToRight);


function leftToRight() {
    navMove.classList.toggle("toonMenu");
}