
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render =Matter.Render
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
  dustbinObj0=new Dustbin(1500,655)
  
groundObj=new Ground(width/2,670,width,20)
paperObj=new Paper(200,450,40)
  var render = Render.create({
	  element: document.body,
	  engine:engine,
	  options:{
		  width:1200,
		  height:700,
		  wireframes:false
	  }
  }
	)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 dustbinObj0.display()
 

 groundObj.display()
 paperObj.display()
}

function key_pressed() {
	if(keyCode=== UP_ARROW){
		
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	
	}
}



