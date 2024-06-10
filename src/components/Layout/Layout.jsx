import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ThreeDots } from "react-loader-spinner";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<ThreeDots color="rgba(65, 88, 136, 1)" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
