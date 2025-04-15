import { NavLink } from "react-router-dom";

import logo from "../assets/icons/logo-base.svg";
import searchLogo from "../assets/icons/search.svg";
import cartLogo from "../assets/icons/cart.svg";


const Header = ({ withInput, setSearchQuery}) => {
  return (
    <div className="flex items-center justify-between p-7">
      <NavLink to="/">
        <img className="h-10 w-10 cursor-pointer" src={logo} alt="Logo" />
      </NavLink>
      {withInput && (
        <div className="flex items-center rounded-3xl bg-gray-100 pt-3 pr-6 pb-3 pl-6">
          <img src={searchLogo} className="mr-2" alt="Search" />
          <input
            className="text-black placeholder-black focus:outline-none"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchQuery(e.target.value.trim())
            }}
          />
        </div>
      )}
      <NavLink to="/cart">
        <img className="h-10 w-10 cursor-pointer" src={cartLogo} alt="Cart" />
      </NavLink>
    </div>
  );
};

export default Header;
