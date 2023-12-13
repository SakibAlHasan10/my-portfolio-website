import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import user from "../../assets/sakib-al-hasan-10.jpg";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import resume from "../../assets/Resume.pdf"
const Credentials = () => {
  return (
    <div className="mt-12 pb-20">
      <div className="md:grid grid-cols-3 md:gap-0 lg:gap-10">
        <div className="text-[#fff]">
          <div className="bg-gradient-to-r from-[#202020] to-[#151515] rounded-3xl">
            <div className="p-8 w-full h-full">
              <img src={user} alt="" className=" w-full h-full rounded-3xl" />
            </div>
            <div className="px-8 pb-8 text-center">
              <h3 className="text-3xl md:text-2xl lg:text-3xl font-semibold">
                Sakib Al Hasan
              </h3>
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
                  <button className="bg-[#343333] text-white hover:bg-[#fff] hover:text-black h-10 rounded-xl  w-full font-bold">
                    Contact Me
                  </button>
                </NavLink>
              </div>
              <div className="mt-8">
                    <a href={resume} download="resume">
                  <button className="hover:bg-[#343333] hover:text-white bg-[#E6B31e] text-black h-10 rounded-xl  w-full font-bold">
                    Download Resume
                  </button>
                    </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-12 md:mt-0 text-white px-10">
          <h3 className="uppercase text-xl font-semibold">Objective</h3>
          <p className="mt-8 text-[#dfdede] text-lg font-medium">
          Aspiring Wev Developer with expertise in React, JavaScript, MongoDB, Firebase, Node.js, and Express.js.
Eager to bring my skills and passion for innovative JavaScript development to Meta, contributing to cutting-edge projects and driving digital excellence.
          </p>
          {/* <p className="mt-6 text-[#dfdede] text-lg font-medium">
            Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet
            luctussd fav venenatis, lectus magna fringilla zac urna, porttitor
            rhoncus dolor purus non enim praesent cuz elementum sahas facilisis
            leot.
          </p> */}
            <h3 className="uppercase text-xl font-semibold mt-14">my skills</h3>
          <div className="text-white md:flex gap-10 mt-10">
            {/* <div className="w-20">
                <Circle percent={10} strokeWidth={4} strokeColor="#E6B31e" trailColor="#098"/>
                </div> */}
            <div className="w-full">
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">JavaScript</h3>
                <Box sx={{ width: "full" }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={60}
                    sx={{ color: "#E6B31e" }}
                    step={10}
                    valueLabelDisplay="on"
                  />
                </Box>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">React.js</h3>
                <Box sx={{ width: "full" }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={70}
                    sx={{ color: "#E6B31e" }}
                    step={10}
                    valueLabelDisplay="on"
                  />
                </Box>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Node.js</h3>
                <Box sx={{ width: "full" }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={50}
                    sx={{ color: "#E6B31e" }}
                    step={10}
                    valueLabelDisplay="on"
                  />
                </Box>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">MongoDB</h3>
                <Box sx={{ width: "full" }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={50}
                    sx={{ color: "#E6B31e" }}
                    step={10}
                    valueLabelDisplay="on"
                  />
                </Box>
              </div>
            </div>
            <div className="w-full">
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">HTML</h3>
                <Box sx={{ width: "full" }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={80}
                    sx={{ color: "#E6B31e" }}
                    step={10}
                    valueLabelDisplay="on"
                  />
                </Box>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">CSS</h3>
                <Box sx={{ width: "full" }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={70}
                    sx={{ color: "#E6B31e" }}
                    step={10}
                    valueLabelDisplay="on"
                  />
                </Box>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">TailwindCSS</h3>
                <Box sx={{ width: "full" }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={80}
                    sx={{ color: "#E6B31e" }}
                    step={10}
                    valueLabelDisplay="on"
                  />
                </Box>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Firebase</h3>
                <Box sx={{ width: "full" }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={80}
                    sx={{ color: "#E6B31e" }}
                    step={10}
                    valueLabelDisplay="on"
                  />
                </Box>
              </div>
            </div>
          </div>
          <h3 className="uppercase text-xl font-semibold mt-14">EDUCATION</h3>

          <p className="mt-5 text-md font-medium text-[#9e9c9c]">2021 - Current</p>
          <h4 className="mt-2 text-2xl text-[#E6B31e] font-semibold">
          Bachelor Degree  in Political Science
          </h4>
          <p className="mt-2 text-md font-medium text-[#9e9c9c]">
          Govt. Tolaram University College
          </p>
          <p className="mt-3 text-[#dfdede] text-lg font-medium">
          Since 2021, I have been pursuing my Honors degree at Govt. Tolaram University College. As a student at Govt. Tolaram University College, I have had the opportunity to delve deeper into my chosen field of study. The university offers a comprehensive curriculum, expert faculty, and state-of-the-art facilities, allowing me to acquire in-depth knowledge and practical skills in my area of specialization. Throughout my journey at Govt. Tolaram University College, I have been actively involved in various academic and extracurricular activities, further enriching my learning experience and personal growth. I continue to thrive academically and look forward to completing my Honors degree with distinction.
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default Credentials;
