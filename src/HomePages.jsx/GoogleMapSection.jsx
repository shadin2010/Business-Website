import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const GoogleMapSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Title with Fade Down Animation */}
                <div 
                    className="mb-8 text-center"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">موقعنا على الخريطة</h2>
                    <p className="text-slate-600 mt-2">تفضل بزيارتنا أو تواصل معنا في موقعنا بالدمام</p>
                </div>

                {/* Map Container with Zoom/Fade Up Animation */}
                <div 
                    className="w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-200"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
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
    );
};

export default GoogleMapSection;