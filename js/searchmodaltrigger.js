(function() {
  // Get element with #searc id and save it to searchBox variable
  var serachBox = document.querySelector('#search');
  // Ensure menu exists and add a keydown event listener to it
  serachBox && serachBox.addEventListener('keydown', function(event) {
    // Ensure corss browser compatability by checking and setting which
    // event keyCode or which property to use
    var code = (event.keyCode ? event.keyCode : event.which);
    // If keydown event is triggered from the enter key (with a code of 13)...
    if (code == 13) {
      // Find the element with the #searchbox-link id and click the link to
      // trigger a target on the modal component
      document.querySelector('#searchbox-link').click();
    }
  });
})();
