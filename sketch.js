var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box,box1,box2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()

{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);

	

	//packageSprite=createSprite(0,0,0,0);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	var groundOption ={
        isStatic: true
    }


	engine = Engine.create();
	world = engine.world;


	//packageBody =  Bodies.rectangle(width/2, 180, width, 10 , {isStatic:true} );
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box=new Box (500,650,200,20);
	 box1=new Box (400,550,20,200);
	 box2=new Box (600,550,20,200);

}



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  box.display();
  box1.display();
  box2.display();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false);
  }
}
