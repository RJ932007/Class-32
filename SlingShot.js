class SlingShot{

    constructor(bodyA,pointB){

        var option = {

            bodyA:bodyA,
            pointB:pointB,

            stiffness:0.04,
            length:20

        }

        this.sling = Matter.Constraint.create(option);
        this.pointB=pointB;

        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        World.add(world,this.sling);

    }

    fly(){

        this.sling.bodyA=null;

    }

    attach(body){

        this.sling.bodyA=body
        
    }

    display(){

        image(this.sling1,250,170);
        image(this.sling2,220,170);
        

    if(this.sling.bodyA){

    
        var b =this.sling.bodyA.position
        var p =this.pointB

        push();

        stroke(48,22,8);

        if(b.x<252){

        
        strokeWeight(7);
        line(b.x-20,b.y,p.x-10,p.y);
        line(b.x-20,b.y,p.x+32,p.y);
        image(this.sling3,b.x-25,b.y-10,10,30);

        }

        else{
            
        strokeWeight(3);
        line(b.x+25,b.y,p.x-10,p.y);
        line(b.x+25,b.y,p.x+32,p.y);
        image(this.sling3,b.x+25,b.y-10,10,25);

        }

        pop();

    }

}
}