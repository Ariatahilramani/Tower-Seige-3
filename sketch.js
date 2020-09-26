
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var box1, box2, box3, box4, box5, box6, box7, box8;
var box9, box10,box11, box12, box13, box14, box15, box16;
var hexagon;
var score=0;
function preload()
{

}

function setup() {
	createCanvas(2000, 500);


	engine = Engine.create();
	world = engine.world;

	
ledge = new Ground(505,400,210,20);
ground= new Ground(800,500,2000,30)

//bottom row
box1=new Box(450,350,30,40);
box2=new Box(460,350,30,40);
box3=new Box(490,350,30,40);
box4=new Box(500,350,30,40);
box5=new Box(550,350,30,40);
//third row

box6=new Box(450,330,30,40);
box7=new Box(480,330,30,40);
box8=new Box(510,330,30,40);

//second row
box9= new Box(470,310,30,40);
box10= new Box(500,310,30,40);
box11=new Box(540,320,30,40);
box12=new Box(500,250,30,40);


hexagon = new Hexagon(200,300,30,30);

sling= new Sling(hexagon.body,{x:200, y:300})

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  
  ledge.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();

hexagon.display();
sling.display();




fill("orange");
strokeWeight(0.5)
 text("Score: "+score, 200,200)
 
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(hexagon.body, {x:100,y:300});
  sling.attach(hexagon.body);
  }
  }