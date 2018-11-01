'use strict';


window.onload = greetTheVisitor();

function greetTheVisitor() {
  let message;

  if (document.cookie.indexOf('visitedBrianSite') >= 0) {
    message = 'Hey, welcome back to my portfolio, I\'m so happy you like looking at it.';
  } else {
    message = 'Welcome to my portfolio.  Have a look around and send me a message if you like what you see!';
  }

  renderMessage(message);

  function renderMessage(message) {
    console.log('renderMessage entered');
    let numbersAPIDiv = document.querySelector('.numbers-api-container'),
        mainContentDiv = document.querySelector('.main-content')
    let messageDiv = document.createElement('div');
        messageDiv.classList = 'message-container';
    let messagePEl = document.createElement('p');
        messagePEl.classList = 'message-paragraph';
        messagePEl.innerHTML = message;

    messageDiv.appendChild(messagePEl);
    mainContentDiv.insertBefore(messageDiv, numbersAPIDiv);
    document.cookie = 'visitedBrianSite=true';
  }
}