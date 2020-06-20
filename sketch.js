const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    //box1 = new Box(670,320,70,30);
    //box2 = new Box(950,320,70,30);
   pig1 = new Pig(660, 310);
    log1 = new Log(790,360,460, PI/2);

    box3 = new Box(660,160,160,170);
    box4 = new Box(940,160,160,170);
    pig3 = new Pig2(930, 310);
    pig4 = new Pig3(800, 240);

    //log3 =  new Log(810,180,300, PI/2);

   // box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    log6 = new Log(600,280,120, -PI/1);
    log7 = new Log(720,280,120, -PI/1);

    log8 = new Log(870,280,120, -PI/1);
    log9 = new Log(990,280,120, -PI/1);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    
    {background(backgroundImg);
        Engine.update(engine);
        //strokeWeight(4);
        //box1.display();
        //box2.display();
        ground.display();
        pig1.display();
        log1.display();
    
       box3.display();
        box4.display();
        pig3.display();
        pig4.display();
        //log3.display();
    
       // box5.display();
        //log4.display();
        //log5.display();

        log6.display();
        log7.display();

        log8.display();
        log9.display();
    
        bird.display();
        platform.display();
        //log6.display();
        slingshot.display();    
    }
    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    console.log(response);

    var JSON = await response.json();
    console.log(JSON);

    var dateTime = JSON.datetime;
    console.log(dateTime);

    var Hour = dateTime.slice(11,13);
    console.log(Hour);

    if (Hour>6 && Hour<18){
        backgroundImg = loadImage("sprites/day.jpg")
    }else {
        backgroundImg = loadImage("sprites/night.jpg")
    }

    
}



