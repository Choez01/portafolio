import darkTheme from "./main/dark.js";
import menu from "./main/menu.js";
import scrollBtn from "./main/boton_scroll.js";
import social from "./main/social_media.js";
import card from "./main/card.js";
import navObserve from "./main/observer_nav.js";
import navScroll from "./main/scroll_nav.js";
const d = document;

d.addEventListener("DOMContentLoaded",e=>{
    menu(".navbar_toggle",".nav-links");
    scrollBtn(".scroll-top-btn");
    social(".fa-instagram",".fa-twitter",".fa-linkedin",".fa-github");
    card();
    navObserve();
});
navScroll(".header",".dark",".moon",".fa-moon");
darkTheme(".dark",".sun", ".moon"); 
