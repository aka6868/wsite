/**
 * AkaTek
**/
"use strict";

// import {initSwiperSlider} from "./modules/slider";
// import setYTFrame from "./modules/video";

// document.addEventListener('DOMContentLoaded', () => {
//     initSwiperSlider('.chart_slider', '.chart_slider', {
//         effect: "coverflow",
//         centeredSlides: true,
//         autoplay: true,
//         speed: 700,
//         slidesPerView: "auto",
//         spaceBetween: 30,
//         initialSlide: 2,
//         coverflowEffect: {
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2,
//             slideShadows: false,
//         },
//         breakpoints: {
//             767.98: {
//                 spaceBetween: 0
//             }
//         }
//     })
// });

const navItems = document.querySelectorAll(".header_nav-list_item")
const headerNav = document.querySelector("#headerMenu")
navItems.forEach(e=>{
    e.addEventListener("click",e=>{
        headerNav.classList.remove("show")
        document.querySelector("html").classList.remove("fixed")
    })
});