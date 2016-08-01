var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");

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
}

function slow (e){
  light.classList.remove('changeLight');
  light.classList.remove('go');
  light.classList.add('slow');
  light.classList.remove('stop');
}

function go (e){
  light.classList.remove('changeLight');
  light.classList.add('go');
  light.classList.remove('slow');
  light.classList.remove('stop');
  light.classList.remove('caution');
}


function caution (e) {
  light.classList.remove('stop');
  light.classList.remove('go');
  light.classList.remove('changeLight');
  
  setInterval(function(){
      light.classList.toggle("slow");
  },1000);
  
  if (stopButton){
    window.clearInterval(cautionButton);
  } else {setInterval(function(){
      light.classList.toggle("slow");
  },1000);}


}

