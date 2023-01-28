function Mario() {
  var gameUI = GameUI.getInstance();

  this.type = 'small';
  this.x;
  this.x2;
  this.y;
  this.y2;
  this.width = 32;
  this.vWidth = 16;
  this.height = 44;
  this.vHeight = 18;
  this.vScale = 2;
  this.speed = 3;
  this.speed2 = 3;
  this.velX = 0;
  this.velX2 = 0;
  this.velY = 0;
  this.velY2 = 0;
  this.jumping = false;
  this.jumping2 = false;
  this.grounded = false;
  this.grounded2 = true;
  this.invulnerable = false;
  this.invulnerable2 = false;
  this.sX = 0; // sprite x
  this.sX2 = 0; // sprite x
  this.sY = 4; // sprite y
  this.sY2 = 0; // sprite x
  this.frame = 0;
  this.frame2 = 0;

  var that = this;

  this.init = function() {
    that.x = 10;
    that.x2 = 20;
    that.y = gameUI.getHeight() - 40 - 40;
    that.y2 = gameUI.getHeight() - 40 - 40 + 10;

    marioSprite = new Image();
    marioSprite.src = 'images/mario-sprites.png';

    vSprite = new Image();
    vSprite.src = 'images/Green-Cap-Character-16x18.png';
  };

  this.draw = function() {
    that.sX = that.width * that.frame;
    gameUI.draw(marioSprite, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);
    that.sX = that.width * that.frame;
    // gameUI.draw(vSprite, that.sX, that.sY, that.vWidth*that.vScale, that.vHeight, that.x2+10, that.y2+10, that.width, that.height);
    gameUI.draw(vSprite, that.sX2, that.sY2, that.vWidth, that.vHeight, that.x2, that.y2, that.vWidth, that.vHeight*that.vScale);
    // gameUI.draw(img, width, 0, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
    // gameUI.draw(img, width * 2, 0, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);
  };

  this.checkMarioType = function() {
    if (that.type == 'big') {
      that.height = 60;

      //big mario sprite position
      if (that.invulnerable) {
        that.sY = 276; //if invulnerable, show transparent mario
      } else {
        that.sY = 90;
      }
    } else if (that.type == 'small') {
      that.height = 44;

      //small mario sprite
      if (that.invulnerable) {
        that.sY = 222; //if invulnerable, show transparent mario
      } else {
        that.sY = 4;
      }
    } else if (that.type == 'fire') {
      that.height = 60;

      //fire mario sprite
      that.sY = 150;
    }
  };

  this.resetPos = function() {
    that.x = canvas.width / 10;
    that.y = canvas.height - 40;
    that.frame = 0;
  };
}
