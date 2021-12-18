const countdown = document.querySelector(".countdown");
let time = 5;

countdown.innerText = time--;
setTimeout(() => {
  countdown.innerText = time--;
  setTimeout(() => {
    countdown.innerText = time--;
    setTimeout(() => {
      countdown.innerText = time--;
      setTimeout(() => {
        countdown.innerText = time--;
        setTimeout(() => {
          countdown.innerText = "Happy X-mas";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Callback =>Pain of callback and (Callback hell)
