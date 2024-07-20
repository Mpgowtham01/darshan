import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { sidebarMenus, sideMenuRoutes } from "./SidebarMenus";
import { Link, useParams } from "react-router-dom";
import { BsArrowRight, BsChevronDown } from "react-icons/bs";

const Sidebar = ({ handleCloseSidebar }) => {
  const { groupName } = useParams();
  return (
    <div className="sidebars">
      <Accordion defaultActiveKey="0">
        {sideMenuRoutes(groupName || "").map((menu, index) =>
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
                      <h5 className="sidebars__subMenus" key={i}>
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
              <h4 className="sidebars__menus" key={index}>
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
