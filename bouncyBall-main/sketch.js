const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var bolinha;
function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    var object_options = {
    isStatic: true
    }
    var bolinha_options = {
      restitution: 1.0
    }
    bolinha = Bodies.circle(200,100,20,bolinha_options);
    World.add(world,bolinha);
    object = Bodies.rectangle (200,390,200,20, object_options);
    World.add(world,object);
  
    console.log(object);
  
}

function draw() {
  
    background(0);
    Engine.update(engine);
    rectMode (CENTER);
    rect(object.position.x,object.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(bolinha.position.x,bolinha.position.y,20,20);
}