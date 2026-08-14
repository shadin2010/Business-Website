import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// সমস্ত সার্ভিসের ডেটা (ছবি ও ডিটেইলস সহ)
export const servicesList = [
    {
        id: "ac-fridge-scrap",
        title: "Air Condition Scrap",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "Top Scrap Dammam offers the best price for air condition scrap in Dammam. Sell your old AC units hassle-free with fast pickup and instant cash."
    },
    {
        id: "aluminium-scrap",
        title: "Aluminium Scrap",
        image: "https://images.unsplash.com/photo-1605647550641-7849657e931a?q=80&w=800&auto=format&fit=crop",
        desc: "Top Scrap Dammam offers the best prices for aluminium scrap in Dammam. Sell your aluminium waste quickly with fast pickup and instant cash."
    },
    {
        id: "battery-scrap",
        title: "Battery Scrap",
        image: "https://images.unsplash.com/photo-1558449041-621fef0a66de?q=80&w=800&auto=format&fit=crop",
        desc: "Top Scrap Dammam buys battery scrap in Dammam at the best prices. Sell old car, inverter, and industrial batteries hassle-free with instant cash."
    },
    {
        id: "building-demolition",
        title: "Building Demolition Scrap",
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f1f7d?q=80&w=800&auto=format&fit=crop",
        desc: "Top Scrap Dammam buys building demolition scrap in Dammam at the best rates. Sell construction and demolition waste with fast pickup."
    },
    {
        id: "copper-scrap",
        title: "Copper Scrap",
        image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=800&auto=format&fit=crop",
        desc: "Get top cash for all kinds of pure and mixed copper scrap materials with immediate evaluation and professional site clearance."
    },
    {
        id: "iron-steel-scrap",
        title: "Iron & Steel Scrap",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        desc: "Heavy industrial iron and steel scrap bought at high market rates with heavy-duty loading equipment provided."
    },
    {
        id: "electrical-scrap",
        title: "Electrical & Cable Scrap",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        desc: "Safe recycling and buying of all types of electrical wiring, cables, transformers, and electronic switchboards."
    },
    {
        id: "industrial-machinery",
        title: "Old Machinery Scrap",
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
        desc: "We dismantle and purchase obsolete factory machinery, generators, and large industrial plants at premium prices."
    }
];

export const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <div className="pt-24 pb-16">
            {/* Top Intro Section */}
            <div className='flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-4 gap-12'>
                <div data-aos="fade-down" data-aos-duration="1500">
                    <div className='max-w-xl'>
                        <h1 className='text-3xl font-bold mb-6 text-slate-900'>ماذا نشتري​</h1>
                        <p className='text-lg text-slate-600 leading-relaxed'>
                             نشتري أغراضك القديمة وغير المستخدمة بأفضل الأسعار. يمكنك بسهولة بيع مكيفات الهواء القديمة، والمبردات، والسخانات، ومراوح السقف، والمراوح العمودية، وأنواع مختلفة من الأجهزة الإلكترونية الخردة الآن.
                        </p>
                        <p className='text-lg mt-4 text-slate-600 leading-relaxed'>
                            بالإضافة إلى ذلك، نشتري جميع أنواع الألمنيوم والنحاس والحديد والأسلاك ومواد الخردة المتنوعة الأخرى بأسعار عادلة جدا. اتصل بنا!
                        </p>
                    </div>
                </div>

                <div data-aos="fade-down" data-aos-duration="1500">
                    <img src="https://scrapyarddammam.com/wp-content/uploads/2026/07/Industrial-Scrap.webp" alt="Industrial Scrap" className='w-full max-w-md rounded-2xl shadow-xl object-cover' />
                </div>
            </div>

            {/* Cards Grid Section */}
            <div className='max-w-7xl mx-auto px-4 mt-20'>
                <div data-aos="fade-down">
                    <div className='text-4xl sm:text-5xl font-extrabold p-8 text-center text-slate-900 mb-4'>
                        <h1>Scrap Buying Services</h1>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center mt-6'>
                    {servicesList.map((item, index) => (
                        <div 
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="800"
                            className="h-full" /* AOS-র‍্যাপারে h-full দেওয়া হয়েছে */
                        >
                            <Link 
                                to={`/service/${item.id}`} 
                                // এখানে h-full, flex এবং flex-col যুক্ত করা হয়েছে 
                                className="group flex flex-col h-full w-[290px] bg-white rounded-xl shadow-lg p-4 bg-gradient-to-b from-purple-700 via-purple-500 to-white transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-2xl"
                            >
                                <div className="overflow-hidden rounded-md shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                
                                {/* flex-grow ব্যবহার করা হয়েছে যাতে কন্টেন্ট অনুযায়ী জায়গা সমানভাবে নেয় */}
                                <div className="p-5 text-center flex flex-col flex-grow">
                                    <h1 className="text-xl font-bold text-gray-800 mb-3">
                                        {item.title}
                                    </h1>
                                    {/* line-clamp-3 দেওয়া হয়েছে যাতে টেক্সট সর্বোচ্চ ৩ লাইনের বেশি না যায় */}
                                    <p className="text-gray-600 text-sm leading-6 line-clamp-3">
                                        {item.desc}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;