import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // রাউটিংয়ের জন্য Link import করা হলো
import AOS from "aos";
import "aos/dist/aos.css";

// প্রোডাক্ট বা সার্ভিসের ডেটা লিস্ট (যাতে ডাইনামিকলি পেজ ওপেন হতে পারে)
export const productsList = [
    {
        id: "product-1",
        title: "Old AC Buyer",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "We are old AC buyers in Dammam, offering best prices, instant payment, and fast pickup service for used air conditioners."
    },
    {
        id: "product-2",
        title: "Old AC Buyer",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "We are old AC buyers in Dammam, offering best prices, instant payment, and fast pickup service for used air conditioners."
    },
    {
        id: "product-3",
        title: "Old AC Buyer",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "We are old AC buyers in Dammam, offering best prices, instant payment, and fast pickup service for used air conditioners."
    },
    {
        id: "product-4",
        title: "Old AC Buyer",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "We are old AC buyers in Dammam, offering best prices, instant payment, and fast pickup service for used air conditioners."
    },
    {
        id: "product-5",
        title: "Old AC Buyer",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "We are old AC buyers in Dammam, offering best prices, instant payment, and fast pickup service for used air conditioners."
    },
    {
        id: "product-6",
        title: "Old AC Buyer",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "We are old AC buyers in Dammam, offering best prices, instant payment, and fast pickup service for used air conditioners."
    },
    {
        id: "product-7",
        title: "Old AC Buyer",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "We are old AC buyers in Dammam, offering best prices, instant payment, and fast pickup service for used air conditioners."
    },
    {
        id: "product-8",
        title: "Old AC Buyer",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "We are old AC buyers in Dammam, offering best prices, instant payment, and fast pickup service for used air conditioners."
    },
    {
        id: "product-9",
        title: "Old AC Buyer",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "We are old AC buyers in Dammam, offering best prices, instant payment, and fast pickup service for used air conditioners."
    },
    {
        id: "product-10",
        title: "Old AC Buyer",
        image: "https://www.bestscrapbuyeratdammam.com/wp-content/uploads/2026/04/OldACBuyer.webp",
        desc: "We are old AC buyers in Dammam, offering best prices, instant payment, and fast pickup service for used air conditioners."
    }
];

const ProductCard = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    return (
        <div>
            {/* product card section */}
            <div>
                <div className='text-5xl font-extrabold p-8 text-center text-slate-900' data-aos="zoom-in">
                    <h1>Scrap Buying Services</h1>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 p-9 justify-items-center'>
                    {productsList.map((item, index) => (
                        <div 
                            key={item.id}
                            data-aos="fade-right"
                            data-aos-delay={index * 150}
                            data-aos-duration="1000"
                        >
                            {/* Link দিয়ে র‍্যাপ করা হয়েছে যাতে ক্লিক করলে ডাইনামিক ডিটেইলস পেজে যায় */}
                            <Link to={`/service/${item.id}`} className="block">
                                <div className="w-[290px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-5 hover:shadow-2xl duration-500 p-4 mt-7 bg-gradient-to-b from-purple-700 via-purple-500 to-white cursor-pointer">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                    <div className="p-5 text-center">
                                        <h1 className="text-xl font-bold text-gray-900 mb-3">
                                            {item.title}
                                        </h1>
                                        <p className="text-gray-700 text-sm leading-6 line-clamp-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;