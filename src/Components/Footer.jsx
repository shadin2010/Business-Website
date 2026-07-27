import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#06032c] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">
            Shadin
          </h2>

          <p className="text-gray-300 leading-8">
            Shadin <br />
            Shadin <br />
            Shadin <br />
            Shadin <br />
            Shadin
          </p>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-3xl text-sky-400 mb-3">Menu</h2>
          <div className="w-32 h-1 bg-white mb-6"></div>

          <ul className="space-y-3 text-gray-300">
            <li>Shadin</li>
            <li>Shadin</li>
            <li>Shadin</li>
            <li>Shadin</li>
            <li>Shadin</li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h2 className="text-3xl text-sky-400 mb-3">Policy</h2>
          <div className="w-32 h-1 bg-white mb-6"></div>

          <ul className="space-y-3 text-gray-300">
            <li>Shadin</li>
            <li>Shadin</li>
            <li>Shadin</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-3xl text-sky-400 mb-3">Contact Us</h2>
          <div className="w-40 h-1 bg-white mb-6"></div>

          <ul className="space-y-4 text-gray-300">
            <li>📧 Shadin</li>
            <li>📞 Shadin</li>
            <li>📍 Shadin</li>
          </ul>

          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-green-500 flex justify-center items-center hover:bg-green-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-green-500 flex justify-center items-center hover:bg-green-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-green-500 flex justify-center items-center hover:bg-green-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 Shadin. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;