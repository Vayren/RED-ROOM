function switchBtnTheme() {
	let switchBtn = $('.switch_theme');
	isLigth = true;

	const lightPalette = {
		mainColor: '#d81a24',
		blackBcg: '#151515',
		lightBcg: '#f6f6f6',
		bcgImg: "url('../img/bg-img/bg-image-1.jpg')"
	}

	const darkPalette = {
		mainColor: '#1f86fc',
		blackBcg: '#010d30',
		lightBcg: '#dfe9fa',
		bcgImg: "url('../img/bg-img/bg-image-2.png')",
	}

	$(window).scroll(function (event) {
		if(window.pageYOffset > 750 && window.innerWidth >= 950){
			switchBtn.css('top', 150);
		}
		else switchBtn.css('top', -150);		
	});

	switchBtn.click(function (event) {
		if(isLigth){
			$(this).css('background-color', darkPalette.mainColor);
			getElements(darkPalette);
			switchBtn.html('light')

			$(this).hover(function(){
				$(this).css("background-color", lightPalette.mainColor);
				}, function(){
				$(this).css("background-color", darkPalette.mainColor);
			});

		} 
		else{
			$(this).css('background-color', lightPalette.mainColor);
			getElements(lightPalette);
			switchBtn.html('dark')
			$(this).hover(function(){
				$(this).css("background-color", darkPalette.mainColor);
				}, function(){
				$(this).css("background-color", lightPalette.mainColor);
			});

		} 
		isLigth = !isLigth;
	})

	function getElements(pallet) {
		$('.move-wrap, .coming-soon-block, footer').css('background-color', pallet.blackBcg);
		$('.movies-block, .serials-block, .news-block').css('background-color', pallet.lightBcg);
		$(`.btn-up, .active-btn, .navigation .active, .coming-soon-block .title hr,
			.box-wrap .title hr, .subscribe-content .title hr, form button`)
		.css('background-color', pallet.mainColor);
		$(`.rating i:not(:last-child), .navigation a:not(.active), .btn-view, 
			.movie-block .r-side ul a, .buy-movie a, .date`)
		.css('color', pallet.mainColor);
		$('.navigation a, .btn-view, .btn-wachlist, form button').css('border-color', pallet.mainColor);;

		$('.movie-block .r-side ul a, .buy-movie a').hover(function(){
			$(this).css({color: ''});
			}, function(){
			$(this).css({color: pallet.mainColor});
		});

		$('form button').hover(function(){
			$(this).css("background-color", '');
			}, function(){
			$(this).css("background-color", pallet.mainColor);
		});

		$('.btn-view').hover(function(){
			$(this).css({color: 'white', backgroundColor: pallet.mainColor});
			}, function(){
			$(this).css({color: pallet.mainColor,  backgroundColor: ''});
		});

		$(".navigation a:not(.active)").hover(function(){
			$(this).css({color: 'white', backgroundColor: pallet.mainColor});
			}, function(){
			$(this).css({color: pallet.mainColor,  backgroundColor: ''});
		});
		$(".header-navigation a, .tools a, .btn-wachlist").hover(function(){
			$(this).css("background-color", pallet.mainColor);
			}, function(){
			$(this).css("background-color", "");
		});

		$(`.hidenMenu a, .slide .description a, .post-info .title, .trailer-block .content-block ul a,
			.wrap-info h2 a, .post-content h2 a, .activity a, .shares a`)
		.hover(function(){
			$(this).css("color", pallet.mainColor);
			}, function(){
			$(this).css("color", "");
		});

		$('.header-content').css('background-image', pallet.bcgImg);
	}

}


switchBtnTheme();