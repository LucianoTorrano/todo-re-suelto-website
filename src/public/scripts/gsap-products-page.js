/* PAGINA DE PRODUCTOS GSAP ANIMATION */

let tl5 = gsap.timeline({defaults:{duration:1, ease: Power2.easeOut, opacity:0}});

    tl5.from('.product-info-container',{scaleY:0,transformOrigin:'top'})
        .from('.title',{},'-=.2')
        .from('.product-text',{},'-=.7')
        .from('.back-home-button',{},'-=.7')
        .from('.gsap-list',{},'-=.9')