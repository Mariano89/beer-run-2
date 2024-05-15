// import AssetPreloadScene from '../scenes/AssetPreloadScene';
import MenuScene from '../scenes/MenuScene';
import PlayScene from '../scenes/PlayScene';
// import GameOverScene from '../scenes/GameOverScene';

const gameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 750 },
      debug: false
    },
  },
  // scene: [AssetPreloadScene, MenuScene, PlayScene, GameOverScene],
  scene: [MenuScene, PlayScene],
  playerSettings: {
    startX: 100,
    gravity: 720,
    runVelocity: 400,
    jumpVelocity: -550,
    bodySize: { 
      width: 25,
      height: 60,
      offsetX: 5,
      offsetY: 0
    },
    animations: {
      jump: 'jump',
      run: 'run',
      dead: 'dead',
    },
  },
};

export default gameConfig;
