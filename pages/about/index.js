import React from "react";
import parse from "html-react-parser";
import { renderToString } from "react-dom/server";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiDart,
  SiReact,
  SiFlutter,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiNodedotjs,
  SiSequelize,
  SiRedux,
  SiGetX,
} from "react-icons/si";
import Image from "next/image";

const AboutPage = (props) => {
  const { skills, textAbout } = props;
  return (
    <div id="about" className="px-2 py-6 lg:px-36 lg:py-10">
      <h1 className="title-about-el opacity-0 text-4xl font-bold mb-6">
        Sekilas Tentang <span className="text-my-primary">Saya</span>
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="text-about-el text-sm opacity-0 text-my-black-light dark:text-my-white lg:pr-8">
          <p className="mb-3 text-justify indent-6">{textAbout}</p>
          <p className="mb-3">
            Beberapa bahasa pemrograman dan teknologi yang biasa saya gunakan:
          </p>
          <ul className="grid grid-cols-2 gap-2 mb-3 text-my-black-light dark:text-my-white">
            {skills.map((skill, i) => {
              return (
                <li key={i} className="flex items-center">
                  {parse(`${skill.icon}`)}
                  {skill.nama}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="img-about-el opacity-0 lg:w-1/2 flex justify-center items-center mt-4 lg:mt-0">
          <div className="relative w-64 rounded shadow-lg">
            <Image
              className="rounded object-cover h-auto"
              src={`/images/banny1.jpeg`}
              alt={`/images/banny1.jpeg`}
              width={300}
              height={300}
            />
            {/* <span className="absolute rounded top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-my-primary to-my-white dark:to-my-black opacity-80 hover:opacity-0 transition-all duration-300 ease-out"></span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const meSkill = [
    {
      nama: "Html",
      icon: renderToString(<SiHtml5 className="text-my-primary mr-2" />),
    },
    {
      nama: "Css",
      icon: renderToString(<SiCss3 className="text-my-primary mr-2" />),
    },
    {
      nama: "JavaScript",
      icon: renderToString(<SiJavascript className="text-my-primary mr-2" />),
    },
    {
      nama: "TypeScript",
      icon: renderToString(<SiTypescript className="text-my-primary mr-2" />),
    },
    {
      nama: "Dart",
      icon: renderToString(<SiDart className="text-my-primary mr-2" />),
    },
    {
      nama: "TailwindCss",
      icon: renderToString(<SiTailwindcss className="text-my-primary mr-2" />),
    },
    {
      nama: "Node.js",
      icon: renderToString(<SiNodedotjs className="text-my-primary mr-2" />),
    },
    {
      nama: "React.js",
      icon: renderToString(<SiReact className="text-my-primary mr-2" />),
    },
    {
      nama: "Next.js",
      icon: renderToString(<SiNextdotjs className="text-my-primary mr-2" />),
    },
    {
      nama: "Redux",
      icon: renderToString(<SiRedux className="text-my-primary mr-2" />),
    },
    {
      nama: "Flutter",
      icon: renderToString(<SiFlutter className="text-my-primary mr-2" />),
    },
    {
      nama: "Express.js",
      icon: renderToString(<SiExpress className="text-my-primary mr-2" />),
    },
    {
      nama: "ORM Sequelize",
      icon: renderToString(<SiSequelize className="text-my-primary mr-2" />),
    },
  ];

  const textAbout = `Hai! perkenalkan nama saya Banny Tri Pamungkas, kalian juga bisa memanggil saya Banny. Pertama kali saya mengenal bahasa pemrograman dimulai sekitar tahun 2014, saat itu saya hanya iseng mengerjakan soal-soal di internet, seiring berjalannya waktu saya mulai tertarik dengan pemrograman, bahasa pemrograman pertama saya adalah Pascal. Sedangkan minat saya terhadap pengembangan aplikasi sekitar tahun 2016, ketika saya mempelajari React.js, ketika saya mempelajari React.js saya mendapatkan banyak ilmu baru, dan saya membangun situs portfolio ini menggunakan teknologi Next.js`;

  return {
    props: {
      skills: meSkill,
      textAbout: textAbout,
    },
  };
};

export default AboutPage;
