import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import user from "../../assets/sakib-al-hasan-10.jpg";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <div className="bg-gradient-to-r from-[#202020] to-[#151515] rounded-3xl">
          <div className="p-8 w-full h-full">
            <img src={user} alt="" className=" w-full h-full rounded-3xl" />
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="flex items-center justify-center gap-2">
            <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt=""
            />
            <h2 className="text-7xl font-semibold text-white">SELF-SUMMARY</h2>
            <img
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt=""
            />
          </div>
          <div className="bg-gradient-to-r from-[#212121] mt-5 p-10 text-white rounded-3xl to-[#131313]">
            <h2 className="text-5xl font-semibold pt-16">Sakib Al Hasan</h2>
            <p className="mt-4">
              I am a San francisco-based product designer with a focus on web
              design, illustration, a visual development. I have a diverse range
              of experience having worked across various fields and industries.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 text-white mt-5">
        <div className="bg-gradient-to-r from-[#202020] to-[#151515] rounded-3xl p-8">
          <h2 className="text-[#fff] mb-6 font-semibold text-lg">EXPERIENCE</h2>
          <h5 className="text-[#595858] font-semibold text-lg">2007 - 2017</h5>
          <h4 className="text-[#fff] mb-1 mt-2 font-semibold text-lg">
            Framer Designer & Developer
          </h4>
          <p className="text-[#595858] font-semibold text-md">
            Bluebase Designs
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#202020] to-[#151515] rounded-3xl p-8">
          <h2 className="text-[#fff] mb-6 font-semibold text-lg">EDUCATION</h2>
          <h5 className="text-[#595858] font-semibold text-lg">2007 - 2017</h5>
          <h4 className="text-[#fff] mb-1 mt-2 font-semibold text-lg">
            Bachelor Degree in Psychology
          </h4>
          <p className="text-[#595858] font-semibold text-md">
            Bluebase Designs
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-5 gap-5">
        <div className="bg-gradient-to-r from-[#202020] to-[#151515] rounded-3xl p-8">
          <div className="bg-gradient-to-r p-4 from-[#202020] to-[#151515] rounded-3xl border border-[#393939]">
            <div className="flex justify-center text-white  gap-4 items-center">
              <button className="w-20 border border-[#4a4a4a] h-20 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] rounded-full hover:text-black hover:bg-gradient-to-r hover:from-[#fff] hover:to-[#1A1A1A] flex items-center justify-center text-3xl">
                <FaFacebookF />
              </button>
              <button className="w-20 border border-[#4a4a4a] h-20 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] rounded-full hover:text-black hover:bg-gradient-to-r hover:from-[#fff] hover:to-[#1A1A1A] flex items-center justify-center text-3xl">
                <FaLinkedinIn />
              </button>
            </div>
          </div>
          <h4 className="text-[#595858] font-semibold text-md mt-2">
            STAY WITH ME
          </h4>
          <div className="flex justify-between items-end">
            <h4 className="text-white text-xl font-semibold">Profiles</h4>
            <button className="text-[#595858]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
              >
                <path
                  d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z"
                  stroke="#595858"
                />
                <rect
                  y="21.6981"
                  width="0.999999"
                  height="18"
                  transform="rotate(-90 0 21.6981)"
                  fill="#595858"
                />
                <path
                  d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314"
                  stroke="#595858"
                />
              </svg>
            </button>
          </div>
        </div>
        <NavLink to={"/contact"} className="col-span-2 bg-gradient-to-r from-[#202020] to-[#151515] rounded-3xl px-8 pb-8">
          <img
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
            alt=""
          />
          <span className="text-4xl font-bold text-white flex justify-between items-end mt-16">
            <span>
              Let&apos;s <br /> work{" "}
              <span className="text-[#E6B31e]">together.</span>{" "}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
              >
                <path
                  d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z"
                  stroke="#fff"
                />
                <rect
                  y="21.6981"
                  width="0.999999"
                  height="18"
                  transform="rotate(-90 0 21.6981)"
                  fill="#fff"
                />
                <path
                  d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314"
                  stroke="#fff"
                />
              </svg>
            </span>
          </span>
        </NavLink>
        <NavLink
          to={"/credentials"}
          className="bg-gradient-to-r from-[#202020] to-[#151515] rounded-3xl p-8"
        >
          <img
            src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png"
            alt=""
          />
          <div>
            <span className="text-[#595858] uppercase flex justify-start font-semibold text-md mt-2">
              MORE about me
            </span>
            <span className="flex justify-between items-end">
              <h4 className="text-white text-xl font-semibold">Credentials</h4>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
              >
                <path
                  d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z"
                  stroke="#fff"
                />
                <rect
                  y="21.6981"
                  width="0.999999"
                  height="18"
                  transform="rotate(-90 0 21.6981)"
                  fill="#fff"
                />
                <path
                  d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314"
                  stroke="#fff"
                />
              </svg>
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
