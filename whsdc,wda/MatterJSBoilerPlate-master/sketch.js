
var roof,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobObject6,roof,rope1,rope2,rope3,rope4,rope5,rope6
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	

	bobObject1=new Bob(250,300)
	bobObject2=new Bob(300,300)
	bobObject3=new Bob(350,300)
	bobObject4=new Bob(410,300)
	bobObject5=new Bob(480,300)
	bobObject6=new Bob(520,300)
	
	rope1=new Rope(bobObject1.body,roof.body,-100,13)
	

	rope2=new Rope(bobObject2.body,roof.body,-50,13)
	

	rope3=new Rope(bobObject3.body,roof.body,0,13)
	

	rope4=new Rope(bobObject4.body,roof.body,50,13)
	

	rope5=new Rope(bobObject5.body,roof.body,100,13)
	

	rope6=new Rope(bobObject6.body,roof.body,150,13)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white"); 
 
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();  
  bobObject6.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.setStatic()
	  
   
	   
	 }
   }

