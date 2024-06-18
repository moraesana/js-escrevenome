function setup() {
    createCanvas(400, 400);
    background("lightblue")
  }
  
  function draw() {
    stroke("black");
    fill("white");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 15, 25);
    }
  }
  