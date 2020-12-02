var boy, boyimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
boyimg = loadImage("boy.png");	


}

function setup() {
	createCanvas(800, 700);
	boy = createSprite(30,30,10,10);
	boy.addImage(boyimg);
	mango1 = new Mango(40,40,80,80);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  drawSprites();
 
}



