import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesList } from './Services'; // আগের তালিকা থেকে ডেটা নেওয়া হচ্ছে
import { FaArrowLeft, FaCheckCircle, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const ServiceDetails = () => {
    const { id } = useParams();
    
    // পেজ লোড হওয়ার সাথে সাথে স্ক্রিন ওপরের দিকে নিয়ে যাওয়ার জন্য
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    
    // ইউজার যেটায় ক্লিক করেছে তার আইডি দিয়ে ডেটা খুঁজে বের করা
    const service = servicesList.find((item) => item.id === id);

    if (!service) {
        return (
            <div dir="rtl" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 text-right">
                <h2 className="text-3xl font-bold text-red-600 mb-4">الخدمة غير موجودة</h2>
                <Link to="/services" className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold">
                    العودة إلى الخدمات
                </Link>
            </div>
        );
    }

    return (
        <div dir="rtl" className="min-h-screen bg-slate-50 py-28 px-4 sm:px-6 lg:px-8 text-right">
            <div className="max-w-4xl mx-auto">
                
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 text-teal-700 font-semibold mb-8 hover:underline">
                    <FaArrowLeft className="rotate-180" /> العودة إلى الرئيسية / الخدمات
                </Link>

                {/* Main Content Box */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-72 sm:h-96 object-cover"
                    />
                    
                    <div className="p-8 sm:p-12">
                        <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                            فئة الخردة
                        </span>
                        
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-6">
                            {service.title}
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            {service.desc}
                        </p>

                        <div className="border-t border-slate-100 pt-6 space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-slate-700 font-medium">
                                <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                                <span>تقييم فوري في الموقع وأفضل أسعار السوق.</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-700 font-medium">
                                <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                                <span>تحميل مجاني ونقل سريع في الدمام والمنطقة الشرقية.</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-700 font-medium">
                                <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                                <span>دفع نقدي فوري أو تحويل بنكي عند الاستلام.</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="tel:+966510904147" 
                                className="flex-1 bg-teal-700 hover:bg-teal-800 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-teal-900/20"
                            >
                                <FaPhoneAlt /> اتصل لطلب الاستلام الفوري
                            </a>
                            <a 
                                href="https://wa.me/966510904147" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-green-900/20"
                            >
                                <FaWhatsapp className="text-xl" /> استفسار عبر واتساب
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;