import React from "react";
import navImg from "../Images/Navbar.png";
import "../Navbar/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="MainNav">
        <div className="SecondaryNav">
          <img className="navLogo" src={navImg} alt="Error" />
          <h3>Houzing</h3>
        </div>
        <div className="childText">
          <a className="anchor" href="t.me/yakhyaev_744">
            Home
          </a>
          <a className="anchor" href="#t.me/yakhyaev_744">
            Properties
          </a>
          <a className="anchor" href="#t.me/yakhyaev_744">
            Contacts
          </a>
        </div>
        <div className="navBtn">
          <button className="btn">Login</button>
        </div>
      </div>
    );
  }
}
export default Navbar;
