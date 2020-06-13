const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var container_bottom, container_side1, container_side2, ground;
var package, heli, packageImg, heliImg, packageBody;

function preload(){
	packageImg = loadImage('package.png');
	heliImg = loadImage('helicopter.png');
}

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
	world = engine.world;
	
	container_bottom = new Container(200, 360, 200, 20);
	container_side1 = new Container(110, 300, 20, 100);
	container_side2 = new Container(290, 300, 20, 100);

	ground = new Ground(200, 380, 400, 20);

	package = createSprite(200, 100, 30, 30);
	package.addImage("package", packageImg);
	package.scale = 0.1;

	var options = {
		'restitution': 0.1,
		isStatic: true
	}

	packageBody = Bodies.circle(200, 100, 15, options);

	heli = createSprite(200, 100, 30, 30);
	heli.addImage("helicopter", heliImg);
	heli.scale = 0.5;
	World.add(world, packageBody);
}

function draw(){
    background(0);
	Engine.update(engine);
	
	package.x = packageBody.position.x;
	package.y = packageBody.position.y;
	
	drawSprites();
	container_bottom.display();
    container_side1.display();
	container_side2.display();
	ground.display();
}
function keyPressed(){
	if (keyCode == DOWN_ARROW){
		Matter.Body.setStatic(packageBody, false);
	}
}