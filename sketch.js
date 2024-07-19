function setup() {
  createCanvas(1020, 1020);

  background(128, 66, 153);
  strokeWeight (18);
  stroke ('white');
  frameRate(10);
  
}

function draw () {
  let posX = mouseX;
  let posY = mouseY;
  point( posX, posY );
  
}