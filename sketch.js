var moving,fixed








function setup() {
 createCanvas(1200,400);

 fixed=createSprite(500, 300, 50, 50);
 fixed.shapeColor="green"
 moving= createSprite(400, 200, 50, 50);
 moving.shapeColor="green"



}

function draw() {
  background(255,255,255);  

moving.x=World.mouseX
moving.y=World.mouseY

if(moving.x-fixed.x<fixed.width/2+moving.width/2&&fixed.x-moving.x<fixed.width/2+moving.width/2&&moving.y-fixed.y<fixed.width/2+moving.width/2&&fixed.y-moving.y<fixed.width/2+moving.width/2){

  moving.shapeColor="red"
  fixed.shapeColor="red"


}
else{
  fixed.shapeColor="green"
  moving.shapeColor="green"





}






  drawSprites();
}