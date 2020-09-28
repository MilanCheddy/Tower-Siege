const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground1 = new Ground(600,300,1200,20);
}

function draw() {
  background(0);  
  
  drawSprites();

  ground1.display();
}