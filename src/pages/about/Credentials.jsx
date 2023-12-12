import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import user from "../../assets/sakib-al-hasan-10.jpg";
import { NavLink } from "react-router-dom";

const Credentials = () => {
    return (
        <div className="mt-12">
            <div className="grid grid-cols-3 gap-10">

            <div className="text-[#fff]">
            <div className="bg-gradient-to-r from-[#202020] to-[#151515] rounded-3xl">
          <div className="p-8 w-full h-full">
            <img src={user} alt="" className=" w-full h-full rounded-3xl" />

          </div>
          <div className="px-8 pb-8 text-center">

          <h3 className="text-3xl font-semibold">Sakib Al Hasan</h3>
          <div className="flex mt-8 justify-center gap-6 items-center">
              <button className="w-14 h-14 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] rounded-full hover:text-black hover:bg-gradient-to-r hover:from-[#fff] hover:to-[#1A1A1A] flex items-center justify-center text-2xl border border-[#393939]">
                <FaFacebookF />
              </button>
              <button className="w-14 h-14 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] rounded-full hover:text-black hover:bg-gradient-to-r hover:from-[#fff] hover:to-[#1A1A1A] flex items-center justify-center text-2xl border border-[#393939]">
                <FaLinkedinIn />
              </button>
            </div>
            <div className="mt-8">

            <NavLink to={"/contact"}>

          <button className="bg-[#343333] text-white hover:bg-[#fff] hover:text-black h-10 rounded-xl  w-full font-bold">Contact Me</button>
            </NavLink>
            </div>
          </div>
        </div>
            </div>
            <div className="col-span-2 text-white px-10">
                <h3 className="uppercase text-xl font-semibold">about me</h3>
                <p className="mt-8 text-[#dfdede] text-lg font-medium">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                <p className="mt-6 text-[#dfdede] text-lg font-medium">Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.</p>

                <h3 className="uppercase text-xl font-semibold mt-14">EDUCATION</h3>

                <p className="mt-5 text-md font-medium text-[#9e9c9c]">2004 - 2007</p>
                <h4 className="mt-2 text-2xl text-[#E6B31e] font-semibold">Bachelor Degree in Psychology</h4>
                <p className="mt-2 text-md font-medium text-[#9e9c9c]">University of California</p>
                <p className="mt-3 text-[#dfdede] text-lg font-medium">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>

                <h3 className="uppercase text-xl font-semibold mt-14">skills</h3>

            </div>
            </div>
        </div>
    );
};

export default Credentials;