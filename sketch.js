let circles = []; 
// declare an array for circles

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // if the mouse pressed, add a new circle
  if (mouseIsPressed) {
    // create an object with x, y, size, and color properties
    let c = { 
      x: mouseX,
      y: mouseY,
      size: random(10, 50),
      color: color(random(255), random(255), random(255))
    };
    circles.push(c); 
    // add object to the end
  }
  
  // loop through the array of circles and draw them
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    fill(c.color);
    ellipse(c.x, c.y, c.size);
  }
}

 //save an image
  function keyPressed() {
  if (key == 's') {
    save();
  }  
}