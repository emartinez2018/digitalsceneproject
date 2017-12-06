hide();
penUp();
drawAllTrees();
penUp();
//`Makes Number of trees
function drawAllTrees() {
  for (var i = 0; i < 7; i++) {
    penUp();
    turnTo(0);
    moveTo(randomNumber(25, 350), 400);
    drawTree();
  }
}
//Makes a Tree
function drawTree() {
  penDown();
  penWidth(15);
  penColor(rgb(139, 39, 14));
  moveForward(50);
  turnRight(90);
  penColor("green");
  penWidth(30);
  drawBigTriangle();
  penUp();
  move(-5, -45);
  penDown();
  drawLittleTriangle();
}
//Makes the first part of the tree
function drawBigTriangle() {
  moveForward(25);
  turnLeft(135);
  moveForward(50);
  turnLeft(90);
  moveForward(25);
  turnLeft(135);
  moveForward(25);
  penUp();
  penRGB(0, 151, 0, 0.8);
  move(10, 10);
  penDown();
  dot(12);
}
//Makes the small part of tree on top
function drawLittleTriangle() {
  moveForward(15);
  turnLeft(135);
  moveForward(30);
  turnLeft(90);
  moveForward(30);
  turnLeft(135);
  moveForward(15);
}
