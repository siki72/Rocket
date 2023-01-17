"use strict";
const btn = document.getElementById("firing-button");
const count = document.querySelector("span");
const rocketImage = document.getElementById("rocket");
const cancel = document.getElementById("cancel-button");

let countdownActive = false;
let intervalId = null;
let i = 10;

tiy(), normal(), big();

btn.addEventListener("click", () => {
  cancel.classList.remove("disabled");
  rocketImage.src = "images/rocket2.gif";
  count.innerText = i;

  if (!countdownActive) {
    intervalId = setInterval(() => {
      countdown();
    }, 1000);
    countdownActive = true;
  }
});

cancel.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    countdownActive = false;
  }
});

function countdown() {
  if (i > 0) {
    i--;
    count.innerText = "0" + i;
  }
  if (i == 0) {
    rocketImage.classList.add("tookOff");
    rocketImage.src = "images/rocket3.gif";
    count.innerText = "GO";
    i = null;
    return;
  }
}

function tiy() {
  for (let s = 0; s <= 50; s++) {
    const smallStar = document.createElement("div");
    smallStar.setAttribute("class", "star tiny");
    smallStar.style.transform = `translate(${Math.random() * 1600}px, ${
      Math.random() * 1200
    }px)`;
    document.body.appendChild(smallStar);
  }
}

function normal() {
  for (let n = 0; n <= 50; n++) {
    const normallStar = document.createElement("div");
    normallStar.setAttribute("class", "star normal");
    normallStar.style.transform = `translate(${Math.random() * 1600}px, ${
      Math.random() * 1200
    }px)`;
    document.body.appendChild(normallStar);
  }
}

function big() {
  for (let b = 0; b <= 50; b++) {
    const bigStars = document.createElement("div");
    bigStars.setAttribute("class", "star big");
    bigStars.style.transform = `translate(${Math.random() * 1600}px, ${
      Math.random() * 1200
    }px)`;
    document.body.appendChild(bigStars);
  }
}
cancel.addEventListener("click", () => {
  rocketImage.classList.remove("tookOff");
});
