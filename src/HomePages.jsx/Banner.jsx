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
           <div className="relative">
             
             {/* Background Image */}
             <img
               src="https://scrapmetalbuyerksa.com/wp-content/uploads/2024/08/Scrap-Metal-Image-3.jpg"
               alt="Scrap Metal Background"
               className="w-full h-[750px] object-cover"
             />
           
             {/* Content Container */}
             <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 text-center lg:text-left"
               data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="1500">
            
               {/* Left Side */}
               <div className="text-white max-w-2xl mt-16 lg:mt-0">
                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                   أفضل شراي سكراب بالدمام – نشتري كل أنواع <br className="hidden sm:block" /> السكراب بأعلى الأسعار
                 </h1>
               
                 <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-200">
                   شيل سريع، كاش فوري، وخدمة تدوير موثوقة في الأحساء، الهفوف، القطيف، الخبر، الدمام، والجبيل
                 </p>
               
                 <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                   {/* Call Now Link */}
                   <a 
                     href="tel:+966510904147" 
                     className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded flex items-center gap-2 transition-all duration-300 shadow-lg"
                   >
                     <MdOutlineCall className="text-xl" />
                     Call Now
                   </a>
                
                   {/* Whatsapp Link */}
                   <a 
                     href="https://wa.me/966510904147?text=Hello,%20I%20want%20to%20sell%20scrap%20materials." 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded flex items-center gap-2 transition-all duration-300 shadow-lg font-medium"
                   >
                     <FaWhatsapp className="text-xl text-green-600" />
                     Whatsapp
                   </a>
                 </div>
               </div>
            
               {/* Right Side (Responsive Image) */}
               <div className="mt-8 lg:mt-0 flex justify-center">
                 <img
                   src="https://scrapbuyerrindammam.com/wp-content/uploads/2025/12/Untitled-design-1.png"
                   alt="Scrap Buyer Illustration"
                   className="w-[280px] sm:w-[380px] md:w-[480px] lg:w-[550px] h-auto object-contain drop-shadow-2xl"
                 />
               </div>
            
             </div>
           </div>
        </div>
    );
};

export default Banner;