import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
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
    <NavLink
      to={`/credentials`}
      className={({ isActive, isPending }) =>
        isActive
          ? "active text-[#E6B31e] border-b-2 border-[#E6B31e] pb-1"
          : isPending
          ? "pending"
          : ""
      }
    >
      Resume
    </NavLink>
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

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [colorChange, setColorChange] = React.useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  window.addEventListener("scroll", changeNavColor);
  return (
    <AppBar
      position="fixed"
      sx={{
        pt: "8px",
        height: "80px",
        bgcolor: `${colorChange ? "#202020" : "#fff0"}`,
        boxShadow: "none",
        color: "#202020",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
                sx={{ display: { xs: "flex", md: "none", color: "#fff" } }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={() => handleCloseNavMenu()}>
                <Typography
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"25px"}
                  sx={{ color: "#202020" }}
                  textAlign="center"
                >
                  {pages}
                </Typography>
              </MenuItem>
              {/* // ))} */}
            </Menu>
          </Box>

          <Grid
            container
            component="a"
            href="/"
            justifyContent="flex-center"
            alignItems={"center"}
          >
            <Grid
              item
              justifyContent="flex-center"
              alignItems={"center"}
            ></Grid>
            <Grid sx={{ display: "flex" }}>
              <Grid item>
                {/* <Typography
                  variant="h4"
                  noWrap
                  fontSize={{ sx: "16px" }}
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 800,
                    color: `${colorChange ? "#fff" : "#202020"}`,
                    textDecoration: "none",
                  }}
                >
                  Sakib
                </Typography> */}
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  noWrap
                  fontSize={{ sx: "16px" }}
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 800,
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Sakib
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Box
            mr={"30px"}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Typography display={"flex"} gap={"25px"} sx={{ color: "#fff" }}>
              {pages}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
