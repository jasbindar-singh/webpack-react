import React from "react";
import Logo from "../../../public/assets/logo.png";

import "./MainLayout.scss";

const MainLayout = () => {
  const className = "c-MainLayout";

  return (
    <div className={className}>
      <img className={`${className}__logo`} src={Logo} alt="React Logo" />
    </div>
  );
};

export default MainLayout;
