import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory, NavLink } from "react-router-dom";
export const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1 " style={{ padding: "0 2rem" }}>
        <span></span>
        <i className="fas fa-location-arrow">&nbsp;&nbsp;Сокращение ссылок</i>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">
              <i className="fas fa-greater-than-equal ">&nbsp;Создать</i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/links">
              <i className="fas fa-link">&nbsp;Ссылки</i>
            </NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              <i className="fas fa-sign-out-alt">Выйти</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
