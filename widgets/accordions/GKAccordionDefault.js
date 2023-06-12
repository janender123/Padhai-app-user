// import node module libraries
import React, { useContext, Fragment } from "react";
import Link from "next/link";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";

import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";
import { Button, Typography } from "@mui/material";
import { Image } from "react-bootstrap";

const GKAccordionDefault = ({ accordionItems, itemClass }) => {
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <Fragment>
        <Link
          href="#!"
          onClick={decoratedOnClick}
          aria-expanded={isCurrentEventKey}
          className="d-flex align-items-center text-inherit text-decoration-none h4 mb-0"
          data-bs-toggle="collapse"
          aria-controls="courseTwo"
        >
          <div
            className="text-white"
            style={{
              backgroundColor: "#3c65c4",
              borderRadius: "30px",
              width: "25px",
              height: "25px",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "3px",
              marginRight: "10px",
            }}
          >
            {children.order}
          </div>
          <div className="me-auto">{children.title}</div>

          {children.hasOwnProperty("completed") && (
            <div>
              <ProgressBar
                variant="success"
                className="mb-2 progress"
                now={children.completed}
                style={{ height: "6px" }}
              />
              <small>{children.completed}% Completed</small>
            </div>
          )}

          <span className="chevron-arrow ms-4">
            <i className="fe fe-chevron-down fs-4"></i>
          </span>
        </Link>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Accordion defaultActiveKey={accordionItems[0].id}>
        <ListGroup as="ul" variant="flush">
          {accordionItems.map((item, index) => {
            if (item.topics.length === 0) {
              return (
                <ListGroup.Item
                  key={index}
                  as="li"
                  className={`${itemClass ? itemClass : ""}`}
                >
                  <ContextAwareToggle eventKey={item.id}>
                    {item}
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey={item.id}>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="border-0 fs-5 px-0 py-4">
                        {item.summary}
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </ListGroup.Item>
              );
            } else {
              return (
                <ListGroup.Item
                  key={index}
                  as="li"
                  className={`${itemClass ? itemClass : ""}`}
                >
                  <ContextAwareToggle eventKey={item.id}>
                    {item}
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey={item.id} className="test">
                    <ListGroup className="py-4" as="ul">
                      <Typography
                        variant="subtitle1"
                        color="text.primary"
                        sx={{ mt: 2, mb: 2 }}
                      >
                        Lessons
                      </Typography>
                      {item.topics.map((subitem, subindex) => (
                        <ListGroup.Item
                          key={subindex}
                          as="li"
                          disabled={subitem.locked}
                          className="px-0 py-1 border-0"
                        >
                          {subitem.hasButton ? (
                            <div className="row">
                              <div className="col-12 col-md-4">
                                <Link
                                  href="#!"
                                  className="d-flex justify-content-start align-items-center text-inherit text-decoration-none"
                                  style={{
                                    border: "1px solid white",
                                    margin: "3px 0",
                                    boxShadow: "0px -1px 7px 0px",
                                    padding: "12px",
                                    borderRadius: "10px",
                                    width: "100%",
                                    margin: "3px 0",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  }}
                                >
                                  <Image
                                    src="/images/png/notes.png"
                                    alt="Notes Icon"
                                    width="30px"
                                    height="30px"
                                    style={{ marginRight: "10px" }}
                                  />
                                  <h4
                                    style={{
                                      margin: 0,
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                    }}
                                  >
                                    Notes
                                  </h4>
                                </Link>
                              </div>
                              <div className="col-12 col-md-4">
                                <Link
                                  href="#!"
                                  className="d-flex justify-content-start align-items-center text-inherit text-decoration-none"
                                  style={{
                                    border: "1px solid white",
                                    margin: "3px 0",
                                    boxShadow: "0px -1px 7px 0px",
                                    padding: "12px",
                                    borderRadius: "10px",
                                    width: "100%",
                                    margin: "3px 0",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  }}
                                >
                                  <Image
                                    src="/images/png/assignment.png"
                                    alt="Assignment Icon"
                                    width="30px"
                                    height="30px"
                                    style={{ marginRight: "10px" }}
                                  />
                                  <h4
                                    style={{
                                      margin: 0,
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                    }}
                                  >
                                    Assignments
                                  </h4>
                                </Link>
                              </div>
                              <div className="col-12 col-md-4">
                                <Link
                                  href="#!"
                                  className="d-flex justify-content-start align-items-center text-inherit text-decoration-none"
                                  style={{
                                    border: "1px solid white",
                                    margin: "3px 0",
                                    boxShadow: "0px -1px 7px 0px",
                                    padding: "12px",
                                    borderRadius: "10px",
                                    width: "100%",
                                    margin: "3px 0",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  }}
                                >
                                  <Image
                                    src="/images/png/test.png"
                                    alt="Test Icon"
                                    width="30px"
                                    height="30px"
                                    style={{ marginRight: "10px" }}
                                  />
                                  <h4
                                    style={{
                                      margin: 0,
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                    }}
                                  >
                                    Test
                                  </h4>
                                </Link>
                              </div>
                            </div>
                          ) : (
                            <Link
                              href="#!"
                              className={`d-flex justify-content-between align-items-center text-inherit text-decoration-none`}
                              style={{
                                border: "1px solid white",
                                margin: "3px 0",
                                boxShadow: "0px -1px 7px 0px",
                                padding: "12px",
                                borderRadius: "10px",
                                width: "100%",
                              }}
                            >
                              <div className="text-truncate ">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  {subitem.locked ? (
                                    <i className="fe fe-lock fs-4"></i>
                                  ) : (
                                    <Icon path={mdiPlay} size={0.8} />
                                  )}{" "}
                                </span>
                                <span className="fs-5">{subitem.topic}</span>
                              </div>
                              <div className="text-truncate">
                                <span>{subitem.duratoin}</span>
                              </div>
                            </Link>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Accordion.Collapse>
                </ListGroup.Item>
              );
            }
          })}
        </ListGroup>
      </Accordion>
    </Fragment>
  );
};

export default GKAccordionDefault;
