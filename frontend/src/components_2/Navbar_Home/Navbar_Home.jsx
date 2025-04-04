import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LuUserCircle2 } from "react-icons/lu";
import { Container } from "../../pages/customer_journey/plan_details/journey";
import { StoreContext } from "../../context/StoreContext";
import style from "../../components_2/Navbar_Home/Navbar_Home.module.css";
import { assets } from "../../assets/assets.js";
import { IoMenu } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
const Navbar_Home = () => {
  const { getTotalCartAmount, token, setToken ,cartItems} = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation(); // Current URL location
  const [menu, setMenu] = useState(""); // Track the active menu
  const [MobileView, setMobileView] = useState(false);
  const ToggleMenu = () => {
    setMobileView(!MobileView);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartItem");
    localStorage.removeItem("formData");
    setToken("");
    window.location.replace("/");
  };
  

  // Automatically update `menu` based on the current URL path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setMenu("home");
    else if (path === "/about-us") setMenu("about");
    else if (path === "/menu") setMenu("menu");
    else if (path === "/contact-us") setMenu("contact");
    else if (path === "/faq") setMenu("faq");
  }, [location.pathname]);
const TotalAmount=getTotalCartAmount();
  return (
   <div className={style.Center_div}>
    <Container>
      {/* Navbar Starts */}
   <div className={style.navbar_main_design_section}>
        {/* Logo */}
        <div className={style.navbar_logo}>
          <p>
            <Link to="/">Chinese N Grills</Link>
          </p>
        </div>
        {/* Navbar Menu */}
        <div className={style.navbar_list}>
          <ul>
            <li>
              <Link
                to="/"
                className={menu === "home" ? style.active : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={menu === "about" ? style.active : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className={menu === "menu" ? style.active : ""}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={menu === "contact" ? style.active : ""}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={menu === "faq" ? style.active : ""}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        {/* Cart & Login/Profile */}
        <div className={style.navbar_right}>
          {/* Cart Icon */}
          
       <div>
       <Link to={'/cart'} target="_top">
          <div className={style.Cart_items_image_section}>
            <div><BsCart3 className={style.Cart_image}/></div>
        {getTotalCartAmount()> 0 ?<div className={style.my_Cart_text}>{TotalAmount+'₹'}</div>: <div className={style.my_Cart_text}>My Cart</div>}
          </div>
          </Link>
       </div>
          {/* <div className={style.navbar_cart}>
            <Link to="/cart">
              <img src={assets.basket_icon} alt="Cart" className={style.cart_image} />
            </Link>
            {getTotalCartAmount() > 0 && <div className={style.dot}></div>}
          </div> */}
          
          {/* Login/Profile */}
          {!token ? (
              <Link to="/register"><span className={style.Login_Button}>Login  </span></Link>
          ) : (
            <div className={style.navbar_profile}>
              <LuUserCircle2 className={style.userCircle_image} />
              <ul className={style.nav_profile_dropdown}>
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="Orders" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={onLogout}>
                  <img src={assets.logout_icon} alt="Logout" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
        <IoMenu className={style.ThreeLine_icon} onClick={ToggleMenu} />
        {MobileView && (
          <div className={style.navbar_list_mobile_view}>
            <span className={style.Cross_Navbar_Menu} onClick={ToggleMenu}>
              ✖
            </span>
            <ul>
              <li>
                <Link
                  to="/"
                  className={menu === "home" ? style.active : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={menu === "about" ? style.active : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className={menu === "menu" ? style.active : ""}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={menu === "contact" ? style.active : ""}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className={menu === "faq" ? style.active : ""}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        )}
   </div>
      {/* Navbar Ends */}
    </Container>
      </div>
  );
};

export default Navbar_Home;
