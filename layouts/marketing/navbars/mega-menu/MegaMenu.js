// import node module libraries
import { Fragment, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Image, NavDropdown } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
// import data files
import NavbarMegaMenuRoutes from "routes/marketing/NavbarMegaMenuRoutes";
// import hooks
import useMounted from "hooks/useMounted";

const MegaMenu = () => {
  const hasMounted = useMounted();
  const [activeTab, setActiveTab] = useState(1);
  const activeTabRef = useRef(activeTab);

  function handleNextClick(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("current active tab:", activeTab);
    setActiveTab((prevActiveTab) => prevActiveTab + 1);
    activeTabRef.current = activeTab + 1;
    console.log("new active tab:", activeTab);
  }
  const MegaMenuDesktop = () => {
    return (
      <div className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Mega Menu
        </Link>
        {activeTab === 1 && (
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-sm ">
            <div className="px-4 pt-2 pb-2">
              <Row className="row">
                <Col xs={12}>
                  <div className="lh-1 mb-5">
                    <h1 className="mb-1 text-center">I am in class...</h1>
                  </div>
                </Col>
                {NavbarMegaMenuRoutes.map((item, index) => {
                  return (
                    <Row key={index}>
                      {item.children.map((subitem, subindex) => {
                        if (subitem.button) {
                          return (
                            <button
                              key={subindex}
                              className="btn btn-outline-primary btn-sm"
                              onClick={(event) =>
                                handleNextClick(event)
                              }
                            >
                              Next
                            </button>
                          );
                        } else {
                          return (
                            <Col lg={4} xs={12} key={index}>
                              <div
                                className="d-flex text-center"
                                style={{
                                  border: "1px solid black",
                                  margin: "5px",
                                  cursor: "pointer",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <div className="" key={subindex}>
                                  <Link href={subitem.link}>
                                    <div>
                                      <h3>{subitem.subtitle}</h3>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </Col>
                          );
                        }
                      })}
                    </Row>
                  );
                })}
              </Row>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-sm">
            <div className="px-4 pt-2 pb-2">
              <Row className="row">
                <Col xs={12}>
                  <div className="lh-1 mb-5">
                    <h1 className="mb-1 text-center">I am in class...</h1>
                  </div>
                </Col>
                {NavbarMegaMenuRoutes.map((item, index) => {
                  return (
                    <Row key={index}>
                      {item.children.map((subitem, subindex) => {
                        if (subitem.button) {
                          return <></>;
                        } else {
                          return (
                            <Col lg={4} xs={12} key={index}>
                              <div
                                className="d-flex text-center"
                                style={{
                                  border: "1px solid black",
                                  margin: "5px",
                                  cursor: "pointer",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <div className="" key={subindex}>
                                  <Link href={subitem.link}>
                                    <div>
                                      <h3>{subitem.subtitle}</h3>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </Col>
                          );
                        }
                      })}
                    </Row>
                  );
                })}
              </Row>
            </div>
          </div>
        )}
      </div>
    );
  };

  const MegaMenuMobile = () => {
    return (
      <NavDropdown
        title="Mega Menu"
        className="dropdown-fullwidth"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item as="div" className="py-2 px-3">
          <Row>
            <Col lg={12} md={12} xs={12} className="lh-1 mb-1">
              <h3 className="mb-1">Earn a Degree</h3>
              <p className="text-wrap">
                Breakthrough pricing on 100% online degrees designed to fit into
                your life.
              </p>
            </Col>
            {NavbarMegaMenuRoutes.map((item, index) => {
              return (
                <Col lg={4} xs={12} key={index}>
                  <div className="border-bottom pb-2 mb-3">
                    <h5 className="mb-0">{item.menuitem}</h5>
                  </div>
                  {item.children.map((subitem, subindex) => {
                    if (subitem.button) {
                      return (
                        <div className="mt-4" key={subindex}>
                          <Link
                            href={subitem.link}
                            className="btn btn-outline-primary btn-sm mb-2"
                          >
                            {subitem.menuitem}
                          </Link>
                        </div>
                      );
                    } else {
                      return (
                        <div className="" key={subindex}>
                          <Link href={subindex.link}>
                            <div className="d-flex mb-3">
                              <Image src={subitem.image} alt="" />
                              <div className="ms-2">
                                <small className="text-body">
                                  {subitem.subtitle}
                                </small>
                                <h6 className="mb-0">{subitem.menuitem}</h6>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    }
                  })}
                </Col>
              );
            })}
          </Row>
        </NavDropdown.Item>
      </NavDropdown>
    );
  };

  return (
    <Fragment>{hasMounted ? <MegaMenuDesktop /> : <MegaMenuMobile />}</Fragment>
  );
};

export default MegaMenu;
