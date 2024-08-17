const time = document.querySelector('.time');

setInterval( function () {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000)