const playButton = document.querySelector(".play");
const resetButton = document.querySelector(".reset");
const second = document.querySelector(".sec");
const centiSecond = document.querySelector(".msec");
const minute = document.querySelector(".minute");
const bg=document.querySelector(".outer-circle");



let isPlay = false;
let secCounter = 0;
let sec;
let centiSec;
let centiCounter=0;
let min;
let minCounter=0

const play = () => {
  if (!isPlay) {
    playButton.textContent = "Pause";
    bg.classList.add("animation-bg");
    isPlay = true;
    min = setInterval(() => {
    minute.textContent = `${++minCounter} : `;
    },60* 1000);
    sec = setInterval(() => {
        if(secCounter===59){
            secCounter=0
        }
      second.textContent = `${++secCounter} : `;
    }, 1000);
    centiSec= setInterval(() => {if(centiCounter===100){
        centiCounter=0
    }
        centiSecond.textContent = `${++centiCounter} : `;
      }, 10);
  } else {
    playButton.textContent = "Play";
    clearInterval(sec);
    clearInterval(centiSec)
    clearInterval(min)
    isPlay = false;
    // bg.classList.add("animation-bg");
  }
  
};

const reset = () => {
  play();
  
  second.textContent="0:"
  centiSecond.textContent="0:"
  minute.textContent="0:"
  secCounter.textContent="0"
  centiCounter.textContent="0"
};

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
