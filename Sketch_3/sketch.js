function setup() {
  createCanvas(800, 800);
  frameRate(10); //slows down eye flashing

  //top kreep colors
  babyBlue = color(36, 137, 255); //body color 
  adultNavy = color(32, 8, 255); //limb colors
  mellowYellow = color(255, 227, 78); //body lines
  bloodRed = color(255, 0, 0); //teeth color

  //middle kreep colors
  lightGreen = color(131, 255, 43);
  darkGreen = color(0, 107, 0);
  berryRed = color(255, 81, 112);
  rotBrown = color(76, 57, 54);

  //last kreep colors (original)
  lightPurple = color(245, 80, 255);
  darkPurple = color(112, 20, 127);
  limeGreen = color(65, 178, 19);
  pearlWhite = color(255);

}

function draw() {
  background(255, 132, 116);

  // all flashing colors
  randie = random(150, 255);
  blinkYellow = color(255, randie, 13);	//top kreep
  randie = random(50, 120);
  blinkRed = color(255, randie, 32);	//middle kreep
  randie = random(150, 255);
  blinkGreen = color(65, randie, 19);	//bottom kreep

  kreepBody(0, -450, 0, 0, babyBlue, mellowYellow); //top kreep
  kreepFeet(-50, -450, 100, 0, babyBlue, mellowYellow);	//wider feet
  kreepHand(0, -450, 5, 0, babyBlue, mellowYellow);	//wider hands
  kreepJoints(0, -450, 5, 0, babyBlue, adultNavy);	//wider joints
  kreepLegs(0, -450, adultNavy);
  kreepArms(0, -450, adultNavy);
  kreepTeeth(0, -450,25,-450,0,-450, bloodRed, blinkYellow);	//wider teeth
  kreepEyes(0, -450,10,0, blinkYellow);	//wider eyes

  kreepBody(0, -225, 0, 0, lightGreen, berryRed); //middle kreep
  kreepFeet(0, -225, 0, 10, lightGreen, berryRed);	//longer feet
  kreepHand(0, -225, 0, 10, lightGreen, berryRed);	//longer hands
  kreepJoints(0, -225, 0, 20, lightGreen, darkGreen);	//longer joints
  kreepLegs(0, -225, darkGreen);
  kreepArms(0, -225, darkGreen);
  kreepTeeth(0, -225,0,-225,0,-180, rotBrown, blinkRed);	//longer teeth
  kreepEyes(0, -275,0,30, blinkRed);	//longer eyes

  kreepBody(0, 0, 0, 0, lightPurple, limeGreen); //last (original) kreep
  kreepFeet(0, 0, 0, 0, lightPurple, limeGreen);
  kreepHand(0, 0, 0, 0, lightPurple, limeGreen);
  kreepJoints(0, 0, 0, 0, lightPurple, darkPurple);
  kreepLegs(0, 0, darkPurple);
  kreepArms(0, 0, darkPurple);
  kreepTeeth(0, 0,0,0,0,0, pearlWhite, blinkGreen);
  kreepEyes(0, 0,0,0, blinkGreen);

  print("My mouse x is: "); // notice that withouth the ln we print on 
  print(mouseX); //ln means line return
  print("My mouse y is: "); // notice that withouth the ln we print on 
  print(mouseY); //ln means line return 

}

function kreepBody(x, y, w, h, f, s) {

  fill(f); //light purple
  stroke(s); //lime green body outline and lines
  strokeWeight(5); //boldness of body outline, lines, and teeth

  rectMode(CENTER);
  rect(400 + x, 600 + y, 200 + w, 100 + h); //size of body 

  line(300 + x, 550 + y, 400 + x, 650 + y); //diagonal lines inside the body
  line(500 + x, 550 + y, 400 + x, 650 + y);
}

function kreepFeet(x, y, w, h, f, s) {
  fill(f);
  stroke(s);
  strokeWeight(4);
  rect(200 + x, 570 + y, 50 + w, 25 + h); //top left foot
  rect(600 - x, 570 + y, 50 + w, 25 + h); //top right foot
  rect(180 + x, 660 + y, 50 + w, 25 + h); //bottom left foot
  rect(620 - x, 660 + y, 50 + w, 25 + h); //bottom right foot
}

function kreepHand(x, y, w, h, f, s) {
  fill(f);
  stroke(s);
  rect(300 + x, 700 + y, 15 + w, 15 + h); //left hand
  rect(500 + x, 700 + y, 15 + w, 15 + h); //right hand
}

function kreepJoints(x, y, w, h, f, s) {
  fill(f); //light purple for joints
  strokeWeight(5);
  stroke(s); //dark purple joint outlines


  ellipse(250 + x, 520 + y, 20 + w, 20 + h); //top left joint
  ellipse(550 + x, 520 + y, 20 + w, 20 + h); //top right joint
  ellipse(230 + x, 620 + y, 20 + w, 20 + h); //bottom left joint
  ellipse(570 + x, 620 + y, 20 + w, 20 + h); //bottom right joint
  ellipse(270 + x, 670 + y, 20 + w, 20 + h); //left arm joint
  ellipse(530 + x, 670 + y, 20 + w, 20 + h); //right arm joint

}

function kreepLegs(x, y, s) {
  strokeWeight(5); //boldness for legs
  stroke(s); //dark purple legs

  line(300 + x, 550 + y, 260 + x, 520 + y); //leg segment from body to top left joint
  line(240 + x, 520 + y, 225 + x, 560 + y); //leg segment from top left joint to top left foot
  line(500 + x, 550 + y, 540 + x, 520 + y); //leg segment from body to top right joint
  line(560 + x, 520 + y, 575 + x, 560 + y); //leg segment from top right joint to top right foot

  line(300 + x, 650 + y, 240 + x, 620 + y); //leg segment from body to bottom left joint
  line(220 + x, 620 + y, 205 + x, 650 + y); // leg segment from bottom left joint to bottom left foot
  line(500 + x, 650 + y, 560 + x, 620 + y); //leg segment from body to bottom right joint
  line(580 + x, 620 + y, 595 + x, 650 + y); //leg segment from bottom right joint to bottom right foot
}

function kreepArms(x, y, s) {
  strokeWeight(5); //boldness for arms
  stroke(s); //dark purple arms

  line(300 + x, 650 + y, 280 + x, 665 + y); //left armlimb to arm joint
  line(500 + x, 650 + y, 520 + x, 665 + y); //right armlimb to arm joint

  line(275 + x, 680 + y, 290 + x, 690 + y); //left armlimb from arm joint to hand
  line(525 + x, 680 + y, 510 + x, 690 + y); //right armlimb from arm joint to hand
}

function kreepTeeth(x1, y1, x2,y2,x3,y3, f, s) {
  randie = random(150, 255);
  strokeWeight(3);
  fill(f); //teeth are white
  stroke(s); //teeth go through shades of green

  triangle(300 + x1, 650 + y1, 350 + x2, 650 + y2, 350 + x3, 685 + y3); //left tooth
  triangle(500 - x1, 650 + y1, 450 - x2, 650 + y2, 450 - x3, 685 + y3); //right tooth
}

function kreepEyes(x, y,w,h, s) {
  strokeWeight(3);
  stroke(s)
  randie = random(0, 255);
  fill(125, randie, 50);

  ellipseMode(CENTER);

  ellipse(330 + x, 620 + y, 40+w, 40+h); //far left eye
  ellipse(370 + x, 580 + y, 40+w, 40+h); //center left eye   
  ellipse(430 + x, 580 + y, 40+w, 40+h); //center right eye
  ellipse(470 + x, 620 + y, 40+w, 40+h); //far right eye

  fill(200, 50, randie);

  ellipse(330 + x, 620 + y, 20+w, 40+h); //inner eye #1
  ellipse(370 + x, 580 + y, 20+w, 40+h); //inner eye #2
  ellipse(430 + x, 580 + y, 20+w, 40+h); //inner eye #3
  ellipse(470 + x, 620 + y, 20+w, 40+h); //inner eye #4
}