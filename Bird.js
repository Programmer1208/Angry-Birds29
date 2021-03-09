class Bird extends BaseClass
{
constructor(x,y,w,h)
                    {
     super(x,y,w,h);
                        this.img=loadImage("sprites/bird.png");
                                                                    } 

display()
{
    super.display();
    this.bodies.position.x=mouseX;
    this.bodies.position.y=mouseY;
}


                                                                        }   