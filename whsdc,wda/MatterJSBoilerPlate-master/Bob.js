class Bob{
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,25,options);
      World.add(world, this.body);
    }
    display(){
        push();
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, 25,25);
      pop();
    }
  };
