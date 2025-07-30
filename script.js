/* VARIABLES */

let eyeWidth = 35;
let eyeHeight= 35;

let pupilWidth = 22;
let pupilHeight= 25;

let x = 140;
let xx = 260;
let y = 200;

let toggle = false;
/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background(255,249,226); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);


  //Face
  fill(199, 149, 93);
  stroke(0, 0, 0);
  strokeWeight(2);
  ellipse(200,200,200,200);

  //eyes
  fill(69, 48, 24);
  stroke(0, 0, 0);
  strokeWeight(3);
  ellipse(x,y,eyeWidth,eyeHeight);
  if (toggle == true)
  {
    fill(0);
    
    ellipse(xx,y,eyeWidth,eyeHeight/8);
  }
  else if (toggle == false){
    ellipse(xx,y,eyeWidth,eyeHeight);
    //pupils
    stroke(69, 48, 24);
    ellipse(x,y,pupilWidth,pupilHeight);
    ellipse(xx,y,pupilWidth,pupilHeight);
  }
  

  
 

  //mouth
  
  if(toggle)
    {
      fill(199, 149, 93);
      strokeWeight(5);
    }
    else
    {
      fill(205, 51, 30);
      strokeWeight(5);
      stroke(0);
    }
  arc(200,200,50,50,0,180);


  //text
  textSize(20);
  stroke(0);
  fill(37, 235, 120);

  //Directions for mouse press
  text("Click to see me close my eyes. \nClick again to see me open them",0,325);
  }
//functions
function mousePressed(){
  return toggle = !toggle;
}
//will add more personalized details later on day 4
//looks like potato for now