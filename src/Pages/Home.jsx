import React from 'react';
import Banner from '../HomePages.jsx/Banner';
import ServiceCard from '../HomePages.jsx/ServiceCard';
import ProductCard from '../HomePages.jsx/ProductCard';
import HomeAbout from '../HomePages.jsx/HomeAbout';
import GoogleMapSection from '../HomePages.jsx/GoogleMapSection';
import { Helmet } from 'react-helmet-async';




const Home = () => {
   
  
  
  
  return (
        <div>

        <Helmet>

        <title>شراء سكراب الدمام | أفضل أسعار شراء المكيفات المستعملة والخردة</title>
                <meta name="description" content="Trusted scrap buyer in Dammam for used AC, aluminium, copper, iron و metal scrap. Competitive price, quick collection, same-day service এবং instant payment." />
            
        </Helmet>


    <Banner/>
    <ServiceCard/>
    <ProductCard/>
    <HomeAbout/>
    <GoogleMapSection/>
  

 


        </div>
    );
};

export default Home;