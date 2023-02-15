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

function disableFixed () {
    document.querySelector("html").classList.remove("fixed")
    document.querySelector("header").classList.remove("opened")
}

function handleRotateButton() {
    let btn = document.querySelector(".header_trigger")
    let icon = btn.querySelector(".icon")
    icon.style.transform = 'rotate(130deg)'
    btn.ariaExpanded = btn.ariaExpanded === "true"?"false":"true" 
}

function handleMenu() {
    const navItems = document.querySelectorAll(".header_nav-list_item")
    const headerNav = document.querySelector("#headerMenu")

    let btn = document.querySelector(".header_trigger")


    if(document.querySelector("header").classList.contains("opened")) {
        document.querySelector("header").classList.remove("opened")
    }

    btn.addEventListener("click", e => {
        let icon = btn.querySelector(".icon")
        if (btn.ariaExpanded == "false") {
            icon.style.transform = 'rotate(130deg)'
        } else icon.style.transform = 'rotate(220deg)'
    })

    document.querySelector(".header_nav-list_btn").addEventListener("click", e=> {
        headerNav.classList.remove("show");
        document.querySelector("header").classList.remove("opened")
        disableFixed()
        handleRotateButton()
    })

    navItems.forEach(e => {
        e.addEventListener("click", e => {
            headerNav.classList.remove("show");
            document.querySelector("header").classList.remove("opened")
            disableFixed()
            handleRotateButton()
        })
    });
}

handleMenu()