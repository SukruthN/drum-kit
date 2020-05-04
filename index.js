var but = document.querySelectorAll(".drum");
var len = but.length;

for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var key = this.innerHTML;
    // alert(key);
    makeSound(key);
    animKey(key);
  });
}

document.addEventListener("keypress", function(e) {
  var key = e.key;
  // alert(key);
  makeSound(key);
  animKey(key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:

  }
}

function animKey(key)
{
  var act=document.querySelector("."+ key);
  act.classList.add("pressed");
  setTimeout(function(){
    act.classList.remove("pressed");
  },100);
}
