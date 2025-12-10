import { useEffect, useState, useRef } from "react";
import { gsap, Power3 } from "gsap";
import Link from "next/link";
import menuNav from "../utils/menuNav";
import ToggleDarkMode from "./ToggleDarkMode";
import { MdMenu } from "react-icons/md";

const Header = ({ pathName, linkClickHandler }) => {
  const ulRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [isShadow, setIsShadow] = useState(false);

  let lastScrollTop,
    currentScrollTop = 0;

  const scrollUpDownHandler = () => {
    let wTop = document.documentElement.scrollTop;
    currentScrollTop = wTop;
    if (lastScrollTop < currentScrollTop && wTop > 20) {
      setIsDown(true);
      setIsShadow(true);
    } else if (lastScrollTop > currentScrollTop && !(wTop <= 10)) {
      setIsDown(false);
    } else if (wTop === 0) {
      setIsShadow(false);
    }
    lastScrollTop = currentScrollTop;
  };

  const showMobileNav = () => {
    const listNav = document.querySelector(".list-mobile-nav-el");
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: Power3.easeOut },
    });
    tl.to(".mobile-nav-el", { x: 0, duration: 0.5, ease: Power3.easeOut });
    Array.from(listNav.children).forEach((li) => {
      tl.fromTo(li, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, "<0.2");
    });
  };

  useEffect(() => {
    if (isDown) {
      gsap.to(".header-el", { y: -120, duration: 0.5, ease: Power3.easeOut });
    } else {
      gsap.to(".header-el", { y: 0, duration: 0.5, ease: Power3.easeOut });
    }
  }, [isDown]);

  useEffect(() => {
    window.addEventListener("scroll", scrollUpDownHandler);
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: Power3.easeOut },
    });
    if (window.screen.width > 1024) {
      // 768
      tl.to(".logo-el", { y: 0, opacity: 1, delay: 2.5 });
      Array.from(ulRef.current.children).forEach((li) => {
        tl.to(li, { y: 0, opacity: 1 }, "<0.2");
      });
      tl.to(".btn-cv-el", { y: 0, opacity: 1 }, "<0.2");
    } else {
      tl.fromTo(
        ".btn-menu-el",
        { y: -48, opacity: 0 },
        { y: 0, opacity: 1, delay: 2.5 }
      );
      tl.to(".logo-el", { y: 0, opacity: 1 }, "<0.2");
      tl.to(".btn-cv-el", { y: 0, opacity: 1 }, "<0.2");
    }
  }, []);
  return (
    <header
      className={`${
        isShadow && "drop-shadow"
      } header-el fixed left-0 right-0 top-0 h-[10vh] lg:h-[15vh] flex justify-between lg:justify-between items-center px-5 lg:px-20 z-10 bg-white dark:bg-my-black transition-all duration-300 ease-out`}
    >
      <button
        onClick={showMobileNav}
        className="btn-menu-el lg:hidden hover:text-my-primary"
      >
        <MdMenu size={32} />
      </button>
      <nav className="flex items-center font-bold">
        <div className="lg:mr-16">
          <a
            className="cursor-pointer"
            onClick={(e) => {
              linkClickHandler(e, "/");
            }}
          >
            <div
  className="logo-el opacity-0 text-[4rem] text-my-black dark:text-white hover:text-my-primary transition-all duration-300 ease-out cursor-pointer select-none flex items-center"
  onClick={(e) => {
    linkClickHandler(e, "/");
  }}
  style={{
    fontFamily: "'Baksoda', cursive",
    letterSpacing: "-3px",
    lineHeight: "1",
    transform: "translateY(0)", // pastikan posisi rata tengah
  }}
>
  ban
</div>



          </a>
        </div>
        <ul
          ref={ulRef}
          className="hidden lg:flex items-center text-base capitalize gap-4 font-my-font"
        >
          {menuNav.map((menu, i) => {
            return (
              <li
                key={i}
                className={`${
                  menu.title === pathName && "text-my-primary"
                } -translate-y-12 opacity-0 inline-block hover:text-my-primary transition-all duration-500 ease-out`}
              >
                <a
                  className="cursor-pointer"
                  onClick={(e) => {
                    linkClickHandler(e, menu.link);
                  }}
                >
                  {menu.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="btn-cv-el -translate-y-12 opacity-0 flex items-center gap-3">
        <Link
  href="#"
  onClick={(e) => {
    e.preventDefault();
    alert("Resume ini bersifat private dan tidak dapat diakses publik.");
  }}
  className="hidden lg:block font-my-font font-bold text-sm bg-transparent border-2 border-my-black dark:border-white 
             hover:border-my-primary dark:hover:border-my-primary hover:text-my-primary 
             px-4 py-2 rounded-3xl transition-all duration-500 ease-out"
>
  Resume
</Link>


        <ToggleDarkMode />
      </div>
    </header>
  );
};

export default Header;
