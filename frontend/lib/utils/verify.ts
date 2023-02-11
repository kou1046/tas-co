import axios from "axios";
import { User } from "../types/firebase";

const verify = async (idToken: string) => {
  const apiKey = process.env.FIREBASE_API_KEY as string;
  const body = JSON.stringify({ idToken });
  return await axios.post<{ kind: string; users: Array<User> }>(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
    body,
    {
      headers: {
        "content-Type": "application/json",
      },
    }
  );
};

export default verify;
