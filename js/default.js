var current = 1;
	
var IMGArray = new Array();
IMGArray[0] = "images/AllofLifeMatters.jpg";
IMGArray[1] = "images/UpsideDownAndBackwards.jpg";

function changeImages() {
   if (current >= IMGArray.length) current = 0;
   document.getElementById('main-image').src = IMGArray[current];
   current = current + 1;
   return true;
}

function setBaseImage (id) {
   var rand = Math.floor(Math.random() * IMGArray.length);
   document.getElementById(id).src = IMGArray[rand];
   return true;
}
