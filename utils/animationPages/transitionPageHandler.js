import {
  homeTransitionEnterHandler,
  homeTransitionExitHandler,
} from "./homeAnimation";
import { gsap, Power3 } from "gsap";
import {
  aboutTransitionEnterHandler,
  aboutTransitionExitHandler,
} from "./aboutAnimation";
import {
  projectsTransitionEnterHandler,
  projectsTransitionExitHandler,
} from "./projectsAnimation";
import {
  contactTransitionEnterHandler,
  contactTransitionExitHandler,
} from "./contactAnimation";

const transitionPageHandler = ({
  el,
  status,
  delay = 0,
  link = null,
  router = null,
}) => {
  switch (el) {
    case "home":
      if (status === "enter") {
        homeTransitionEnterHandler(delay);
      } else if (status === "exit") {
        homeTransitionExitHandler(link, router);
      }
      break;

    case "about":
      if (status === "enter") {
        aboutTransitionEnterHandler(delay);
      } else if (status === "exit") {
        aboutTransitionExitHandler(link, router);
      }
      break;

    case "projects":
      if (status === "enter") {
        projectsTransitionEnterHandler(delay);
      } else if (status === "exit") {
        projectsTransitionExitHandler(link, router);
      }
      break;

    case "contact":
      if (status === "enter") {
        contactTransitionEnterHandler(delay);
      } else {
        contactTransitionExitHandler(link, router);
      }
      break;

    default:
      break;
  }

  if (status === "exit") {
    gsap.to(".mobile-nav-el", {
      transform: "translateX(-100vw)",
      duration: 0.5,
      ease: Power3.easeOut,
    });
  }
};

export default transitionPageHandler;
