
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground,boy,stone;
var treeImage,boyImage;
var mangoes1,mangoes2,mangoes3,mangoes4,mangoes5,mangoes6,mangoes7,mangoes8,mangoes9,mangoes0

function preload()
{
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(width/2,height-5,800,15)

	boy = loadImage(boyImage);
	boy = createSprite(100,ground.y-25,15,15)
	
	stoneObj = new Stone();
	mangoes0 = new Mangoes();
	mangoes1 = new Mangoes();
	mangoes2 = new Mangoes();
	mangoes3 = new Mangoes();
	mangoes4 = new Mangoes();
	mangoes5 = new Mangoes();
	mangoes6 = new Mangoes();
	mangoes7 = new Mangoes();
	mangoes8 = new Mangoes();
	mangoes9 = new Mangoes();

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("White");
  
	stoneObj.display();
	mangoes0.display();
	mangoes1.display();
	mangoes2.display();
	mangoes3.display();
	mangoes4.display();
	mangoes5.display();
	mangoes6.display();
	mangoes7.display();
	mangoes8.display();
	mangoes9.display();

	detectCollision(stoneObj,mangoes1)
	detectCollision(stoneObj,mangoes2)
	detectCollision(stoneObj,mangoes3)
	detectCollision(stoneObj,mangoes4)
	detectCollision(stoneObj,mangoes5)
	detectCollision(stoneObj,mangoes6)
	detectCollision(stoneObj,mangoes7)
	detectCollision(stoneObj,mangoes8)
	detectCollision(stoneObj,mangoes9)
	detectCollision(stoneObj,mangoes0)

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(Lstone,Lmango) {
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}