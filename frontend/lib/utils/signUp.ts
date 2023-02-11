import axios from "axios";

const signUp = async (email: string, password: string) => {
  const body = JSON.stringify({ email, password, returnSecureToken: true });
  const apiKey = process.env.FIREBASE_API_KEY as string;
  return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default signUp;
