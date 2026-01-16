import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header/>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
