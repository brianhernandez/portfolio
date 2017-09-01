(function() {
  // Get element with .main-nav class and save it to menu variable
  var menu = document.querySelector('.main-nav');
  // Ensure menu exists and add a click event listener to it
  menu && menu.addEventListener('click', function(event) {
    // If the element that triggered the click is an A tag element...
    if (event.target.tagName == "A") {
      // Find the element with the #offcanvas-toggle id and set its checked
      // state to false to move the mobile menu back to its offcanvas state
      document.querySelector('#offcanvas-toggle').checked = false;
    }
  });
})();
