/*
Ejercicio 1
Estás diseñando un sistema de facturación. Debes representar la lista de facturas,
donde cada factura está compuesta de un número, el nombre del cliente, la fecha,
y unos ítems. Cada ítem tiene un id de producto, un precio por unidad y una cantidad.

¿Cómo representarías esta lista utilizando arreglos y objetos?
*/

//Lista de facturas


var arrayInvoice = []

//funcion que permite agregar facturas a la lista de facturas
function addInvoice( number, customer, date, items ){
    //Objeto factura
    const invoice = {
        number,
        customer,
        date,
        items: []
    }
    addItems();
    //funcion que permite agregar items a la factura
    function addItems (){
        invoice.items = items.map( ({ id, price, quantity }) =>  ({ id, price ,quantity }))
    }
    //Agregamos facturas al arreglo de facturas
    arrayInvoice.push(invoice)
}

addInvoice(1, "name", '27/10/2021', [{ id: 1, price: 25, quantity: 30 },{ id: 2, price: 20, quantity: 30 } ] )
