(function() {
	if(window.HAML == null) window.HAML = {};
	window.HAML['index'] = function(context) {
		return (function(context) {
			var $o = [];
			$o.push("<section class='append' id='content'>\n");
			$o.push("<figure><figcaption>\n");
			$o.push("<img src='images/home.jpg' id='largeImage' width='850' height='350' alt='Тандем Ауто - Транспорт на Автомобили'>");
			$o.push("</figcaption></figure>\n");
			$o.push("<div class='services' id='services'><ul>\n");
			$o.push("<li><h3>За Нас</h3><p><p>Тандем Ауто е частна транспортна компания, специализирана в международния превоз на автомобили, посредством автовози.</p><p>Фирмата притежава сертификат за управление на качеството в съответствие с изискванията на стандарта EN ISO 9001:2008 и Лиценз от Европейската Икономическа Общност за международен автомобилен превоз на товари срещу заплащане.</p>");
			$o.push("<figure><figcaption><a href='gallery/lic_01.jpg' class='swap'><img src='gallery/lic_01_thumb.jpg' width='120' height='49' alt='Лиценз 01'></a><a href='gallery/lic_02.jpg' class='swap'><img src='gallery/lic_02_thumb.jpg' width='120' height='49' alt='Лиценз 02'></a></figcaption></figure>\n");
			$o.push("</p></li>\n");
			$o.push("<li><h3>Автопарк</h3><p><p>Тандем Ауто притежава автовози за 3, 4, 5, 9 и 10 автомобила. Всички автовози отговарят на европейските стандарти за отделяне на вредни емисии Euro 3 и Euro 5 като се работи постоянно в насока подобряване на автопарка.</p></p></li>\n");
			$o.push("</ul></div>\n");
			$o.push("</section>\n");
			return $o.join("\n");
		}).call(context);
	};
}).call(this);

(function() {
	if(window.HAML == null) window.HAML = {};
	window.HAML['contacts'] = function(context) {
		return (function() {
			var $o = [];
			$o.push("<section class='append' id='content'>\n");
			$o.push("<div id='contact'>\n <div id='map'>");
			$o.push("<iframe id='maps-frame' width='850' height='350' frameborder='0' scrolling='no' marginwidth='0' marginheight='0' src='https://maps.google.bg/maps?q=loc:42.282143,22.722344+(TandemAuto)&hl=bg&z=14&amp;output=embed'></iframe>");
			$o.push("</div> \n <ul>");
			$o.push("<li><h3>Контакти</h3><p>гр. Кюстендил, ул. Дупнишко шосе <br /> моб. 00359 893 300 976 <br /> моб. 00359 897 768 321 <br/> моб. 00359 898 554 455 <br /> e-mail: <a href='mailto:ibntandem@mail.bg'>ibntandem@mail.bg</a></p></li>");
			$o.push("<li class='last'><h3>Обратна връзка</h3><div id='request'> \n <form class='nice-form' action='/contacts' method='post'>\n <ul>\n <li>\n <input type='text' name='name' placeholder='Име'>\n </li>\n <li>\n <input type='text' name='email' placeholder='Email'>\n </li>\n <li>\n <input type='text' name='phone' placeholder='Телефон'>\n </li>\n <li>\n <input type='text' name='request_subject' placeholder='Относно'>\n </li>\n <li>\n <textarea name='text' placeholder='Запитване...'></textarea>\n </li>\n <li>\n <input type='submit' value='Изпрати'>\n </li>\n </ul>\n </form>\n <div class='status'></div>\n</div></li>");
			$o.push("</ul> \n </div> \n </section>");
			return $o.join("\n");
		}).call(context);
	};
}).call(this);

(function() {
	if(window.HAML == null) window.HAML = {};
	window.HAML['calculator'] = function(context) {
		return (function() {
			var $o = [];
			$o.push("<section class='append' id='content'>\n");
			$o.push("<figure><figcaption>\n");
			$o.push("<img src='images/calculator.png' alt='Калкулатор' width='850' height='250' />");
			$o.push("</figcaption></figure>\n");
			$o.push("<div id='directions'>\n <ul>");
			$o.push("<li><h3>Въведи начална точка</h3><input type='text' id='origin' placeholder='Пример: Рим, Италия' /></li>");
			$o.push("<li><h3>Въведи крайна точка</h3><input type='text' id='dest' placeholder='Пример: София, България' /></li>");
			$o.push("</ul>\n <input type='button' id='calculate' value='Пресметни'></div>\n");
			$o.push("<div id='distance_result'></div>");
			$o.push("</section>\n");
			return $o.join("\n");
		}).call(context);	
	};
}).call(this);

(function() {
	if(window.HAML == null) window.HAML = {};
	window.HAML['services'] = function(context) {
		return (function() {
			var $o = [];
			$o.push("<section class='append' id='content'>\n");
			$o.push("<figure><figcaption>\n");
			$o.push("<img src='images/services.jpg' alt='Услуги' width='850' height='350' />");
			$o.push("</figcaption></figure>\n");
			$o.push("<div class='services'>\n <ul><li><h3>Услуги</h3><ul>");
			$o.push("<li>Транспорт на нови и употребявани автомобили с автовози от и към Македония, Косово, Република Сърбия, Италия както и във всички страни от Западна Европа</li>");
			$o.push("<li>Доставка на автомобили на собствен ход</li>");
			$o.push("<li>Бордови автомобили (превоз на товари)</li>");
			$o.push("<li>Сервиз с висококвалифицирани механици</li>");
			$o.push("</ul></li></ul>\n </div>\n");
			$o.push("</section>\n");
			return $o.join("\n");
		}).call(context);
	}
}).call(this);

(function() {
	if(window.HAML == null) window.HAML = {};
	window.HAML['gallery'] = function(context) {
		return (function() {
			var i,len;
			var $o = [];
			$o.push("<section class='append' id='content'>\n");
			$o.push("<figure><figcaption><img src='images/gallery.jpg' id='largeImage' width='850' height='350'></figcaption></figure>");
			$o.push("<div class='gallery' id='gallery'>\n");
			this.images.each(function(image){
				$o.push("<h3>"+image.get('title')+"</h3>");
				var items = image.get('images');
				var i, len, img;
				for (i=0, len=items.length; i<len; i++) {
					img = items[i];
					$o.push("<a href='"+img.image_large+"' class='swap'><img src='"+img.image_small+"' alt='"+img.title+"'></a>");
				}
			});
			$o.push("</div>\n");
			$o.push("</section>\n");
			return $o.join("\n");
		}).call(context);
	}
}).call(this);