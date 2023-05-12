// import node module libraries
import { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

// import chat actions from Redux chatSlice
import { changeSkin } from "store/appSlice";

// import required hook
import useLocalStorage from "hooks/useLocalStorage";

const DarkLightMode = ({ className }) => {
  // Redux state and dispatch
  const defaultSkin = useSelector((state) => state.app.skin);
  const dispatch = useDispatch();

  const { storageValue, setStorageValue, getStorageValue } = useLocalStorage(
    "skin",
    defaultSkin
  ); 
  const [active, setActive] = useState("light");

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("data-theme", getStorageValue("skin", "light"));
    dispatch(changeSkin(storageValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageValue]);

  const changeColorMode = () => {
    setStorageValue(storageValue === "light" ? "dark" : "light");
    dispatch(changeSkin(storageValue));
  };

  const changeColorModeLight = () => {
    setStorageValue("light");
     setActive("light");
    dispatch(changeSkin(storageValue));
  };

  const changeColorModeDark = () => {
    setStorageValue("dark");
    setActive("dark");
    dispatch(changeSkin(storageValue));
  };

 
  return (
    <Fragment>
      <Container>
        <Row className="mb-3 d-flex justify-content-center">
          <Col lg={6} sm={6} className="p-0">
            <Button
              style={{
                backgroundColor: "#3c65c4",
                color: "white",
                margin: "5px 2px 0 16px",
              }}
              disabled={active === "light"}
              onClick={changeColorModeLight}
            >
              <span
                className="icon"
                style={{
                  marginRight: "10px",
                }}
              >
                <i className="fe fe-sun"></i>
              </span>
              <span className="text p-1">Light</span>
            </Button>
          </Col>
          <Col lg={6} sm={6} className="p-0">
            <Button
              style={{
                backgroundColor: "#3c65c4",
                color: "white",
                margin: "5px 5px 0 5px",
              }}
              disabled={active === "dark"}
              onClick={changeColorModeDark}
            >
              <span
                className="icon"
                style={{
                  marginRight: "10px",
                }}
              >
                <i className="fe fe-moon"></i>
              </span>
              <span className="text p-1 ">Dark</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default DarkLightMode;
