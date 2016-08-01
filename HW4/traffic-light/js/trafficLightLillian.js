var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");
var timer;

stopButton.addEventListener("click", stop);
slowButton.addEventListener("click", slow);
goButton.addEventListener("click", go);
cautionButton.addEventListener("click", caution);
var light = document.getElementById('traffic-light');

function stop (e){
  light.classList.add('stop');
  light.classList.remove('changeLight');
  light.classList.remove('go');
  light.classList.remove('slow');
  clearInterval(timer);
}

function slow (e){
  light.classList.remove('changeLight');
  light.classList.remove('go');
  light.classList.add('slow');
  light.classList.remove('stop');
  clearInterval(timer);
}

function go (e){
  light.classList.remove('changeLight');
  light.classList.add('go');
  light.classList.remove('slow');
  light.classList.remove('stop');
  light.classList.remove('caution');
  clearInterval(timer);

}


function caution (e) {
  light.classList.remove('stop');
  light.classList.remove('go');
  light.classList.remove('changeLight');
  
  timer = setInterval(function(i){
      light.classList.toggle("slow");
  },1000);

}

