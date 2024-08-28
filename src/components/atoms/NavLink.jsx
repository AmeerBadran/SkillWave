/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";

const NavLinks = ({ linksLayout, bgColor, handleNavButton }) => {
  const linkStyle =
    linksLayout === "halfPage" ? 'group-hover:ml-4' : 'font-semibold'

  const linkColor =
    bgColor === "footer" ? 'text-white hover:text-base-color' : 'text-gray-800 hover:text-base-color'
  return (
    <>
      {navLinks.map((link, index) => (

        <li key={index} className={`${linksLayout === 'halfPage' && 'group w-full'}`
        } >
          <NavLink
            to={link.path}
            onClick={handleNavButton}
            className={`text-base ${linkStyle} ${linkColor}  font-semibold transition-all duration-500`}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;