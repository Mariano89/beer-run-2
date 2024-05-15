import Phaser from 'phaser';

class Heart extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, frame) {
    super(scene, x, y, 'heart', frame);

    // Initialize any specific properties or behavior for the heart if needed
  }

  // Update logic here if needed
  update() {
    // Write your prefab's specific update code here
  }
}

export default Heart;
