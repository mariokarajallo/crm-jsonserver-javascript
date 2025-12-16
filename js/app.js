import { obtenerClientes, eliminarCliente } from "./API.js";

(function () {
  const listado = document.querySelector("#listado-clientes");

  document.addEventListener("DOMContentLoaded", mostrarClientes);

  listado.addEventListener("click", confirmarEliminar);

  async function mostrarClientes() {
    const clientes = await obtenerClientes();

    clientes.forEach((cliente) => {
      const { nombre, email, telefono, empresa, id } = cliente;

      const row = document.createElement("tr");

      row.innerHTML += `
                <td class="px-6 py-4 whitespace-nowrap border-b border-gray-100">
                    <p class="font-bold text-slate-800 text-sm leading-5"> ${nombre} </p>
                    <p class="text-sm leading-10 text-slate-500"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap border-b border-gray-100 ">
                    <p class="text-slate-700 text-sm leading-5">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap border-b border-gray-100 text-sm leading-5 text-slate-700">    
                    <p class="text-slate-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap border-b border-gray-100 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-indigo-600 hover:text-indigo-900 mr-5 font-bold">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 font-bold eliminar">Eliminar</a>
                </td>
            `;

      listado.appendChild(row);
    });
  }
  function confirmarEliminar(e) {
    if (e.target.classList.contains("eliminar")) {
      //seleccionar el id del cliente
      const clienteId = e.target.dataset.cliente;

      // preguntamos si queremos eliminar o no
      const confirmar = confirm("Deseas eliminar este registro?");

      // si el usuario responde que "si"
      if (confirmar) {
        eliminarCliente(clienteId);
      }
    }
  }
})();
