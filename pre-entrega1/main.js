/* CARRITO DE COMPRAS DONDE EL USUARIO DETALLA EL PRODUCTO A COMPRAR, SU PRECIO Y SU CANTIDAD.
LEUGO SE LE BRINDARA UN DETALLE DE LA TOTALIDAD DE PRODUCTOS Y EL VALOR FINAL DE LA COMPRA*/

const si = `si`
const no = `no`;

let nombre_usuario;
let nombre_producto;
let precio_producto;
let cantidad;
let total = 0;
let detalle;
let continuar;
let ticket = `nombre precio cantidad subtotal\n`

nombre_usuario = prompt(`Bienvenido a nuestra tienda virtual!\n Por favor, ingrese su nombre:`);
continuar =prompt(`Hola ${nombre_usuario}, desea iniciar su compra? si/no`)

do{
    nombre_producto = prompt(`ingrese el nombre del producto: `);
    precio_producto = +prompt(`ingrese el precio del producto: `);
    cantidad = +prompt(`ingrese la catidad de productos que desea comprar: `);

    detalle = ` ${nombre_producto} $${precio_producto} ${cantidad} ${cantidad*precio_producto}\n`;
    ticket = ticket + detalle;
    total = total + precio_producto*cantidad;

    continuar = prompt(`desea agregar otro producto? si/no`)
}while(
    continuar === si
);

ticket = ticket + `TOTAL: $${total}`;
alert(ticket);
alert(`Hasta la proxima! ${nombre_usuario}`);

/* continuar =! si(
    prompt(`Hasta la proxima!`)
) */

