import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { collection, addDoc, getDoc, doc, query, where, getDocs, setDoc } from "firebase/firestore";
import { GetServerSideProps } from "next";
import React, { useEffect, useRef, useState } from "react";
import db from "@/firebase";
import CenterContainer from "@/lib/components/CenterContainer";
import Header from "@/lib/components/Header";
import LogoutButton from "@/lib/components/LogoutButton";
import Menu from "@/lib/components/Menu";
import { Me, User } from "@/lib/types/firebase";

import verify from "@/lib/utils/verify";

type PageProps = {
  user: User;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ req }) => {
  const idToken = req.cookies.session || "";
  try {
    const response = await verify(idToken);

    return {
      props: { user: response.data.users[0] },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
};

const App = ({ user }: PageProps) => {
  const [isInitialLogin, setIsInitialLogin] = useState<boolean>(false);
  const [me, setMe] = useState<Me>();
  const displayNameRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<Array<string>>(["item1", "item2"]);
  const [selectedConant, setSelectedContent] = useState<string>();

  const fetchMe = async () => {
    const me = await getDoc(doc(db, "users", user.localId));
    if (!me.data()) {
      setIsInitialLogin(true);
    }
    setMe(me.data() as Me);
  };

  const registMe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!displayNameRef.current?.value) return;

    try {
      const me = {
        displayName: displayNameRef.current.value,
        email: user.email,
        localId: user.localId,
      };
      const docRef = await setDoc(doc(db, "users", user.localId), me);
      setMe(me);
      setIsInitialLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <>
      <Modal open={isInitialLogin}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-5 border-2
                     border-black bg-white p-10 text-center"
        >
          <h1>tas-coへようこそ! </h1>
          <form className="flex flex-col space-y-2 text-center" onSubmit={registMe}>
            <TextField label="名前" inputRef={displayNameRef}></TextField>
            <Button variant="outlined" type={"submit"}>
              保存
            </Button>
          </form>
        </div>
      </Modal>
      <Header>
        APP NAME
        <Header.Right>
          <div className="flex items-center justify-center space-x-4">
            <div>
              <AccountCircleIcon />
              <p>{me?.displayName}</p>
            </div>
            <LogoutButton />
          </div>
        </Header.Right>
      </Header>
      <Menu>
        <Menu.Left>
          <h1 className="text-center font-bold">LEFT MENU</h1>
          {items.map((item, i) => (
            <Menu.Content onClick={() => setSelectedContent(item)} key={`item-${i}`}>
              <LabelImportantIcon />
              {item}
            </Menu.Content>
          ))}
          <Menu.Content onClick={() => setItems((prev) => [...prev, `item${prev.length + 1}`])}>
            <AddIcon />
            Add item
          </Menu.Content>
        </Menu.Left>
        <Menu.Right>
          <div className="text-center font-bold">RIGHT MENU</div>
          <CenterContainer>
            {selectedConant ? <h1 className="font-bold">{`${selectedConant} description`}</h1> : null}
          </CenterContainer>
        </Menu.Right>
      </Menu>
    </>
  );
};

export default App;
