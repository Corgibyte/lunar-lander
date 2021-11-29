import * as me from 'melonjs/dist/melonjs.module.js';

class PlayScreen extends me.Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        me.game.world.addChild(new me.ColorLayer("../../data/map/lunar-map.tmx"), 0);
        me.game.world.addChild(me.pool.pull("player"));
    }
};

export default PlayScreen;
