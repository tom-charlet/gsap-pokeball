window.addEventListener('load', () => {
    let wrapper = document.getElementById("wrapper");

    // TweenLite.set("#global-pokeball-wrapper", {
    //     transformOrigin: "50% 100%",
    //     yPercent: 0,
    // });

    gsap.to("#pokeball-wrapper", {
        duration: 1.4,
        rotation: 360,
        repeat: -1,
        ease: "linear"
    })

    gsap.timeline({ repeat: -1 })
        .to("#global-pokeball-wrapper", {
            yPercent: -100,
            duration: 0.5,
            ease: "circ.out"
        })
        .to("#global-pokeball-wrapper", {
            yPercent: 10,
            duration: 0.5,
            ease: "circ.in"
        })
        .to("#global-pokeball-wrapper", {
            scaleY: 1.5,
            duration: 0.4,
            ease: "circ.in"
        }, "<+=0.2")
        .to("#global-pokeball-wrapper", {
            scaleY: 0.6,
            duration: 0.1,
            ease: "circ.out"
        }, "<+=0.3")
});