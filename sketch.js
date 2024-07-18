function setup() {
  createCanvas(500, 500);

  background(245, 66, 123);
  strokeWeight (15);
  stroke ('black');
  frameRate(10);
  
}

function draw () {
  let posX = mouseX;
  let posY = mouseY;
  point( posX, posY );
  
}