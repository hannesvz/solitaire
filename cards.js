class Card {
  constructor(x, y, face, suit) {
    this.image = loadImage('assets/' + face + '.png');
    this.x = x;
    this.y = y;
    this.suit = suit;
    
    this.dx = 7 + (random() * startpower);
    
    // randomly switch direction
    if (random() < 0.5) this.dx *= -1;
    
    this.dy = 5 + (random() * startpower);
    // randomly make some cards jump in an upwards trajectory
    if (random() < 0.5) this.dy *= -1;
    this.active = true;
  }
  
  update(){
    if (this.active) {
      // add gravity to vertical
      this.dy += gravity;
      
      // weaken horizontal
      this.dx *= 0.999;
      
      // increment horizontal
      this.x += this.dx;
      
      // increment vertical
      this.y += this.dy;
      
      // check for bounce
      if (this.y > window.innerHeight - cardheight) {
        this.dy *= -0.75;
        this.y = window.innerHeight - cardheight;
      }
      
      // check for out of screen
      if ((this.x < -cardwidth) || (this.x > window.innerWidth)) {
        this.active = false;
        stack[this.suit] -= 1;
        activestack += 1;
        if (activestack >= 4) activestack = 0;
      }
    }
  }
  
  draw(){
    if (this.active) {
      image(this.image, this.x, this.y, cardwidth * cardscale, cardheight * cardscale);
    }
  }  
}