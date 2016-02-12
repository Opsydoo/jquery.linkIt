/*
* name:		LinkIt
* version:	1.0.0
*license:	MIT
*/

(function($){
	$.fn.linkIt = function(options){
		//Default Settings
		var settings = $.extend({
			href		:null,
			text		:null,
			target		:'_self'
		}, options);

		//Validation
		if (settings.href == null){
			console.log('There is a problem!');
			return this;
		}

		return this.each(function(){
			var object = $(this);

			if(settings.text == null){
				settings.text = object.text();
			}
			object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
		});


	}
}(jQuery));