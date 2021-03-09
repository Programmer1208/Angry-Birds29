class Ground
{
    constructor(x,y,w,h)
    { 
        this.bodies=Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(world,this.bodies);
        this.w=w;
        this.h=h;
       // this.image=loadImage("sprites/ground.png")
    }
    display()
    { 
        push();
        fill("brown");
        rectMode(CENTER);
        rect (this.bodies.position.x,this.bodies.position.y,this.w,this.h);
        pop();
    }
}