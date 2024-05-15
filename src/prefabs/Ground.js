import Phaser from 'phaser';

class Ground extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, frame) {
    super(scene, x, y, 'ground', frame);

    // Ground properties
    this.body.velocity.x = -460;
    this.body.immovable = true;

    // Set other properties if needed
    // this.setOrigin(0, 0);
  }

  // Update logic here if needed
  update() {}

  // Reset function for ground object
  reset(x, y) {
    this.x = x;
    this.y = y;
    this.body.velocity.x = -460;
    this.body.immovable = true;
  }
}

export default Ground;
