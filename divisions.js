class Divisions {
  constructor(x, y) {
    var options = {
       isStatic : true
    }
    this.body = Bodies.rectangle(x, y, 10, 400, options);
    this.width = 10;
    this.height = 400;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
   
  }
};
