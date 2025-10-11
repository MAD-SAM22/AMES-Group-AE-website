import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import logo from "../assets/Logo.png"; // Ensure the logo path is correct
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/assessment" className="nav-cta-btn">Free Assessment</Link>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
