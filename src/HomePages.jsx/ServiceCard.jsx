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
        <div>
            


           
  {/* Why Choose Us Heading */}
<div
  className="text-5xl font-extrabold p-8 text-center"
  data-aos="zoom-in"
>
  Why Choose Us
</div>

<div className="flex justify-center gap-10 p-10">

  {/* Card -1 */}
 

 <div   data-aos="fade-right"
          data-aos-duration="800">

       <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white">

           <div className="flex justify-center">
             <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                 <BsCurrencyDollar className="text-3xl text-sky-600" />
             </div>
           </div>

          <h1 className="text-2xl font-bold text-white mt-4">
                Best Scrap Prices
          </h1>

     <p className="text-gray-700 mt-4 leading-6 text-sm">
         Best Scrap Prices is a trusted scrap buyer in Dammam,
         offering competitive rates, instant quotes, and reliable
         pickup services.
     </p>
  
     </div>

  </div>
 




  {/* Card -2 */}
  
  <div data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="800">

  <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white">

    <div className="flex justify-center">
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
        <TbTruckDelivery className="text-3xl text-sky-600" />
      </div>
    </div>

    <h1 className="text-2xl font-bold text-white mt-4">
      Fast Pickup <br /> Service
    </h1>

    <p className="text-gray-700 mt-4 leading-6 text-sm">
      Best Scrap Prices provides fast <br />
      pickup service in Dammam, <br />
      ensuring quick collection.
    </p>
  </div>

  </div>







  {/* Card -3 */}
  
  <div data-aos="fade-up"
    data-aos-delay="400"
    data-aos-duration="800">

  <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transform-gpu transition-all 
   duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white">

    <div className="flex justify-center">
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
        <FaHandHoldingDollar className="text-3xl text-sky-600" />
      </div>
    </div>

    <h1 className="text-2xl font-bold text-white mt-4">
      Instant Payments
    </h1>

    <p className="text-gray-700 mt-4 leading-6 text-sm">
      Best Scrap Prices offers <br />
      instant payment in Dammam,<br />
      ensuring fast transactions, fair <br />
      scrap rates, and secure,<br />
      hassle-free service.
    </p>
  </div>

  </div>
  










  {/* Card -4 */}
 
  
  <div data-aos="fade-left"
    data-aos-delay="600"
    data-aos-duration="800">

  <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transform-gpu transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 hover:via-red-400 hover:to-white">

    <div className="flex justify-center">
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
        <FaUsers className="text-3xl text-sky-600" />
      </div>
    </div>

    <h1 className="text-2xl font-bold text-white mt-4">
      Professional <br /> Team
    </h1>

    <p className="text-gray-700 mt-4 leading-6 text-sm">
      Best scrap prices in Dammam <br />
      with instant payment.
    </p>
  </div>

  </div>
 








</div>






        </div>
    );
};

export default ServiceCard;