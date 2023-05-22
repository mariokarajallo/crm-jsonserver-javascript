const url = "http://localhost:4000/clientes";

//crea un nuevo cliente en la base de datos
export const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: { "Content-Type": "application/json" },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

// obtener clientes de la base de datos
export const obtenerClientes = async () => {
  try {
    const result = await fetch(url);
    const clientes = await result.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};

// eliminar un cliente..
export const eliminarCliente = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

// obtiene un cliente por su ID
export const obtenerCliente = async (id) => {
  try {
    const result = await fetch(`${url}/${id}`);
    const cliente = await result.json();
    return cliente;
  } catch (error) {
    console.log(error);
  }
};

// actualiz un registro
export const editarCliente = async (cliente) => {
  try {
    await fetch(`${url}/${cliente.id}`, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};
