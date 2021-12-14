import { FC } from "react";
import { Outlet } from "react-router-dom";

import { ILayoutProps } from "./utils/ILayout";
import Navbar from "./components/Navbar";

const Layout: FC<ILayoutProps> = ({ username, navigate }) => {
  return (
    <div
      onClick={() => {
        navigate && navigate("/example");
      }}
    >
      {/* Menu principal de la aplicación */}
      <Navbar username={username} />

      {/* Resto de la app */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
