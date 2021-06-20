const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function preload(){
  snow1 = loadImage("snow4.webp")
  bg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    options = {
      isStatic:false
      
    }
    snow = Bodies.circle(200,0,50,options)
    snow2 = Bodies.circle(250,0,50,options)
    snow3 = Bodies.circle(300,0,50,options)
    snow4 = Bodies.circle(350,0,50,options)
    snow5 = Bodies.circle(400,0,50,options)
    snow6 = Bodies.circle(450,0,50,options)
    snow7 = Bodies.circle(500,0,50,options)
    snow8= Bodies.circle(550,0,50,options)
    snow9 = Bodies.circle(600,0,50,options)
    snow10 = Bodies.circle(650,0,50,options)
    snow11 = Bodies.circle(700,0,50,options)
    snow12 = Bodies.circle(750,0,50,options)
    World.add(world,snow);
    World.add(world,snow2);
    World.add(world,snow3);
    World.add(world,snow4);
    World.add(world,snow5);
    World.add(world,snow6);
    World.add(world,snow7);
    World.add(world,snow8);
    World.add(world,snow9);
    World.add(world,snow10);
    World.add(world,snow11);
    World.add(world,snow12);
}

function draw() {
  background(bg);
  Engine.update(engine);  
  imageMode(CENTER)
  image(snow1,snow.position.x,snow.position.y,50,50)
  image(snow1,snow2.position.x,snow2.position.y,50,50)
  image(snow1,snow3.position.x,snow3.position.y,50,50)
  image(snow1,snow4.position.x,snow4.position.y,50,50)
  image(snow1,snow5.position.x,snow5.position.y,50,50)
  image(snow1,snow6.position.x,snow6.position.y,50,50)
  image(snow1,snow7.position.x,snow7.position.y,50,50)
  image(snow1,snow8.position.x,snow8.position.y,50,50)
  image(snow1,snow9.position.x,snow9.position.y,50,50)
  image(snow1,snow10.position.x,snow10.position.y,50,50)
  image(snow1,snow11.position.x,snow11.position.y,50,50)
  image(snow1,snow12.position.x,snow12.position.y,50,50)
  drawSprites();
}