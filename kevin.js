//high level functions
drawBackground();
drawSnowman();
//making the background
function drawBackground() {
  penRGB(0, 0, 237, 1);
  dot(1000);
}
drawTree();
function drawTree() {
  penUp();
  for (var i = 0; i < 1; i++) {
    moveTo(70, 331);
    penDown();
    penRGB(0, 180, 0, 1);
    penWidth(4);
    turnRight(90);
    moveForward(25);
    moveForward(25);
    turnLeft(120);
    moveForward(25);
    moveForward(25);
    turnLeft(120);
    moveForward(25);
    moveForward(25);
    moveForward(25);
    turnLeft(120);
    moveForward(25);
    moveForward(25);
    moveForward(25);
    turnLeft(120);
    moveForward(25);
    penUp();
    moveTo(90, 354);
    penRGB(139, 80, 14, 1);
    penDown();
    turnLeft(150);
    moveForward(25);
    turnLeft(90);
    moveForward(10);
    turnLeft(90);
    moveForward(25);
    penUp();
  }
}




//drawSnowman function
drawSnowman();
function drawSnowman(){
  drawBody();
  drawFace();
  drawButtons();
  drawArms();
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
  penWidth (1);
  penDown();
  turnLeft(180);
  arcLeft(180, 10);
  
}
function drawButtons(){
  //save for the desktop
}
function drawArms() {
  
}
//drawing the ground
function drawGround() {
  penUp();
  moveTo(320, 449);
  penDown();
  penRGB(255, 255, 255, 1);
  penWidth(90);
  turnLeft(90);
  moveForward(1000);
}
drawGround();
