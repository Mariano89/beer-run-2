import Phaser from 'phaser';

class PausePanel extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);

    // Add panel
    this.panel = scene.add.sprite(0, 0, 'pausePanel');
    this.panel.width = 500;
    this.panel.height = 280;
    this.add(this.panel);

    // Create the unpause/resume button
    this.playBtn = scene.add.image(170, 140, 'play-btn');
    this.playBtn.setInteractive();
    this.playBtn.setFrame(3); // Set the initial frame
    this.playBtn.on('pointerdown', this.unpause, this);
    this.add(this.playBtn);

    this.y = 150;
    this.x = 370;
    this.alpha = 0;
  }

  // Show the pause panel when paused
  show() {
    this.scene.tweens.add({
      targets: this,
      alpha: 0.6,
      y: 150,
      duration: 800,
      ease: 'Exponential.In',
      yoyo: false,
      repeat: 0,
    });
  }

  // Hide the pause panel when unpaused
  unpause() {
    this.scene.tweens.add({
      targets: this,
      alpha: 0,
      y: 150,
      duration: 800,
      ease: 'Exponential.Out',
      yoyo: false,
      repeat: 0,
      onComplete: () => {
        this.scene.scene.resume();
      },
    });
  }
}

export default PausePanel;
