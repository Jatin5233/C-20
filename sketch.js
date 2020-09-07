var FixedRect,MovingRect;
function setup() {
  createCanvas(800,400);
 FixedRect= createSprite(400, 200, 50, 80);
 MovingRect=createSprite(200,200,80,50);
 FixedRect.shapeColor="red";
 MovingRect.shapeColor="red";
}

function draw() {
  background(0);  
  MovingRect.y=mouseY;
  MovingRect.x=mouseX;
  if(FixedRect.x-MovingRect.x<FixedRect.width/2+MovingRect.width/2
    &&MovingRect.x-FixedRect.x<FixedRect.width/2+MovingRect.width/2
    &&FixedRect.y-MovingRect.y<FixedRect.height/2+MovingRect.height/2
    &&MovingRect.y-FixedRect.y<FixedRect.height/2+MovingRect.height/2){
      FixedRect.shapeColor="Blue";
      MovingRect.shapeColor="Blue";
    }
    else{
  FixedRect.shapeColor="red";
 MovingRect.shapeColor="red";
    }
  drawSprites();
}