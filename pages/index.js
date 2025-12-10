import { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

const HomePage = () => {
  useEffect(() => {}, []);
  return (
    <div id="home">
      <div className="absolute px-6 lg:px-20 w-full lg:w-1/2 text-center top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="title-el opacity-0 text-7xl font-black">
          <span className="inline-block  ">I`m</span>
          <span className="inline-block text-my-primary">&nbsp;Banny</span>
        </h1>
        <h2 className="subtitle-el opacity-0 tracking-[0.15rem] text-2xl font-semibold text-my-black-light dark:text-my-white">
          Coding Is <s>Not</s> My Hobby
        </h2>
        <div className="text-home-el text-sm opacity-0 mt-2 text-my-black-light dark:text-my-white">
          <p>
            Saya adalah <s>bukan</s>  seorang programmer. Saya suka mempelajari sesuatu yang
            baru, terutama di bidang teknologi.
          </p>
        </div>
        <div className="sos-el text-4xl opacity-0 mt-4 flex items-center justify-center gap-4">
          <Link
            className="flex items-center hover:text-my-primary transition-all duration-300 ease-out"
            href={`https://github.com/bannytrip`}
            target={`_blank`}
            rel={`noopener noreferrer`}
          >
            <FaGithubSquare className="mr-2" />
            <p className="text-sm">github.com/bannytrip</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
