const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,ball,ground


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world= engine.world

  var balloptions={
    restitution:1.5,
    friction:3,
    density:1
  }
ball=Bodies.circle(200,200,70,balloptions)
World.add(world,ball)

var groundoptions={
  isStatic:true
}
ground=Bodies.rectangle(400,380,800,20,groundoptions)
World.add(world,ground)
console.log(ball)
}

function draw() {
  background(0,0,0); 
  Engine.update(engine)  
  rectMode(CENTER)
  circle(ball.position.x,ball.position.y,70)
  rect(ground.position.x,ground.position.y,800,20)

}