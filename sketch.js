var paperSprite,paperObject;
var paperBody,ground;

var dustbin1,dustbin2,dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	paperSprite=createSprite(width/2, 80, 10,10);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, paperBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	dustbinPosition=width/2-100 
	dustbinY=610;
	dustbinleftSprite=createSprite(dustbinPosition, dustbinY, 20,100);
	dustbinleftSprite.shapeColor=color(255,0,0);
	dustbinLeftBody = Bodies.rectangle(dustbinPosition+20, dustbinY, 20,100 , {isStatic:true} );
	World.add(world, dustbinLeftBody);
	dustbinBase=createSprite(dustbinPosition+100, dustbinY+40, 200,20);
	dustbinBase.shapeColor=color(255,0,0);
	dustbinBottomBody = Bodies.rectangle(dustbinPosition+100, dustbinY+45-20, 200,20 , {isStatic:true} ); 
	World.add(world, dustbinBottomBody);
	dustbinleftSprite=createSprite(dustbinPosition+200 , dustbinY, 20,100);
	dustbinleftSprite.shapeColor=color(255,0,0); 
	dustbinRightBody = Bodies.rectangle(dustbinPosition+200-20 , dustbinY, 20,100 , {isStatic:true} );
	World.add(world, dustbinRightBody);
	Engine.run(engine);
}

function draw() {
  background(0);
  rectMode(CENTER);
  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y 
  //Matter.Body.setStatic(helicopterSprite,false);
  drawSprites();

}

function keyPressed(){
 if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position(x:85,y:85))
 }};
