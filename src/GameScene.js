/**
 * Created by nikhil.peter on 6/6/2017.
 */
var GameScene = cc.Layer.extend({
    _ball : null,
    flag : true,
    _time : 0,
    _pipes : [],

    init:function () {
        this._super();

        this.loadBall();
        this.setIntervalForPipes();

        this.addKeyboardListener();
        this.scheduleUpdate();
    },

    addKeyboardListener : function ()
    {
        var self = this;
        cc.eventManager.addListener(cc.EventListener.create({
                event: cc.EventListener.KEYBOARD,

                onKeyPressed : function (keyCode, event)
                {
                    if(keyCode == 32)
                        self._ball.jump(-5);
                },
                onKeyReleased : function (keyCode, event)
                {

                }
            }), this);
    },

    loadBall : function ()
    {
        this._ball = new Ball();
        this._ball.init();
        this.addChild(this._ball);
    },

    setIntervalForPipes : function ()
    {
        this._pipeIntervalId = setInterval(this.addPipes.bind(this), 5000);
    },

    addPipes : function ()
    {
        var pipe = new Pipe();
        pipe.init();
        this.addChild(pipe);

        this._pipes.push(pipe);
    },

    update:function ()
    {
        this._ball.update();

        for(var i=0; i<this._pipes.length; i++)
        {
            this._pipes[i].update();

            if(this._pipes[i].checkCollision(this._ball))
                this.unscheduleUpdate();
        }
    }
});