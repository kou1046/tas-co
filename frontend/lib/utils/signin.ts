import axios from "axios";

const signin = async (email: string, password: string) => {
  const apiKey = process.env.FIREBASE_API_KEY as string;
  const body = JSON.stringify({ email, password, returnSecureToken: true });
  return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default signin;
