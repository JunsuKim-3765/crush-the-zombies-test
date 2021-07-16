const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var g1,g2;
var link;
var stone;
function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  bridge=new Bridge(9,{x:70,y:550});
  g1=new Ground(200,500,600,300)
  g2=new Ground(1350,500,600,300)
  link=new Link(bridge,g2);
  Matter.Composite.add(bridge.body,g2)
  stone = Bodies.circle(300,300,15,{density:0.001});
}

function draw() {
  background(51);
  bridge.show();
  g1.show();
  g2.show();
  ellipse(stone.position.x,stone.position.y,15);
  Engine.update(engine);

}
