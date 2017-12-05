drawBackground()
function drawBackground(){
  penDown
  penRGB (0, 0, 237, 1);
  dot (1000)
}
//drawing the ground
function drawGround() {
  penUp();
  moveTo(281, 387);
  penDown();
  penRGB(255, 255, 255, 1);
  dot(0.1);
  turnLeft(90);
  moveForward(1000);
}
drawGround();
