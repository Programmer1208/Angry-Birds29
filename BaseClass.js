class BaseClass
{
    constructor(x,y,w,h,angle)
    {
      var op={
        restitution:0.6,
        density:1.0,
        friction:1.0
      }
        this.bodies=Bodies.rectangle(x,y,w,h,op);
        World.add(world,this.bodies)
        this.w=w;
        this.h=h;
        this.img=loadImage("sprites/base.png");
        
    }

    display()
    {
        var pos=this.bodies.position;
        var angle=this.bodies.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
          image(this.img,0,0,this.w,this.h);
        pop();
    }
}