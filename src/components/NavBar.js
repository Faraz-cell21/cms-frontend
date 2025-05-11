import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(null);

  const menuItems = {
    Academics: ["Programs", "Faculties"],
    Administration: ["VC Message"],
    Admissions: ["Programs", "International Students"],
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center w-full">
      {/* Logo */}
      <Link to="/" className="text-lg font-bold">
        <img src="/logo.png" alt="Logo" className="h-10" />
      </Link>

      <ul className="hidden md:flex space-x-6 text-gray-600">
        <li><Link to="/about" className="hover:text-black">About Gomal</Link></li>

        {Object.keys(menuItems).map((menu, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => setDropdown(menu)}
            onMouseLeave={() => setDropdown(null)}
          >
            <Link to="#" className="hover:text-black flex items-center">
              {menu} ▼
            </Link>

            {dropdown === menu && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2 z-50">
                {menuItems[menu].map((item, subIndex) => (
                  <Link
                  key={subIndex}
                  to={`/${menu.toLowerCase()}#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item}
                </Link>
                
                ))}
              </div>
            )}
          </li>
        ))}

        <li><Link to="/contact" className="hover:text-black">Contact us</Link></li>
      </ul>

      <div className="flex items-center space-x-4">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdown(dropdown === "user" ? null : "user")}
              className="px-4 py-2 bg-gray-100 text-blue-600 font-semibold rounded-lg hover:bg-gray-200"
            >
              {user.name}
            </button>

            {dropdown === "user" && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2 z-50">
                <Link to={`/${user.role}/`} className="block px-4 py-2 hover:bg-gray-200">
                  Dashboard
                </Link>
                <button
                  onClick={() => logout(navigate)}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
