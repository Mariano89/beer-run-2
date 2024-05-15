// import Phaser from 'phaser';

// class AssetPreload extends Phaser.Scene {
//   constructor() {
//     super({ key: 'AssetPreload'});
//   }

//   preload() {
//     // images
//     this.load.image('logo', 'assets/logo.png');
//     this.load.image('background', 'assets/background.png');
//     this.load.image('startButton', 'assets/start-button.png');
//     this.load.image('ground', 'assets/platform.png');
//     this.load.image('beer', 'assets/beer.png');
//     this.load.image('keg', 'assets/keg.png');
//     this.load.image('whiskey', 'assets/whiskey.png');
//     this.load.image('heart', 'assets/heart.png');
//     this.load.image('pauseBtn', 'assets/pause-btn.png');
//     this.load.image('pausePanel', 'assets/pause-panel.png');
//     this.load.image('gameOverPanel', 'assets/panel-gray.png');
//     this.load.image('playBtn', 'assets/play-btn.png');
//     this.load.image('restartBtn', 'assets/play-again.png');

//     //spritesheets
//     this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 45, frameHeight: 62 });
//     this.load.spritesheet('bunny', 'assets/baddie.png', { frameWidth: 32, frameHeight: 32 });
//     this.load.spritesheet('cop', 'assets/cop.png', { frameWidth: 28, frameHeight: 65 });

//     //sounds
//     this.load.audio('dudeJump', 'assets/audio/dude-jump.wav');
//     this.load.audio('explode', 'assets/audio/explosion.wav');
//     this.load.audio('collectBeer', 'assets/audio/collect-beer.wav');
//     this.load.audio('burp', 'assets/audio/burp.mp3');
//     this.load.audio('hiccup', 'assets/audio/hiccup.wav');
//     this.load.audio('scream', 'assets/audio/scream.ogg');
//   }

//   create() {
//     // Emit the preloadComplete event
//     this.events.emit('preloadComplete');

//     // Start the Menu Scene
//     this.scene.start('MenuScene');

//     // this.scale.scaleMode = Phaser.Scale.RESIZE;
//     // this.input.maxPointers = 1;
//   }
// }

// export default AssetPreload;
