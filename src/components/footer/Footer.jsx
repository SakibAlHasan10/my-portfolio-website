import { NavLink } from "react-router-dom";

const pages = (
    <>
      <NavLink
        to={`/`}
        className={({ isActive, isPending }) =>
          isActive
            ? "active text-[#E6B31e] border-b-2 border-[#E6B31e] pb-1"
            : isPending
            ? "pending"
            : "hover:text-[#E6B31e]"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={`/about`}
        className={({ isActive, isPending }) =>
          isActive
            ? "active text-[#E6B31e] border-b-2 border-[#E6B31e] pb-1"
            : isPending
            ? "pending"
            : "hover:text-[#E6B31e]"
        }
      >
        About
      </NavLink>
      <NavLink
        to={`/portfolio`}
        className={({ isActive, isPending }) =>
          isActive
            ? "active text-[#E6B31e] border-b-2 border-[#E6B31e] pb-1"
            : isPending
            ? "pending"
            : "hover:text-[#E6B31e]"
        }
      >
        Portfolio
      </NavLink>
      {/* <NavLink
        to={`/news`}
        className={({ isActive, isPending }) =>
          isActive
            ? "active text-[#E6B31e] border-b-2 border-[#E6B31e] pb-1"
            : isPending
            ? "pending"
            : ""
        }
      >
        News
      </NavLink> */}
      <NavLink
        to={`/contact`}
        className={({ isActive, isPending }) =>
          isActive
            ? "active text-[#E6B31e] border-b-2 border-[#E6B31e] pb-1"
            : isPending
            ? "pending"
            : "hover:text-[#E6B31e]"
        }
      >
        Contact
      </NavLink>
    </>
  );
const Footer = () => {
    return (
        <div className="w-full text-white text-center mt-16">
            <h2>SakibAlHasan</h2>

            <ul className="flex gap-5 justify-center">
                {pages}
            </ul>
        </div>
    );
};

export default Footer;