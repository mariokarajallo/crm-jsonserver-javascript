import { obtenerCliente } from "./API.js";

(function () {
  document.addEventListener("DOMContentLoaded", async () => {
    //consultar que registros estamos visitando para hacer la consulta a la api y traer los resultados
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parseInt(parametrosURL.get("id"));

    const cliente = await obtenerCliente(idCliente);

    console.log(cliente);
  });
})();
