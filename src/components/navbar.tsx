import * as React from "react";
import * as Styles from "./navbar.module.scss";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <ul className={Styles.navLinks}>
        <li className={Styles.navLinkItem}>
          <Link to="/about" className={Styles.navLinkText}>
            About
          </Link>
        </li>
        <li className={Styles.navLinkItem}>
          <Link to="/blog" className={Styles.navLinkText}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
