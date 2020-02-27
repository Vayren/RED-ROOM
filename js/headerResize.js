function headerResize() {
	let navBlock = document.querySelector('header nav');
	let toolsBlock = navBlock.querySelector('.tools');
	let navigationBlock = navBlock.querySelector('.header-navigation');
	let barsBlock = navBlock.querySelector('.bars');

	window.onresize = function () {
		if(document.body.offsetWidth <= 1024){
			toolsBlock.style.display = 'none';
			navigationBlock.style.display = 'none';
			barsBlock.style.display = 'block';
		}else{
			toolsBlock.style.display = 'block';
			navigationBlock.style.display = 'flex';
			barsBlock.style.display = 'none';
		}
	}
}	
headerResize();