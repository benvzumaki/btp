import { useEffect, useState, useRef } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useRouter } from "next/router";
import MobileNav from "./MobileNav";
import Splas from "./Splas";
import Header from "./Header";
import Footer from "./Footer";
import transitionPageHandler from "../utils/animationPages/transitionPageHandler";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Layout = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [namePath, setNamePath] = useState("");
  const router = useRouter();
  const mainRef = useRef(null);

  const onPageEnter = (node) => {
    transitionPageHandler({
      el: mainRef.current.firstChild.id,
      status: "enter",
      delay: 0,
    });
  };

  const linkClickHandler = (event, link) => {

    if (router.pathname !== link) {
      if (router.pathname === "/_error") {
        router.replace(link);
      }
      transitionPageHandler({
        el: mainRef.current.firstChild.id,
        status: "exit",
        link: link,
        router: router,
      });
    }
  };

  useEffect(() => {
    if (window.screen.width > 1024) {
      transitionPageHandler({
        el: mainRef.current.firstChild.id,
        status: "enter",
        delay: 3.8,
      });
    } else {
      transitionPageHandler({
        el: mainRef.current.firstChild.id,
        status: "enter",
        delay: 3.2,
      });
    }
  }, []);

  useEffect(() => {
    const pathName = router.pathname.replace("/", "") || "home";
    setNamePath(pathName);
  }, [router]);

  return (
    <>
      <Splas />
      <MobileNav pathName={namePath} linkClickHandler={linkClickHandler} />
      <Header pathName={namePath} linkClickHandler={linkClickHandler} />
      <div className="relative">
        <SwitchTransition>
          <Transition
            key={router.pathname}
            timeout={0}
            in={true}
            onEnter={onPageEnter}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <main
              ref={mainRef}
              className="pt-[10vh] lg:pt-[15vh] min-h-screen px-6 lg:px-20 relative overflow-hidden"
            >
              {children}
            </main>
          </Transition>
        </SwitchTransition>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
