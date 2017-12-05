//Julion's code

//high level functions
drawBackground()
drawSnowman()

//making the background
function drawBackground() {
penDown();
penRGB(0, 0, 237, 1);
dot(1000);
}

//drawSnowman function
function drawSnowman(){
  drawBody()
  drawFace()
  drawButtons()
  drawArms()
}
//body for the snowman
function drawBody() {
  penUp();
  moveTo (267, 397);
  penDown();
  penRGB (255, 255, 255, 1);
  dot (28);
  moveForward (30);
  dot (20);
  moveForward (28);
  dot (15);
}
//face for the snowman
function drawFace() {
  //eyes
  penUp();
  moveTo (260, 336);
  penRGB (0, 0, 0, 1);
  dot (1);
  penUp();
  moveTo (274, 336);
  dot (1);
  penUp();
  //start the smiley face :)
  moveTo(256, 343);
  penWidth (1)
  penDown();
  turnLeft(180);
  arcLeft(180, 10);
  
}
function drawButtons(){
  //save for the desktop
}
function drawArms() {
  
}





