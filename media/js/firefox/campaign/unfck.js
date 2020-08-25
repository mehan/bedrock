/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    // https://bukk.it/a-moment.gif

    // Copy Link
    var clipboard = new ClipboardJS('.js-copy-link');

    clipboard.on('success', function(e) {
        // GA
        // eslint-disable-next-line no-console
        console.log('copied');
        // sucess message
        document.getElementById('bar').classList.remove('hidden');
    });
    clipboard.on('error', function(e) {
        // eslint-disable-next-line no-console
        console.log('error');
    });

    // Twitter share
    function openTwitterSubwin(url) {
        var width = 550;
        var height = 420;
        var options = {
            'scrollbars': 'yes',
            'resizable': 'yes',
            'toolbar': 'no',
            'location': 'yes',
            'width': width,
            'height': height,
            'top': screen.height > height ? Math.round((screen.height / 2) - (height / 2)) : 0,
            'left': Math.round((screen.width / 2) - (width / 2))
        };

        window.open(url, 'twitter_share', window._SearchParams.objectToQueryString(options).replace(/&/g, ',')).focus();
    }

    function handleShareLinkClick(e) {
        var href = e.target.href;

        // Open Twitter in a sub window
        openTwitterSubwin(href);
        e.preventDefault();
    }

    function onLoad() {
        // Set up twitter link handler
        var shareLinks = document.querySelectorAll('.js-twitter-share');

        for (var i = 0; i < shareLinks.length; i++) {
            shareLinks[i].addEventListener('click', handleShareLinkClick, false);
        }
    }

    window.Mozilla.run(onLoad);
})();
