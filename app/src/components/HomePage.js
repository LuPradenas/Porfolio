import React, { Component } from "react";
import Hero from "./Hero";
import CertificationCards from './CertificationCard';
import ProjectCards from "./ProjectCard";
import ContactMe from "./Contact";
import Footer from "./Footer";
import {Element} from "react-scroll";

export default class Home extends Component {
  state = {
    isHeroMounted: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isHeroMounted: true });
    }, 1000);
  }

  render() {
    return (
      <div className="">
        <Element name="hero" className="element">
          <Hero />
        </Element>
        <Element name="certification" className="element">
          <CertificationCards {...this.props} />
        </Element>
        <Element name="projects" className="element">
          <ProjectCards {...this.props} />
        </Element>
        <Element name="contactMe" className="element">
          <ContactMe {...this.props} />
        </Element>
        <Footer />
      </div>
    );
  }
}
