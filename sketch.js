const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;
var score=0;

var gamestate = "start";

function preload() {

    chbg();
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    platform= new Ground(180,480,380,250);
    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810, 550);
    log1 = new Log(810,460,300, PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig2 = new Pig(810, 420);

    log3 =  new Log(810,380,300, PI/2);

    box5 = new Box(810,360,70,70);
    log4 = new Log(760,320,150, PI/7);
    log5 = new Log(870,320,150, -PI/7);

    bird = new Bird(250,200);

    slingshot = new SlingShot(bird.body,{x:250,y:200})

}

function draw(){

if(backgroundImg){

    background(backgroundImg);

}

    //text(mouseY,150,200);
    //text(mouseX,150,100);

    fill("red");
    textSize(25);
    text("Score= "+score,1000,40);
    
    Engine.update(engine);

    

    box1.display();
    box2.display();
    ground.display();
    pig1.score();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.score();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    slingshot.display();

    platform.display();

    

}


function mouseDragged(){

  if(gamestate!="play"){

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})

  }

}

function mouseReleased(){

    slingshot.fly();
    gamestate = "play";

}

function keyPressed(){

    if(keyCode===32){

    Matter.Body.setPosition(bird.body,{x:250,y:200});
    slingshot.attach(bird.body);
    bird.trajectory=[]
    gamestate = "start"
    
    }
}

async function chbg(){

    var x = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var xjson = await x.json();
    var dt = xjson.datetime
    var hour = dt.slice(11,13);

if(hour>6 && hour<19){

    bg = "sprites/bg.png"

}
else

 bg = "sprites/bg2.jpg"
 backgroundImg = loadImage(bg);  

}
