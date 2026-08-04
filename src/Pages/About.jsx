import React from 'react';
import { motion } from 'framer-motion'; // অ্যানিমেশনের জন্য
import { FaCheckCircle, FaTruck, FaHandHoldingUsd, FaShieldAlt, FaUsers, FaIndustry, FaGlobeAsia } from 'react-icons/fa';

// অ্যানিমেশন ভেরিয়েন্ট - যাতে কোড ক্লিন থাকে
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 } // বাচ্চাদের সিকোয়েন্স অনুযায়ী আসবে
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
    
    // ডেটা সেকশন
    const stats = [
        { icon: <FaIndustry />, label: "Years Experience", value: "15+" },
        { icon: <FaGlobeAsia />, label: "Locations Covered", value: "50+" },
        { icon: <FaUsers />, label: "Happy Clients", value: "5000+" },
        { icon: <FaTruck />, label: "Daily Pickups", value: "200+" }
    ];

    const coreValues = [
        { icon: <FaShieldAlt className="w-7 h-7 text-green-600" />, title: "Integrity", desc: "Honest pricing and transparent weighing processes." },
        { icon: <FaIndustry className="w-7 h-7 text-green-600" />, title: "Industrial Solutions", desc: "Specialized handling for large-scale commercial scrap." },
        { icon: <FaGlobeAsia className="w-7 h-7 text-green-600" />, title: "Sustainability", desc: "Eco-friendly recycling processes that reduce waste." },
        { icon: <FaHandHoldingUsd className="w-7 h-7 text-green-600" />, title: "Fair Value", desc: "Guaranteed competitive market prices for all materials." }
    ];

    return (
        <motion.div 
            className="bg-white text-slate-800 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            
            {/* --- HERO SECTION (লম্বা এবং আকর্ষণীয়) --- */}
            <div className="relative bg-slate-950 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                {/* ব্যাকগ্রাউন্ড গ্রাফিক্স */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute left-20 top-20 w-96 h-96 bg-green-500 rounded-full filter blur-[128px]"></div>
                    <div className="absolute right-20 bottom-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px]"></div>
                </div>

                <motion.div variants={itemVariants} className="max-w-6xl mx-auto text-center relative z-10">
                    <span className="inline-block bg-green-600/20 text-green-400 text-sm font-semibold px-5 py-2 rounded-full border border-green-500/20 shadow-inner">
                        EST. 2010 - Leading the Industry
                    </span>
                    <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-tight">
                        Your Trusted Partner in <span className="text-green-500">Scrap Recycling</span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        From industrial dismantling to commercial cleanouts, Scrap Buyer offers comprehensive solutions designed for efficiency, sustainability, and maximum value return in Dammam and the Eastern Province.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-500 transition duration-300 shadow-lg shadow-green-900/30"
                        >
                            Schedule a Pickup
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 text-white rounded-xl font-medium border border-white/10 hover:bg-white/10 transition duration-300"
                        >
                            Get a Quote
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* --- STATS BAR (নতুন যুক্ত হয়েছে) --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-24">
                <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-3xl shadow-2xl shadow-slate-500/10 border border-slate-100"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center border-r border-slate-100 last:border-r-0 px-4">
                            <div className="inline-block p-4 rounded-full bg-green-50 text-green-600 text-2xl mb-4">
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-bold text-slate-950 tracking-tight">{stat.value}</div>
                            <div className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>


            {/* --- MAIN STORY SECTION (আরও বড় ও ডিটেইলড) --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                    
                    <motion.div variants={itemVariants} className="lg:col-span-3 space-y-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 leading-tight tracking-tight">
                            Pioneering Responsible Waste Management Solutions Since <span className='text-green-600'>Over a Decade</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            At Scrap Buyer, we are not just collectors; we are facilitators of the circular economy. Founded with a vision to streamline the scrap metal industry in Saudi Arabia, we have grown into a trusted partner for major construction firms, industrial plants, and commercial entities.
                        </p>
                        <p className="text-slate-600 leading-relaxed border-l-4 border-green-200 pl-6 italic">
                            Our mission is simple: to turn unwanted materials into valuable resources while ensuring regulatory compliance and providing exceptional customer service. We believe in transparent dealings, fair pricing, and minimizing environmental footprint through best-in-class recycling practices.
                        </p>
                        
                        <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5" />
                                <span className='font-medium'>Dammam, Dhahran, Khobar Coverage</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5" />
                                <span className='font-medium'>Licensed & Approved Vendor</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5" />
                                <span className='font-medium'>Ferrous & Non-Ferrous Metals</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5" />
                                <span className='font-medium'>State-of-the-art Logistics Fleet</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-2 relative group h-full min-h-[400px]">
                        <img 
                            src="https://images.unsplash.com/photo-1605647550641-7849657e931a?q=80&w=800&auto=format&fit=crop" 
                            alt="Industrial Scrap" 
                            className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl shadow-slate-500/30 transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-green-900/30 rounded-3xl group-hover:bg-transparent transition duration-500"></div>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                            <p className="font-bold text-slate-900 text-lg">Efficient Site Clearance</p>
                            <p className="text-sm text-slate-600 mt-1">We handle heavy industrial scrap with our expert crew and machinery.</p>
                        </div>
                    </motion.div>

                </div>
            </div>


            {/* --- CORE VALUES SECTION (কার্ডগুলো আরও বড় করা হয়েছে) --- */}
            <div className="bg-slate-50 py-24 mt-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-green-600 font-bold uppercase tracking-wide">Our Pillars</span>
                        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tighter text-slate-950">
                            The Principles That Drive Us
                        </h2>
                        <p className="mt-5 text-lg text-slate-600">
                            We operate on a foundation of core values that ensure every transaction is beneficial for our clients, our community, and the environment.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {coreValues.map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-500/5 border border-slate-100 hover:border-green-200 hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-8 border-2 border-green-100 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-950 mb-3 group-hover:text-green-700">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* --- FINAL CTA SECTION --- */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 my-20 text-center bg-green-600 rounded-[2rem] text-white shadow-2xl shadow-green-600/30">
                <motion.div variants={itemVariants}>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to Recycle Your Scrap?</h2>
                    <p className="mt-5 text-xl text-green-100 max-w-2xl mx-auto">
                        Contact us today for a free consultation or an instant quote. Our team is ready to assist you with professional and timely service.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                         <a href="tel:+966500000000" className="px-10 py-5 bg-white text-green-700 rounded-2xl font-bold text-lg hover:bg-slate-100 transition shadow-md">
                            Call Us Now: +966 5X XXX XXXX
                        </a>
                         <button className="px-10 py-5 bg-green-700 text-white rounded-2xl font-bold text-lg hover:bg-green-800 transition border border-green-500">
                            WhatsApp Message
                         </button>
                    </div>
                </motion.div>
            </div>

        </motion.div>
    );
};

export {About};