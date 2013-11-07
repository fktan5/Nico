// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @type {string}
 */
var QUERY = 'lovelive';

var loveliveGenerator = {

	searchOnAjax_: 'http://ajax.googleapis.com/ajax/services/search/images?' + 
		'q=' + encodeURIComponent(QUERY) + 
		'&v=1.0&safe=on',

	requestLoveLive: function(){
		console.log(this.searchOnAjax_);
		$.ajax({
			type: 'GET',
			url: this.searchOnAjax_,
			dataType: 'jsonp',
			success: function(json){
				console.log(json);
				
			}
		});
	},

 	showImages_: function(e) {
		var result = JSON.parse(e.responseText);
		for(var i=0; i<result.item.length; i++){
			
		}
	}
};

document.addEventListener('DOMContentLoaded', function () {
	loveliveGenerator.requestLoveLive();
});
