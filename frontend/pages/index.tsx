import Button from "@mui/material/Button";
import Link from "next/link";
import React, { useRef } from "react";
import Header from "@/lib/components/Header";

const Index = () => {
  return (
    <>
      <Header>
        <Header.Left>AppName</Header.Left>
        <Header.Right>
          <Link href="/signup">
            <Button variant="outlined" color="error">
              新規登録
            </Button>
          </Link>
          <Link href="/signin">
            <Button variant="outlined">ログイン</Button>
          </Link>
        </Header.Right>
      </Header>
      <div className="p-20 text-center">
        <h1 className="my-auto text-[80px] font-bold">APP NAME</h1>
      </div>
    </>
  );
};

export default Index;
