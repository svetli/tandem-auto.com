(function() {
	window.App.Views.Services = Backbone.View.extend({
		initialize: function(params) {
			this.render();
			return this;
		},
		render: function() {
			$(this.el).html(HAML.services(this));
			$('#app').html(this.el);
			$('nav#main-nav a').removeClass('active');
			$('nav#main-nav a#services').addClass('active');
			
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