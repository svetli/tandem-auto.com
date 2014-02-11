(function() {
	window.App = {
		Views: {},
		Controllers: {},
		Models: {},
		Collections: {},
		initialize: function() {
			this.controller = new App.Controllers.TandemAuto();
			return Backbone.history.start();
		}
	};
	jQuery(function($){
		$('html').removeClass('no-js');
		App.initialize();
	});
}).call(this);