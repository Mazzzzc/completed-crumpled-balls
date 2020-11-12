class Paper {
  constructor (x,y,r) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2

      }

      this.body = Bodies.circle(x,y,r,options);
      //this.width=width;
      //this.height=height;
      this.r=r;
      this.image=loadImage("paper.png");
      World.add(world,this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    //ellipseMode(RADIUS);
    //fill("pink");
    //stroke("pink");
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,70,70);
    //ellipse(pos.x, pos.y,this.r);
    pop();
  }
}
