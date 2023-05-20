import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";
(function () {
  const formulario = document.querySelector("#formulario");

  formulario.addEventListener("submit", validarCliente);

  function validarCliente(e) {
    e.preventDefault();

    // seleccionamos los inputs para capturar sus datos
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    // objeto que contiene los valores de cada input
    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    if (validar(cliente)) {
      mostrarAlerta("todos los campos son necesarios");
      return;
    }

    nuevoCliente(cliente);
  }

  function validar(obj) {
    return !Object.values(obj).every((input) => input !== "");
  }
})();
