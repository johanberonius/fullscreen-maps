// ==UserScript==
// @name        Eniro Fullscreen Map
// @namespace   http://kartor.eniro.se/
// @include     http://kartor.eniro.se/*
// @version     1
// @grant       none
// ==/UserScript==

var script = document.createElement('script');
script.src = 'https://johanberonius.github.io/fullscreen-maps/eniro.js';
document.getElementsByTagName('head')[0].appendChild(script);
