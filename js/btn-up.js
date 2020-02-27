function btnUp() {
	let upBtn = $('.btn-up');	
	
	/*let upBtn1 = document.querySelector('.btn-up');
	upBtn1.onclick = function (event) {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}*/

	upBtn.click(function (event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:$('header').position().top}, 700);
	});

	$(window).resize(function (event) {
		if(window.innerWidth < 950) upBtn.hide();
	})
	$(window).scroll(function (event) {
		if(window.pageYOffset > 700 && window.innerWidth >= 950){
			upBtn.show();
		}else upBtn.hide();
	});
}
btnUp();