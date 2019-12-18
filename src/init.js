$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; // window['makeBlinkyDancer']

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 100
    );
    var colors = ['red', 'blue', 'magenta', 'yellow', 'cyan'];

    (dancer.$node).css('border-color', `${colors[Math.floor(Math.random() * 5)]}`);
    $('body').append(dancer.$node);
    $('span.spinny').on('mouseover', function(event) {
      makeDancer.prototype.spin.call(dancer);
      console.log('hi')
      //dancer.angle += 5;
      $(dancer.$node).css('transform', `rotate(${this.angle}deg)`);
    });
    $('span.dancer').on('click', function() {
      var clickedDancer = $(this);
      var n = Math.floor(Math.random() * (window.dancers.length - 1) + 1);
      var closest = [];
      var distances = [];
      var findDistance = function(dancer1, dancer2) {
        var d1top = parseInt(dancer1.css('top'));
        var d1left = parseInt(dancer1.css('left'));
        var d2top = dancer2.top;
        var d2left = dancer2.top;
        var topDiff = d1top - d2top;
        var leftDiff = d1left = d2left;
        return Math.sqrt(Math.pow(topDiff, 2) + Math.pow(leftDiff, 2));
      };
      for (var i = 0; i < window.dancers.length; i++) {
        var dist = findDistance(clickedDancer, window.dancers[i]);
        if (dist !== 0) {
          if (closest.length < n) {
            closest.push(window.dancers[i]);
            distances.push(dist);
          } else {
            var max = Math.max(...distances);
            if (dist < max) {
              var index = distances.indexOf(max);
              closest.splice(index, 1, window.dancers[i]);
              distances.splice(index, 1, dist);
            }
          }
        }
      }
      console.log(closest);
      var colors = ['red', 'blue', 'magenta', 'yellow', 'cyan'];
      for (var j = 0; j < closest.length; j++) {
        $(closest[j].$node).css('border-color', `${colors[Math.floor(Math.random() * 5)]}`);
      }


    });




    //(dancer.$node).append('<img src="https://media.tenor.com/images/233e3f30c35e821f99eaa1847671183b/tenor.gif"/>')
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    var bodyHeight = $("body").height();
    var bodyWidth = $("body").width();
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(bodyHeight / 2, bodyWidth * i / window.dancers.length);
    }
  });




});