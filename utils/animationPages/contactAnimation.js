
import { gsap, Power3 } from "gsap";
import { Router } from "next/router";

const contactTransitionEnterHandler = (delay) => {
    const titleContact = document.querySelector(".title-contact-el")
    const textContact = document.querySelector(".text-contact-el")
    const mapContact = document.querySelector(".map-contact-el")

    const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: Power3.easeOut },
    });

    tl.fromTo(
        titleContact,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, delay: delay },
    );

    tl.fromTo(
        textContact,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1 },
        "<0.2"
    );

    tl.fromTo(
        mapContact,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1 },
        "<0.2"
    );
}

const contactTransitionExitHandler = (link, router) => {
    const titleContact = document.querySelector(".title-contact-el")
    const textContact = document.querySelector(".text-contact-el")
    const mapContact = document.querySelector(".map-contact-el")

    const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: Power3.easeOut },
    });

    tl.to(
        titleContact,
        { x: -50, opacity: 0 },
    );

    tl.to(
        textContact,
        { x: -50, opacity: 0 },
        "<0.2"
    );

    tl.to(
        mapContact,
        {
            x: -50, opacity: 0, onComplete: () => {
                router.push(link)
            }
        },
        "<0.2"
    );
}

export {
    contactTransitionEnterHandler,
    contactTransitionExitHandler
}