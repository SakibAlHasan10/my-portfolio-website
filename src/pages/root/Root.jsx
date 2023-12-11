import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./root.css";
import { Container } from "@mui/material";
const Root = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <Navbar />
      <Container>

      <div className="pt-32">

      <Outlet />
      </div>
      </Container>
      <div className="coursre">
        <div></div>
      </div>
    </div>
  );
};

export default Root;
