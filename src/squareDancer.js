var SquareDancer = function(top, left, timeBetweenSteps) {
  // this._delta = 1;
  this._red = 0;
  this._redReverse = false;
  this._blue = 255;
  // this._blueReverse = true;
  this._green = 0;
  this._oldStep = Dancer.prototype.step;
  this.$node = $('<span class="squareDancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps / 30);
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.step = function() {
  this._oldStep();
  // this.$node.toggle();

  if (!this._redReverse) {
    if (++this._red === 255) {
      this._redReverse = true;
    }
  } else {
    if (--this._red === 0) {
      this._redReverse = false;
    }
  }
  this._blue = 255 - this._red;
  this._green = 155 + this._red % 255;

  // if (!this._blueReverse) {
  //   if (++this._blue === 255) {
  //     this._blueReverse = true;
  //   }
  // } else {
  //   if (--this._blue === 0) {
  //     this._blueReverse = false;
  //   }
  // }

  this.$node.css({
    'border-color' : "rgb(" + this._red + ", " +
      this._blue + ", " + this._green + ")"
  });
  // this._red = (this._delta + this._red) % 255;
  // this._green = (this._delta + this._green) % 255;
  // this._blue = (this._delta + this._blue) % 255;
};
