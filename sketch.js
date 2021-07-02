var fr 
var mr
var r1
var r2


function setup() {


  createCanvas(800,400);


  fr=createSprite(200,200,50,80);
  mr=createSprite(400,200,90,30);

  mr.shapeColor="red"
  fr.shapeColor="green"

  r1=createSprite(300,200,50,80);
  r2=createSprite(500,100,90,30);

  r1.shapeColor="pink"
  r2.shapeColor="blue"
}

function draw() {
  background(0);  
r1.x = World.mouseX
r1.y=World.mouseY
console.log(mr.x-fr.x)

if(collision(r1,r2)){
  r1.shapeColor="yellow"
  r2.shapeColor="yellow"
}
else{
  r1.shapeColor="pink"
  r2.shapeColor="blue"
}
  drawSprites();
}

function collision(ob1,ob2){
  if (ob1.x-ob2.x<ob1.width/2 + ob2.width/2
    && ob2.x-ob1.x<ob1.width/2 + ob2.width/2
    && ob1.y-ob2.y<ob1.height/2 + ob2.height/2
    && ob2.y-ob1.y<ob1.height/2 + ob2.height/2){
    return true
  }
  else{
   return false
  
  }
}