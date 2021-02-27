var moving_rect , fixed_rect

function setup() {
  createCanvas(800,400);
  moving_rect=createSprite(400, 200, 50, 50);
  fixed_rect=createSprite(600,300,70,70);

  moving_rect.shapeColor="green";
  fixed_rect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  moving_rect.x=World.mouseX;
  moving_rect.y=World.mouseY;

  if(moving_rect.x-fixed_rect.x <= moving_rect.width/2+fixed_rect.width/2 &&
     fixed_rect.x-moving_rect.x <= moving_rect.width/2+fixed_rect.width/2 &&
     moving_rect.y-fixed_rect.y <= moving_rect.height/2+fixed_rect.height/2 && 
     fixed_rect.y-moving_rect.y <= moving_rect.height/2+fixed_rect.height/2) {
    moving_rect.shapeColor="blue";
    fixed_rect.shapeColor="blue";

  }
  else {
    moving_rect.shapeColor="green";
    fixed_rect.shapeColor="green";
  }



  drawSprites();
}