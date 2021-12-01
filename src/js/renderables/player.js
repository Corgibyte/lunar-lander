import * as me from "melonjs/dist/melonjs.module.js";

class PlayerEntity extends me.Sprite {
  /**
   * * constructor
   */
  constructor() {
    let image = me.loader.getImage("player");

    super(
      me.game.viewport.width / 2 - image.width / 2,
      me.game.viewport.height / 2 - image.height / 2,
      { image: image, width: 32, height: 32 }
    );

    this.body = new me.Body(this);
    this.body.addShape(new me.Rect(0, 0, this.width, this.height));
    this.body.setMaxVelocity(3, 3);
  }

  /**
   * update the sprite
   */
  update(dt) {
    //change body force based on inputs
    // .....
    //call the parent method
    if (me.input.isKeyPressed("up")) {
      this.body.force.y = -this.body.maxVel.y;
    } else {
      this.body.force.y = 0;
    }
    return super.update(dt) || this.body.vel.y !== 0;
  }

  /**
   * collision handler
   * (called when colliding with other objects)
   */
  onCollision(response, other) {
    // Make all other objects solid
    return true;
  }
}

export default PlayerEntity;
