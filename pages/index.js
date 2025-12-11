import { useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

const HomePage = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: Power3.easeOut } });

    // "I'm" turun dari atas
    tl.fromTo(
      ".text-im",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.6 }
    );

    // "Banny" naik + gradasi + efek glow sementara
    tl.fromTo(
      ".text-banny",
      { y: 50, opacity: 0, filter: "drop-shadow(0 0 0px #60a5fa)" },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        filter: "drop-shadow(0 0 15px #8b5cf6)",
        onStart: () => {
          // animasi gerakan gradasi terus-menerus
          gsap.to(".text-banny", {
            backgroundPositionX: "200%",
            duration: 3,
            repeat: -1,
            ease: "linear",
          });
        },
        onComplete: () => {
          // matikan glow perlahan
          gsap.to(".text-banny", {
            filter: "drop-shadow(0 0 0px transparent)",
            duration: 1.5,
            delay: 0.5,
            ease: "power2.out",
          });
        },
      },
      "-=0.3"
    );

    // subtitle muncul
    tl.fromTo(
      ".subtitle-el",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      "-=0.2"
    );

    // deskripsi fade-in
    tl.fromTo(
      ".text-home-el",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.2"
    );

    // ikon sosial terakhir
    tl.fromTo(
      ".sos-el",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.1"
    );
  }, []);

  return (
    <div id="home">
      <div className="absolute px-6 lg:px-20 w-full lg:w-1/2 text-center top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Judul utama */}
        <h1 className="title-el font-black text-5xl sm:text-6xl md:text-7xl whitespace-nowrap">
          <span className="text-im inline-block opacity-0">I&apos;m</span>
          <span
            className="text-banny inline-block opacity-0 
              bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
              bg-clip-text text-transparent bg-[length:200%_auto] transition-all duration-500"
          >
            &nbsp;Banny
          </span>
        </h1>

        {/* Subjudul */}
        <h2 className="subtitle-el opacity-0 tracking-[0.15rem] text-2xl font-semibold text-my-black-light dark:text-my-white">
          Coding Is <s>Not</s> My Hobby
        </h2>

        {/* Deskripsi */}
        <div className="text-home-el text-sm opacity-0 mt-2 text-my-black-light dark:text-my-white">
          <p>
            Saya adalah <s>bukan</s> seorang programmer. Saya suka mempelajari
            sesuatu yang baru, terutama di bidang teknologi.
          </p>
        </div>

        {/* Link sosial */}
        <div className="sos-el text-4xl opacity-0 mt-4 flex items-center justify-center gap-4">
          <Link
            className="flex items-center hover:text-my-primary transition-all duration-300 ease-out"
            href="https://github.com/bannytrip"
            target="_blank"
            rel="noopener noreferrer"
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
