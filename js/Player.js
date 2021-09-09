class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.life1="red";
    this.life2="orange";
    this.life3="green";
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
  }
  Life(){
    push();
    textSize(20);
    fill("blue");
    text("player",280,40);

    fill(this.life1);
    rect(180,50,70,30);
    fill(this.life2);
    rect(250,50,70,30);
    fill(this.life3);
    rect(320,50,70,30);
  }
 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
