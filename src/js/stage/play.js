import * as me from "melonjs/dist/melonjs.module.js";

class PlayScreen extends me.Stage {
  /**
   *  action to perform on state change
   */
  onResetEvent() {
    me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);
    me.game.world.addChild(me.pool.pull("player"));

    me.input.bindKey(me.input.KEY.W, "up");
  }

  onDestroyEvent() {
    me.input.unbindKey(me.input.KEY.W);
  }
}

export default PlayScreen;
