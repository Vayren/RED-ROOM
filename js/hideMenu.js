function hideMenu(selector) {
	let menu = $(`${selector} .hidenMenu`);
	let showMenu = $(`${selector} .showMenu`);
	let coords = showMenu.position();
	let isOnMenu = false;
	let timer;
	menu.css({top: coords.top + showMenu.innerHeight() + 70, left: coords.left - 25 });

	showMenu.click(function (event) {
		event.preventDefault();
	})

	showMenu.mouseenter(function (event) {
		clearTimeout(timer);
		menu.stop();
		menu.css({display: 'block'})
		menu.animate({opacity: 1, top: coords.top + showMenu.innerHeight() + 25}, 200);
	})

	showMenu.mouseleave(function (event) {
		clearTimeout(timer)
		timer = setTimeout(() => {
			if(!isOnMenu){
				menu.animate({opacity: 0, top: coords.top + showMenu.innerHeight() + 70}, 200, function () {
					menu.css({display: 'none'});
				});
			}
		}, 500);
	})

	menu.mouseenter(function (event) {
		clearTimeout(timer);
		isOnMenu = true;
	})

	menu.mouseleave(function(event) {
		isOnMenu = false;
		timer = setTimeout(() => {
			menu.animate({opacity: 0, top: coords.top + showMenu.innerHeight() + 70}, 200, function () {
				menu.css({ display: 'none'});
			});
		}, 500);
	})
}
hideMenu(".move-wrap");
hideMenu(".header-content");