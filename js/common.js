/**
 * AkaTek

 **/
"use strict";

import {Collapse} from "bootstrap";
import AOS from 'aos';
import svg4everybody from "svg4everybody";
import LazyLoad from "vanilla-lazyload";
import {drawNav, scrollToTop} from "./modules/nav";
import {preventDefault, setCurrentYear, hideCover} from "./modules/helpers";
import {initType, initCounterAnimation, animateUnderline} from "./modules/effects";
import drawAccordion from "./modules/accordion";
import {validate} from "./modules/forms";
import setYTFrame from "./modules/video";

document.addEventListener("DOMContentLoaded", () => {
    preventDefault();
    svg4everybody();
    const lazyload = new LazyLoad({
        repeat: true,
        smooth: true
    });
    AOS.init({
        offset: 30, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 650, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // animation repeat
    });
    drawNav();
    animateUnderline();
    initType();
    initCounterAnimation();
    drawAccordion();
    setCurrentYear();
    scrollToTop();
    validate();
    hideCover();
    setYTFrame();
})