import { Outlet } from "react-router";
import Header from "./Header/Header";
import Container from "../ui/Container/Container";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
