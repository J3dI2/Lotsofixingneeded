class Mangoes {
    constructor(x,y,r){ 
        options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        super(x,y,50,50);
        this.image = loadImage("mango.png");
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world, this.body);
    }
    display() {
        super.display();

        translate(bobpos.x,bobpos.y);
        ellipse(0,0,this.r,this.r);
    }
}