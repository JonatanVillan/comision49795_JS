alert("Bienvenido a tu lisyta de contactos!\n ¿Que deseas hacer?");

const lista_de_contactos = [];

while(true){
    const comando = prompt(
      `Ingrese la accion a realizar:\n "agregar"\n "eliminar"\n "buscar"\n "salir"\n`
    );

    switch (comando) {
        case "agregar" :
            const nombre =prompt("Ingrese el nombre del nuevo contacto:");
            const telefono = +prompt("Ingrese el numero de telefono del nuevo contacto:");

            lista_de_contactos.push({nombre, telefono});
            alert(`${nombre} ah sido agregado con exito!`);
            break;
        
        case "eliminar":
            const eliminar_contacto = prompt("Ingrese el nombre del contacto a aliminar:");
            const eliminar = lista_de_contactos.findIndex(
                (contacto) => contacto.nombre === eliminar_contacto
            );
            if (eliminar_contacto !== -1){
                lista_de_contactos.splice(eliminar);
                alert("¡Contacto eliminado!");
            } else{
                alert("El contacto seleccionado no existe.\n Intente nuevamente.");
            };
            break;

        case "buscar":
            const buscar_nombre = prompt ("Ingrese el nombre del contacto que desea ver:");
            const contacto_encontrado = lista_de_contactos.find(
                (contacto) => contacto.nombre === buscar_nombre
                );
            if (contacto_encontrado) {
                alert(`contacto encontrado:
                ${contacto_encontrado.nombre} : ${contacto_encontrado.telefono}`);
            } else{
                alert("¡Error!\n Intenta nuevamente");
            };
            break;
        
        case "salir" :
            alert("Cerrando agenda de contactos");
            Process.exit(0);
            break;

        default :
        alert("Comando incorrecto, intente nuevamente.")
    }
};