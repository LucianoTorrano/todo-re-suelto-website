/* PAGINA PRINCIPAL GSAP ANIMATION */

let tl1 = gsap.timeline({defaults:{duration:.8, ease: Power2.easeOut, opacity:0}});

tl1.from('.hero-title',{delay:.2})
    .from('.hero-subtitle',{},'-=.3')
    .from('.button-container',{},'-=.3')
    .from('.hero-right',{duration:1});

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".about",
        ease: Power2.easeOut,
        start: "top bottom"
    }
});

    tl2.from('.about-circle',{opacity:0,duration:1.5})
        .from('.gsap-about-us-top',{opacity:0,duration:1},'+.3')

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".about-history",
        ease: Power2.easeOut,
        start: "top bottom"
    }
});

    tl3.from('.gsap-about-us-history',{opacity:0,duration:1})

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".contact",
        ease: Power2.easeOut,
        start: "top bottom"
    }
});
    
    tl4.from('.contact-container',{opacity:0,duration:1})