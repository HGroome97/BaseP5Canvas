function mapX(x) {
  return map(x, 0, mapXSize, 0, width);
}

function mapY(y) {
  return map(y, 0, mapYSize, height, 0);
}

function mapXInverse(x) {
  return map(x, 0, width, 0, mapXSize);
}

function mapYInverse(y) {
  return map(y, 0, height, mapYSize, 0);
}

function mousePressed() {
  x_vals.push(map(mouseX, 0, width, 0, mapXSize));
  y_vals.push(map(mouseY, 0, height, mapYSize, 0));
  currentVerticalVelocity.push(0);
  currentHorizontalVelocity.push(0);
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
