var fixedRect, movingRect;
var gameObj1,gameObj2,gameObj3,gameObj4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1=createSprite(100,100,50,50);
  gameObj1.shapeColor='green';
  gameObj2=createSprite(200,100,50,50);
  gameObj2.shapeColor='green';
  gameObj3=createSprite(300,100,50,50);
  gameObj3.shapeColor='green';
  gameObj4=createSprite(400,100,50,50);
  gameObj4.shapeColor='green';
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect,gameObj1)){
   // console.log(isTouching());
    movingRect.shapeColor = "blue";
    gameObj1.shapeColor = "blue";
  }
  else{
    //console.log(isTouching());
    movingRect.shapeColor = "green";
    gameObj1.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(object1,object){
  
if (object1.x - object.x < object.width/2 + object1.width/2
  && object.x - object1.x < object.width/2 + object1.width/2
  && object1.y - object.y < object.height/2 + object1.height/2
  && object.y - object1.y < object.height/2 + object1.height/2) {

    return true;
 
}
else {
  return false;

}

}