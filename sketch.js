var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(300, 200, 50, 50);
  movingRect.shapeColor="red";
  
  }

function draw() {
  background(255,255,255); 
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
      &&  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
        &&  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
  )        
{ fixedRect.shapeColor="yellow";
movingRect.shapeColor="yellow";}

  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green"; 
  }
  
    
  drawSprites();
}