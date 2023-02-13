import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import signin from "@/lib/utils/signin";

const signinHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  try {
    const response = await signin(email, password);
    const { idToken } = response.data;
    setCookie({ res }, "session", idToken, {
      httpOnly: true,
      secure: true,
      path: "/",
    });
    res.status(200).redirect(307, "http://localhost:3000/app/");
  } catch (e) {
    console.log(e);
  }
};

export default signinHandler;
