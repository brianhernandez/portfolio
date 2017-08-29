(function() {
  var menu = document.querySelector('.main-nav');

  menu && menu.addEventListerner('click', function(event) {
    console.log(event.target);
  });
});
