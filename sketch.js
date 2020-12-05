const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,70,70);
    box2 = new Box(600,300,70,70);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(500,300)
    log1=new Log(500,250,300,PI/2)
    box3=new Box(400,200,70,70)
    box4=new Box (600,200,70,70)
    pig2=new Pig(500,200)
    log2=new Log(500,150,300,PI/2)
    box5=new Box(500,120,70,70)
    log3=new Log(450,0,150,PI/4)
    log4=new Log(480,10,150,-PI/4)
    bird=new Bird(200,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird.display();
}