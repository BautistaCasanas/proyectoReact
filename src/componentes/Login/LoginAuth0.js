import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MenuItem from "@mui/material/MenuItem";

const LoginAuth0 = () => {
  const { loginWithRedirect } = useAuth0();
  return <MenuItem onClick={() => loginWithRedirect()}>Login</MenuItem>;
};

export default LoginAuth0;
