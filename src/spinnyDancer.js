// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var makeSpinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.angle = 0;
  this.dim = 1;
  this.place = 0;
  this.x = 0;
  this.y = 0;
  this.$node.css('background-image', 'url(https://media.tenor.com/images/233e3f30c35e821f99eaa1847671183b/tenor.gif)');
  this.$node.css('background-size', 'contain');
  this.$node.css('background-repeat', 'no-repeat');

};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);

makeSpinnyDancer.prototype.constructor = makeBlinkyDancer;

makeSpinnyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //this.angle = this.angle += 20;
  //this.$node.css('transform', `rotate(${this.angle}deg)`);
  this.dim = Math.abs(Math.sin(this.place++ * 0.01));
  this.$node.css('height', `${this.dim * 100 * 0.7}px`);
  this.$node.css('width', `${this.dim * 100 * 0.9}px`);

  //this.x++ * 0.0001;
  //this.y = Math.abs(Math.sin(this.x));
  //var styleSettings = {
  //  top: this.y * 100,
  //  left: this.x * 10
  //};
  //this.$node.css(styleSettings);

};