function CPreviewPanel(){
    
    var _iWidth;
    var _iHeight;
    
    var _oSourceImage;
    var _oImage;
    
    this._init = function(){
        
        _oSourceImage = s_oSpriteLibrary.getSprite(s_szImage);
        _oImage = createBitmap(_oSourceImage);
        _iWidth = _oSourceImage.width;
        _iHeight = _oSourceImage.height;
        _oImage.x = CANVAS_WIDTH/2 -110;
        _oImage.y = CANVAS_HEIGHT/2;
        _oImage.regX = _iWidth/2;
        _oImage.regY = _iHeight/2;
        _oImage.scaleX = 0.1;
        _oImage.scaleY = 0.1;
        s_oStage.addChild(_oImage);

        createjs.Tween.get(_oImage).to({scaleX:1.1, scaleY:1.1}, 1500, createjs.Ease.elasticOut);

    };
    
    this.unload = function(){
        createjs.Tween.removeTweens(_oImage);
        s_oStage.removeChild(_oImage);
    };
    
    this._init();
};