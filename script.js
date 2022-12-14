var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementsByTagName('BUTTON')[0];

function changeBackground(){
  body.style.background = `linear-gradient(to right,${getRandomHEXColor()},${getRandomHEXColor()})`;
}

function getRandomHEXColor() {
  const SEED = '0123456789abcdef';
  let output = '#';
  while (output.length < 7) {
    output += SEED[Math.floor(Math.random() * SEED.length)];
  }
  return output;
}


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	//css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", changeBackground);

