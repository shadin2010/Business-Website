import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BsCurrencyDollar } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";

const ServiceCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div dir="rtl" className="py-8">
      {/* Why Choose Us Heading */}
      <div
        className="text-4xl sm:text-5xl font-extrabold p-8 text-center text-slate-900"
        data-aos="zoom-in"
      >
        لماذا تختارنا
      </div>

      {/* Mobile-এ grid-cols-2 দেওয়া হয়েছে যাতে মোবাইল স্ক্রিনে পাশাপাশি দুটো করে কার্ড দেখায় */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 max-w-7xl mx-auto px-4">
        {/* Card -1 */}
        <div data-aos="fade-left" data-aos-duration="800" className="h-full w-full">
          <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-3 sm:p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white flex flex-col justify-start">
            <div>
              <div className="flex justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <BsCurrencyDollar className="text-2xl sm:text-3xl text-sky-600" />
                </div>
              </div>

              <h1 className="text-lg sm:text-2xl font-bold text-white mt-2 sm:mt-3">
                أفضل أسعار الخردة
              </h1>
            </div>

            <p className="text-gray-700 mt-2 sm:mt-3 leading-5 sm:leading-6 text-xs sm:text-sm">
              نحن مشتري خردة موثوق به في الدمام، نقدم أسعارا تنافسية، وعروضا فورية، وخدمات استلام موثوقة.
            </p>
          </div>
        </div>

        {/* Card -2 */}
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" className="h-full w-full">
          <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-3 sm:p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white flex flex-col justify-start">
            <div>
              <div className="flex justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <TbTruckDelivery className="text-2xl sm:text-3xl text-sky-600" />
                </div>
              </div>

              <h1 className="text-lg sm:text-2xl font-bold text-white mt-2 sm:mt-3">
                خدمة استلام <br /> سريعة
              </h1>
            </div>

            <p className="text-gray-700 mt-2 sm:mt-3 leading-5 sm:leading-6 text-xs sm:text-sm">
              نقدم خدمة استلام سريعة في الدمام، لضمان جمع الخردة بسرعة.
            </p>
          </div>
        </div>

        {/* Card -3 */}
        <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800" className="h-full w-full">
          <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-3 sm:p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white flex flex-col justify-start">
            <div>
              <div className="flex justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <FaHandHoldingDollar className="text-2xl sm:text-3xl text-sky-600" />
                </div>
              </div>

              <h1 className="text-lg sm:text-2xl font-bold text-white mt-2 sm:mt-3">دفع فوري</h1>
            </div>

            <p className="text-gray-700 mt-2 sm:mt-3 leading-5 sm:leading-6 text-xs sm:text-sm">
              نقدم دفعا فوريا في الدمام، ونضمن معاملات سريعة، وأسعارا عادلة، وخدمة آمنة وخالية من المتاعب.
            </p>
          </div>
        </div>

        {/* Card -4 */}
        <div data-aos="fade-right" data-aos-delay="600" data-aos-duration="800" className="h-full w-full">
          <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-3 sm:p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white flex flex-col justify-start">
            <div>
              <div className="flex justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <FaUsers className="text-2xl sm:text-3xl text-sky-600" />
                </div>
              </div>

              <h1 className="text-lg sm:text-2xl font-bold text-white mt-2 sm:mt-3">
                فريق <br /> محترف
              </h1>
            </div>

            <p className="text-gray-700 mt-2 sm:mt-3 leading-5 sm:leading-6 text-xs sm:text-sm">
              أفضل أسعار الخردة في الدمام مع الدفع الفوري.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;