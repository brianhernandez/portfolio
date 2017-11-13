(function() {
  // Get element with .main-nav class and save it to menu variable
  var menu = document.querySelector('.main-nav');
  var offCanvasToggle = document.querySelector('#offcanvas-toggle');
  var menuIcon = document.querySelector('#offcanvas-toggle-label');
  // Ensure menu exists and add a click event listener to it
  menuIcon && menuIcon.addEventListener('click', function(event) {
    if (event.target.tagName === "I" && event.target.innerText === "menu") {
      event.target.innerText = "close";
    } else if (event.target.tagName === "I" && event.target.innerText === "close") {
      event.target.innerText = "menu";
    }
  });
  menu && menu.addEventListener('click', function(event) {
    // If the element that triggered the click is an A tag element...

    if (event.target.tagName == "A") {
      // Find the element with the #offcanvas-toggle id and set its checked
      // state to false to move the mobile menu back to its offcanvas state
      offCanvasToggle.checked = false;
      menuIcon.children[0].innerText = "menu";
    }
  });
})();
