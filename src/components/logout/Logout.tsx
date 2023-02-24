import { Button } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";
import { routing } from "../../routing";
import { auth } from "../../utils/firebase";

import LogoutIcon from '@mui/icons-material/Logout';

const Logout = () => {
  const navigate = useNavigate();

  function logoutUser() {
    auth.signOut();
    navigate(routing.public);
  }

  return <Button endIcon={<LogoutIcon />} sx={{color: "white"}} onClick={logoutUser}>Logout</Button>;
};

export default Logout;
