import { obtenerCliente, editarCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function () {
  //datos del formulario
  const inputNombre = document.querySelector("#nombre");
  const inputEmail = document.querySelector("#email");
  const inputTelefono = document.querySelector("#telefono");
  const inputEmpresa = document.querySelector("#empresa");
  const inputId = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded", async () => {
    //consultar que registros estamos visitando para hacer la consulta a la api y traer los resultados
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parseInt(parametrosURL.get("id"));

    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);

    //submit al formulario
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente);
  });

  function mostrarCliente(cliente) {
    const { nombre, email, telefono, empresa, id } = cliente;

    inputNombre.value = nombre;
    inputEmail.value = email;
    inputTelefono.value = telefono;
    inputEmpresa.value = empresa;
    inputId.value = id;
  }

  function validarCliente(e) {
    e.preventDefault();
    // objeto que contiene los valores de cada input
    const cliente = {
      nombre: inputNombre.value,
      email: inputEmail.value,
      telefono: inputTelefono.value,
      empresa: inputEmpresa.value,
      id: parseInt(inputId.value),
    };

    if (validar(cliente)) {
      mostrarAlerta("todos los campos son necesarios");
      return;
    }

    // reescribe le objeto
    editarCliente(cliente);
  }
})();
