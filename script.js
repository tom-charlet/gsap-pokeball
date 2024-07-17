window.addEventListener('load', () => {
    let wrapper = document.getElementById("wrapper");

    gsap.to("#pokeball-wrapper", {
        duration: 2,
        rotation: 360,
        repeat: -1,
        ease: "linear"
    })

    wrapper.addEventListener('click', () => {
        let tl = gsap.timeline();

        tl.to("#global-pokeball-wrapper", {
            yPercent: -50,
            duration: 0.5,
            ease: "circ.inOut"
        })

        tl.to("#global-pokeball-wrapper", {
            yPercent: 0,
            duration: 0.8,
            ease: "elastic.out"
        })

        tl.play()
    })

});