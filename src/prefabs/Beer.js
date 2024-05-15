import Phaser from 'phaser';

class Beer extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'beer');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.velocity.x = 0;
    this.outOfBoundsKill = true;
    this.checkWorldBounds = true;
  }

  update() {
    // Update logic here if needed
  }
}

export default Beer;
