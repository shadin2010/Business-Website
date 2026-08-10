import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/navbar";
import { About } from "./Pages/About";
import { Blog } from "./Pages/Blog";
import { Services } from "./Pages/Services";
import FloatingIcons from "./Components/FloatingIcons";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import ServiceDetails from "./Pages/ServiceDetails";

function App() {
  return (
    <div>
 <Navbar />


  <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact us" element={<ContactUs />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>
      </main>




<Footer/>
<FloatingIcons />
    </div> 
    
  );
}

export default App;