import Phaser from 'phaser';

class Keg extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, frame) {
    super(scene, x, y, 'keg', frame);

    // Initialize any specific properties or behavior for the keg if needed
  }

  // Update logic here if needed
  update() {
    // Write your prefab's specific update code here
  }
}

export default Keg;
