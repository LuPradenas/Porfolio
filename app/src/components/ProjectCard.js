import React, { Component } from "react";
import { projects } from '../data/projects-data';



export default class ProjectCards extends Component {

  

  render() {
    return (
      <div id="projects" className="">
        <section className=" body-font">
          <div className="container px-5 md:py-24 sm:py-32 lg:py-24 py-32 mx-auto mb-12 text-center title" >
            <h1 class="text-5xl font-medium title-font text-center mt-8 mb-8">Proyectos</h1>
            <p class="lg:w-2/3 mt-8 font-normal mx-auto leading-relaxed text-base my-8 ">
               Estos son algunos de los proyectos que hice
              </p>
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
                {projects.map((obj, i) => (
                  <div
                    key={i}
                    className=" mx-8 sm:mx-3 md:mx-0 lg:mx-0"
                  >
                    <div className="border border-gray-200 rounded-lg project-card overflow-hidden">
                      <div
                        className="card-image" >
                        <img src={obj.image} alt="images"/>
                      </div>
                      <div className="p-6">
                        <h2 className="text-lg font-medium title-font mb-4">
                          {obj.name}
                        </h2>
                        <p className="leading-relaxed text-base">{obj.info}</p>
                      </div>
                    </div>
                  </div>
                ))}
  
            </div>
          </div>
        </section>
      </div>
    );
  }
}
