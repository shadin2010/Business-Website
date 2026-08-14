import { FaWhatsapp, FaFacebookF, FaEnvelope } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed right-5 bottom-6 flex flex-col gap-3 z-50">
      
      {/* WhatsApp Link */}
      <a
        href="https://wa.me/966510904147"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 duration-300 shadow-lg"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Facebook Link */}
      <a
        href="https://www.facebook.com/scrapbuyer6"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 duration-300 shadow-lg"
      >
        <FaFacebookF className="text-xl" />
      </a>

      {/* Email Link */}
      <a
        href="mailto:scrapbuyer.best@gmail.com"
        className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:scale-110 duration-300 shadow-lg"
      >
        <FaEnvelope className="text-xl" />
      </a>

    </div>
  );
};

export default FloatingIcons;