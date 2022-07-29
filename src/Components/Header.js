import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import classes from "./Header.module.scss";
import MobileMenu from "./MobileMenuIcon";

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.row}>
          <Link to="/home" className={classes.logo}>
            SiteBuilder
          </Link>
          <nav className={classes.nav}>
            <ul className={classes.items}>
              <li className={classes.item}>
                <NavLink activeClassName={classes.active} to="/home">
                  Home
                </NavLink>
              </li>
              <li className={classes.item}>
                <NavLink activeClassName={classes.active} to="/about">
                  About
                </NavLink>
              </li>
              <li className={classes.item}>
                <NavLink activeClassName={classes.active} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
