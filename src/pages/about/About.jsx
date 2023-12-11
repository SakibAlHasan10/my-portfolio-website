import user from "../../assets/sakib-al-hasan-10.jpg"
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
                <p className="mt-4">I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 text-white mt-5">
        <div className="bg-gradient-to-r from-[#202020] to-[#151515] rounded-3xl p-8">
            <h2 className="text-[#fff] mb-6 font-semibold text-lg">EXPERIENCE</h2>
            <h5 className="text-[#595858] font-semibold text-lg">2007 - 2017</h5>
            <h4 className="text-[#fff] mb-1 mt-2 font-semibold text-lg">Framer Designer & Developer</h4>
            <p className="text-[#595858] font-semibold text-md">Bluebase Designs</p>
        </div>
        <div className="bg-gradient-to-r from-[#202020] to-[#151515] rounded-3xl p-8">
            <h2 className="text-[#fff] mb-6 font-semibold text-lg">EDUCATION</h2>
            <h5 className="text-[#595858] font-semibold text-lg">2007 - 2017</h5>
            <h4 className="text-[#fff] mb-1 mt-2 font-semibold text-lg">Bachelor Degree in Psychology</h4>
            <p className="text-[#595858] font-semibold text-md">Bluebase Designs</p>
        </div>
      </div>
    </div>
  );
};

export default About;
