import { NavLink } from "react-router-dom";
import booking from "../../assets/booking.png"
import TechStore from "../../assets/techStore.png"


const Works = () => {
    return (
        <div className="pb-24">
          <div className="lg:grid grid-cols-2 shadow-sm  h-full p-4 hover:shadow-lg hover:shadow-[#E6B31e] shadow-[#E6B31e] rounded-2xl text-white gap-10">
            <div className="w-full lg:py-10">
              <img src={TechStore} alt="" className="w-full  h-full rounded-2xl" />
            </div>
            <div className="my-5">
              <h2 className="text-4xl mb-6 font-semibold">TechStore</h2>
              <p className="text-xl mb-3 font-semibold"> New Tech and Gadgets launching</p>
              <ul className="list-disc text-md leading-7 pl-4">
                <li className="mb-2">TechStore is a Full-Stack-Application. Where the user will find many feathers. Users can create an account with
their email and password or with Google.</li>
                <li>JWT Token and Firebase are used for authentication and Stripe is used for the payment system.</li>
                <li>Dashboard is implemented in this project. dashboard has an admin moderator and user section where the user
through payment is displayed as a verified user and a non-verified user.
</li>
              </ul>
              <div className="my-6">
                <p className="text-md font-medium leading-7"><span className="text-xl bold text-[#E6B31e]">Technology:</span>  React.js | Mongoose | Firebase | Stripe | Material UI | Tailwindcss | Vercel | Node.js</p>
              </div>
              <div className="flex gap-6 text-md font-semibold">
              <NavLink to={"https://creative-technology-f4fea.web.app"}>
              <button className=" w-24 hover:bg-white bg-[#E6B31e] text-black h-10 rounded-xl  font-bold">Live site</button>
              </NavLink>
              <NavLink to={"https://github.com/SakibAlHasan10/tech-store-client-site"}>
              <button className=" w-24 hover:bg-white bg-[#E6B31e] text-black h-10 rounded-xl  font-bold">client</button>
              </NavLink>
              <NavLink to={"https://github.com/SakibAlHasan10/tech-store-sever-site"}>
              <button className=" w-24 hover:bg-white bg-[#E6B31e] text-black h-10 rounded-xl  font-bold">server</button>
              </NavLink>
              </div>
            </div>
          </div>
          <div className="lg:grid grid-cols-2 mt-14 shadow-sm h-full p-4 hover:shadow-lg hover:shadow-[#E6B31e] shadow-[#E6B31e] rounded-2xl text-white gap-10">
            <div className="w-full">
              <img src={booking} alt="" className="w-full h-full rounded-2xl" />
            </div>
            <div className="my-5">
              <h2 className="text-4xl mb-6 font-semibold">Booking</h2>
              <p className="text-xl mb-3 font-semibold">Hotels Booking</p>
              <ul className="list-disc text-md leading-7 pl-4">
                <li className="mb-2">Booking is a Full-Stack-Application users can book rooms on specific dates from here.</li>
                <li>On the &quot;My Booking&quot; page all the rooms booked by the user will be shown and from their users can change the
date of the booked room and delete the booked room.
</li>
                <li>JWT Token and Firebase are used for authentication.
</li>
              </ul>
              <div className="my-6">
                <p className="text-md font-medium leading-7"><span className="text-xl bold text-[#E6B31e]">Technology:</span>   React.js | MongoDB | Firebase | Tailwindcss | Vercel</p>
              </div>
              <div className="flex gap-6 text-md font-semibold">
              <NavLink to={"https://booking-aeff8.web.app"}>
              <button className=" w-24 hover:bg-white bg-[#E6B31e] text-black h-10 rounded-xl  font-bold">Live site</button>
              </NavLink>
              <NavLink to={"https://github.com/SakibAlHasan10/hotel-booking-client-site"}>
              <button className=" w-24 hover:bg-white bg-[#E6B31e] text-black h-10 rounded-xl  font-bold">client</button>
              </NavLink>
              <NavLink to={"https://github.com/SakibAlHasan10/hotel-booking-server-site"}>
              <button className=" w-24 hover:bg-white bg-[#E6B31e] text-black h-10 rounded-xl  font-bold">server</button>
              </NavLink>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Works;