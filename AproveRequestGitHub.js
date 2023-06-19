// ==UserScript==
// @name         Aprove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', function(event) {

        // Shorcut Ctrl + a
        if (event.ctrlKey && event.key === 'a') {
            // setTimeout(function() {
                // Guardar boton aprove
              //  const aproveButton = document.querySelector('.btn.btn-primary.btn-sm.ml-2');
              //  aproveButton.click();

            // }, 250); // 250 es el tiempo en milisegundos (0.25 segundos)

            setTimeout(function() {
                // Guardar boton aprove
                const reviewButton = document.querySelector('.js-review-changes');
                reviewButton.click();
            }, 500); // 500 es el tiempo en milisegundos (0.5 segundos)

            setTimeout(function() {
            const radioInput = document.querySelector('input[name="pull_request_review[event]"][value="approve"]');
                  radioInput.click();
            }, 750); // 750 es el tiempo en milisegundos (0.75 segundos)

           setTimeout(function() {
               const spanElements = document.querySelectorAll('span.Button-label');
               for(let i = 0; i <= spanElements.length; i++) {
                   if(spanElements[i].innerHTML == 'Submit review') {
                    spanElements[i].click();
                   }
               }
            }, 1000); // 1000 es el tiempo en milisegundos (1.0 segundos)


          } // If event click ctrl + l
    });
    // Your code here...
})();
