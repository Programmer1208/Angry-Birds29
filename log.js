class Log extends BaseClass
{
    constructor(x,y,h,angle)
    {
       super(x,y,20,h,angle);
       Matter.Body.setAngle(this.bodies,angle);
       this.img=loadImage("sprites/wood2.png");
    }


}