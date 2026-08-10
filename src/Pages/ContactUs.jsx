import React from 'react';
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div>
            

       {/* contact info */}
     <div>
      
      <div className='mt-35 ml-80 '>

        <h1 className='text-4xl text-cyan-700 font-bold'>Contact Us</h1>

        <p className='text-md mt-6'>Have scrap to sell? Need a quick pickup or price quote? We’re here to help. <br /> Contact us anytime and our team will respond as quickly as possible.</p>

      </div>







       <div className='mt-35 ml-80'>


        <div className='flex gap-3'>
        
          <h1 className='text-4xl '> <IoIosCall /></h1>  
          <h2 className='text-3xl font-bold'>Contact Details</h2>
        
        </div> 
        
        
        <div className='flex gap-2 items-center mt-8 ml-4'>
        
          <h1 className='text-xl text-green-500'> <IoIosCall /></h1>  
          <h2 className='text-xl'>+966 51 090 4147</h2>
        
        </div> 
        


        <div className='flex gap-2 items-center ml-4'>
        
          <h1 className='text-xl text-green-500'> <AiOutlineMail /></h1>  
          <h2 className='text-xl'>scrapbuyer.best@gmail.com</h2>
        
        </div>



        <div className='flex gap-2 items-center ml-4'>
        
          <h1 className='text-xl text-green-500'> <IoLocationOutline /></h1>  
          <h2 className='text-xl'>Dammam, Saudi Arabia</h2>
        
        </div>
           

       
         


       </div>



       <div className='flex gap-2 items-center mt-8 ml-90'>

          <h1 className='text-4xl text-green-600'><FaFacebookSquare/></h1>
          <h1 className='text-4xl text-green-600'><FaWhatsappSquare/></h1>
          <h1 className='text-4xl text-green-600'><FaInstagramSquare/></h1>
       
       </div>




     </div>





     {/* map */}

     <div>

     </div>









        </div>
    );
};

export default ContactUs;