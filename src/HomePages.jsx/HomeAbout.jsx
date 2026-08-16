import React from 'react';
// ১. Framer Motion এবং React Icons ইম্পোর্ট করা হলো
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

// ২. itemVariants ডিফাইন করা হলো
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

const HomeAbout = () => {
    return (
        <div dir="rtl" className="text-right">
           
           <div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                    
                    {/* Left Column Content */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants} 
                        className="lg:col-span-3 space-y-8"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 leading-tight tracking-tight">
                            رواد حلول إدارة النفايات المسؤولة لأكثر من <span className='text-green-600'>عقد من الزمن</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            في شركة شراء الخردة، نحن لسنا مجرد جامعين؛ بل نحن مساهمون في الاقتصاد الدائري. تأسسنا برؤية تبسيط صناعة خردة المعادن في المملكة العربية السعودية، وقد تطورنا لنصبح شريكاً موثوقاً لشركات المقاولات الكبرى، والمصانع الصناعية، والجهات التجارية.
                        </p>
                        <p className="text-slate-600 leading-relaxed border-r-4 border-green-200 pr-6 italic">
                            مهمتنا بسيطة: تحويل المواد غير المرغوب فيها إلى موارد قيمة مع ضمان الامتثال لللوائح وتقديم خدمة عملاء استثنائية. نحن نؤمن بالتعاملات الشفافة، والتسعير العادل، وتقليل الأثر البيئي من خلال أفضل ممارسات إعادة التدوير.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center space-x-3 space-x-reverse bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className='font-medium'>تغطية الدمام، الظهران، والخبر</span>
                            </div>
                            <div className="flex items-center space-x-3 space-x-reverse bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className='font-medium'>مورد معتمد ومرخص</span>
                            </div>
                            <div className="flex items-center space-x-3 space-x-reverse bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className='font-medium'>المعادن الحديدية وغير الحديدية</span>
                            </div>
                            <div className="flex items-center space-x-3 space-x-reverse bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className='font-medium'>أسطول لوجستي حديث ومتطور</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column Image */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={itemVariants} 
                        className="lg:col-span-2 relative group h-full min-h-[400px]"
                    >
                        <img 
                            src="https://scrapyarddammam.com/wp-content/uploads/2026/07/Industrial-Scrap.webp" 
                            alt="Industrial Scrap" 
                            className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl shadow-slate-500/30 transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-green-900/30 rounded-3xl group-hover:bg-transparent transition duration-500"></div>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                            <p className="font-bold text-slate-900 text-lg">إخلاء مواقع فعال</p>
                            <p className="text-sm text-slate-600 mt-1">نتعامل مع الخردة الصناعية الثقيلة بخبرتنا وفريقنا المتخصص والآليات الحديثة.</p>
                        </div>
                    </motion.div>

                </div>
            </div>

           </div>
        
        
        
         
        
        
        
        
        </div>
    );
};

export default HomeAbout;