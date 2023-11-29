alert("¡Bienvenido a tu lista de contactos!");

const listaContacto = [];

while (true) {
  const comando = prompt(
    'Ingrese un comando: "agregar", "eliminar", "buscar", "salir"'
  );

  switch (comando) {
    //AGREGAR CONTACTO
    case "agregar":
      const nombre = prompt("Ingrese el nombre del contacto:");
      const telefono = prompt("Ingrese el numero de telefono:");

      listaContacto.push({ nombre, telefono });
      alert("¡Contacto agendado con exito!");
      break;

    //ELIMINAR CONTACTO
    case "eliminar":
      const eliminarContacto = prompt(
        "Ingrese el nombre del contacto a eliminar:"
      );
      const eliminar = listaContacto.findIndex(
        (contacto) => contacto.nombre === eliminarContacto
      );

      if (eliminar !== -1) {
        listaContacto.splice(eliminar, 1);
        alert("Contacto eliminado con exito");
      } else {
        alert("¡El contacto no existe!");
      }
      break;

    //BUSCAR CONTACTO
    case "buscar":
      const buscarNombre = prompt(
        "Ingresa el nombre del contacto que quieres buscar"
      );
      const contactoEncontrado = listaContacto.find(
        (contacto) => contacto.nombre === buscarNombre
      );

      if (contactoEncontrado) {
        alert(
          `Nombre: ${contactoEncontrado.nombre}, su numero de telefono es:${contactoEncontrado.telefono}`
        );
      } else {
        alert("¡El contacto no fue encontrado!");
      }
      break;

    //SALIR DE LA APP
    case "salir":
      alert("Cerrando agenda de contactos");
      process.exit(0);
      break;

    default:
      alert("Comando invalido. Por favor ingrese un comando valido.");
  }
}
