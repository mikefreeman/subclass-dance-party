var BlinkyDancer = function(top, left, timeBetweenSteps){
  this._oldStep = Dancer.prototype.step;
  this.$node = $('<span class="blinkyDancer dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  this._oldStep();
  if (this.$node.css('border') === '20px solid rgb(68, 68, 68)') {
    this.$node.css({'border':'20px solid darkRed'});
  } else {
    this.$node.css({'border':'20px solid rgb(68, 68, 68)'});
  }
};
