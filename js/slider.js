let index = 0;
let i;

const showSlider = () => {
    const sliderItems = document.querySelectorAll('.header__slider__item');

    for(const item of sliderItems) {
        item.style.display = 'none';
    }
   
    index++;
    if(index > sliderItems.length) {
        index = 1;
    }

    sliderItems[index - 1].style.display = "flex";

    setTimeout(showSlider, 3000);
}

showSlider();