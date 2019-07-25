function mapX(x) {
  return map(x, -1, 1, 0, width);
}

function mapY(y) {
  return map(y, -1, 1, height, 0);
}
function mousePressed() {
  x_vals.push(map(mouseX, 0, width, -1, 1));
  y_vals.push(map(mouseY, 0, height, 1, -1));
}
