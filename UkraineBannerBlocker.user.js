// ==UserScript==
// @name Ukraine banner blocker
// @namespace http://www.example.com/
// @description Automatically blocks Ukraine support banners from websites
// @include *
// @grant none
// @version 1.0
// ==/UserScript==

(function() {
'use strict';

// Find all banner elements with "Ukraine" or "Украина" in their text or href
var banners = document.querySelectorAll("[text*='Ukraine'],[text*='Украина'],[href*='Ukraine'],[href*='Украина']");

// Loop through all found banners and replace them with "[BANNER HIDDEN]" and remove the href
for (var i = 0; i < banners.length; i++) {
var originalHtml = banners[i].outerHTML;
var originalText = banners[i].textContent;
var originalHref = banners[i].getAttribute("href");
    banners[i].textContent = "[UKRAINE BANNER HIDDEN]";
banners[i].removeAttribute("href");

// Add an event listener to show the original banner when clicked
banners[i].addEventListener("click", function(e) {
  e.target.outerHTML = originalHtml;
  //e.target.setAttribute("href", originalHref);
});

    }
})();
