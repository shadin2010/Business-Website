import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // লিংক করার জন্য
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
                <div className='max-w-xl' data-aos="fade-down" data-aos-duration="1500">
                    <h1 className='text-3xl font-bold mb-6 text-slate-900'>What We Buy​</h1>
                    <p className='text-lg text-slate-600 leading-relaxed'>
                        We buy all types of scrap materials across Eastern province and nearby areas. This includes iron, steel, copper, aluminum, electrical scrap, industrial waste, and old machinery. We also purchase used AC, refrigerators, batteries, and electronic waste.
                    </p>
                    <p className='text-lg mt-4 text-slate-600 leading-relaxed'>
                        We provide fast pickup, fair pricing, and instant payment, making scrap selling simple and hassle-free for every customer.
                    </p>
                </div>
                <div data-aos="fade-down" data-aos-duration="1500">
                    <img src="https://scrapyarddammam.com/wp-content/uploads/2026/07/Industrial-Scrap.webp" alt="Industrial Scrap" className='w-full max-w-md rounded-2xl shadow-xl object-cover' />
                </div>
            </div>

            {/* Cards Grid Section */}
            <div className='max-w-7xl mx-auto px-4 mt-28'>
                <h1 className='text-4xl sm:text-5xl font-extrabold text-center mb-16 text-slate-900' data-aos="fade-down">
                    WHAT WE BUY
                </h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'>
                    {servicesList.map((item, index) => (
                        <Link 
                            to={`/service/${item.id}`} 
                            key={item.id}
                            data-aos="fade-left"
                            data-aos-delay={index * 100}
                            data-aos-duration="800"
                            className="w-full max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group bg-gradient-to-b from-teal-700 via-teal-500 to-white p-3"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-44 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="py-4 text-center">
                                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                <p className="text-xs text-slate-700 mt-2 line-clamp-2 px-2">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;