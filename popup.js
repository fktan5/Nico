// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @type {string}
 */
var QUERY = 'lovelive';

var loveliveGenerator = {

	searchOnAjaxGoogle_: 'http://ajax.googleapis.com/ajax/services/search/images?' + 
		'q=' + encodeURIComponent(QUERY) + 
		'&v=1.0&safe=on',

	requestLoveLive: function(){
		var req = new XMLHttpRequest();
		req.open("GET", this.searchOnAjaxGoogle_, true);
		req.onload = this.showImages_.bind(this);
		req.send(null);
	},

 	showImages_: function(e) {
		var result = JSON.parse(e.responseText);
		for(var i=0; i<result.item.length; i++){
			
		}
	}
};

var kittenGenerator = {
  showPhotos_: function (e) {
    var kittens = e.target.responseXML.querySelectorAll('photo');
    for (var i = 0; i < kittens.length; i++) {
      var img = document.createElement('img');
      img.src = this.constructKittenURL_(kittens[i]);
      img.setAttribute('alt', kittens[i].getAttribute('title'));
      document.body.appendChild(img);
    }
  },

  constructKittenURL_: function (photo) {
    return "http://farm" + photo.getAttribute("farm") +
        ".static.flickr.com/" + photo.getAttribute("server") +
        "/" + photo.getAttribute("id") +
        "_" + photo.getAttribute("secret") +
        "_s.jpg";
  }
};

document.addEventListener('DOMContentLoaded', function () {
});
