function hideHeader() {
	$('.arrow-down').click(function (event) {
		$('html, body').animate({scrollTop:$('.movies-block').position().top}, 800);
	});
	$(window).resize(function () {
		if($('.header-content').outerHeight()  <= 820) $('.arrow-down').hide();
		else $('.arrow-down').show();
	})
}
hideHeader();
