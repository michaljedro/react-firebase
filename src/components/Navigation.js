import React from "react";
import { Nav, Item, linkStyle } from "../styles/Navigation.styled";
import { links } from "../utils/consants";
import { Link } from "react-router-dom";

function Navigation({ handleLogout }) {
  return (
    <Nav>
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <Item key={id}>
            <Link to={url} style={linkStyle}>
              {text}
            </Link>
          </Item>
        );
      })}
      <button onClick={handleLogout}>Logout</button>
    </Nav>
  );
}

export default Navigation;
