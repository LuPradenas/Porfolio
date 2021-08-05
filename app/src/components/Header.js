import React, { Component } from "react";
import "./../assets/style.css";
import { Link,Events,scrollSpy } from "react-scroll";

export default class Header extends Component {
  // state = {
  //   isDark: false,
  // };

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
    });

    Events.scrollEvent.register("end", function () {

    });

    scrollSpy.update();

    localStorage.setItem("theme", "dark");
    this.props.setAppState({ isDark: true });
    // this.setState({
    //   isDark: true,
    // });

    document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "dark");
    document.getElementById("toggle").checked = true;
  }

  themeHandler = (e) => {
    const { checked } = e.target;
    if (checked) {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      // this.setState({ isDark: true });
      this.props.setAppState({ isDark: true });
    } else {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      // this.setState({ isDark: false });
      this.props.setAppState({ isDark: false });
    }
   
  };

  render() {
    const { isDark } = this.props;
    return (
      <header
        className=" body-font nav-sticky"
        style={{ backgroundColor: isDark ? "" : "white" }}
      >
        <div className="container mx-auto flex flex-wrap md:p-4 sm:p-0 lg:p-4 p-2 flex-col md:flex-row items-center">
          <Link
            className="mr-5 cursor-pointer"
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            // offset={50}
            duration={100}
            // onSetActive={this.handleSetActive}
          >
            <a className="flex title-font font-medium items-center md:mb-0">
              <span className="ml-3 text-xl">Luciana Pradenas</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <a className="mr-5 hover: cursor-pointer">First Link</a>
            <a className="mr-5 hover: cursor-pointer">Second Link</a>
            <a className="mr-5 hover: cursor-pointer">Third Link</a> */}
            <Link
              className="mr-5 cursor-pointer"
              activeClass="active"
              to="certification"
              spy={true}
              smooth={true}
              // offset={50}
              duration={100}
              // onSetActive={this.handleSetActive}
            >
              Certificaciones
            </Link>
            <Link
              className="mr-5 cursor-pointer"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              // offset={50}
              duration={100}
              // onSetActive={this.handleSetActive}
            >
              Proyectos
            </Link>
            <Link
              className="mr-5 cursor-pointer"
              activeClass="active"
              to="contactMe"
              spy={true}
              smooth={true}
              // offset={50}
              duration={100}
              // onSetActive={this.handleSetActive}
            >
              Contacto
            </Link>
            <a href="/"  className="mr-5 ">
              Sobre mi
            </a>
          </nav>
          <div className="flex justify-center items-center">
            
            <div>
              <div className="relative inline-block w-10 mx-2 align-middle select-none transition duration-200 ease-in">
                <input
                  onChange={this.themeHandler}
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

