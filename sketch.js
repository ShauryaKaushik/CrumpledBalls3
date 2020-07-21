const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var ground;
var boxStick1,boxStick2,boxStick3;
var dustbinImg;
var slingshot;

function preload(){


dustbinImg = loadImage("dustbin.png");

 }

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    

    var ground_options ={
        isStatic: true
    }

    paperBall = new PaperBall(100,100);
    
    boxStick1 = new Box(635,300,15,80);
    boxStick2 = new Box(520,300,15,80);
    boxStick3 = new Box(575,350,135,15);

    slingshot = new SlingShot(paperBall.body,{x:190, y:50});
    
    ground = Bodies.rectangle(400,380,800,50,ground_options);
    World.add(world,ground);

}

function draw(){
    background(255);
    Engine.update(engine);
    paperBall.display();
    fill("yellow");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,50);
    imageMode(CENTER);
    image(dustbinImg,578,300,100,100); 
        
    boxStick1.display();
    boxStick2.display();
    boxStick3.display();
    
    slingshot.display();
}

function keyPressed(){

if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x : 0.4 , y : -0.3})
     }       

}

function mouseDragged(){
    Matter.Body.setPosition(paperBall.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
