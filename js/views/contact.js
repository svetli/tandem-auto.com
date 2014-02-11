(function() {
	window.App.Views.Contact = Backbone.View.extend({
		initialize: function(params) {
			this.render();
			return this;	
		},
		render: function() {
			$(this.el).html(HAML.contacts(this));
			$('#app').html(this.el);
			$('nav#main-nav a').removeClass('active');
			$('nav#main-nav a#contacts').addClass('active');
			
			$(this.el).find('form').submit(function(event) {
				event.preventDefault();
				
				$(this).find('input[type=submit]').attr('disabled', 'disabled');
				$('#request .status').html('');
				$(this).find('input, textarea').removeClass('error');
				
				var missingInputs = [];
				if (!($(this).find('input[name=phone]').val() || $(this).find('input[name=email]').val())) {
					missingInputs.push($(this).find('input[name=phone]'));
					missingInputs.push($(this).find('input[name=email]'));
				}
				
				if (!$(this).find('textarea').val()) {
					missingInputs.push($(this).find('textarea'));
				}
				
				if (!missingInputs.length) {
					$(this).find('input, textarea').removeClass('error');
					$('#request .status').html('Моля изчакайте ...');
					$.ajax({
						url: '/request',
						type: 'POST',
						data: $(this).serialize(),
						success: function() {
							$('#request input[type=submit]').attr('disabled', null);
							$('#request .status').html('Благодарим Ви че се свързахте с нас.');
							return $('#request form input[type=text], #request form textarea').val(null);
						},
						error: function() {
							$('#request input[type=submit]').attr('disabled', null);
							return $('#request .status').html('Вашето запитване не беше изпратено. Моля опитайте по-късно.');
						}
					});
				} else {
					$('#request .status').html("Моля въведете необходимите данни.");
					$(this).find('input[type=submit]').attr('disabled', null);
					for (_i = 0, _len = missingInputs.length; _i < _len; _i++) {
						missing = missingInputs[_i];
						missing.addClass('error');
					}
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