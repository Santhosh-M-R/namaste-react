import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header flex justify-between">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-36" />
      </div>
      <div className="nav-items flex mr-8">
        <ul className="flex gap-3 items-center cursor-pointer">
          <li>online: {isOnline ? "Yes" : "No"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="loginBtn cursor-pointer"
            onClick={() =>
              login == "Login" ? setLogin("Logout") : setLogin("Login")
            }
          >
            {login}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
