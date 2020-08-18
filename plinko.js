class Plinko {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0,
          'isStatic':true
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.width = 10;
      this.height = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push ();
      translate (pos.x, pos.y);
      rotate (angle);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  