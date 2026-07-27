import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
const Home = () => {
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
  <div className="absolute inset-0 flex items-center justify-between px-20 text-center ml-8">

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





   {/* Why Choose Us Section */}

   <div className='bg-gray-400 p-7'>


      <div className='text-5xl font-extrabold p-8 text-center'>
        Why Choose Us
      </div>


  <div  className='flex justify-center gap-10 p-10'>

  {/* cart -1 */}
    <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transition-all  duration-300 hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 via-red-400 to-white">

       {/* Icon */}
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

     


   {/* cart -2 */}
     <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transition-all  duration-300 hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 via-red-400 to-white">

       {/* Icon */}
        <div className="flex justify-center">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
             <TbTruckDelivery className="text-3xl text-sky-600"/>
        </div>
        </div>

       
       <h1 className="text-2xl font-bold text-white mt-4">
         Fast Pickup <br /> Service
       </h1>


       <p className="text-gray-700 mt-4 leading-6 text-sm">
         Best Scrap Prices provides fast <br /> pickup service in Dammam, <br /> ensuring quick collection.
       </p>

    </div>



      
   {/* cart -3 */}
    <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transition-all  duration-300 hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 via-red-400 to-white">

       {/* Icon */}
        <div className="flex justify-center">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
             <FaHandHoldingDollar className="text-3xl text-sky-600"/>
        </div>
        </div>

       
       <h1 className="text-2xl font-bold text-white mt-4">
         Instant Payments
       </h1>


       <p className="text-gray-700 mt-4 leading-6 text-sm">
         Best Scrap Prices offers <br />instant payment in Dammam,<br /> ensuring fast transactions, fair <br />scrap rates, and secure,<br /> hassle-free service.
       </p>

    </div>  



      
   {/* cart -4 */}
     <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-sky-500 via-sky-400 to-white text-center p-5 transition-all  duration-300 hover:-translate-y-2 hover:shadow-2xl hover:from-red-500 via-red-400 to-white">

       {/* Icon */}
        <div className="flex justify-center">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
             <FaUsers className="text-3xl text-sky-600" />
             
        </div>
        </div>

       
       <h1 className="text-2xl font-bold text-white mt-4">
         Professional <br /> Team
       </h1>


       <p className="text-gray-700 mt-4 leading-6 text-sm">
         Best scrap prices in Dammam <br /> with instant payment.
       </p>

    </div>



   </div>






  </div>

 










    {/* product card*/}


    

     <div>



     <div className='text-5xl font-extrabold p-8 text-center'>
         <h1>Scrap Buying Services</h1>
     </div>


<div  className=' grid grid-cols-5 mt-10 p-9'>



   <div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500  p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white">

  <img
    src="https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp"
    alt=""
    className="w-full h-48 object-cover"
  />

  <div className="p-5 text-center">

    <h1 className="text-xl font-bold text-gray-800 mb-3">
      Old AC Buyer
    </h1>

    <p className="text-gray-600 text-sm leading-6">
      We are old AC buyers in Dammam, offering best prices,
      instant payment, and fast pickup service for used air
      conditioners.
    </p>

  </div>

</div>






   <div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500  p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white">

  <img
    src="https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp"
    alt=""
    className="w-full h-48 object-cover"
  />

  <div className="p-5 text-center">

    <h1 className="text-xl font-bold text-gray-800 mb-3">
      Old AC Buyer
    </h1>

    <p className="text-gray-600 text-sm leading-6">
      We are old AC buyers in Dammam, offering best prices,
      instant payment, and fast pickup service for used air
      conditioners.
    </p>

  </div>

</div>







<div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500  p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white">

  <img
    src="https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp"
    alt=""
    className="w-full h-48 object-cover"
  />

  <div className="p-5 text-center">

    <h1 className="text-xl font-bold text-gray-800 mb-3">
      Old AC Buyer
    </h1>

    <p className="text-gray-600 text-sm leading-6">
      We are old AC buyers in Dammam, offering best prices,
      instant payment, and fast pickup service for used air
      conditioners.
    </p>

  </div>

</div>









<div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500  p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white">

  <img
    src="https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp"
    alt=""
    className="w-full h-48 object-cover"
  />

  <div className="p-5 text-center">

    <h1 className="text-xl font-bold text-gray-800 mb-3">
      Old AC Buyer
    </h1>

    <p className="text-gray-600 text-sm leading-6">
      We are old AC buyers in Dammam, offering best prices,
      instant payment, and fast pickup service for used air
      conditioners.
    </p>

  </div>

</div>





<div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500  p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white">

  <img
    src="https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp"
    alt=""
    className="w-full h-48 object-cover"
  />

  <div className="p-5 text-center">

    <h1 className="text-xl font-bold text-gray-800 mb-3">
      Old AC Buyer
    </h1>

    <p className="text-gray-600 text-sm leading-6">
      We are old AC buyers in Dammam, offering best prices,
      instant payment, and fast pickup service for used air
      conditioners.
    </p>

  </div>

</div>















 <div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500  p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white">

  <img
    src="https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp"
    alt=""
    className="w-full h-48 object-cover"
  />

  <div className="p-5 text-center">

    <h1 className="text-xl font-bold text-gray-800 mb-3">
      Old AC Buyer
    </h1>

    <p className="text-gray-600 text-sm leading-6">
      We are old AC buyers in Dammam, offering best prices,
      instant payment, and fast pickup service for used air
      conditioners.
    </p>

  </div>

</div>






   <div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500  p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white">

  <img
    src="https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp"
    alt=""
    className="w-full h-48 object-cover"
  />

  <div className="p-5 text-center">

    <h1 className="text-xl font-bold text-gray-800 mb-3">
      Old AC Buyer
    </h1>

    <p className="text-gray-600 text-sm leading-6">
      We are old AC buyers in Dammam, offering best prices,
      instant payment, and fast pickup service for used air
      conditioners.
    </p>

  </div>

</div>







<div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500  p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white">

  <img
    src="https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp"
    alt=""
    className="w-full h-48 object-cover"
  />

  <div className="p-5 text-center">

    <h1 className="text-xl font-bold text-gray-800 mb-3">
      Old AC Buyer
    </h1>

    <p className="text-gray-600 text-sm leading-6">
      We are old AC buyers in Dammam, offering best prices,
      instant payment, and fast pickup service for used air
      conditioners.
    </p>

  </div>

</div>









<div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500  p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white">

  <img
    src="https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp"
    alt=""
    className="w-full h-48 object-cover"
  />

  <div className="p-5 text-center">

    <h1 className="text-xl font-bold text-gray-800 mb-3">
      Old AC Buyer
    </h1>

    <p className="text-gray-600 text-sm leading-6">
      We are old AC buyers in Dammam, offering best prices,
      instant payment, and fast pickup service for used air
      conditioners.
    </p>

  </div>

</div>





<div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500  p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white">

  <img
    src="https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp"
    alt=""
    className="w-full h-48 object-cover"
  />

  <div className="p-5 text-center">

    <h1 className="text-xl font-bold text-gray-800 mb-3">
      Old AC Buyer
    </h1>

    <p className="text-gray-600 text-sm leading-6">
      We are old AC buyers in Dammam, offering best prices,
      instant payment, and fast pickup service for used air
      conditioners.
    </p>

  </div>

</div>























</div>








     </div>






    





























        </div>
    );
};

export default Home;