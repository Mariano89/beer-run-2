import Phaser from 'phaser';
import gameConfig from '../config/GameConfig';

class Dude extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
    super(scene, gameConfig.playerSettings.startX, 0, 'dude');

    this.scene = scene; // Store the scene reference

    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Set up the player's properties from the configuration
    this.body.gravity.y = gameConfig.playerSettings.gravity;
    this.body.velocity.x = gameConfig.playerSettings.runVelocity;
    this.body.setSize(
      gameConfig.playerSettings.bodySize.width,
      gameConfig.playerSettings.bodySize.height,
      gameConfig.playerSettings.bodySize.offsetX,
      gameConfig.playerSettings.bodySize.offsetY
    );
    this.body.collideWorldBounds = false;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;

    // Define animations based on configuration
    this.scene.anims.create({
      key: 'jump',
      frames: this.scene.anims.generateFrameNumbers('dude', { start: 1, end: 1 }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'run',
      frames: this.scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'dead',
      frames: this.scene.anims.generateFrameNumbers('dude', { start: 4, end: 6 }),
      frameRate: 10,
      repeat: 0,
    });

    this.lives = 3;
  }

  jump() {
    this.body.velocity.y = gameConfig.playerSettings.jumpVelocity;
  }

  update() {
    // Update logic here if needed
  }
}

export default Dude;
