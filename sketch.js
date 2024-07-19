function setup() {
  createCanvas(1020, 1020);

  background(76, 107, 158);
  strokeWeight (18);
  stroke ('black');
  frameRate(10);
  
}

function draw () {
  let posX = mouseX;
  let posY = mouseY;
  point( posX, posY );
  
}