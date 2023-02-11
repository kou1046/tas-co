import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import { useRef } from "react";
import CenterContainer from "@/lib/components/CenterContainer";

const Signin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signin/", {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      Router.push("/app");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <CenterContainer>
        <div className="rounded-lg border-2 p-10 shadow-lg">
          <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
            <p>ログイン</p>
            <TextField label="Email" inputRef={emailRef} />
            <TextField label="Password" type={"password"} inputRef={passwordRef} />
            <Button variant="outlined" color="primary" type={"submit"}>
              ログイン
            </Button>
          </form>

          <div className="mt-3 text-center">
            <p>アカウントを持っていませんか？</p>
            <Link href={"signup"}>新規登録</Link>
          </div>
        </div>
      </CenterContainer>
    </>
  );
};

export default Signin;
