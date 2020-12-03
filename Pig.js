class Pig extends BaseClass {

  constructor(x, y){

    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;

  }

  display(){

    if(this.body.speed<3){

      super.display();

    }
    else{

      var p =this.body.position

      World.remove(world,this.body);
      
      push();

      this.visibility=this.visibility-5;

      tint(255,this.visibility);
      image(this.image,p.x,p.y,50,50);

      pop();

    }

  }

score(){

  if(this.visibility<0  && this.visibility>-505){

    score=score+5

    }

  }

}