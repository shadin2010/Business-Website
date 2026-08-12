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
        <div>
           
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
                            Pioneering Responsible Waste Management Solutions Since <span className='text-green-600'>Over a Decade</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            At Scrap Buyer, we are not just collectors; we are facilitators of the circular economy. Founded with a vision to streamline the scrap metal industry in Saudi Arabia, we have grown into a trusted partner for major construction firms, industrial plants, and commercial entities.
                        </p>
                        <p className="text-slate-600 leading-relaxed border-l-4 border-green-200 pl-6 italic">
                            Our mission is simple: to turn unwanted materials into valuable resources while ensuring regulatory compliance and providing exceptional customer service. We believe in transparent dealings, fair pricing, and minimizing environmental footprint through best-in-class recycling practices.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className='font-medium'>Dammam, Dhahran, Khobar Coverage</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className='font-medium'>Licensed & Approved Vendor</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className='font-medium'>Ferrous & Non-Ferrous Metals</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className='font-medium'>State-of-the-art Logistics Fleet</span>
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

           </div>
       
       
       
          <div>


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


          </div>
       
       
       
       
       
       
        </div>
    );
};

export default HomeAbout;