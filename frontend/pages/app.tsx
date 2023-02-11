import { GetServerSideProps } from "next";
import LogoutButton from "@/lib/components/LogoutButton";
import { User } from "@/lib/types/firebase";
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
  console.log(user);
  return (
    <>
      <p>{user.email}でログイン中</p>
      <LogoutButton />
    </>
  );
};

export default App;
