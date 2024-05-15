import Phaser from 'phaser';

class Whiskey extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'whiskey');

    scene.add.existing(this);
    scene.physics.world.enable(this);

    this.body.velocity.x = 0;
    this.setCollideWorldBounds(true);
    this.setOutOfBoundsKill(true);
  }

  update() {
    // Write your prefab's specific update code here
  }
}

export default Whiskey;
