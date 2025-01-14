import React from "react";
import { Box, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h2" fontWeight="bold">
        CHAT AI
      </Typography>
      {loggedIn ? (
        <>
          <NavLink to="/" p={1}>
          <button type="button" className="btn btn-outline-info mx-3">HOME</button>
          </NavLink>
          <NavLink to="/login" onClick={handleLogout} p={1}>
          <button type="button" className="btn btn-outline-info">Log Out</button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register" p={1}>
          <button type="button" className="btn btn-outline-info mx-3">Sign Up</button>
          </NavLink>
          <NavLink to="/login" p={1} >
          <button type="button" className="btn btn-outline-info">Sign In</button>
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default Navbar;