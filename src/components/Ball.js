/**
 * Created by nikhil.peter on 6/7/2017.
 */
var Ball = cc.DrawNode.extend({
    _gravity : 0.2,
    _vY : 0,
    
    init : function () {

        this._super();
        this.drawDot(cc.p(200, 200), 10, cc.color(255, 10, 0, 255));
    },

    jump : function (factor) {
        this._vY += factor;
    },
    
    update : function ()
    {
        this.setPositionY(this.getPositionY() - this._vY);
        this._vY += this._gravity;
    }
});