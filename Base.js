let y_vals = [];
let x_vals = [];

function setup() {
  createCanvas(window.innerHeight, window.innerHeight - 100);
  background(0);
}

function drawPoints(){
  stroke(255);
  strokeWeight(8);

  for (let i = 0; i < x_vals.length; i++) {
    let px = mapX(x_vals[i]);
    let py = mapY(y_vals[i]);
    point(px, py);
  }
}

function draw() {
  drawPoints();
}
