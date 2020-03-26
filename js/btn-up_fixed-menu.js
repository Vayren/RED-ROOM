function btnUpFixedMenu() {
	let upBtn = $('.btn-up');	
	let fixedMenu = $('.move-wrap');
	fixedMenu.css('top', fixedMenu.outerHeight() * -1);

	upBtn.click(function (event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:$('header').position().top}, 700);
	});

	$(window).resize(function (event) {
		if(window.innerWidth < 950) upBtn.hide();
	})
	$(window).scroll(function (event) {

		if(window.pageYOffset > 700 && window.innerWidth >= 950){
			upBtn.css('bottom', 50);
		}
		else upBtn.css('bottom', -150);

		if(window.pageYOffset > 300){
			fixedMenu.css('top', 0);
		}
		else{
			fixedMenu.css('top', fixedMenu.outerHeight() * -1);
		}
	});
}
btnUpFixedMenu();