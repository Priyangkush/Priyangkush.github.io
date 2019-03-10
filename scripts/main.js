var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myButton.onclick = function() {
	setUserName();
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You are Awesome, ' + myName;
}

