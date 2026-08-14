import { FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#06032c] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div className="transition-all duration-500 hover:translate-y-[-2px]">
          <h2 className="text-2xl font-bold text-green-500 mb-4">
            Top Scrap Dammam
          </h2>
          <p className="text-gray-300 leading-8">
            We provide fast, reliable, and eco-friendly scrap buying services across Dammam and the Eastern Province.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-3xl text-sky-400 mb-3">Quick Links</h2>
          <div className="w-32 h-1 bg-white mb-6 transition-all duration-500 hover:w-40"></div>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="/" className="hover:text-green-400 hover:translate-x-2 inline-block transition-all duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-400 hover:translate-x-2 inline-block transition-all duration-300">
                Our Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-400 hover:translate-x-2 inline-block transition-all duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="https://wa.me/966510904147" className="hover:text-green-400 hover:translate-x-2 inline-block transition-all duration-300">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h2 className="text-3xl text-sky-400 mb-3">Policy</h2>
          <div className="w-32 h-1 bg-white mb-6 transition-all duration-500 hover:w-40"></div>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-green-400 hover:translate-x-2 cursor-pointer transition-all duration-300">
              Terms & Conditions
            </li>
            <li className="hover:text-green-400 hover:translate-x-2 cursor-pointer transition-all duration-300">
              Privacy Policy
            </li>
            <li className="hover:text-green-400 hover:translate-x-2 cursor-pointer transition-all duration-300">
              Refund Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-3xl text-sky-400 mb-3">Contact Us</h2>
          <div className="w-40 h-1 bg-white mb-6 transition-all duration-500 hover:w-48"></div>
          <ul className="space-y-4 text-gray-300">
            <li className="hover:translate-x-1 transition-transform duration-300">📧 scrapbuyer.best@gmail.com</li>
            <li className="hover:translate-x-1 transition-transform duration-300">📞 +966 51 090 4147</li>
            <li className="hover:translate-x-1 transition-transform duration-300">📍 Dammam, Eastern Province, KSA</li>
          </ul>

          <div className="flex gap-4 mt-8">
            <a
              href="https://www.facebook.com/scrapbuyer6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500 flex justify-center items-center hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/966510904147"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500 flex justify-center items-center hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:scrapbuyer.best@gmail.com"
              className="w-10 h-10 rounded-full bg-green-500 flex justify-center items-center hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 Top Scrap Dammam. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;