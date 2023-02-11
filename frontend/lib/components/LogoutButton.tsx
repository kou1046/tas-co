import Button from "@mui/material/Button";
import axios from "axios";
import Router from "next/router";

const LogoutButton = () => {
  const logout = async (e: any) => {
    const res = await axios.post("/api/auth/logout/");
    Router.push("/");
  };

  return (
    <>
      <Button variant="outlined" color="error" onClick={logout}>
        ログアウト
      </Button>
    </>
  );
};

export default LogoutButton;
