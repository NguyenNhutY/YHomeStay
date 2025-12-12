import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ active, setMenuOpened, containerStyles }) => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/listing", title: "Listing" },
    { path: "/blog", title: "Blog" },
  ];

  return (
    <nav
      className={`flex items-center gap-4 transition-all ${containerStyles}`}
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.path}
          onClick={() => {
            setMenuOpened(false);
            scrollTo(0, 0);
          }}
          className={({ isActive }) =>
            `${
              isActive ? "text-secondary font-semibold" : "hover:text-blue-400"
            }
            px-3 py-2 rounded-full uppercase text-sm font-bold transition`
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default memo(Navbar);
