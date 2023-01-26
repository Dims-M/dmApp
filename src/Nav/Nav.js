import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="/">Главная</a>
              </li>
              {/* <li>
                <a href="#">Пункты обмена</a>
              </li> */}
              <li>
                <a href="/about">Контакты</a>
                {/* <Link to="/about"> </Link> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
