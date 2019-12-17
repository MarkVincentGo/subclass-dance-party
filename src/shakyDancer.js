var makeShakyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeShakyDancer.prototype = Object.create(makeDancer.prototype);

makeShakyDancer.prototype.constructor = makeShakyDancer;

makeShakyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  var topRand = Math.ceil(Math.random() * 10);
  var leftRand = Math.ceil(Math.random() * 10);
  var topDel, leftDel;

  if (topRand >= 6 && leftRand >= 6) {
  	topDel = Math.random() * 50;
  	leftDel = Math.random() * 50;
  	var styleSettings = {
	    top: this.top + topDel,
	    left: this.left + leftDel
	};
  	this.$node.css(styleSettings);
  } else if (topRand <= 6 && leftRand >= 6) {
  	topDel = Math.sign(-1) * Math.random() * 50;
  	leftDel = Math.random() * 50;
  	var styleSettings = {
	    top: this.top + topDel,
	    left: this.left + leftDel
	};
  	this.$node.css(styleSettings);
  } else if (topRand >= 6 && leftRand <= 6) {
  	topDel = Math.random() * 50;
  	leftDel = Math.sign(-1) * Math.random() * 50;
  	var styleSettings = {
	    top: this.top + topDel,
	    left: this.left + leftDel
	};
  	this.$node.css(styleSettings);
  } else if (topRand <= 6 && leftRand <= 6) {
  	topDel = Math.sign(-1) * Math.random() * 50;
  	leftDel = Math.sign(-1) * Math.random() * 50;
  	var styleSettings = {
	    top: this.top + topDel,
	    left: this.left + leftDel
	};
  	this.$node.css(styleSettings);
  }
};