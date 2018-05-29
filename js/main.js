let gameScene = new Phaser.Scene('Game');

gameScene.preload = function() {
  this.load.image('block', 'assets/images/block.png');
  this.load.image('gorilla', 'assets/images/gorilla3.png');
};

gameScene.create = function() {

  let gorilla = this.add.sprite(200, 300, 'gorilla');
  this.physics.add.existing(gorilla);
  gorilla.body.allowGravity = false;


  let block1 = this.add.sprite(200, 0, 'block');
  this.physics.add.existing(block1);

  let blocks = this.add.group();
  blocks.add(block1);

  // collision between a sprite and an array of groups
  // according to the doc, it should work: https://github.com/photonstorm/phaser/blob/master/src/physics/arcade/Collider.js#L21
  this.physics.add.collider(gorilla, [blocks]);
};

let config = {
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  scene: gameScene,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 1000
      },
      debug: true
    }
  }
};

let game = new Phaser.Game(config);
