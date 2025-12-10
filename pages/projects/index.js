import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SiFlutter,
  SiDart,
  SiGithub,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiReact,
  SiFirebase,
  SiLeaflet,
} from "react-icons/si";
import parse from "html-react-parser";
import { renderToString } from "react-dom/server";

const ProjectsPage = (props) => {
  const { projects } = props;
  return (
    <div id="projects" className="px-2 py-6 lg:px-36 lg:py-10">
      <h1 className="title-projects-el text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
        Yang Telah Saya <span className="text-my-primary">Bangun?</span>
      </h1>

      {/* === Kotak pesan rahasia dengan animasi === */}
      <div className="content-projects-el flex justify-center items-center min-h-[60vh]">
        <div
          className="relative bg-my-black dark:bg-my-white text-my-white dark:text-my-black 
                     px-6 py-10 lg:px-20 lg:py-16 rounded-2xl shadow-2xl text-center 
                     text-2xl sm:text-3xl lg:text-4xl font-bold max-w-[90%] sm:max-w-[600px]
                     animate-fadeIn scale-100 transition-all duration-700 ease-out"
        >
          {/* Efek glow lembut */}
          <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40 bg-my-primary animate-pulse"></div>
          <div className="relative z-10">
            Secret Projects Bro..., <br className="sm:hidden" /> Untuk Bisnis PM aja
          </div>
        </div>
      </div>

      {/* === Daftar project lama (disembunyikan) === */}
      {/*
      <div className="content-projects-el flex gap-12 flex-col">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className={`relative flex items-end h-[50vh] transition-all duration-500 ease-out`}
            >
              <div className="h-full relative w-full">
                <div
                  className={`opacity-0 absolute shadow-lg ${
                    project.left ? "left-0 lg:left-16" : "right-0 lg:right-16"
                  } h-full w-full lg:w-[50%]`}
                >
                  <span className="lg:hidden absolute rounded h-full w-full bg-gradient-to-b from-my-black dark:from-my-white to-my-white dark:to-my-black opacity-80 transition-all ease-out"></span>
                  <Image
                    className="object-contain w-full h-full rounded bg-my-white dark:bg-my-black-dark"
                    src={project.image}
                    alt={project.image}
                    width={600}
                    height={600}
                    priority
                  />
                </div>
                <div
                  className={`opacity-0 w-full lg:w-96 lg:shadow-lg lg:bg-my-black lg:dark:bg-my-white absolute lg:rounded top-0 lg:top-28 ${
                    project.left
                      ? "left-0 lg:left-[50%]"
                      : "right-0 lg:right-[50%]"
                  } p-3 transition-all duration-300 ease-out`}
                >
                  <p className="mb-2 font-bold text-start text-2xl text-white dark:text-my-black lg:text-white lg:dark:text-my-black">
                    {project.title}
                  </p>
                  <div className="text-white dark:text-my-black lg:text-white lg:dark:text-my-black">
                    <p className="text-sm">{project.deskripsi}</p>
                    <span className="bg-white dark:bg-my-black lg:bg-white lg:dark:bg-my-black block h-[0.125rem] rounded w-full my-2"></span>
                    <div className="flex justify-between items-center">
                      <ul className="text-sm flex gap-2 flex-wrap">
                        {project.teknologi.map((tek, i) => {
                          return (
                            <li key={i} className="flex items-center flex-wrap">
                              {parse(`${tek.icon}`)} &nbsp;{tek.nama}
                            </li>
                          );
                        })}
                      </ul>
                      <Link
                        href={project.github}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                      >
                        <SiGithub className="text-2xl hover:text-my-primary transition-all duration-300 ease-out" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      */}
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  const projects = [
    {
      left: true,
      title: "GPS Pengukur Area",
      deskripsi:
        "Aplikasi berbasis mobile yang digunakan untuk membantu mengukur luas area yang memanfaatkan gps dalam pengukurannya",
      image: "/images/gps-pengukur-area.jpg",
      teknologi: [
        { nama: "Dart", icon: renderToString(<SiDart className="" />) },
        { nama: "Flutter", icon: renderToString(<SiFlutter className="" />) },
        { nama: "Leaflet", icon: renderToString(<SiLeaflet className="" />) },
      ],
      github: "https://github.com/andribob26/gps-pengukur-area",
    },
    {
      left: false,
      title: "Pangkas Gambar Simpel",
      deskripsi:
        "Aplikasi berbasis mobile crop/pangkas gambar yang mudah di gunakan",
      image: "/images/pangkas-gambar.jpg",
      teknologi: [
        { nama: "Dart", icon: renderToString(<SiDart className="" />) },
        { nama: "Flutter", icon: renderToString(<SiFlutter className="" />) },
      ],
      github: "https://github.com/andribob26/pangkas-gambar-simpel",
    },
    {
      left: true,
      title: "Indo TV",
      deskripsi:
        "Aplikasi berbasis mobile untuk menonton siaran langsung televisi lokal",
      image: "/images/indo-tv.jpg",
      teknologi: [
        { nama: "Dart", icon: renderToString(<SiDart className="" />) },
        { nama: "Flutter", icon: renderToString(<SiFlutter className="" />) },
        { nama: "Firebase", icon: renderToString(<SiFirebase className="" />) },
      ],
      github: "https://github.com/andribob26/indo-tv",
    },
    {
      left: false,
      title: "Aplikasi Pengelolaan Produksi Beras PD. ADM Adam Gemilang",
      deskripsi:
        "Aplikasi berbasis web untuk mengelola pencatatan pembelian dan penjualan serta persediaan beras secara terkomputerisasi di PD. ADM",
      image: "/images/adm-laporan.PNG",
      teknologi: [
        { nama: "React.js", icon: renderToString(<SiReact className="" />) },
        {
          nama: "TailwindCss",
          icon: renderToString(<SiTailwindcss className="" />),
        },
        { nama: "Express.js", icon: renderToString(<SiExpress className="" />) },
        {
          nama: "PostgreSQL",
          icon: renderToString(<SiPostgresql className="" />),
        },
      ],
      github: "https://github.com/andribob26/adm-app",
    },
  ];

  return { props: { projects } };
};

export default ProjectsPage;
