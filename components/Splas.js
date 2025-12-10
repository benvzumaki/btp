import { useEffect } from "react";
import { gsap, Power3 } from "gsap";

const Splas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline({
      defaults: { ease: Power3.easeOut },
    });

    // 1️⃣ Logo muncul perlahan
    tl.fromTo(
      ".svg-elem-1",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    );

    // 2️⃣ Logo mengecil dan sedikit turun agar lebih dekat ke teks
    tl.to(".svg-elem-1", {
      scale: 0.6,
      y: 8, // 👈 turun sedikit (sebelumnya -20)
      duration: 0.8,
      delay: 0.3,
    });

    // 3️⃣ Teks muncul lebih cepat dan rapat
    tl.fromTo(
      ".frist-text",
      { y: 5, opacity: 0 },
      { y: -5, opacity: 1, duration: 0.7 },
      "-=0.5" // 👈 mulai lebih awal, agar dekat dengan logo
    );

    // 4️⃣ Keduanya fade-out ke atas bersamaan
    tl.to(
      [".svg-elem-1", ".frist-text"],
      {
        y: -40,
        opacity: 0,
        duration: 1,
        
        ease: "power2.inOut",
      },
      "+=0.5"
    );

    // 5️⃣ Hilangkan layar splash
    tl.to(".splas-screen", {
      autoAlpha: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="bg-my-white dark:bg-my-black-dark fixed z-50 splas-screen left-0 right-0 top-0 bottom-0">
      <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 200"
          className="svg-elem-1"
          style={{
            height: "200px",
            width: "auto",
            display: "block",
            margin: "0 auto -10px", // 👈 lebih rapat (sebelumnya -20px)
          }}
        >
          <defs>
            <linearGradient id="gradBan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B2631" />
              <stop offset="100%" stopColor="#007BFF" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="'Baksoda', cursive"
            fontSize="160"
            letterSpacing="-4px"
            fill="url(#gradBan)"
          >
            ban
          </text>
        </svg>

        <h2 className="font-my-font frist-text font-semibold text-lg opacity-0 capitalize">
          Ban Personal Website
        </h2>
      </div>
    </div>
  );
};

export default Splas;
