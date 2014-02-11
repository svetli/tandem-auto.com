(function() {
	window.App.Views.Calculator = Backbone.View.extend({
		events: {
			"click #calculate" : "calculate"	
		},
	
		initialize: function(params) {
			this.render();
			return this;
		},
		render: function() {
			$(this.el).html(HAML.calculator(this));
			$('#app').html(this.el);
			
			$('nav#main-nav a').removeClass('active');
			$('nav#main-nav a#calculator').addClass('active');
			
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
		},
		
		calculate: function(evt) {
			var origin = document.getElementById('origin').value;
			var destination = document.getElementById('dest').value;
			var service = new google.maps.DistanceMatrixService();
			
			service.getDistanceMatrix({
				origins: [origin],
				destinations: [destination],
				travelMode: google.maps.TravelMode.DRIVING,
				avoidHighways: false,
				avoidTolls: false
			}, function(response, status){
				if(status == google.maps.DistanceMatrixStatus.OK) {
					var origins = response.originAddresses;
          			var destinations = response.destinationAddresses;
          			var outputDiv = document.getElementById('distance_result');
          			outputDiv.innerHTML = '';
          			for (var i = 0; i < origins.length; i++) {
          				var results = response.rows[i].elements;
          				for (var j = 0; j < results.length; j++) {
          					outputDiv.innerHTML += "<p><span>Начална точка:</span> " + origins[i] + " "
          										+ "<span>Крайна точка:</span> " + destinations[j] + " "
												+ "<span>Разстояние:</span> " + results[j].distance.text + " "
                  								+ "<span>Приблизително време за изминаване:</span> " + results[j].duration.text + "</p>";
          				}
          			}
				} else {
					alert('Distance matrix was not successful for the following reason: ' + status);
				}
			});
		}
	});
}).call(this);