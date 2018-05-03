// ==UserScript==
// @name        Eniro Fullscreen Map
// @namespace   https://kartor.eniro.se/
// @include     https://kartor.eniro.se/*
// @version     1
// @grant       none
// ==/UserScript==

var script = document.createElement('script');
script.src = 'https://git.beroni.us/fullscreen-maps/eniro.js';
document.getElementsByTagName('head')[0].appendChild(script);
