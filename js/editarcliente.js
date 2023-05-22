(function () {
  document.addEventListener("DOMContentLoaded", () => {
    //consultar que registros estamos visitando para hacer la consulta a la api y traer los resultados
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parseInt(parametrosURL.get("id"));

    console.log(idCliente);
  });
})();
