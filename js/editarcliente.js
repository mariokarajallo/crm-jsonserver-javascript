import { obtenerCliente } from "./API.js";

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
  });

  function mostrarCliente(cliente) {
    const { nombre, email, telefono, empresa, id } = cliente;

    inputNombre.value = nombre;
    inputEmail.value = email;
    inputTelefono.value = telefono;
    inputEmpresa.value = empresa;
    inputId.value = id;
  }
})();
