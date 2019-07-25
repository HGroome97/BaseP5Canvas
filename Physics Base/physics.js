let currentVerticalVelocity = [];
let currentHorizontalVelocity = [];

var gravityAcceleration = -9.81;
var forcedXAcceleration = 10;
var forcedYAcceleration = 10;
var iterationTime = 0.01; //set programatically
var mapXSize = 500;
var mapYSize = 500;

function gravity() {
  for (var i = 0; i < currentVerticalVelocity.length; i++) {
    currentVerticalVelocity[i] += (gravityAcceleration * iterationTime);
  }
}

function move() {
  for (var i = 0; i < currentVerticalVelocity.length; i++) {
    collisionDetection(i);
    x_vals[i] += currentHorizontalVelocity[i];
    y_vals[i] += currentVerticalVelocity[i];
  }
}

function verticalAcceleration(rate) {
  for (var i = 0; i < currentVerticalVelocity.length; i++) {
    currentVerticalVelocity[i] += (rate * iterationTime);
  }
}

function horizontalAcceleration(rate) {
  for (var i = 0; i < currentHorizontalVelocity.length; i++) {
    currentHorizontalVelocity[i] -= (rate * iterationTime);
  }
}

function collisionDetection(i){
  if (y_vals[i] + currentVerticalVelocity[i] < 0) {
    y_vals[i] = 0;
    currentVerticalVelocity[i] = 0;
  }
  if (y_vals[i] + currentVerticalVelocity[i] > mapYSize) {
    y_vals[i] = mapYSize;
    currentVerticalVelocity[i] = 0;
  }
  if (x_vals[i] + currentHorizontalVelocity[i] < 0) {
    x_vals[i] = 0;
    currentHorizontalVelocity[i] = 0;
  }
  if (x_vals[i] + currentHorizontalVelocity[i] > mapXSize) {
    x_vals[i] = mapXSize;
    currentHorizontalVelocity[i] = 0;
  }

}


var keyMap = {};
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    keyMap[e.keyCode] = e.type == 'keydown';
    if (keyMap[38]) {
      verticalAcceleration(forcedYAcceleration);
    } else if (keyMap[40]) {
      verticalAcceleration(-forcedYAcceleration);
    }
    if (keyMap[37]) {
      horizontalAcceleration(forcedXAcceleration);
    } else if (keyMap[39]) {
      horizontalAcceleration(-forcedXAcceleration);
    }
}
