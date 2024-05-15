import Phaser from 'phaser';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  create() {
    const centerX = this.cameras.main.width / 2;
    const centerY = this.cameras.main.height / 2;

    // Display "Game Over" text
    this.add.text(centerX, centerY - 50, 'Game Over', {
      fontSize: '65px',
      fill: '#ffffff',
      align: 'center',
    }).setOrigin(0.5, 0.5);

    // Display "Click To Play Again" text
    this.add.text(centerX, centerY + 50, 'Click To Play Again', {
      fontSize: '16px',
      fill: '#ffffff',
      align: 'center',
    }).setOrigin(0.5, 0.5);

    // Set up an input handler to restart the game on a click
    this.input.on('pointerdown', () => {
      this.scene.start('PlayScene'); // Replace 'PlayScene' with the key of your play scene
    });
  }
}

export default GameOverScene;
