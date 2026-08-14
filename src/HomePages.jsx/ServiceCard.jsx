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
    <div dir="rtl">
      {/* Why Choose Us Heading */}
      <div
        className="text-5xl font-extrabold p-8 text-center"
        data-aos="zoom-in"
      >
        لماذا تختارنا
      </div>

      <div className="flex justify-center flex-wrap gap-10 p-10">
        {/* Card -1 */}
        <div data-aos="fade-left" data-aos-duration="800">
          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                <BsCurrencyDollar className="text-3xl text-sky-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white mt-4">
              أفضل أسعار الخردة
            </h1>

            <p className="text-gray-700 mt-4 leading-6 text-sm">
              نحن مشتري خردة موثوق به في الدمام، نقدم أسعارا تنافسية، وعروضا فورية، وخدمات استلام موثوقة.
            </p>
          </div>
        </div>

        {/* Card -2 */}
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                <TbTruckDelivery className="text-3xl text-sky-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white mt-4">
              خدمة استلام <br /> سريعة
            </h1>

            <p className="text-gray-700 mt-4 leading-6 text-sm">
              نقدم خدمة استلام <br />
              سريعة في الدمام، <br />
              لضمان جمع الخردة بسرعة.
            </p>
          </div>
        </div>

        {/* Card -3 */}
        <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                <FaHandHoldingDollar className="text-3xl text-sky-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white mt-4">دفع فوري</h1>

            <p className="text-gray-700 mt-4 leading-6 text-sm">
              نقدم دفعا فوريا <br />
              في الدمام، ونضمن <br />
              معاملات سريعة، وأسعارا عادلة، <br />
              وخدمة آمنة وخالية من المتاعب.
            </p>
          </div>
        </div>

        {/* Card -4 */}
        <div data-aos="fade-right" data-aos-delay="600" data-aos-duration="800">
          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                <FaUsers className="text-3xl text-sky-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white mt-4">
              فريق <br /> محترف
            </h1>

            <p className="text-gray-700 mt-4 leading-6 text-sm">
              أفضل أسعار الخردة <br />
              في الدمام مع الدفع الفوري.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;