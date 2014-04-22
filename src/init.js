$(document).ready(function(){
  window.dancers = [];
  $(".lineUpDancers").on("click", function(){
    var elements = window.dancers;
    var delta = $("body").width() / elements.length;
    for (var i = 0; i < elements.length; i++) {
      // elements[i].setPosition($("body").height()*0.90, i*delta);
      elements[i].$node.animate({
        top: $("body").height()*0.90,
        left: i * delta
      }, 1000);
    }
  });



  $(".thingy").on("click", function() {
    // var count = 0;
    // while (count < 20) {
      // var results = _.map(window.dancers, function(element){
      //   var distances = [];
      //   var left = parseInt(element.$node.css('left').substr(0, element.$node.css('left').length-2));
      //   var top = parseInt(element.$node.css('top').substr(0, element.$node.css('top').length-2));
      //   for (var j = 0; j < window.dancers.length; j++) {
      //     var element2 = window.dancers[j];
      //     var distance = Math.abs(top - parseInt(element2.$node.css('top').substr(0, element2.$node.css('top').length-2))) +
      //       Math.abs(left - parseInt(element2.$node.css('left').substr(0, element2.$node.css('left').length-2)));
      //     distances.push([element, element2, distance]);
      //   }
      //   distances.sort(function(a,b){return a[2]-b[2];});
      //   return distances;
      // });

      // for (var k = 0; k < results.length; k++) {
      //   results[k][0].$node.text(k);
      //   results[k][1].$node.text(k);
      //   results[k][1].$node.animate({
      //     top: results[k][0].$node.css('top'),
      //     left: results[k][0].$node.css('left')
      //   }, 5000);
      // }
    //   count++;
    // }
  });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.max($("body").height() * Math.random() - 50, 50),
      Math.max($("body").width() * Math.random() - 50, 0),
      Math.random() * 1000
    );


    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    $(".dancer").hover(function() {
      var distances = [];
      var delta = 10;
      var left = delta + Number($(this).css('left').substr(0, $(this).css('left').length-2));
      var top = delta + Number($(this).css('top').substr(0, $(this).css('top').length-2));
      for (var j = 0; j < window.dancers.length; j++) {
        var element2 = window.dancers[j];
        var element2Top = delta + Number(element2.$node.css('top').substr(0, element2.$node.css('top').length-2));
        var element2Left = delta + Number(element2.$node.css('left').substr(0, element2.$node.css('left').length-2));
        var diffTop = top - element2Top;
        var diffLeft = left - element2Left;
        var distance = Math.sqrt(Math.pow(Math.abs(diffTop), 2) + Math.pow(Math.abs(diffLeft), 2));
        distances.push([$(this), element2, distance, diffTop, diffLeft, element2Top, element2Left]);
      }
      distances.sort(function(a,b){return a[2]-b[2];});
      distances = distances.slice(1, 6);
      for (var k = 0; k < distances.length; k++) {
        distances[k][1].$node.text(':-)');
        distances[k][1].$node.animate({
          top: distances[k][5] + distances[k][3]*0.25,
          left: distances[k][6] + distances[k][4]*0.25
        }, 100);
      }
    }, function(){
      for (var l = 0; l < window.dancers.length; l++){
        window.dancers[l].$node.text('');
      }
    });
    // $(".squareDancer").hover(function() {
    //   $(this).css({'border-width': '50px'});
    //   $(this).text(':-)');
    // }, function() {
    //   $(this).css({'border-width': '25px'});
    //   $(this).text('');
    // });
  });
});

