import React from "react";
import { gsap, Power3 } from "gsap";
import menuNav from "../utils/menuNav";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import dynamic from "next/dynamic";
const DownloadPdfWithNoSrr = dynamic(() => import("./DownloadPdf"), {
  ssr: false,
});

const MobileNav = ({ pathName, linkClickHandler }) => {
  const closeMobileNav = () => {
    gsap.to(".mobile-nav-el", {
      transform: "translateX(-100vw)",
      duration: 0.5,
      ease: Power3.easeOut,
    });
  };
  return (
    <div className="mobile-nav-el lg:hidden translate-x-[-100vw] flex justify-center items-center bg-my-white dark:bg-my-black-dark fixed z-40 w-screen h-screen">
      <button
        onClick={closeMobileNav}
        className="absolute top-5 right-5 hover:text-my-primary"
      >
        <MdClose size={32} />
      </button>
      <ul className="list-mobile-nav-el font-my-font text-center flex flex-col gap-12 text-3xl font-bold capitalize">
        {menuNav.map((menu, i) => {
          return (
            <li
              key={i}
              className={`${
                menu.title === pathName && "text-my-primary"
              } hover:text-my-primary`}
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
        <li>
  <span
    className="text-2xl opacity-50 cursor-not-allowed select-none"
    onClick={() => alert("Resume tidak tersedia di versi mobile.")}
  >
    Resume
  </span>
</li>

      </ul>
    </div>
  );
};

export default MobileNav;
