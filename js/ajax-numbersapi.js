'use strict';

window.onload = sendNumbersAPIRequest();

let numbersAPIButton = document.querySelector('#numbers-api-button');

numbersAPIButton.addEventListener('click', sendNumbersAPIRequest);

function generateRandomNumber() {
  return (Math.floor(Math.random() * 200));
}

function sendNumbersAPIRequest() {
  const NUMBERSAPISITE = 'https://numbersapi.com/';
  let xhr = new XMLHttpRequest(),
      urlRequest = NUMBERSAPISITE + generateRandomNumber();

  xhr.onload = function() {
    document.querySelector('#numbers-api-response').innerHTML = xhr.response;
  };

  xhr.open('GET', urlRequest);
  xhr.send();
}
