var sprite1,sprite2;

function setup() {
  createCanvas(1600,800);
  sprite1 = createSprite(400, 200, 50, 50);
  sprite2 = createSprite(200, 200, 50, 50);

  sprite1.shapeColor = rgb(255, 0, 0);
  sprite2.shapeColor = rgb(255, 0, 0);

  sprite1.debug = true;
  sprite2.debug = true;
}

function draw() {
  background(0,0,255);  

  sprite1.x = mouseX;
  sprite1.y = mouseY;

  if(sprite1.x-sprite2.x < sprite1.width/2 + sprite2.width/2 && sprite2.x-sprite1.x < sprite1.width/2 + sprite2.width/2
    && sprite1.y-sprite2.y < sprite1.height/2 + sprite2.height/2 && sprite2.y-sprite1.y < sprite1.height/2 + sprite2.height/2) {
    sprite1.shapeColor = rgb(0,255,0)
    sprite2.shapeColor = rgb(0,255,0)
  } else {
    sprite1.shapeColor = rgb(255,0,0)
    sprite2.shapeColor = rgb(255,0,0)
  }


  drawSprites();
}