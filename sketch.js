const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, human1,human3;
var backgroundImg,platform;
var covid19, slingshot;
var score=0;

var gameState = "onSling";

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");


    getBG();
}

function setup(){
    var canvas = createCanvas(1360,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1800,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,420,70,70);
    box11 = new Box(1000,420,70,70);
    box2 = new Box(920,420,70,70);
    box22 = new Box(920+300,420,70,70);
    human1 = new Human(810, 450);
    human11 = new Human(810+300, 450);
    log1 = new Log(810,360,300, PI/2);
    log11 = new Log(810+300,360,300, PI/2);

    box3 = new Box(700,340,70,70);
    box33 = new Box(700+300,340,70,70);
    box4 = new Box(920,340,70,70);
    box44 = new Box(920+300,340,70,70);
    human3 = new Human(810, 320);
    human33 = new Human(810+300, 320);
    human333 = new Human(810+300, 320-160);

    log3 =  new Log(810,280,300, PI/2);
    log33 =  new Log(810+300,280,300, PI/2);
    log333 =  new Log(810+300,280-160,300, PI/2);

    box5 = new Box(810,260,70,70);
    box55 = new Box(810+300,260-160,70,70);
    box6= new Box(700+300,340-80,70,70);
    box7 = new Box(920+300,340-80,70,70);
    log4 = new Log(760,220,150, PI/7);
    log44 = new Log(760+300,220-160,150, PI/7);
    log5 = new Log(870,220,150, -PI/7);
    log55 = new Log(870+300,220-160,150, -PI/7);

    covid19 = new Covid19(200,150);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(covid19.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }
    textSize(35);
    fill(255);
    text("score = "+score,width-300,50);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box11.display();
    box2.display();
    box22.display();
    ground.display();
    human1.display();
    human11.display();
    human1.score();
    human11.score();
    log1.display();
    log11.display();

    box3.display();
    box33.display();
    log333.display();
    box4.display();
    box44.display();
    human3.display();
    human33.display();
    human333.display();
    human3.score();
    human33.score();
    human333.score();
    log3.display();
    log33.display();

    box5.display();
    box55.display();
    box6.display();
    box7.display();
    log4.display();
    log44.display();
    log5.display();
    log55.display();

    covid19.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(covid19.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

/*function keyPressed(){
    if(keyCode === 32 && covid19.body.speed<1){
        
        slingshot.attach(covid19.body);
        covid19.trajectory=[];
        Matter.Body.setPosition(covid19.body,{x : 200 , y : 50});
        gameState = "onSling";
     }
     
    }*/

async function getBG(){
    var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responceJSON = await responce.json();
    var dateTime = responceJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=18){
     backgroundImg = loadImage ("sprites/bg.png");

    }
    else{
        backgroundImg = loadImage("sprites/bg2.jpg")
    }


}