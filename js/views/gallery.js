(function(){
	window.App.Views.Gallery = Backbone.View.extend({
		initialize: function(params) {
			this.images = params.images;
			this.render();
			return this;
		},
		render: function() {
			$(this.el).html(HAML.gallery(this));
			$('#app').html(this.el);
			$('nav#main-nav a').removeClass('active');
			$('nav#main-nav a#gallery').addClass('active');
			
			$('#gallery a.swap').click(function(){
				var href = $(this).attr('href');
				if($('img#largeImage').attr('src') != href) {
					$('img#largeImage').stop().animate({
						opacity:0}, function(){
							$(this).attr('src', href);
					}).load(function(){
						$(this).stop().animate({opacity:1});
					});
				}
				return false;
			});
			
			if ($('body').hasClass('fresh')) {
				$('body').removeClass('fresh');
				$('.appear').each(function(i, obj) {
					$(obj).css('opacity', 0.0);
					return window.setTimeout(function() {
						return $(obj).animate({
							"opacity": 1
						}, 200);
					}, 100 * i + 1000);
				});
			} else {
				$('section#canvas .appear').each(function(i, obj) {
					$(obj).css('opacity', 0.0);
					return window.setTimeout(function() {
						return $(obj).animate({
							"opacity": 1
						}, 200);
					}, 100 * i + 1000);
				});
			}
			
			this.delegateEvents();
			return this;
		}
	});
}).call(this);