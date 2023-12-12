import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  const handleContactFrom=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_ni5shsm', 'template_la4qm4p', form.current, 'QvhlkepP_8T0hWpF6')
      .then((result) => {
        if(result){
          toast.success('Your email send successfully')
        }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div>
      <div className="lg:grid grid-cols-3">
        <div className="text-white pl-8 md:pl-12 lg:pl-0">
          <h3 className="uppercase text-lg font-semibold">Contact Info</h3>
          <div className="flex gap-6 items-center mt-8 ">
            <div className="w-20 h-20 bg-gradient-to-r from-[#2A2A2A] to-[#151515] flex items-center justify-center text-3xl rounded-lg">
              <MdMailOutline/>
            </div>
            <div>
              <h4 className="text-[#595858] font-semibold text-lg">MAIL US</h4>
              <h4 className="text-[#e1e0e0] mt-1">sakibalhasan.me1@mail.com</h4>
            </div>
          </div>
          <div className="flex gap-6 items-center mt-14 ">
            <div className="w-20 h-20 bg-gradient-to-r from-[#2A2A2A] to-[#151515] flex items-center justify-center text-3xl rounded-lg">

            <LuPhone/>
            </div>
            <div>
                <div className="text-[#595858] font-semibold text-lg">CONTACT US</div>
              <h4 className="text-[#e1e0e0] mt-1">+880 1961629262</h4>

            </div>
          </div>
          <div className="flex gap-6 items-center mt-14 mb-10 ">
            <div className="w-20 h-20 bg-gradient-to-r from-[#2A2A2A] to-[#151515] flex items-center justify-center text-3xl rounded-lg">

            <MdOutlineLocationOn/>
            </div>
            <div >
            <h4 className="text-[#595858] font-semibold text-lg">LOCATION</h4>
            <h4 className="text-[#e1e0e0] mt-1">Dhaka, Bangladesh</h4>
            </div>

          </div>
          <div className="mt-12">
            <h2 className="uppercase text-lg font-semibold">Social info</h2>
            <div className="flex mt-8 justify-start gap-6 items-center">
              <button className="w-20 h-20 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] rounded-full hover:text-black hover:bg-gradient-to-r hover:from-[#fff] hover:to-[#1A1A1A] flex items-center justify-center text-3xl">
                <FaFacebookF />
              </button>
              <button className="w-20 h-20 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] rounded-full hover:text-black hover:bg-gradient-to-r hover:from-[#fff] hover:to-[#1A1A1A] flex items-center justify-center text-3xl">
                <FaLinkedinIn />
              </button>
              <div></div>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-12 bg-gradient-to-r mt-8 lg-mt-0 from-[#202020] to-[#151515] col-span-2 rounded-3xl">
          <h2 className="text-5xl font-bold text-white">
            Let&apos;s work <span className="text-[#E6B31e]">together.</span>
          </h2>
          <form ref={form} onSubmit={handleContactFrom}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              id=""
              className=" rounded-xl border-none h-14 mt-8 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] text-white px-5 w-full"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              id=""
              className=" rounded-xl border-none h-14 mt-4 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] text-white px-5 w-full"
            />
            <input
              type="text"
              placeholder="Your Subject"
              required
              name="from_name"
              id=""
              className=" rounded-xl border-none h-14 mt-4 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] text-white px-5 w-full"
            />
            <textarea
              name="message"
              id=""
              placeholder="Your Message"
              required
              className=" rounded-xl border-none h-40 pt-5 mt-4 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] text-white px-5 w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-[#343333] text-white hover:bg-[#fff] hover:text-black h-14 rounded-xl mt-4 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
