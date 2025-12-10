
import { gsap, Power3 } from "gsap";
import { Router } from "next/router";

const aboutTransitionEnterHandler = (delay) => {
    const titleAbout = document.querySelector(".title-about-el")
    const textAbout = document.querySelector(".text-about-el")
    const imgAbout = document.querySelector(".img-about-el")

    const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: Power3.easeOut },
    });

    tl.fromTo(
        titleAbout,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, delay: delay },
    );

    tl.fromTo(
        textAbout,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1 },
        "<0.2"
    );

    tl.fromTo(
        imgAbout,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1 },
        "<0.2"
    );
}

const aboutTransitionExitHandler = (link, router) => {
    const titleAbout = document.querySelector(".title-about-el")
    const textAbout = document.querySelector(".text-about-el")
    const imgAbout = document.querySelector(".img-about-el")

    const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: Power3.easeOut },
    });

    tl.to(
        titleAbout,
        { x: -50, opacity: 0 },
    );

    tl.to(
        textAbout,
        { x: -50, opacity: 0 },
        "<0.2"
    );

    tl.to(
        imgAbout,
        {
            x: -50, opacity: 0, onComplete: () => {
                router.push(link)
            }
        },
        "<0.2"
    );
}

export {
    aboutTransitionEnterHandler,
    aboutTransitionExitHandler
}