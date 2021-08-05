import React, { Component } from "react";
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

toast.configure();

class Contact extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: "",
    email: "",
    message: "",
   };

 // Necesario para acceder al valor correcto de esto dentro de la devolución de llamada
 this.handleInputChange = this.handleInputChange.bind( this);
}

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

   this.setState({
    [name]: value
  });
}

inviaEmail(e) {
 e.preventDefault();
 
 emailjs.sendForm('gmail', 'template_ctkoi6f', e.target, 'user_XpKMWApiOFdQ20s1tfWpK')
 .then((result) => {
    toast.success("Email enviado correctamente!");
    console.log(result.text);
 }, (error) => {
    toast.error("El email no pudo ser enviado, vuelve a intentarlo!");
    console.log(error.text);
 });

e.target.reset();
}

  render() {
    const { isDark } = this.props;
      // In generale, se ti riferisci ad un metodo senza () dopo di esso,
      // per esempio onChange = {this.handleInputChange}, 
      // potresti aver bisogno di applicare bind a quel metodo

    return (
      <section className=" body-font relative">
        <ToastContainer
          position="top-center"
          transition={Slide}
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
          <div className=" mb-12 text-center title">
            <h1 class="text-5xl font-medium title-font">
              Contacto
              </h1>
              <p class="lg:w-2/3 mt-8 font-normal mx-auto leading-relaxed text-base">
               Escribime no tengas miedo al contactarme ...
              </p>
           </div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={this.inviaEmail}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <input
                    required
                    maxLength={50}
                    className={`w-full  rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 ${
                      isDark ? "bg-black placeholder-white::placeholder" : ""
                    }`}
                    placeholder="Nombre"
                    type="text"
                    name="name"
                    checked={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="p-2 w-1/2">
                  <input
                    required
                    maxLength={50}
                    name="email"
                    className={`w-full  rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 ${
                      isDark ? "bg-black placeholder-white::placeholder" : ""
                    }`}
                    placeholder="Email"
                    type="email"
                    checked={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="p-2 w-full ">
                  <textarea
                    required
                    name="message"
                    maxLength={500}
                    className={`w-full  rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block ${
                      isDark ? "bg-black placeholder-white::placeholder" : ""
                    }`}
                    placeholder="Mensaje"
                    checked={this.state.message}
                    onChange={this.handleInputChange}
                  ></textarea>
                </div>
                <div className="p-2 w-full text-center">
                  <button
                    type="submit"
                    value="enviar"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
