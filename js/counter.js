window.onload = function () {
	// Yandex.Metrika counter
	(function (m, e, t, r, i, k, a) {
		m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
		m[i].l = 1 * new Date();
		for (var j = 0; j < document.scripts.length; j++) {
			if (document.scripts[j].src === r) { return; }
		}
		k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
	})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

	ym(50176366, "init", {
		clickmap: true,
		trackLinks: true,
		accurateTrackBounce: true
	});

	// Динамическая загрузка Yandex Maps
	const script = document.createElement('script');
	script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5ab2f7312b7a3039301556032bd30119b957c41bb42e723637d793155cce053d&width=100%25&height=400&lang=ru_RU&scroll=true';
	const yandexMapContainer = document.querySelector('.yandex-map');
	if (yandexMapContainer) {
		yandexMapContainer.appendChild(script);
	} else {
		document.head.appendChild(script);
	}
};

