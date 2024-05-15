import Phaser from 'phaser';

class Bunny extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'bunny');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Bunny properties
    this.body.gravity.y = scene.physicsConfig.gravity;
    this.body.velocity.x = -50;
    this.body.collideWorldBounds = false;
    this.body.setSize(
      scene.physicsConfig.bunnyBodySize.width,
      scene.physicsConfig.bunnyBodySize.height,
      scene.physicsConfig.bunnyBodySize.offsetX,
      scene.physicsConfig.bunnyBodySize.offsetY
    );
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;

    // Bunny animation frames
    this.scene.anims.create({
      key: 'left',
      frames: this.scene.anims.generateFrameNumbers('bunny', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'boom',
      frames: this.scene.anims.generateFrameNumbers('bunny', { start: 2, end: 9 }),
      frameRate: 10,
      repeat: 0
    });
    this.animations.play('left');
  }

  update() {
    // Update logic here if needed
  }
}

export default Bunny;
