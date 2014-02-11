(function(){
	
	var __bind = function(fn, me) {
		return function() {
			return fn.apply(me, arguments);
		};
	};
	
	window.App.Controllers.TandemAuto = Backbone.Router.extend({
		
		routes: {
			"!/services" 	: "services",
			"!/calculator"	: "calculator",
			"!/contacts"	: "contacts",
			"!/gallery"		: "gallery",
			""				: "index",
			"*path"			: "catchall"
		},
		
		initialize: function() {
			// dummy constructor
		},
		
		index: function() {
			new App.Views.Index();
		},
		
		services: function() {
			new App.Views.Services();	
		},
		
		calculator: function() {
			new App.Views.Calculator();	
		},
		
		contacts: function() {
			new App.Views.Contact();
		},
		
		gallery: function() {
			this.load_images(__bind(function(){
				new App.Views.Gallery({
					images:this.images
				});
			}, this));
		},
		
		load_images: function(callback) {
			if (this.images == null) {
				this.images = new App.Collections.Gallery();
				this.images.fetch({
					success: __bind(function() {
						return callback();
					}, this),
					error: __bind(function() {
						return console.log("can't load gallery images");
					}, this)
				});
			} else {
				callback();
			}
		},
		
		catchall: function() {
			console.log('undefined route');
		}
	});
	
}).call(this);