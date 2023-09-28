import { Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  // css properties must be in camelCase
  const activeclassNames = {
    fontWeight: "600",
    textUnderlineOffset: "4px",
    color: "white",
    background: "#804a1c",
  };

  return (
    <>
      <nav className="navlink-wrapper">
        <NavLink
          style={({ isActive }) => (isActive ? activeclassNames : null)}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeclassNames : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeclassNames : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeclassNames : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
