// this function plays a sound based on the input it is given the input is defined in the eventListeners
function dropIt(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key)
  }
}


// this function animates the buttons when they are activated either through keydown or pressing the button
function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key)
  activeButton.classList.add("pressed")
}


// this function removes the animation
function buttonAnimationRemove(key) {
  var activeButton = document.querySelector("." + key)
  activeButton.classList.remove("pressed")
}

// this makes the buttons work and defines the input for dropIt(),then calls it
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var key = this.innerHTML;
    dropIt(key);
    buttonAnimation(key);
     setTimeout(buttonAnimationRemove, 100, key);
  });
}


// this makes the site reconice keystrokes and makes them a variable and will then reneiw the variable and run the function each time a key is pressed
document.addEventListener("keydown", function(event) {
  var key = event.key
  dropIt(key);
  buttonAnimation(key);
});

// this removes the animation once the key isnt pressed anymore
document.addEventListener("keyup", function(event) {
  var key = event.key
  buttonAnimationRemove(key);
});
