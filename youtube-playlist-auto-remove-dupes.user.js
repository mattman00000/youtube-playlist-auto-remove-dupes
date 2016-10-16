// ==UserScript==
// @version            0.0.0.3
// @grant              none
// @match              *://www.youtube.com/playlist*
// @connect            self
// @connect            *
// @run-at             document-start
// @name               youtube-playlist-auto-remove-dupes
// @description        userscript to automatically remove duplicates in youtube playlists
// @author             Matthew James Burnham <mattman00000@gmail.com>
// @priority           9001
// @downloadURL        https://github.com/mattman00000/youtube-playlist-auto-remove-dupes/raw/master/youtube-playlist-auto-remove-dupes.user.js
// @updateURL          https://github.com/mattman00000/youtube-playlist-auto-remove-dupes/raw/master/youtube-playlist-auto-remove-dupes.user.js
// @supportURL         https://github.com/mattman00000/youtube-playlist-auto-remove-dupes/issues
// @homepageURL        https://github.com/mattman00000/userscripts
// @contributionURL    https://github.com/mattman00000/userscripts
// @namespace          https://github.com/mattman00000
// @license            MIT
// @copyright          2016+, Matthew James Burnham
// ==/UserScript==
/**
	The MIT License (MIT)
	
	Copyright © 2016 Matthew James Burnham
	
	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	the Software, and to permit persons to whom the Software is furnished to do so,
	subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/
(function() {
	'use strict';
	//USERSCRIPT START
	
	var youtubePlaylistAutoRemoveDupesInterval = window.setInterval(function(){
		document.querySelectorAll(".remove-duplicate-button").forEach(function(a){a.click();});
		if (!(Boolean(document.querySelectorAll(".remove-duplicate-button").length)))
		{
			window.clearInterval(youtubePlaylistAutoRemoveDupesInterval);
		}
	},1000);
	
	//USERSCRIPT END
})();
