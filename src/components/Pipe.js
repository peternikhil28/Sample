/**
 * Created by nikhil.peter on 6/7/2017.
 */
var Pipe = ccui.Layout.extend({

    _topPipe:null,
    _bottomPipe:null,
    _gapWidth : 70,

    init : function ()
    {
        var gapPos = Math.random() * GameEngine.screenHeight;

        var origin1 = cc.p(GameEngine.screenWidth, GameEngine.screenHeight);
        var destination1 = cc.p(GameEngine.screenWidth+ this._gapWidth, gapPos + this._gapWidth);

        this._topPipe = new cc.DrawNode();
        this._topPipe.drawRect(origin1, destination1, cc.color(0,255,100,255));
        this.addChild(this._topPipe);


        var origin2 = cc.p(GameEngine.screenWidth,0);
        var destination2 = cc.p(GameEngine.screenWidth + this._gapWidth, gapPos);

        this._bottomPipe = new cc.DrawNode();
        this._bottomPipe.drawRect(origin2, destination2, cc.color(0,255,100,255));
        this.addChild(this._bottomPipe);

    },

    checkCollision :function (ball)
    {
        var ballRect =  ball.getBoundingBox();
        if(cc.rectIntersectsRect(ball.getBoundingBox(), this._topPipe.getBoundingBox()) || cc.rectIntersectsRect(ball.getBoundingBox(), this._bottomPipe.getBoundingBox()))
            return true;
    },

    update : function ()
    {
       this.setPositionX(this.getPositionX()-2);
    }
});