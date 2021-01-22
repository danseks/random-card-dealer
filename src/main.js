/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let getShuffle = document.querySelector("#shuffle");
  getShuffle.addEventListener("click", function() {
    const arraySuits = ["heart", "diamond", "spade", "club"];

    let randomSuits = Math.floor(Math.random() * arraySuits.length);

    const arrayNumbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let randomNumbers = Math.floor(Math.random() * arrayNumbers.length);
    //REMOVE IMAGE
    let getIMG = document.querySelector("#img");
    // console.log(getIMG);
    getIMG.classList.remove("background-image-card");
    //SUIT1
    let getSuit = document.querySelector("#suit1");
    getSuit.classList.remove("heart", "diamond", "spade", "club");
    getSuit.classList.add(arraySuits[randomSuits]);
    //SUIT2
    let getSuit2 = document.querySelector("#suit2");
    getSuit2.classList.remove("heart", "diamond", "spade", "club");
    getSuit2.classList.add(arraySuits[randomSuits]);
    //NUMBER
    let getIdNumber = document.querySelector("#number");
    getIdNumber.innerHTML = arrayNumbers[randomNumbers];
  });
};
