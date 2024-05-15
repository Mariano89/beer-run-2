import Phaser from 'phaser';

class GameOverPanel extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);

    // Add panel
    this.panel = new Phaser.GameObjects.Sprite(scene, 0, 0, 'gameOverPanel');
    this.panel.width = 410;
    this.panel.height = 90;
    this.add(this.panel);

    this.y = 50;
    this.x = 400;
    this.alpha = 0;
  }

  // Update logic here if needed
  update() {}

  // Show the game over panel when paused
  show() {
    this.scene.tweens.add({
      targets: this,
      alpha: 1,
      y: 110,
      duration: 50,
      ease: 'Bounce.Out',
    });
    this.playAgain = new Phaser.GameObjects.Image(this.scene, 25, 4, 'restart-btn');
    this.playAgain.setInteractive();
    this.playAgain.on('pointerdown', this.restartGame, this);
    this.add(this.playAgain);
  }

  // Callback function, when activated starts the play state
  restartGame() {
    this.scene.scene.start('play');
  }
}

export default GameOverPanel;
