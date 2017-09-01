(function() {
  // Get element with .main-nav class and save it to menu variable
  var serachBox = document.querySelector('#search');
  // Ensure menu exists and add a click event listener to it
  console.log(serachBox);
  serachBox && serachBox.addEventListener('keydown', function(event) {
    console.log("Enter key pressed within searchbox.");
    var code = (event.keyCode ? event.keyCode : event.which);
    // If the element that triggered the click is an A tag element...
    console.log(code);
    if (code == 13) {
      // Find the element with the #offcanvas-toggle id and set its checked
      // state to false to move the mobile menu back to its offcanvas state
      document.querySelector('#searchbox-link').click();
    }
  });
})();
