class Droplet {
  constructor() {
    this.x = Math.floor(Math.random() * 950);
    this.y = Math.floor(Math.random() * -100);
    this.width = 50;
    this.height = 50;
    this.role = undefined;
    this.fallInterval = undefined;
    this.image = undefined;
  }

  _fallDown() {
    // console.log(`Droplet position: x = ${this.x} y = ${this.y}`);
    this.fallInterval = setInterval(() => {
      if (this.y > 650) {
        clearInterval(this.fallInterval);
      } else {
        this.y = this.y + 1;
      }
    }, 10);
  }

  _assignRole() {
    if (Math.floor(Math.random() * 3) > 1) {
      this.role = 'poison';
    } else {
      this.role = 'food';
    }
  }

  _assignImage() {
    if (this.role === 'poison') {
      this.image = windows;
    } else {
      this.image = foodImages[Math.floor(Math.random() * foodImages.length)];
    }
  }

}