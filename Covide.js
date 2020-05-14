class Covid19 extends BaseClass {
  constructor(x,y){
    super(x,y,80,80);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/bird2.png")
    this.smokeImage = loadImage("sprites/smoke.png");
    this.image3 = loadImage("sprites/image3.png");
    this.trajectory =[];
    this.Visiblity = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    
    

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    
    if(gameState === "launched"){
      this.body.position.x = this.body.position.x;
      this.body.position.y = this.body.position.y;
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
    if(this.body.speed <1 && gameState === "launched"){
      //World.remove(world, this.body);
      gameState = 2;
    }
    if (gameState === 2){
      this.image = loadImage("sprites/bird2.png");
      image(this.image3,380,1,700,500);
    }
  }
}



