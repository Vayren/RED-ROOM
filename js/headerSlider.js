function headerSlider() {
	let listOfSlides = document.querySelector('.slides ul');
	let dots = document.querySelectorAll('.dot');
	let currentDot = document.querySelector('.dot.dot-active');
	let listWidth = listOfSlides.offsetWidth;
	let count = 1;

	function sliderFlow() {
		if(count < 3){
			listOfSlides.style.marginLeft = -listWidth * count + 'px';
			currentDot.classList.remove('dot-active');
			dots[count].classList.add('dot-active');
			currentDot = dots[count];
			count++;
		}else{
			currentDot.classList.remove('dot-active');
			dots[0].classList.add('dot-active');
			currentDot = dots[0];
			count = 1;
			listOfSlides.style.marginLeft = 0 + 'px';
		}
	}

	function switchSlides(count) {
		listOfSlides.style.marginLeft = -listWidth * count + 'px';
		currentDot.classList.remove('dot-active');
		dots[count].classList.add('dot-active');
		currentDot = dots[count];
	}

	function dotClick() {
		document.querySelector('.dots').onclick = function (event) {
			let target = event.target;
			if(target.tagName === 'SPAN'){
				clearInterval(timer);
				count = target.dataset.item;
				switchSlides(count - 1);
				timer = setInterval(() => sliderFlow(), 2000);
			}
		}
	}

	let timer = setInterval(() => sliderFlow(),  2000);
	dotClick();
}
headerSlider();

