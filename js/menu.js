const tll = new TimelineMax({ paused: true });


tll.to(".menu-left", 1, {
    left: 0,
    ease: Expo.easeInOut,
});

tll.to(
    ".menu-right",
    1,
    {
        left:'50vw',
        ease: Expo.easeInOut,
    },
    "-=1"
);

tll.staggerFrom(
    ".menu-links > div",
    0.8,
    {
        y: 100,
        opacity: 0,
        ease: Expo.easeOut,
    },
    "0.1",
    "-=0.4"
);

tll.staggerFrom(
    ".mail > div, .socials > a",
    0.8,
    {
        y: 100,
        opacity: 0,
        ease: Expo.easeOut,
    },
    "0.1",
    "-=1"
);

tll.from(
    ".menu-close",
    1,
    {
        scale: 0,
        opacity: 1,
        ease: Expo.easeInOut,
    },
    "-=1"
);

tll.reverse();

let menuOpen = document.querySelector('.menu-open');
let menuClose = document.querySelector('.menu-close');
let menuLink = document.querySelectorAll('.menu-link');

menuOpen.addEventListener('click',()=>{
    console.log('clicked');
    tll.reversed(!tll.reversed());
});
menuClose.addEventListener('click',()=>{
    tll.reversed(!tll.reversed());
});

menuLink.forEach(link =>{

    link.addEventListener('click',()=>{
        console.log('clicked');
        tll.reverse();
    });
})
// $(document).on("click", ".menu-open", function () {
//     tl.reversed(!tl.reversed());
// });
// $(document).on("click", ".menu-close", function () {
//     tl.reversed(!tl.reversed());
// });