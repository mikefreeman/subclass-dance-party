var BlinkyDancer = function(top, left, timeBetweenSteps){
  this._oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  this._oldStep();
  this.$node.toggle();
};
