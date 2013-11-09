// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @type {string}
 */
var QUERY = "nico yazawa";

var loveliveGenerator = {

	searchOnAjax_: 'http://ajax.googleapis.com/ajax/services/search/images?' + 
		'q=' + encodeURIComponent(QUERY) + 
		'&v=1.0&safe=on',

	requestLoveLive: function(){
		$.ajax({
			type: 'GET',
			url: this.searchOnAjax_,
			dataType: 'jsonp'
		}).done(function(data){
			loveliveGenerator.setImage(data);
		});
	},

	setImage : function(data){
		var objects = data.responseData.results;
		for(var i=0;i< objects.length; i++){
			console.log(objects[i]);
			var img = document.createElement('img');
			img.src = objects[i].url;
			document.body.appendChild(img);
		}
	},
};

document.addEventListener('DOMContentLoaded', function () {
	loveliveGenerator.requestLoveLive();
});
