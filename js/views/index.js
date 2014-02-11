(function() {
	window.App.Views.Index = Backbone.View.extend({
		initialize: function(params) {
			this.render();
			return this;		
		},
		render: function() {
			$(this.el).html(HAML.index(this));
			$('#app').html(this.el);

			$('#services a.swap').click(function(){
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

			$('nav#main a').removeClass('active');
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