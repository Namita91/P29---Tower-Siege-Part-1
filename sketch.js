const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //next stand
  //level 1
  b1 = new Block(640,175,30,40);
  b2 = new Block(670,175,30,40);
  b3 = new Block(700,175,30,40);
  b4 = new Block(730,175,30,40);
  b5 = new Block(760,175,30,40);
  //level 2
  b6 = new Block(670,135,30,40);
  b7 = new Block(700,135,30,40);
  b8 = new Block(730,135,30,40);
  //top level
  b9 = new Block(700,115,30,40);

  poly = Bodies.circle(100,225,15);
  World.add(world, poly);
  
  sling = new slingshot(this.poly, {x:100,y:225});

}
function draw() {
  background(56,44,44); 
 
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(45);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  fill("turquoise");
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  fill("pink");
  b9.display();

  sling.display();

  //display the polygon through image
  imageMode(CENTER);
  image(polygon_img, poly.position.x, poly.position.y, 35,35);

}

function mouseDragged() {
  Body.setPosition(poly, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  sling.fly();
}