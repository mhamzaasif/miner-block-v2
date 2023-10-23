function CEndPanel(oSpriteBg){
    var _iScore;
    
    var _oBg;
    var _oGroup;
    
    var _oMsgText;
    var _oScoreText;
    
    var _oFirstStar;
    var _oSecondStar;
    var _oThirdStar;
    var _oButton;
    var _oScoreTextStroke;
    var _oScoreText;
    var _oScorePos          = {x: CANVAS_WIDTH/2-150, y: CANVAS_HEIGHT/2-120};
    
    this._init = function(oSpriteBg){
        
        _oBg = createBitmap(oSpriteBg);
        _oBg.x = 0;
        _oBg.y = 0;
        
        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        
        _oFirstStar = createBitmap(s_oSpriteLibrary.getSprite('star_filled'));
        _oFirstStar.x = CANVAS_WIDTH/2;
        _oFirstStar.y = CANVAS_HEIGHT/2-60;
        _oFirstStar.regX = STAR_WIDTH/2;
        _oFirstStar.regY = STAR_HEIGHT/2;
        _oFirstStar.scaleX = 0.1;
        _oFirstStar.scaleY = 0.1;
        _oFirstStar.visible = false;
        
        _oSecondStar = createBitmap(s_oSpriteLibrary.getSprite('star_filled'));
        _oSecondStar.x = CANVAS_WIDTH/2;
        _oSecondStar.y = CANVAS_HEIGHT/2-60;
        _oSecondStar.regX = STAR_WIDTH/2;
        _oSecondStar.regY = STAR_HEIGHT/2;
        _oSecondStar.scaleX = 0.1;
        _oSecondStar.scaleY = 0.1;
        _oSecondStar.visible = false;
        
        _oThirdStar = createBitmap(s_oSpriteLibrary.getSprite('star_filled'));
        _oThirdStar.x = CANVAS_WIDTH/2;
        _oThirdStar.y = CANVAS_HEIGHT/2-60;
        _oThirdStar.regX = STAR_WIDTH/2;
        _oThirdStar.regY = STAR_HEIGHT/2;
        _oThirdStar.scaleX = 0.1;
        _oThirdStar.scaleY = 0.1;
        _oThirdStar.visible = false;
        
        _oGroup.addChild(_oBg, _oScoreText, _oMsgText, _oFirstStar, _oSecondStar, _oThirdStar);

        s_oStage.addChild(_oGroup);
    };
    
    this.unload = function(){
        _oGroup.off("mousedown",this._onExit);
    };
    
    this.show = function(iLevel, iScore){
        _iScore = iScore;
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            createjs.Sound.play("stage_clear");
            s_oSoundtrack.volume = 0;
        }
        
        var szText = TEXT_GAMEOVER+iScore;
        _oMsgText = new CComic(CANVAS_WIDTH/2-10, CANVAS_HEIGHT/2-60, _oGroup, szText, 2);
        
        _oGroup.visible = true;
                        
        var oSprite = s_oSpriteLibrary.getSprite('but_restart');
        _oButton = new CGfxButton((CANVAS_WIDTH/2)-40,CANVAS_HEIGHT/2+110,oSprite);
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {
            _oButton.addEventListener(ON_MOUSE_DOWN, oParent._onExit, this);
        });
        $(s_oMain).trigger("share_event",iScore);
        $(s_oMain).trigger("save_score",iScore);
    };
    
    this.nextLevel = function(iMoves, iLevel, iMaxMoves, iScore){
        _iScore = iScore;
        _oScoreTextStroke = new createjs.Text(TEXT_YOUR_SCORE+": "+iScore," 40px "+FONT, "#000000");
        _oScoreTextStroke.x = _oScorePos.x;
        _oScoreTextStroke.y = _oScorePos.y;
        _oScoreTextStroke.textAlign = "left";
        _oScoreTextStroke.textBaseline = "alphabetic";
        _oScoreTextStroke.lineWidth = 650;
        _oScoreTextStroke.outline = 8;
        s_oStage.addChild(_oScoreTextStroke); //Draws on canvas

        _oScoreText = new createjs.Text(TEXT_YOUR_SCORE+": "+iScore," 40px "+FONT, "#ffc600");
        _oScoreText.x = _oScorePos.x;
        _oScoreText.y = _oScorePos.y;
        _oScoreText.textAlign = "left";
        _oScoreText.textBaseline = "alphabetic";
        _oScoreText.lineWidth = 650;
        s_oStage.addChild(_oScoreText); //Draws on canvas
        
	if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            createjs.Sound.play("stage_clear");
            s_oSoundtrack.volume = 0;
        }
        var szText = TEXT_NEXT_LEVEL+TEXT_SCORE+" "+iMoves+" "+ TEXT_MOVES_OUT + " " +iMaxMoves;
        _oMsgText = new CComic(CANVAS_WIDTH/2-50, CANVAS_HEIGHT/2+180, _oGroup, szText, 1);
        
        var oSprite = s_oSpriteLibrary.getSprite('but_play_small');
        _oButton = new CGfxButton((CANVAS_WIDTH/2+160),CANVAS_HEIGHT -270,oSprite);
        
        if(iMoves >= iMaxMoves+5){
            _oFirstStar.visible = true;
            createjs.Tween.get(_oFirstStar).wait(500).to({scaleX:1, scaleY: 1}, 500, createjs.Ease.bounceOut).call(function() {
                _oButton.addEventListener(ON_MOUSE_DOWN, oParent._onNextLevel, this);
            });
        }else if(iMoves >= iMaxMoves+2){
            _oFirstStar.visible = true;
            createjs.Tween.get(_oFirstStar).wait(500).to({scaleX:1, scaleY: 1}, 500, createjs.Ease.bounceOut).call(function() {
                _oSecondStar.visible = true;
                createjs.Tween.get(_oFirstStar).to({x:CANVAS_WIDTH/2-40, y: CANVAS_HEIGHT/2-55, rotation: -20}, 250, createjs.Ease.linear).call(function() {});
                createjs.Tween.get(_oSecondStar).to({scaleX:1, scaleY: 1, x:CANVAS_WIDTH/2+40, y: CANVAS_HEIGHT/2-55, rotation: 20}, 500, createjs.Ease.bounceOut).call(function() {
                    _oButton.addEventListener(ON_MOUSE_DOWN, oParent._onNextLevel, this);
                });
            });
        }else if(iMoves < iMaxMoves+2){
            _oFirstStar.visible = true;
            createjs.Tween.get(_oFirstStar).wait(500).to({scaleX:1, scaleY: 1, rotation: 0}, 500, createjs.Ease.bounceOut).call(function() {
                _oSecondStar.visible = true;
                createjs.Tween.get(_oFirstStar).to({x:CANVAS_WIDTH/2-40, y: CANVAS_HEIGHT/2-55, rotation: -20}, 250, createjs.Ease.linear).call(function() {});
                createjs.Tween.get(_oSecondStar).to({scaleX:1, scaleY: 1, x:CANVAS_WIDTH/2+40, y: CANVAS_HEIGHT/2-55, rotation: 20}, 500, createjs.Ease.bounceOut).call(function() {
                    _oThirdStar.visible = true;
                    createjs.Tween.get(_oFirstStar).to({x:CANVAS_WIDTH/2-75, y: CANVAS_HEIGHT/2-50}, 250, createjs.Ease.linear).call(function() {});
                    createjs.Tween.get(_oSecondStar).to({x:CANVAS_WIDTH/2+75, y: CANVAS_HEIGHT/2-50}, 250, createjs.Ease.linear).call(function() {});
                    createjs.Tween.get(_oThirdStar).to({scaleX:1, scaleY: 1, x:CANVAS_WIDTH/2, y: CANVAS_HEIGHT/2-60}, 700, createjs.Ease.bounceOut).call(function() {
                        _oButton.addEventListenerWithParams(ON_MOUSE_DOWN, oParent._onNextLevel, this, iLevel);
                    });
                });
            });
        }
        _oGroup.visible = true;
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {});
        
        $(s_oMain).trigger("share_event",iScore);
    };
    
    this._onExit = function(){
        _oGroup.off("mousedown",this._onExit);
        s_oStage.removeChild(_oGroup);
        _oButton.unload();
        
        s_oGame.onExitEndPanel();
    };
    
    this._onNextLevel = function(iLevel){
        _oGroup.off("mousedown",this._onNextLevel);
        s_oStage.removeChild(_oGroup);
        
        s_oGame.onNextLevel(_iScore);
    };
    
    this._init(oSpriteBg);
    
    return this;
}
