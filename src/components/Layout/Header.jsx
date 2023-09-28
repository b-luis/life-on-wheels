import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidUserBadge } from "react-icons/bi";
import headerStyle from "./Header.module.css";

const style = {
  header:
    "bg-[#FFF7ED] flex px-7 py-4 justify-between sticky top-0 w-full backdrop-blur bg-[#FFF7ED]/70 text-[#804a1c] shadow shadow-sm",
  headerLogo: "font-black text-3xl mr-3",
  navbar: "flex items-center",
  navLinks:
    "px-2 text-default font-medium hover:underline hover:text-active hover:text-[#804a1c] hover:underline-offset-4",
  navProfile: "inline mb-1 sm:text-3xl xl:text-3xl",
  active: "text-[#804a1c] px-2 font-semibold underline underline-offset-4",
};

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <header className={style.header}>
      <NavLink to="/" className={style.headerLogo}>
        #VANLIFE
      </NavLink>
      <nav className={style.navbar}>
        <button
          onClick={() => setHamburgerOpen((prev) => !prev)}
          className={headerStyle.burger}
        >
          <GiHamburgerMenu size={32} />
        </button>
        <section className={headerStyle.desktop_menu}>
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive ? style.active : style.navLinks
            }
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? style.active : style.navLinks
            }
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              isActive ? style.active : style.navLinks
            }
          >
            Vans
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? style.active : style.navLinks
            }
          >
            <BiSolidUserBadge className={style.navProfile} />
          </NavLink>
        </section>
      </nav>
    </header>
  );
};

export default Header;
