import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css"
import { Container } from '../../pages/customer_journey/plan_details/journey';
import nav_logo from "./images/nav_logo.png"
export const Navbar_new = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.bg_color}>
        <Container>
          <nav>
            <div className={styles.navbar}>
              <div className={styles.nav_logo}>
                <Link to="/">
                  <img src={nav_logo} alt="" />
                </Link>
              </div>

              <div className={styles.nav_menu}>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                </ul>
              </div>
              <button>
                Login
              </button>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );

}