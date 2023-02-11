import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef } from "react";
import CenterContainer from "@/lib/components/CenterContainer";

const Signup = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("/api/auth/signup/", {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
  };

  return (
    <>
      <CenterContainer>
        <div className="flex flex-col rounded-lg border-2 p-10 shadow">
          <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
            <p>TAS-CO</p>
            <TextField label="Email" inputRef={emailRef} />
            <TextField label="Password" type={"password"} inputRef={passwordRef} />
            <Button variant="outlined" color="primary" type={"submit"}>
              登録
            </Button>
          </form>
          <div className="mt-2 text-center">
            <p>アカウントをお持ちですか？</p>
            <Link href={"signin"}>ログイン</Link>
          </div>
        </div>
      </CenterContainer>
    </>
  );
};

export default Signup;
