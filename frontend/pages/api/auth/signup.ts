import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import signUp from "@/lib/utils/signUp";

const signUpHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  try {
    const response = await signUp(email, password);
    const { idToken } = await response.data;
    setCookie({ res }, "session", idToken, {
      httpOnly: true,
      secure: true,
      path: "/",
    });
    res.redirect(307, "/");
  } catch (e) {
    res.status(400);
  }
};

export default signUpHandler;
