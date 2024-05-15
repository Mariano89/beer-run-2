// Constants
export const SCREEN_WIDTH = window.innerWidth;
export const SCREEN_HEIGHT = window.innerHeight;
export const GRAVITY = 750;

// Utility functions
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function preloadImage(scene, key, path) {
  scene.load.image(key, path);
}

export function preloadSpriteSheet(scene, key, path, frameConfig) {
  scene.load.spritesheet(key, path, frameConfig);
}

export function playSound(scene, key) {
  scene.sound.play(key);
}

export function createButton(scene, x, y, key, callback) {
  const button = scene.add.image(x, y, key).setInteractive();
  button.on('pointerdown', callback);
  return button;
}

export function createText(scene, x, y, text, style) {
  return scene.add.text(x, y, text, style);
}

// More utility functions...

// Export everything you want to use in other parts of your game.
