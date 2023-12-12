import { NavLink } from "react-router-dom";

const Home = () => {
  return (
      <div className="bg-[#0f0f0f] min-h-screen -mt-32 text-[#fff] flex justify-center items-center  ">
        <div className="text-center">

      <h2 className="uppercase text-4xl md:text-6xl font-extrabold">Sakib <span className="text-[#E6B31e] ">Al Hasan</span></h2>
      <h4 className=" text-xl md:text-2xl font-semibold mt-5 mb-8"><span className="text-[#d0cece] text-2xl">Creative</span> Web Developer</h4>
      <NavLink to={"/contact"}>
        <button className="w-44 rounded-3xl text-lg hover:text-black hover:bg-white bg-[#E6B31e] py-2 ">
          Get In Touch
        </button>
      </NavLink>
        </div>
      </div>
      
  );
};
// import "./coursre";
export default Home;
