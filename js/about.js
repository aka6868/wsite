/**
 * AkaTek

 **/
"use strict";

import initGallery from "./modules/gallery";
import {initDestroySwiper, initSwiperSlider} from "./modules/slider";

document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initSwiperSlider('.page_slider', '.page_slider-controls', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        speed: 1500,
        breakpoints: {
            767.98: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991.98: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1199.98: {
                slidesPerView: 2,
                spaceBetween: 50,
            }
        }
    })
    initDestroySwiper('.recent_posts','.recent_controls');
})