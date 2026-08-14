import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[750px] w-full bg-gray-900">
        
        {/* Background Image (Added brightness-50 for perfect text visibility) */}
        <img
          src="https://scrapmetalbuyerksa.com/wp-content/uploads/2024/08/Scrap-Metal-Image-3.jpg"
          alt="Scrap Metal Background"
          className="w-full h-full object-cover brightness-50"
        />

        {/* Content Container (Perfectly Centered) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 text-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {/* Center Content */}
          <div className="text-white max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl">
              أفضل شراي سكراب بالدمام – نشتري كل أنواع <br className="hidden sm:block" /> السكراب بأعلى الأسعار
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-2xl text-gray-200 drop-shadow-md">
              شيل سريع، كاش فوري، وخدمة تدوير موثوقة في الأحساء، الهفوف، القطيف، الخبر، الدمام، والجبيل
            </p>

            <div className="mt-10 flex flex-wrap gap-6 justify-center">
              {/* Call Now Link */}
              <a
                href="tel:+966510904147"
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 shadow-[0_0_15px_rgba(22,163,74,0.5)] hover:scale-105 font-bold text-lg"
              >
                <MdOutlineCall className="text-2xl" />
                Call Now
              </a>

              {/* Whatsapp Link */}
              <a
                href="https://wa.me/966510904147?text=Hello,%20I%20want%20to%20sell%20scrap%20materials."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 font-bold text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;