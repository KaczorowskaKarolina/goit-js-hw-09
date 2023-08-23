function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

window.onload = function() {
  var startButton = document.querySelector('[data-start]');
  var stopButton = document.querySelector('[data-stop]');
  var body = document.querySelector('body');
  var intervalId;

  function start() {
    intervalId = setInterval(function() {
      var color = getRandomHexColor();
      body.style.backgroundColor = color;
    }, 1000);
    startButton.disabled = true;
  }

  function stop() {
    clearInterval(intervalId);
    startButton.disabled = false;
  }

  startButton.addEventListener('click', start);
  stopButton.addEventListener('click', stop);
};