import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className=" body-font">
          <div className="container px-5 pb-8 mx-auto flex sm:flex-col md:flex-row lg:flex-row  xl:flex-row flex-col items-center justify-between">
            <div className="text-sm font-semibold mt-4">
              <p>© Copyright 2021</p>
              <span>Todos los derechos reservados</span>
            </div>
            <p class="madewithlove mt-3">
              Hecho con  <FontAwesomeIcon icon={faHeart} className="fa-heart" />
            </p>
            <span className="social-icons inline-flex mt-3 justify-center sm:justify-start">
              <a
                href="https://github.com/LuPradenas"
                target="_blank"
                className="mx-3" rel="noreferrer"
              >
              <FontAwesomeIcon icon={faGithub}  aria-hidden="true" class="fa-github"/>
              </a>
              <a
                href="https://www.linkedin.com/in/luciana-pradenas"
                target="_blank"
                className="mx-3" rel="noreferrer" >
                <FontAwesomeIcon icon={faLinkedinIn}  aria-hidden="true" class="fa-linkedin"/>
              </a>
              <a href="mailto: lucianapradenas3@gmail.com" className="mx-3">
                <FontAwesomeIcon icon={faEnvelope}  aria-hidden="true" class="fa-envelope"/> 
              </a>
            </span>
          </div>
        </footer>
      </>
    );
  }
}
