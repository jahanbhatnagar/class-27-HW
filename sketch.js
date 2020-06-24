var roof,ground1,rope1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
   
	ground1 = new Ground(350,350,400,30);
    roof = new Roof(200,200)
    rope1 = new Rope(bobObject.body,roofObject.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  roof.display();
  roop1.display();
  drawSprites();
 
}



