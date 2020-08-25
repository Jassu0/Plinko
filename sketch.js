const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plinko = [];
var particle = null, score = 0, gameState = "start";
var divisions = [];
var count = 0;
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
    textSize(35);
    text("Score :"+score, width-200,40);
    fill ("white");
    text(" 500 ", 5, 550);
    text(" 500 ", 80, 550);
    text(" 500 ", 160, 550);
    text(" 500 ", 240, 550);
    text(" 100 ", 320, 550);
    text(" 100 ", 400, 550);
    text(" 100 ", 480, 550);
    text(" 200 ", 560, 550);
    text(" 200 ", 640, 550);
    text(" 200 ", 720, 550);
    if(gameState == "end") {
        textSize(100);
        text("game over", 150, 250);
    }
    if(particle !== null) {
        particle.display();
        if(particle.body.position.y > 760) {
            if(particle.body.position.x < 300) {
                score+= 500;
                particle = null;
            }
            else if(particle.body.position.x > 300 && particle.body.position.x < 600) {
                score+= 100;
                particle = null;
            }
            else if(particle.body.position.x > 600 && particle.body.position.x < 900) {
                score+= 200;
                particle = null;
            }
            if(count >= 5) {
                gameState = "end";
            }
        }
    }
    for(i = 0; i < divisions.length; i ++) {
        divisions[i].display();
    }
    for(i = 0; i < plinko.length; i ++) {
        plinko[i].display();
    }
   ground.display();
}
function mouseReleased() {
    if(gameState != "end") {
        count ++;
        particle = new Particle (mouseX, 10);
    }
}