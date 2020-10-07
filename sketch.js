const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground ;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var circle;
var SlingShot;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  ground= new Ground(725,300, 300, 10);
 
  block1 = new Box(630,275,30,40);
  block2 = new Box(660,275,30,40);
  block3 = new Box(690,275,30,40);
  block4 = new Box(720,275,30,40);
  block5 = new Box(750,275,30,40);
  block6 = new Box(660,235,30,40);
  block7 = new Box(690,235,30,40);
  block8 = new Box(720,235,30,40);
  block9 = new Box(690,195,30,40);

  box1 = new Box1(300,300,30,30);
  
  SlingShot = new Slingshot(box1.body,{x:200,y:300});

 
}

function draw() {
  background("white"); 
  Engine.update(engine);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  box1.display();
 

}

function mouseDragged(){
  Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  SlingShot.fly();
}

function mousePressed(){
  if(keyCode === 32){
    SlingShot.attach(box1);
  }
}