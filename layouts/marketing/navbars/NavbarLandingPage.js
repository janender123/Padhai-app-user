// import node module libraries
import { Fragment, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import Link from "next/link";
import { Image, Navbar, Nav, Container } from "react-bootstrap";

// import sub components
import QuickMenu from "layouts/QuickMenu";

// import data files
import { NavbarLandingPageMenu } from "routes/marketing/NavbarDefault";

// import layouts
import NavDropdownMain from "layouts/marketing/navbars/NavDropdownMain";
import DocumentMenu from "layouts/marketing/navbars/DocumentMenu";
import DialogBoxForCourse from "./mega-menu/DialogBoxForCourse";

// import hooks
import useMounted from "hooks/useMounted";

const NavbarLandingPage = ({ headerstyle, login }) => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const hasMounted = useMounted();

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <Fragment>
      <Navbar
        onToggle={(collapsed) => setExpandedMenu(collapsed)}
        expanded={expandedMenu}
        expand="lg"
        className="navbar p-2 navbar-default py-2"
      >
        <Container fluid className="px-0 ps-2">
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand>
              <Image
                src="/images/brand/logo/logo-padhae-2.png"
                alt=""
                height={35}
              />
            </Navbar.Brand>
          </Link>
          {hasMounted ? (
            <div
              className={`navbar-nav navbar-right-wrap ms-auto d-lg-none nav-top-wrap ${
                login ? (isDesktop || isLaptop ? "d-none" : "d-flex") : "d-none"
              }`}
            >
              <QuickMenu />
            </div>
          ) : null}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <DialogBoxForCourse />
              {NavbarLandingPageMenu.map((item, index) => {
                if (item.children === undefined) {
                  return (
                    <Nav.Link key={index} as={Link} href={item.link}>
                      {item.menuitem}
                    </Nav.Link>
                  );
                } else if (hasMounted) {
                  return (
                    <NavDropdownMain
                      item={item}
                      key={index}
                      onClick={(value) => setExpandedMenu(value)}
                    />
                  );
                } else {
                  return null;
                }
              })}
              {/* {hasMounted ? <DocumentMenu /> : null} */}
            </Nav>
            {/* Right side quick / shortcut menu  */}
            <div className="ms-auto d-flex align-items-center">
              <Nav className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap">
                <Nav.Link
                  href="/authentication/sign-in"
                  bsPrefix="btn"
                  className="btn btn-white shadow-sm me-6"
                >
                  Sign In
                </Nav.Link>
                <Nav.Link
                  href="/authentication/sign-up"
                  bsPrefix="btn"
                  className="btn btn-primary shadow-sm"
                >
                  Sign Up
                </Nav.Link>
              </Nav>
            </div>
            {/* end of right side quick / shortcut menu  */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

// Specifies the default values for props
NavbarLandingPage.defaultProps = {
  headerstyle: "navbar-default",
  login: false,
};

// Typechecking With PropTypes
NavbarLandingPage.propTypes = {
  headerstyle: PropTypes.string,
  login: PropTypes.bool,
};

export default NavbarLandingPage;
