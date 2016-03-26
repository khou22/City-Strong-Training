//JS file for scrolling to elements

var scrollTo = function(elementID) {
  console.log("Scrolling to element:", elementID); // Feedback
  $(document).ready(function (){
    $('html, body').animate({
      scrollTop: $(elementID).offset().top - 70 // Subtract header height
    }, 1000);
  });
}
