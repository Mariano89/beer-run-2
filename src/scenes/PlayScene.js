import Phaser from 'phaser';
import { SCREEN_WIDTH, SCREEN_HEIGHT, GRAVITY, preloadImage, createText } from '../utilities/UtilityModule';
import Player from '../prefabs/Dude'; // You need to create a Player class based on your Dude.js prefab
import Bunny from '../prefabs/Bunny'; // Import Bunny prefab
import Cop from '../prefabs/Cop'; // Import Cop prefab

class PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PlayScene' });
  }

  preload() {
    this.load.image('ground', 'assets/platform.png');
    this.load.image('beer', 'assets/beer.png');
    this.load.image('keg', 'assets/keg.png');
    this.load.image('whiskey', 'assets/whiskey.png');
    this.load.image('heart', 'assets/heart.png');
    this.load.image('pauseBtn', 'assets/pause-btn.png');
    this.load.image('pausePanel', 'assets/pause-panel.png');
    this.load.image('gameOverPanel', 'assets/panel-gray.png');
    this.load.image('playBtn', 'assets/play-btn.png');
    // this.load.image('restartBtn', 'assets/play-again.png');

    //spritesheets
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 45, frameHeight: 62 });
    this.load.spritesheet('bunny', 'assets/baddie.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('cop', 'assets/cop.png', { frameWidth: 28, frameHeight: 65 });

    //sounds
    this.load.audio('dudeJump', 'assets/audio/dude-jump.wav');
    this.load.audio('explode', 'assets/audio/explosion.wav');
    this.load.audio('collectBeer', 'assets/audio/collect-beer.wav');
    this.load.audio('burp', 'assets/audio/burp.mp3');
    this.load.audio('hiccup', 'assets/audio/hiccup.wav');
    this.load.audio('scream', 'assets/audio/scream.ogg');
  }

  create() {
    // Create scrolling background
    this.background = this.add.image(0, 0, 'background').setOrigin(0, 0).setDisplaySize(SCREEN_WIDTH, SCREEN_HEIGHT);

    // Ground
    this.groundGroup = this.physics.add.staticGroup();
    this.initialGround = this.groundGroup.create(200, SCREEN_HEIGHT - 64, 'ground');
    this.initialGround.setScale(5, 3);
    // this.groundGroup.add(this.initialGround);

    // Create and initialize the player
    this.player = new Player(this, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, 'dude');
    this.add.existing(this.player);

    this.physics.add.collider(this.player, this.groundGroup);

    // Create groups for different types of objects
    this.bunnies = this.physics.add.group({
      classType: Bunny,
      runChildUpdate: true, // Automatically update children
    });

    this.cops = this.physics.add.group({
      classType: Cop,
      runChildUpdate: true,
    });

    // Create controls for the player
    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update() {
    // Scroll the background
    this.background.tilePositionX += 1;

    // Handle collisions, game mechanics, and more

    // Check for collisions between player and other objects
    this.physics.overlap(this.player, this.bunnies, this.collectBunny, null, this);
    this.physics.overlap(this.player, this.cops, this.gameOver, null, this);

    // Move the player based on the input
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }

    // Generate grounds
    if (this.groundGroup.children.size < 5) {
      this.generateGround();
    }
  }
  
  generateGround() {
    const randomY = Phaser.Math.Between(450, 520);
    const randomGround = this.groundGroup.create(SCREEN_WIDTH, randomY, 'ground');
    randomGround.setScale(1.5, 10);
  }

  collectBunny(player, bunny) {
    bunny.destroy();

    // Increase the score
    // this.score += 10;
  }

  gameOver(player, cop) {
    // Stop the game
    this.physics.pause();

    // Show the Game Over screen
    this.showGameOverScreen();
  }

}

export default PlayScene;
