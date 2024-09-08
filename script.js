const sliderItem = document.querySelectorAll('.slider-item');

let sliderActive = 1;

if(sliderItem) {
    sliderItem.forEach((slider, index) => {
        if (index === 0){
            slider.setAttribute("data-show", "show");
        } else {
            slider.setAttribute("data-show", "hidden");
        }
    })

    setInterval(() => {
       sliderItem.forEach((slider, index) => {
if(sliderActive === index){
    slider.setAttribute("data-show", "show");
} else {
    slider.setAttribute("data-show", "hidden");
}
       });
       
       if(sliderActive === sliderItem.length - 1) {
        sliderActive = 0;
       } else {
        sliderActive++;
       }

    }, 5000)
}
