var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");
var runButton = document.querySelector(".run-button");
var light = document.getElementById('traffic-light');
var timer;

stopButton.addEventListener("click", stop);
slowButton.addEventListener("click", slow);
goButton.addEventListener("click", go);
cautionButton.addEventListener("click", caution);
runButton.addEventListener("click", run);


function stop (e){
  if (e) {
      clearInterval(timer);
  } else {
    timer = setTimeout(go, 3000);
  }
  light.classList.add('stop');
  light.classList.remove('changeLight');
  light.classList.remove('go');
  light.classList.remove('slow');
}

function slow (e){
  if (e) {
      clearInterval(timer);
  } else {
    timer = setTimeout(stop, 1000);
  }
  light.classList.remove('changeLight');
  light.classList.remove('go');
  light.classList.add('slow');
  light.classList.remove('stop');
  //setTimeout(stop, 1000);
  //clearInterval(timer);
}

function go (e){
  if (e) {
    // this means we got here via button click
      clearInterval(timer);
  } else {
    // this means we got here via 'stop'
    timer = setTimeout(slow, 1000);
  }
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
  
  timer = setInterval(function(){
      light.classList.toggle("slow");
  },1000);

}

function run (e) {
  clearInterval(timer);
  stop()
}


