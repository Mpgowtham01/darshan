import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { sidebarMenus } from "./SidebarMenus";
import { Link } from "react-router-dom";
import { BsArrowRight, BsChevronDown } from "react-icons/bs";

const Sidebar = ({ handleCloseSidebar }) => {
  return (
    <div className="sidebar">
      <Accordion defaultActiveKey="0">
        {sidebarMenus.map((menu, index) =>
          (() => {
            if (menu.hasChildren) {
              return (
                <Accordion.Item eventKey={`${index}`} key={index}>
                  <Accordion.Header>
                    <span>
                      {menu?.icon ? menu.icon : null} {menu.name}
                    </span>
                    <span>
                      <BsChevronDown />
                    </span>
                  </Accordion.Header>

                  <Accordion.Body>
                    {menu.children.map((subMenu, i) => (
                      <h5 className="sidebar__subMenu" key={i}>
                        <Link to={subMenu.path} onClick={handleCloseSidebar}>
                          <span>{subMenu.name}</span>
                          <span>
                            <BsArrowRight />
                          </span>
                        </Link>
                      </h5>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              );
            }

            return (
              <h4 className="sidebar__menu" key={index}>
                <Link to={menu.path} onClick={handleCloseSidebar}>
                  <span>
                    {menu?.icon ? menu.icon : null} {menu.name}
                  </span>
                  <span>
                    <BsArrowRight />
                  </span>
                </Link>
              </h4>
            );
          })()
        )}
      </Accordion>
    </div>
  );
};

export default Sidebar;
