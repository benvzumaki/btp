import React from "react";
import Link from "next/link";
import { SiWhatsapp, SiGmail, SiLinkedin } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { useGeolocated } from "react-geolocated";
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../../components/Map"), { ssr: false });

const ContactPage = () => {
  // Gunakan hook geolokasi
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: { enableHighAccuracy: false },
    userDecisionTimeout: 5000,
  });

  // Titik koordinat tetap (SDN Tegalsari 2, Kota Tegal)
  const defaultCoords = {
    latitude: -6.858800,
    longitude: 109.125800,
  };

  // Jika user izinkan lokasi, gunakan posisi user
  const fixedCoords =
    isGeolocationAvailable && isGeolocationEnabled && coords
      ? coords
      : defaultCoords;

  return (
    <div id="contact" className="px-2 py-6 lg:px-36 lg:py-10">
      <h1 className="title-contact-el text-4xl font-bold mb-6">
        Hubungi <span className="text-my-primary">Saya</span>
      </h1>

      <div className="flex flex-col lg:flex-row">
        <div className="text-contact-el text-sm text-my-black-light dark:text-my-white lg:pr-8 space-y-4">
          <p className="mb-3 text-justify indent-6 animate-fadeIn delay-100">
            Saya terbuka untuk freelance atau kontrak.  
            Jika kamu memiliki permintaan atau pertanyaan, jangan sungkan untuk
            menghubungi saya.
          </p>

          <ul className="grid grid-cols-1 gap-3 mb-3 text-my-black-light dark:text-my-white">
            {/* WhatsApp */}
            <li className="flex items-center opacity-0 animate-fadeSlideUp delay-200">
              <SiWhatsapp className="text-my-primary mr-2" />
              <Link
                className="hover:text-my-primary transition-all duration-300 ease-out"
                href={`https://wa.me/089667308444`}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                0896-6730-8444
              </Link>
            </li>

            {/* LinkedIn (disembunyikan) */}
            {/*
            <li className="flex items-center">
              <SiLinkedin className="text-my-primary mr-2" />
              <Link
                className="hover:text-my-primary transition-all duration-300 ease-out"
                href={`https://www.linkedin.com/in/andri-febrian-6194521ba/?originalSubdomain=id`}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                Andri Febrian
              </Link>
            </li>
            */}

            {/* Gmail */}
            <li className="flex items-center opacity-0 animate-fadeSlideUp delay-300">
              <SiGmail className="text-my-primary mr-2" />
              <Link
                className="hover:text-my-primary transition-all duration-300 ease-out"
                href={`mailto:banny3p@gmail.com`}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                banny3p@gmail.com
              </Link>
            </li>

            {/* Alamat */}
            <li className="flex items-center opacity-0 animate-fadeSlideUp delay-400">
              <MdLocationOn className="text-my-primary mr-2" />
              Tegalsari, Kota Tegal, Indonesia
            </li>
          </ul>
        </div>

        {/* Peta */}
        <div className="map-contact-el lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0 opacity-0 animate-fadeSlideUp delay-500">
          <div className="relative w-64 h-64 rounded shadow-lg overflow-hidden">
            <MapWithNoSSR coords={fixedCoords} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
