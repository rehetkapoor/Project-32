class Circle{
  constructor(x, y) {

  var options={
    density: 1.2
  }

      this.body = Bodies.circle(x, y, 30, options);
      World.add(world, this.body);
    }
    display(){
      push();
      ellipseMode(RADIUS);
      fill("white")
      translate(this.body.position.x, this.body.position.y)
      ellipse(0, 0, 30, 30);
      pop();
    }
}
  