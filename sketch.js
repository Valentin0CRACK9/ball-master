const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    

    box1=new Box(200,100,50,70)
    ground=new Ground(200,400,400,30)
    box2=new Box(220,300,50,50)

    
}

function draw(){
    background(0);
    Engine.update(engine);
   
box1.display()
ground.display()
box2.display()
}