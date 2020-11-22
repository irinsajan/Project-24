var box1,box2,box3,paper,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box (570,650,200,20);
    box2 = new Box (660,610,20,100);
	box3 = new Box (470,610,20,100);
	
	paper = new Paper (160,600,50,50);

	ground = new Ground (200,670,10000,20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyDown === "up"){
		Matter.Body.applyForce(paperObject,body,paperObject.body.position,{x:85,y:-85});
	}
}



