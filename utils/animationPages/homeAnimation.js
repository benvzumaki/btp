import { gsap, Power3 } from "gsap";

const homeTransitionEnterHandler = (delay) => {
    const titleEl = document.querySelector(".title-el")
    const subTitleEl = document.querySelector(".subtitle-el")
    const textHomeEl = document.querySelector(".text-home-el")
    const sosEl = document.querySelector(".sos-el")

    const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: Power3.easeOut },
    });

    tl.fromTo(titleEl, {
        x: 50,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        delay: delay
    })
    tl.fromTo(subTitleEl, {
        x: 50,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
    }, "<0")
    tl.fromTo(textHomeEl, {
        x: 50,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
    }, "<0.2")
    tl.fromTo(sosEl, {
        x: 50,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
    }, "<0")
}

const homeTransitionExitHandler = (link, router) => {
    const titleEl = document.querySelector(".title-el")
    const subTitleEl = document.querySelector(".subtitle-el")
    const textHomeEl = document.querySelector(".text-home-el")
    const sosEl = document.querySelector(".sos-el")
    const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: Power3.easeOut },
    });
    tl.to(titleEl, {
        x: -50,
        opacity: 0,
    })
    tl.to(subTitleEl, {
        x: -50,
        opacity: 0,
    }, "<0")
    tl.to(textHomeEl, {
        x: -50,
        opacity: 0,
    }, "<0.2")
    tl.to(sosEl, {
        x: -50,
        opacity: 0,
        onComplete: () => {
            router.push(link)
        }
    }, "<0")

}

export {
    homeTransitionEnterHandler,
    homeTransitionExitHandler
}