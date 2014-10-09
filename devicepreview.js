/**
 * devicepreview.js
 * Shows long image of webpage through the Mac Screen
 * Aurthor: Jason McIver
 * Website: jasonmciver.com
 * License: MIT
 */

$.devicescroll = {
	    id: 'devicepreview',
	    version: '0.1',
	    aurthor: 'Jason McIver',
	    defaults: { // default settings
	    	webpageImg: 'http://placehold.it/300x600',
	    	speed: 2500,
	    	ease: 'swing'
	    },
	    options: {
	    	//will be populated on init with defaults and init params
	    }

	};

	(function ($) {
	    //Attach this new method to jQuery
	    $.fn.extend({

	        devicescroll: function (params) {

	            return this.each(function () {
	                
	                //combine defaults and params into options
	                var opts = $.extend({},$.devicescroll.defaults, params);


	                //add webpage image (long image)
	                $(this).append('<img id="webpage" src="" width="300px" style="top:0px;z-index:-1;overflow:hidden;position:relative;display:block" />');

	                //apply required css over webimage
	                //device images, and trigger for hover
	                $(this).append('<div id="macScreen" style="z-index:20;position:absolute;top:0px;height:179px;width:300px"><img src="assets/mac-screenFrame.png" width="300px" style="z-index:10;position:absolute;top:0px" /><img src="assets/mac-screenStand.png" width="300px" style="z-index:15;position:absolute;top:177px;display:inline-block" /><!-- Mac trigger --><div id="macCtrl" style="z-index:30;position:absolute;top:0px;height:179px;width:300px"></div></div>');
	                
	                var $macScreen = $(this).find('#macScreen'); //get jQuery selector results (jQuery collection)
	                var macScreen = $macScreen[0]; //get DOM element from jQuery selector results (DOM node)

					var $webpage = $(this).find('#webpage');
					var moveDistance = 0;

					$(this).find('#webpage').attr('src',opts.webpageImg);
					//wait until img is loaded before getting height
					$(this).find('#webpage').on('load', function(){
						var webpage = $webpage[0];

						//move distance = image height - device screen height
						moveDistance = parseInt($(webpage).css('height'),10) - parseInt($(macScreen).css('height'),10);
					})

					//mouse over
	                $(this).find('#macCtrl').hover(
		                function(){
							$(macScreen).animate({"top":""+moveDistance+"px"}, opts.speed, opts.ease);
						},
						function(){
							$(macScreen).animate({"top":"0px"}, opts.speed, opts.ease);
					});


	            });
	        }
        
	    })
	})(jQuery);