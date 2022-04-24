
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
var rock_option ={
restitution : 0.5,
frictionAir:0.01

}
  rock = Bodies.circle(200,200,30,rock_option);
  World.add(world,rock); 

   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   wall = Bodies.rectangle(300,200,200,20,ground_options);
   World.add(world,wall);  
  
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(250,10,20,ball_options);
  
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill("blue");
  ellipse(ball.position.x,ball.position.y,20,20);
  fill("red");
  rect(ground.position.x,ground.position.y,400,20);
  fill("brown");
 ellipse(rock.position.x,rock.position.y,30,30);
 fill("red");
  rect(wall.position.x,wall.position.y,200,20); 

}

