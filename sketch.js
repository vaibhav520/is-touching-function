var fixedRect, movingRect;

function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200, 200, 50, 50);
}

function draw() {
  background("gray");
  movingRect.y = mouseY;
  movingRect.x = mouseX;
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "black";

  if (movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2
    && fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2
    && movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2
    && fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2
  ) {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "black";
  }
  drawSprites();
}
