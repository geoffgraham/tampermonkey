// ==UserScript==
// @name         CSS-Tricks
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://css-tricks.com/wp-admin/post.php?post=*
// @icon         https://icons.duckduckgo.com/ip2/css-tricks.com.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle(`
    .editor-styles-wrapper.editor-styles-wrapper {
    margin: auto;
    max-width: 80ch;
    }

`);
})();