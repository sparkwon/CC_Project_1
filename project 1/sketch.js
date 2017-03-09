var x = 0;
var dropY = 0;
var clr

function setup() {
  createCanvas(800, 800);
  cursor(CROSS);
}

function draw() {
  background(100);
  //droplet (0);
  if((keyIsPressed) && (key === 's')){
     dropY += 10;
     if (dropY > height){
       dropY = 0;
     }
   }
  
	if ((mouseIsPressed)){
    droplet (dropY);
    scale (2,2);
    droplet (dropY);
  }
    
    
  

  //droplet(dropY);


  /*if (mouseIsPressed){
  droplet(x+=.5); 
  } else {
    droplet(1);
  }*/

}


function droplet(y) {
  fill(255);
  stroke(0);
  strokeWeight(0);
  triangle(mouseX - 10, mouseY + 20 + y, mouseX + 10, mouseY + 20 + y, mouseX, mouseY + y);
  ellipse(mouseX, mouseY + 23 + y, 21, 21);
}

function dropletTest(y) {
  fill(255);
  stroke(0);
  strokeWeight(0);
  triangle(50, 50 + y, 100, 50 + y, 75, 25 + y);
  ellipse(75, 45 + y, 21, 21);

}