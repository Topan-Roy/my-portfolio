import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineAddIcCall } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-bold">
          Contact <span className="text-cyan-500">Me</span>
        </h3>
        <p className="text-gray-400 mt-2 text-lg">I’d love to hear from you</p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form className="flex flex-col flex-1 gap-5 bg-gray-800 p-8 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
          ></textarea>
          <button className="bg-cyan-500 hover:bg-cyan-600 transition-all px-6 py-3 rounded-lg font-semibold w-full sm:w-fit">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 flex-1 bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 hover:translate-x-2 transition">
            <MdOutlineEmail className="text-4xl p-2 bg-cyan-500 rounded-full" />
            <span className="text-lg">roytopan734@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 hover:translate-x-2 transition">
            <MdOutlineAddIcCall className="text-4xl p-2 bg-cyan-500 rounded-full" />
            <span className="text-lg">+8801706541105</span>
          </div>
          <div className="flex items-center gap-4 hover:translate-x-2 transition">
            <CiLocationOn className="text-4xl p-2 bg-cyan-500 rounded-full" />
            <span className="text-lg">Dinajpur, Bangladesh</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
