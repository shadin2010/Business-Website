import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// সমস্ত সার্ভিসের ডেটা (ছবি ও ডিটেইলস সহ)
export const servicesList = [
    {
        id: "ac-fridge-scrap",
        title: "مكيفات هواء نافذة خردة",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDJ2xG_9uAfFADXqldmxStwTl1JWnY4rYPU7coiPLRrLBSwBbO1b0LZHDsvJ6L",
        desc: "كومة من مكيفات الهواء القديمة والمكسورة من نوع النافذة، وهي جاهزة تماما لإعادة التدوير أو استخراج الخردة المعدنية."
    },
    {
        id: "aluminium-scrap",
        title: "وحدات تكييف خارجية خردة",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMNosC0lGwLdWJ8OHBy7Cim68b8sX7qTsockHa5F3SjWjcUgehRV5Muk_QK7pT",
        desc: "كومة كبيرة من وحدات مكثف تكييف الهواء الخارجية المستعملة والمهملة، تم جمعها معا لإعادة تدوير الخردة المعدنية وقطع الغيار."
    },
    {
        id: "battery-scrap",
        title: "مكيف خردة في شاحنة",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT78o10JWNIGMmVJBzH3LBD_X7FYdb4IPBBy_VNgzHDS8KHHZvZ3V_Pjm-uzsB4",
        desc: "وحدة تكييف هواء قديمة ومهملة محملة في الجزء الخلفي من شاحنة صغيرة، جاهزة لإعادة تدوير الخردة المعدنية."
    },
    {
        id: "building-demolition",
        title: "وحدات تكييف نافذة خردة",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSE5rWu4kBzLmNgJNYn2d_CLdIbS7tYYajXCZnYiAHZJbC54gfBdY_O4x1lqqdb",
        desc: "مجموعة من وحدات تكييف الهواء القديمة والمهملة من نوع النافذة، مجمعة معا لإعادة تدوير الخردة المعدنية واستخراج القطع."
    },
   
   
    {
        id: "copper-scrap",
        title: "أجهزة خردة لإعادة التدوير",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTr8Uhs4BkoatXXqzwv79nuvkH5qL8Puh4B0DPchcH6w_VvaTBXwi2iXnQhJgFE",
        desc: "كومة خارجية كبيرة من مكيفات الهواء المهملة والأجهزة المنزلية القديمة المجمعة لإعادة تدوير الخردة المعدنية والنفايات الإلكترونية."
    },
    {
        id: "iron-steel-scrap",
        title: "وحدات تكييف سبليت داخلية خردة",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3bnqMBurnKPCn-xppWhAjPzPE1XJsG3jE36JCsrrgPDPYtlhS1QgNHeoeXiGq",
        desc: "كومة كبيرة من وحدات مكيفات الهواء المنفصلة الداخلية القديمة والمتسخة والمفككة المجمعة بغرض الخردة وإعادة التدوير."
    },
    {
        id: "electrical-scrap",
        title: "مكيفات هواء خردة متراكمة",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuVwanQsMBCtZ2XU4HE8BPt7kAPnstleOmMpQUM8P9fCB3QvM3PZjegORkOok0",
        desc: "مجموعة متراكمة من وحدات تكييف الهواء القديمة والمفككة من نوع النافذة والمحمولة، مجمعة لاستخراج الخردة المعدنية وإعادة التدوير."
    },
    {
        id: "industrial-machinery",
        title: "مكيفات خردة بجوار حاوية نفايات",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlS0WJYXuMgR0uMuGYwyEr_x_JIVhQDTxEnmP5YvyUz7QhZkm98QeTFA-XwOie",
        desc: "مجموعة من مكيفات الهواء المنفصلة ومعدات التبريد المهملة مكدسة على منصات خشبية بالقرب من حاوية خردة صدئة."
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
                    <img src="https://i.pinimg.com/1200x/38/89/dc/3889dc013d9af541323a9a1516e72770.jpg" alt="Industrial Scrap" className='w-full max-w-md rounded-2xl shadow-xl object-cover' />
                </div>
            </div>

            {/* Cards Grid Section */}
            <div className='max-w-7xl mx-auto px-4 mt-20'>
                <div data-aos="fade-down">
                    <div className='text-4xl sm:text-5xl font-extrabold p-8 text-center text-slate-900 mb-4'>
                        <h1>خدمات شراء السكراب</h1>
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