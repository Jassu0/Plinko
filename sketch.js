const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plinko = [];
var particle = [];
var divisions = [];

var ground;
function setup(){
    var canvas = createCanvas(800,900);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,900,800,20);
    for(var i = 0; i <= width; i += 80) {
        divisions.push(new Divisions(i,height-200));
    }
    for(var i = 0; i <= width; i += 50) {
        plinko.push(new Plinko(i,75));
    }
    for(var i = 50; i <= width; i += 50) {
        plinko.push(new Plinko(i,175));
    }
    for(var i = 0; i <= width; i += 50) {
        plinko.push(new Plinko(i,275));
    }
    for(var i = 50; i <= width; i += 50) {
        plinko.push(new Plinko(i,375));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    if(frameCount%60 == 0) {
             particle.push ( new Particle(random(350,450),10));
    }
    
    for(i = 0; i < particle.length; i ++) {
        particle[i].display();
    }
    for(i = 0; i < divisions.length; i ++) {
        divisions[i].display();
    }
    for(i = 0; i < plinko.length; i ++) {
        plinko[i].display();
    }
   ground.display();
}
