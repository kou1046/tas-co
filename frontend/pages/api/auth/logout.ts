import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { destroyCookie } from "nookies";

const logout: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.cookies.session);
  destroyCookie({ res }, "session", {
    path: "/",
  });
  res.redirect("/");
};

export default logout;
