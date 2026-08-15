import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTruck, FaHandHoldingUsd, FaShieldAlt, FaUsers, FaIndustry, FaGlobeAsia } from 'react-icons/fa';

// Scroll animation variants
const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { 
            staggerChildren: 0.2 
        }
    }
};

const About = () => {
    
    const stats = [
        { icon: <FaIndustry />, label: "سنوات الخبرة", value: "+3" },
        { icon: <FaGlobeAsia />, label: "المناطق المغطاة", value: "+15" },
        { icon: <FaUsers />, label: "عملاء سعيدون", value: "+500" },
        { icon: <FaTruck />, label: "الاستلام اليومي", value: "+50" }
    ];

    const coreValues = [
        { icon: <FaShieldAlt className="w-7 h-7 text-green-600" />, title: "الأمانة والنزاهة", desc: "أسعار عادلة، وزان دقيق، وتاملات شفافة لجميع أنواع الخردة المعدنية." },
        { icon: <FaIndustry className="w-7 h-7 text-green-600" />, title: "خدمة موثوقة", desc: "استلام سريع وخدمة إزالة فعالة لمخلفات المنازل والمنشآت التجارية." },
        { icon: <FaGlobeAsia className="w-7 h-7 text-green-600" />, title: "صديق للبيئة", desc: "ممارسات إعادة تدوير مسؤولة تضمن المعالجة السليمة للمعادن والأجهزة." },
        { icon: <FaHandHoldingUsd className="w-7 h-7 text-green-600" />, title: "أفضل قيمة نقدية", desc: "أسعار سوق تنافسية ومضمونة للنحاس، الألومنيوم، الحديد، والأجهزة القديمة." }
    ];

    return (
        <div dir="rtl" className="bg-white text-slate-800 overflow-hidden font-sans">
            
            {/* --- HERO SECTION --- */}
            <div className="relative bg-slate-950 text-white pt-36 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 pointer-events-none"
                >
                    <div className="absolute left-1/4 top-10 w-96 h-96 bg-green-500 rounded-full filter blur-[140px]"></div>
                    <div className="absolute right-1/4 bottom-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[140px]"></div>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={scrollAnimation}
                    className="max-w-6xl mx-auto text-center relative z-10"
                >
                    <span className="inline-block bg-green-600/20 text-green-400 text-sm font-semibold px-6 py-2.5 rounded-full border border-green-500/20 shadow-inner">
                        مشتري خردة معتمد في الدمام
                    </span>
                    <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-tight">
                        نشتري جميع أنواع <span className="text-green-500 inline-block">الخردة والأجهزة القديمة</span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        لديك مكيفات قديمة، سخانات، نحاس، ألومنيوم، أو خردة حديد؟ نقدم خدمة استلام سريعة، دفع نقدي فوري، وأفضل أسعار السوق في الدمام والمناطق المجاورة.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <motion.button 
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-500 transition duration-300 shadow-lg shadow-green-900/40"
                        >
                            حجز موعد الاستلام
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 text-white rounded-xl font-medium border border-white/10 hover:bg-white/10 transition duration-300 backdrop-blur-sm"
                        >
                            احصل على تسعيرة
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* --- STATS BAR --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-24">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={scrollAnimation}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-3xl shadow-2xl shadow-slate-500/10 border border-slate-100"
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            whileHover={{ y: -5 }}
                            className="text-center border-l border-slate-100 last:border-l-0 px-4 cursor-pointer"
                        >
                            <div className="inline-block p-4 rounded-full bg-green-50 text-green-600 text-2xl mb-4 shadow-sm">
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-bold text-slate-950 tracking-tight">{stat.value}</div>
                            <div className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* --- MAIN STORY SECTION --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                    
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={scrollAnimation}
                        className="lg:col-span-3 space-y-8"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 leading-tight tracking-tight">
                            شريكك المحلي الموثوق لـ <span className='text-green-600'>إعادة تدوير المعادن والأجهزة</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            في شركة شراء الخردة، نتخصص في شراء وإعادة تدوير جميع أنواع الخردة المعدنية بما في ذلك النحاس، الألومنيوم، الحديد، بالإضافة إلى الأجهزة المنزلية المستخدمة أو التالفة مثل السخانات، وحدات التكييف، والمراوح.
                        </p>
                        <p className="text-slate-600 leading-relaxed border-r-4 border-green-200 pr-6 italic bg-green-50/50 py-3 rounded-l-xl">
                            هدفنا هو توفير تجربة مريحة وخالية من المتاعب لعملائنا. سواء كنت تقوم بتفريغ منزلك، مكتبك، أو موقع عملك، يضمن فريقنا الاستلام السريع والدفع النقدي الفوري بكل شفافية.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            {[
                                "تغطية الدمام والمنطقة الشرقية",
                                "الدفع النقدي الفوري",
                                "خردة النحاس، الألومنيوم والحديد",
                                "جمع المكيفات، السخانات والمراوح"
                            ].map((text, i) => (
                                <div 
                                    key={i}
                                    className="flex items-center space-x-3 space-x-reverse bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm"
                                >
                                    <FaCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                    <span className='font-medium'>{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={scrollAnimation}
                        className="lg:col-span-2 relative group h-full min-h-[400px]"
                    >
                        <div className="w-full h-full">
                            <img 
                                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop" 
                                alt="Scrap Collection and Recycling" 
                                className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-slate-500/30 transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                            <p className="font-bold text-slate-900 text-lg">استلام سريع ومرن</p>
                            <p className="text-sm text-slate-600 mt-1">نتولى عمليات التحميل والنقل بكل أمان وكفاءة.</p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* --- CORE VALUES SECTION --- */}
            <div className="bg-slate-50 py-24 mt-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={scrollAnimation}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="text-green-600 font-bold uppercase tracking-wide bg-green-100/60 px-4 py-1.5 rounded-full text-sm">لماذا تختارنا</span>
                        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tighter text-slate-950">
                            المبادئ التي تقود عملنا
                        </h2>
                        <p className="mt-5 text-lg text-slate-600">
                            نحن نعمل على أساس الثقة، التسعير العادل، ورضا العملاء، لضمان حصولك على أفضل قيمة مقابل أغراضك القديمة.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {coreValues.map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={scrollAnimation}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-500/5 border border-slate-100 hover:border-green-300 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-8 border-2 border-green-100 group-hover:bg-green-600 transition-all duration-300 shadow-sm">
                                    <div className="group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-green-700 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* --- FINAL CTA SECTION --- */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scrollAnimation}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 my-20 text-center bg-gradient-to-br from-green-600 to-green-700 rounded-[2.5rem] text-white shadow-2xl shadow-green-600/30 relative overflow-hidden"
            >
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -left-10 -top-10 w-48 h-48 bg-black/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">لديك خردة أو أجهزة قديمة للبيع؟</h2>
                    <p className="mt-5 text-xl text-green-100 max-w-2xl mx-auto">
                        اتصل بنا اليوم للحصول على تسعيرة فورية وخدمة استلام سريعة في الدمام. نحن على بعد مكالمة هاتفية أو رسالة واتساب!
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                         <motion.a 
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+966510904147" 
                            className="px-10 py-5 bg-white text-green-700 rounded-2xl font-bold text-lg hover:bg-slate-100 transition shadow-lg"
                         >
                            اتصل بنا الآن: 966510904147+
                         </motion.a>
                         <motion.a 
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/966510904147" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-10 py-5 bg-green-800 text-white rounded-2xl font-bold text-lg hover:bg-green-900 transition border border-green-500/50 flex items-center justify-center shadow-lg"
                         >
                            راسلنا عبر واتساب
                         </motion.a>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export { About };