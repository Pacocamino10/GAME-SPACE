class Obstacle {
	contador=0;
	
  constructor(game) {
    this.img = new Image();
    this.img.src = "PNG/Meteors/Meteor_05.png";
    this.width = game.player.width / 2;
    this.height = game.player.height * 0.8;
    this.pos = {
      x: 0,
      y: 100,
    };
    this.game = game;
    this.speed = 1;
    this.dx = 10;
  }



  draw() {
    const { ctx } = this.game;
    ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height);
  }

  move() {
	this.pos.x += this.speed;
	
     if (this.pos.x >=( 700 - this.width) || this.pos.x <=0) {
	  console.log("CHOCANDO MURO");
	  this.contador++;
	  this.speed *= -1;
	  if(this.contador==2){
		console.log("contador "+this.contador); 
		this.pos.y +=50;
		}
		}
  }
}
