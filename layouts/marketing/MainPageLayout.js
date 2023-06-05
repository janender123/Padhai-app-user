// import node module libraries
import React, { Fragment, useEffect } from "react";

// import layouts
import Footer from "layouts/marketing/footers/Footer";
import NavbarLandingPage from "./navbars/NavbarLandingPage";

const MainPageLayout = (props) => {
  useEffect(() => {
    document.body.className = "bg-light";
  });
  return (
    <Fragment>
      <NavbarLandingPage login />
      <main>{props.children}</main>
      <Footer bgColor="bg-light" />
    </Fragment>
  );
};

export default MainPageLayout;
