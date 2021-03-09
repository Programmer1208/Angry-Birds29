class Slingshot
{
    constructor(body1,point)
    {
   var op=
       {
        bodyA:body1,
        pointB:point ,
        length:10,
        stiffness:0.04
     }
    this.pointB=point;
     this.slng=Matter.Constraint.create(op);
     World.add(world,this.slng);
     this.img1= loadImage("sprites/sling1.png");
     this.img2= loadImage("sprites/sling2.png");
     this.img3= loadImage("sprites/sling3.png");
    }

    display()
    {
        image(this.img1,200,100);
        image(this.img2,170,93);

        push(); 
        var pointA = this.slng.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(8);
        stroke(48,22,8);
        if(pointA.x<=220)
        {
            line(pointA.x,pointA.y,pointB.x-20,pointB.y);
            line(pointA.x,pointA.y,pointB.x+30,pointB.y)
            image(this.img3,pointA.x-25,pointA.y-15,10,30);

        }
        else
        {
        line(pointA.x,pointA.y,pointB.x+20,pointB.y);
        line(pointA.x,pointA.y,pointB.x-30,pointB.y)
        image(this.img3,pointA.x-5,pointA.y-15,10,30);

        }
        pop();
    }

}