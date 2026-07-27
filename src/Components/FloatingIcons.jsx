import { FaWhatsapp, FaFacebookF, FaEnvelope } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed right-5 bottom-6 flex flex-col gap-3 z-50">

      <a
        href="#"
        className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 duration-300"
      >
        <FaWhatsapp />
      </a>

      <a
        href="#"
        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 duration-300"
      >
        <FaFacebookF />
      </a>

      <a
        href="#"
        className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:scale-110 duration-300"
      >
        <FaEnvelope />
      </a>

    </div>
  );
};

export default FloatingIcons;