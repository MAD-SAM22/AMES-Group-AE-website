import { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.png";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState((prev) => ({ clicked: !prev.clicked }));
  };

  closeMobileMenu = () => {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    }
  };

  render() {
    const { clicked } = this.state;
    const navMenuClassName = [
      "absolute left-0 top-0 flex w-full transform flex-col gap-2 rounded-[13px] bg-white px-6 pt-24 pb-10 shadow-nav transition-all duration-300 md:static md:w-auto md:flex-row md:items-center md:gap-1 md:bg-transparent md:p-0 md:shadow-none",
      clicked
        ? "translate-x-0 opacity-100 pointer-events-auto"
        : "-translate-x-full opacity-0 pointer-events-none md:translate-x-0 md:opacity-100 md:pointer-events-auto",
    ].join(" ");

    return (
      <nav className="fixed left-1/2 top-5 z-[9999] flex h-20 w-[95%] -translate-x-1/2 items-center justify-between rounded-[13px] bg-white px-6 shadow-nav">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="AMES Group"
              className="mr-3 h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <button
          type="button"
          className="relative z-[10001] flex items-center justify-center rounded-md p-2 text-2xl text-gray-800 transition-colors hover:text-brand-primary md:hidden"
          onClick={this.handleClick}
          aria-label="Toggle navigation"
        >
          <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
        </button>

        <ul className={`list-none ${navMenuClassName}`}>
          {MenuItems.filter((item) => !item.mobileOnly).map((item) => (
            <li key={item.title} className="md:ml-1">
              <Link
                to={item.url}
                onClick={this.closeMobileMenu}
                className="flex items-center gap-2 rounded-md px-4 py-2 text-[1.05rem] font-semibold text-[#222] transition-colors duration-200 hover:bg-brand-primary hover:text-white"
              >
                {item.icon && <i className={`${item.icon} text-lg`} />}
                {item.title}
              </Link>
            </li>
          ))}

          <li className="md:hidden">
            {MenuItems.filter((item) => item.mobileOnly).map((item) => (
              <Link
                key={item.title}
                to={item.url}
                onClick={this.closeMobileMenu}
                className="mt-2 block rounded-md bg-brand-primary py-3 text-center text-sm font-bold uppercase tracking-[0.25em] text-white shadow-md transition duration-200 hover:bg-brand-primaryDark"
              >
                {item.title}
              </Link>
            ))}
          </li>

          <li className="hidden md:ml-3 md:inline-flex">
            <Link
              to="/assessment"
              className="inline-flex items-center rounded-md bg-brand-primary px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-brand-primaryDark"
            >
              Free Assessment
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

