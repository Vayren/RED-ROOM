function headerResize(selector) {
	let navBlock = document.querySelector(`${selector}`);
	let toolsBlock = navBlock.querySelector('.tools');
	let navigationBlock = navBlock.querySelector('.header-navigation');
	let barsBlock = navBlock.querySelector('.bars');

	window.addEventListener('resize', function resize() {
			if(document.body.offsetWidth <= 1024){
				toolsBlock.style.display = 'none';
				navigationBlock.style.display = 'none';
				barsBlock.style.display = 'block';
			}else{
				toolsBlock.style.display = 'block';
				navigationBlock.style.display = 'flex';
				barsBlock.style.display = 'none';
			}
		});	
	}	
headerResize('header .main-nav');
headerResize('.main-nav.move');

