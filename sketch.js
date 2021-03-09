const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;


function preload()
{

bg=loadImage("sprites/bg.png");




}






function setup()
{
    createCanvas(1200,400);
    engine=Engine.create();
    // engine=Engine.create();
    world=engine.world;

     bodies=Bodies.circle(100,100,50,{isStatic:true});
     World.add(world,bodies);

    bird=new Bird(100,50,50,50);
    box=new Box(700,310,70,70);
    pig=new Pig(810,330,50,50);
    box1=new Box(920,310,70,70);
    log=new Log(810,290,300,PI/2);
    
    box2=new Box(700,220,70,70);
    box3=new Box(920,220,70,70);
    pig1=new Pig(810,240,50,50);
    log2=new Log(810,200,300,PI/2);

    box4=new Box(810,130,70,70);
    log3=new Log(700,100,130,PI/7);
    log4=new Log(920,100,130,-PI/8);

    //consLog=new Log(100,300,100,PI/2);

    slingshot=new Slingshot(bird.bodies,{x:200,y:130});
    
    ground=new Ground(600,380,1200,50);
    ground1=new Ground(200,380,400,300);
   
};

function draw()
{
background(bg);
Engine.update(engine);

//ellipseMode(CENTER);
//ellipse(bodies.position.x,bodies.position.y,200,200);
bird.display();
box.display();
box1.display();
box2.display();
box3.display();
box4.display();
pig.display();
pig1.display();
ground.display();
ground1.display();
log.display();
log2.display();
log3.display();
log4.display();
//consLog.display();
slingshot.display();
}