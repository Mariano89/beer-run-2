import Phaser from 'phaser';

class Cop extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'cop');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Cop properties
    this.body.gravity.y = scene.physicsConfig.gravity;
    this.body.velocity.x = -scene.physicsConfig.copVelocity;
    this.body.collideWorldBounds = false;
    this.body.setSize(
      scene.physicsConfig.copBodySize.width,
      scene.physicsConfig.copBodySize.height,
      scene.physicsConfig.copBodySize.offsetX,
      scene.physicsConfig.copBodySize.offsetY
    );
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;

    this.scene.anims.create({
      key: 'copleft',
      frames: this.scene.anims.generateFrameNumbers('cop', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    this.animations.play('copleft');
  }

  update() {
    // Update logic here if needed
  }
}

export default Cop;
