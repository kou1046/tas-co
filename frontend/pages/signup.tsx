import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";
import CenterContainer from "@/lib/components/CenterContainer";

const Signup = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setIsError] = useState<{ code: number; message: string }>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/signup/", {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      Router.push("/app");
    } catch (error: any) {
      setIsError(error.response.data.error);
    }
  };

  return (
    <>
      <CenterContainer>
        <div className="flex flex-col rounded-lg border-2 p-10 shadow">
          <p>TAS-CO</p>
          {error ? <p className="my-2 text-red-600">{error.message}</p> : null}
          <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
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
