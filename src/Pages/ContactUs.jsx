import React from 'react';
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div dir="rtl" className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 pt-28 text-right">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Title Section */}
               <div className="mb-12 max-w-3xl">
                    <h1 className="text-4xl text-cyan-700 font-bold">اتصل بنا</h1>
                    <p className="text-md mt-4 text-slate-600 leading-relaxed">
                        لديك خردة للبيع؟ تحتاج إلى استلام سريع أو عرض سعر؟ نحن هنا للمساعدة. <br /> 
                        اتصل بنا في أي وقت وسيقوم فريقنا بالرد في أسرع وقت ممكن.
                    </p>
               </div> 

                {/* Main Grid: Right Side Info & Left Side Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Contact Info & Social Icons (Right Side) */}
                    <div className="space-y-8">
                        
                        {/* Get in Touch Heading */}
                        <div>
                            <div className='flex gap-3 items-center'> 
                                <span className='text-3xl text-slate-800'><IoIosCall /></span>  
                                <h2 className='text-3xl font-bold text-slate-800'>تواصل معنا</h2>
                            </div> 
                            
                            {/* Details List with Links */}
                            <div className="mt-6 space-y-4 mr-2">
                                <a href="tel:+966510904147" className='flex gap-3 items-center hover:opacity-80 transition'> 
                                    <span className='text-xl text-green-500'><IoIosCall /></span>  
                                    <span className='text-xl text-slate-700 font-medium' dir="ltr">+966 51 090 4147</span>
                                </a> 

                                <a href="mailto:scrapbuyer.best@gmail.com" className='flex gap-3 items-center hover:opacity-80 transition'> 
                                    <span className='text-xl text-green-500'><AiOutlineMail /></span>  
                                    <span className='text-xl text-slate-700 font-medium'>scrapbuyer.best@gmail.com</span>
                                </a>

                                <div className='flex gap-3 items-center'> 
                                    <span className='text-xl text-green-500'><IoLocationOutline /></span>  
                                    <span className='text-xl text-slate-700 font-medium'>الدمام، المملكة العربية السعودية</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons with Links */}
                        <div className='flex gap-4 items-center mr-2 pt-2'>
                            <a href="https://www.facebook.com/scrapbuyer6" target="_blank" rel="noopener noreferrer" className='text-4xl text-green-600 hover:text-green-700 transition'><FaFacebookSquare /></a>
                            <a href="https://wa.me/966510904147" target="_blank" rel="noopener noreferrer" className='text-4xl text-green-600 hover:text-green-700 transition'><FaWhatsappSquare /></a>
                        </div>

                    </div>

                    {/* Google Map Embed (Left Side) */}
                    <div className="w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                        <iframe 
                            title="Dammam Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14316.634674068593!2d50.1031124!3d26.4207138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ff7a5ae232dd%3A0x81f08f515e7ca3de!2sDammam%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1650000000000!5m2!1sen!2sbd" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactUs;