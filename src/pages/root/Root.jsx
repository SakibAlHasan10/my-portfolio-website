import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "@mui/material";
// import Footer from "../../components/footer/footer";
import "./root.css"
const Root = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <Navbar />
      <Container>

      <div className="pt-32">

      <Outlet />
      </div>
      </Container>
      <div className="cursor">
        <div></div>
      </div>
      </div>
  );
};
<script src="./cursor.js"></script>
export default Root;
