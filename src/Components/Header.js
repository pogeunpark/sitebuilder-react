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
            siteBuilder
          </Link>
          <nav className={classes.nav}>
            <ul className={classes.items}>
              <li className={classes.item}>
                <NavLink activeClassName={classes.active} to="/home">
                  home
                </NavLink>
              </li>
              <li className={classes.item}>
                <NavLink activeClassName={classes.active} to="/blog">
                  blog
                </NavLink>
              </li>
              <li className={classes.item}>
                <NavLink activeClassName={classes.active} to="/about">
                  about
                </NavLink>
              </li>
              <li className={classes.item}>
                <NavLink activeClassName={classes.active} to="/contact">
                  contact
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
