// ==UserScript==
// @name        Garmin Connect Activity Summarize Splits
// @namespace   https://connect.garmin.com/activity
// @include     https://connect.garmin.com/modern/activity/*
// @include     https://connect.garmin.com/activity/*
// @version     1
// @grant       none
// ==/UserScript==

var script = document.createElement('script');
script.src = 'https://git.beroni.us/fullscreen-maps/garmin-connect/splits.js';
document.getElementsByTagName('head')[0].appendChild(script);
