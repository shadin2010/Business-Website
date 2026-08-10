
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
         alt=""
         className="w-full h-[750px] object-cover"
       />
     
       {/* Text */}
       <div className="absolute inset-0 flex items-center justify-between px-20 text-center ml-8"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
     
         {/* Left Side */}
         <div className="text-white">
           <h1 className="text-5xl font-bold">
             Top Scrap Buyer in Dammam – We <br />
             Buy All Types of Scrap at Best Prices
           </h1>
     
           <p className="mt-5 text-xl text-center">
             Fast pickup, instant cash, and trusted recycling service
             across Dammam, <br />
             Dhahran, Khobar, and surrounding areas.
           </p>
     
           <div className="mt-8 flex gap-4  justify-center ">
             <button className="bg-green-600 text-white px-6 py-3 rounded flex items-center gap-2">
               <MdOutlineCall />
                Call Now
             </button>
     
             <button className="bg-white text-black px-6 py-3 rounded flex items-center gap-2">
              <FaWhatsapp />
               Whatsapp
             </button>
           </div>
         </div>
     
         {/* Right Side */}
         <div className='mt-12.5 mr-15'>
           <img
             src="https://scrapbuyerrindammam.com/wp-content/uploads/2025/12/Untitled-design-1.png"
             alt=""
             className="w-[700px] h-[700px]  "
           />
         </div>
     
       </div>
     </div>







        </div>
    );
};

export default Banner;