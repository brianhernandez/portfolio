(function() {
  var bellows = document.querySelector('.su_accordion');
  var tabs = document.querySelector('.tabs-label');

  bellows && bellows.addEventListener('click', function(event) {
    if (event.target.tagName === "INPUT") {
      if (!(event.target.className === "su_active-bellow-flag")) {
        event.target.classList.add("su_active-bellow-flag");
      } else if (event.target.className === "su_active-bellow-flag") {
        event.target.checked = false;
        event.target.classList.remove("su_active-bellow-flag");
        event.target.blur();
      }
    }
  });

  tabs && tabs.addEventListener('click', function(event) {
    if (event.target.tagName === "LABEL" ) {
      // kids = even.target.parentNode.
      for(i = 0; i < event.target.parentNode.children.length; i++) {
        event.target.parentNode.children[i].className = "";
      }
      // if (!(event.target.className === "su_active-tab-flag")) {
      //   event.target.classList.add("su_active-tab-flag");
      // } else if (event.target.className === "su_active-tab-flag") {
      //   event.target.classList.remove("su_active-tab-flag");
      // }

      event.target.classList.add("su_active-tab-flag");
    }
  });


})();
