class Particle {
  constructor(x, y) {
    var options = {
        'restitution':0.3,
        'isStatic':false
    }
    this.body = Bodies.circle(x, y, 10, options);
    this.width = 10;
    this.height = 10;
    this.color = color(random(0,255),random(0,255),random(0,255))
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle =this.body.angle;
    push ();
    translate (pos.x, pos.y);
    rotate (angle);
    ellipseMode(RADIUS);
    fill(this.color);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};
