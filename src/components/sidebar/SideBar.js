import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faNewspaper,
  faCog,
  faUsersCog,
  faUsers,
  faChartPie,
  faTicketAlt,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Dashboard Kit</p>
        <SubMenu title="Overview" icon={faChartPie} items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/tickets"}>
            <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
            Tickets
          </NavLink>
        </NavItem>
        <SubMenu title="ideas" icon={faLightbulb} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
           Contacts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faUsersCog} className="mr-2" />
            Agents
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
            Articles
          </NavLink>
        </NavItem>
        <hr style={{color:"white"}}/>
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faMedal} className="mr-2" />
            Subscriptions
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
