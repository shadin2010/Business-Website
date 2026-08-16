import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // লিংক করার জন্য
import AOS from "aos";
import "aos/dist/aos.css";

// সমস্ত সার্ভিসের ডেটা (ছবি ও ডিটেইলস সহ)
export const servicesList = [
    {
        id: "ac-fridge-scrap",
        title: "مكيف هواء جداري قديم",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVrH2YImvW2w6_5AlqWvtpfd2fU5PVPgZn1z6AJyckUVNx7rIKu7X2mlLpDjbv",
        desc: "وحدة تكييف هواء قديمة بتصميم خشبي مثبتة على الحائط، تمثل تكنولوجيا تبريد قديمة ومن المحتمل أن تكون جاهزة للاستبدال."
    },
    {
        id: "aluminium-scrap",
       title: "مكيف هواء نافذة قديم",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLDBM-ZlOYoa6Ofq5IVvDNnL-xN0h0C5u2zqc_-m-WZjMy8VS6bwf0nEG4NV8h",
        desc: "وحدة تكييف هواء نافذة كلاسيكية مثبتة في الحائط، تتميز بمفاتيح تحكم يدوية وقابس طاقة متصل بالكهرباء."
    },
    {
        id: "battery-scrap",
        title: "وحدة تكييف خارجية قديمة",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyQxWZGoh-5WiqM3yDMyg5y3gJr9G13bFaSoSvMWGMN58GPnNQ-1dvk3OyHo7l",
        desc: "وحدة مكثف تكييف هواء خارجية قديمة ومتهالكة موضوعة على وسادة خرسانية بجوار منزل مبني من الطوب."
    },
    {
        id: "building-demolition",
        title: "وحدة تكييف خارجية صدئة",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCn7KGe0LSJt_KN60TyMYntJhPvA-rdzVlt0l-U8VOL5aAbjigg42A6qL0Sl_b",
        desc: "وحدة مكثف تكييف هواء خارجية قديمة يعلوها الصدأ الشديد موضوعة على سطح مبلط، وتظهر عليها علامات التآكل والتلف الواضحة."
    },
    {
        id: "copper-scrap",
        title: "وحدات تكييف هواء مستعملة",
        image: "https://images.jdmagicbox.com/quickquotes/images_main/ac-scrap-2220253393-vmj1s26g.jpg",
        desc: "تتراكم وحدات تكييف هواء قديمة، مفككة، ومكدسة في هذه الساحة الخارجية، جاهزة لإعادة تدوير خردة المعادن"
    },
    {
        id: "iron-steel-scrap",
        title: "مجموعة وحدات التكييف الخارجية",
        image: "https://static.wixstatic.com/media/ab3e58_f7c1394d21eb45718e8a02a4623b062a~mv2.jpg/v1/fill/w_304,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ab3e58_f7c1394d21eb45718e8a02a4623b062a~mv2.jpg",
        desc: "يحتوي هذا المستودع على مئات وحدات تكييف الهواء الخارجية المنفصلة المكدسة، بعضها يحمل شعار"
    },
    {
        id: "electrical-scrap",
        title: "مجموعة من وحدات تكييف الهواء الداخلية القديمة والمستخدمة المكدسة",
        image: "https://mkservicecenter.co.in/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-27-at-11.08.10-AM-2.jpeg",
        desc: "تم تكديس العديد من وحدات تكييف الهواء الداخلية المستعملة والقديمة في الهواء الطلق على الخرسانة للإصلاح أو التخريد"
    },
    {
        id: "industrial-machinery",
        title: "العنوان: مستودع مكيفات الهواء المستعملة",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQ8QS2y5TH_ZTsOpxsMsrsYfaPoc4GHVyq6L6w0VJEQ&s=10",
        desc: "مستودع كبير يخزن العديد من وحدات تكييف الهواء القديمة والمستعملة الجاهزة لخدمات شراء الخردة المعدنية اليوم"
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
        <h1 className='text-3xl font-bold mb-6 text-slate-900'>ماذا نشتري   </h1>
        <p className='text-lg text-slate-600 leading-relaxed'>
            نشتري أغراضك القديمة وغير المستخدمة بأفضل الأسعار. يمكنك بسهولة بيع مكيفات الهواء القديمة، والمبردات، والسخانات، ومراوح السقف، والمراوح العمودية، وأنواع مختلفة من الأجهزة الإلكترونية الخردة الآن.
        </p>
        <p className='text-lg mt-4 text-slate-600 leading-relaxed'>
            بالإضافة إلى ذلك، نشتري جميع أنواع الألمنيوم والنحاس والحديد والأسلاك ومواد الخردة المتنوعة الأخرى بأسعار عادلة جدا. اتصل بنا!
        </p>
    </div>
   
   
    <div data-aos="fade-down" data-aos-duration="1500">
        {/* এখানে নতুন মানানসই ইমেজের লিঙ্ক যুক্ত করা হয়েছে */}
        <img 
           src="https://i.pinimg.com/1200x/38/89/dc/3889dc013d9af541323a9a1516e72770.jpg" 
           alt="Scrap Metal and Electronics" 
           className='w-full max-w-md rounded-2xl shadow-xl object-cover' 
        />
    </div>
</div>

            {/* Cards Grid Section */}
            <div className='max-w-7xl mx-auto px-4 mt-28'>
                <h1 className='text-4xl sm:text-5xl font-extrabold text-center mb-16 text-slate-900' data-aos="fade-down">
                    ماذا نشتري
                </h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'>
                    {servicesList.map((item, index) => (
                        <Link 
                            to={`/service/${item.id}`} 
                            key={item.id}
                            data-aos="fade-left"
                            data-aos-delay={index * 100}
                            data-aos-duration="800"
                            className="block w-full max-w-xs"
                        >
                            {/* হোভার ইফেক্টগুলো একটি ইনার ডিভ (Inner Div) এর মধ্যে আলাদা করা হয়েছে */}
                            <div className="w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group bg-gradient-to-b from-teal-700 via-teal-500 to-white p-3">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-44 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="py-4 text-center">
                                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-xs text-slate-700 mt-2 line-clamp-2 px-2">{item.desc}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;