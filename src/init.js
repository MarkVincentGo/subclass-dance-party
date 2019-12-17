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

  $('span.blinky').on('click', function(event) {
    //makeDancer.prototype.spin.call(this);
    console.log('hi')
    $(this).angle += 5;
    $(this).$node.css('transform', `rotate(${this.angle}deg)`);
  });

  

});