(function(){
	window.App.Collections.Gallery = Backbone.Collection.extend({
		model: window.App.Models.GalleryItem,
		url:"json/gallery.json"
	});
}).call(this);