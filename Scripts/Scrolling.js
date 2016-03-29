//JS file for scrolling to elements

var scrollTo = function(elementID) {
  var animationTime = 750; // Set animation time (milliseconds)
  // console.log("Scrolling to element:", elementID); // Feedback
  if (elementID != '#welcome') { // If not the welcome section
    $(document).ready(function (){ // Document is loaded
      $('html, body').animate({
        scrollTop: $(elementID).offset().top - 70 // Subtract header height
      }, animationTime);
    });
  } else { // If the welcome section
    $(document).ready(function (){ // Document is loaded
      $('html, body').animate({
        scrollTop: 0 // Just scroll to the top, the welcome section is static
      }, animationTime);
    });
  }
}
