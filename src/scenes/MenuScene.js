import Phaser from 'phaser';

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene'});
  }

  preload() {
    // Load the assets needed for this scene
    this.load.image('background', 'assets/background.png');
    this.load.image('logo', 'assets/logo.png');
    this.load.image('startButton', 'assets/start-button.png');
  }

  create() {
    this.addBackground();
    this.addLogo();
    this.addStartButton();
  }

  addBackground() {
    // Add the background image
    this.background = this.add.image(0,0, 'background');
    this.background.setOrigin(0, 0);
    this.background.displayWidth = this.sys.game.config.width;
    this.background.displayHeight = this.sys.game.config.height;
  }

  addLogo() {
    // Add the logo image, apply scaling and animation
    this.logo = this.add.sprite(this.scale.width / 2, this.scale.height / 2 - 100, 'logo');
    this.logo.setScale(1.2, 1.2);
    this.logo.setOrigin(0.5, 0.5);

    this.tweens.add({
      targets: this.logo,
      y: this.logo.y + 50,
      duration: 1000,
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: -1
    });
  }

  addStartButton() {
    // Add the start button and set its behavior
    this.startButton = this.add.image(this.scale.width / 2, this.scale.height / 2 + 50, 'startButton');
    this.startButton.setScale(2, 2);
    this.startButton.setOrigin(0.5, 0.5);
    this.startButton.setInteractive({ useHandCursor: true });
    this.startButton.on('pointerdown', () => {
      this.scene.start('PlayScene'); 
    })
  }
}

export default MenuScene;
