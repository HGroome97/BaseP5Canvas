function mapX(x) {
  return map(x, 0, mapXSize, 0, width);
}

function mapY(y) {
  return map(y, 0, mapYSize, height, 0);
}
function mousePressed() {
  x_vals.push(map(mouseX, 0, width, 0, mapXSize));
  y_vals.push(map(mouseY, 0, height, mapYSize, 0));
  currentVerticalVelocity.push(0);
  currentHorizontalVelocity.push(0);
}
