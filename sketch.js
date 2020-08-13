var bullet1,bullet2,bullet3;
var speed,weight;
var wall1,wall2,wall3;

function setup() {
  createCanvas(1000,400);
 bullet1=createSprite(50, 100, 30, 20);
 bullet2=createSprite(50, 200, 30, 20);
 bullet3=createSprite(50, 300, 30, 20);
        

 wall1=createSprite(900,100,40,70);
 wall2=createSprite(900,200,55,70);
 wall3=createSprite(900,300,70,70);

 bullet1.velocityX = 15;
 bullet2.velocityX = 15;
 bullet3.velocityX = 15;

  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background(0);  

  if(bullet1.isTouching(wall1)){
  bullet1.shapeColor = color(255,0,0)
  bullet1.velocityX = 0;
  }

  if(bullet2.isTouching(wall2)){
    bullet2.shapeColor = color(230,230,0)
    bullet2.velocityX = 0;
    }

    if(bullet3.isTouching(wall3)){
      bullet3.shapeColor = color(0,255,0)
      bullet3.velocityX = 0;
      }
  drawSprites();
};