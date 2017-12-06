drawBackground();
drawSnow();
drawSnowman();
drawGround();
drawHouse();

// fuction for making the background
function drawBackground() {
penDown();
penRGB(0, 0, 237, 1);
dot(1000);
}
//fucntion for the snow
//the snow for the background. This goes before everything else
function drawSnow() {
  for (var i = 0; i < 190; i++) {
    penUp();
    moveTo (randomNumber (0, 316), randomNumber (0,450));
    penRGB(255, 255, 255, 1);
    penDown();
    dot(2);
    penUp();
  }
}

//drawing the ground
function drawGround() {
  penUp();
  moveTo(320, 449);
  penDown();
  penRGB(255, 255, 255, 1);
  penWidth(75);
  turnRight(90);
  moveForward(1000);
}

//drawSnowman function- high level
function drawSnowman(){
  drawBody();
  drawFace();
  drawButtons();
}

//body for the snowman-low level
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

//face for the snowman- low level
function drawFace() {
  penUp();
  moveTo (260, 336);
  penRGB (0, 0, 0, 1);
  dot (1);
  penUp();
  moveTo (274, 336);
  dot (1);
  penUp();
  moveTo(260, 343);
  penWidth (1);
  penDown();
  turnLeft(180);
  arcLeft(180, 8);
  penUp();
}
//this is for the buttons on the snowman
function drawButtons(){
  moveTo(266, 363);
  penRGB(0, 0, 0, 1);
  dot(1);
  turnLeft(180);
    moveForward(10);
    dot(1);
    penUp();
     moveForward(10);
    dot(1);
    penUp();
     moveForward(10);
    dot(1);
    penUp();
}
//house -the highlevel function
function drawHouse() {
  drawBox()
  drawRoof()
  drawDoor()
}

//were going to start off with the "box"
function drawBox() {
  penUp();
  moveTo(194, 395);
  penDown();
  turnRight(90);
  penRGB(210, 180, 140, 1);
  penWidth(45);
  for (var i = 0; i < 4; i++) {
    moveForward(100);
    turnLeft(90);
  }
  penUp();
  moveTo(145, 352);
  dot(50);
}

//this is the low level function for a roof
function drawRoof() {
  penUp();
  moveTo (73, 283);
  penDown();
  penRGB (128, 0, 0, 1);
  penWidth(58);
  turnRight (90);
  moveForward(140);
  turnLeft (130);
  moveForward (95);
  turnLeft (93);
  moveForward (95);
  turnLeft(137);
  turnLeft(90);
}

//this is the low level function for the door
function drawDoor() {
  penUp();
  moveTo (126, 419);
  penRGB (0, 0, 0, 1);
  penWidth(1);
  penDown();
  moveForward(50);
  turnRight();
  moveForward(30);
  turnRight();
  moveForward(50);
  penUp();
  moveTo (149, 399);
  dot(2);
}
