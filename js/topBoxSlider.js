function topBoxSlider() {
    let list = $('.top-posts ul');
    function sliderFlow () {
        let sliders = list.children();
        let slideWidth = sliders.first().innerWidth();
        list.animate({marginLeft: -slideWidth}, 500, function  () {
            list.css("margin-left", 0);
            list.append(sliders.first());
        })
    }
    let timer = setInterval(() => sliderFlow(), 2000)
}
topBoxSlider();