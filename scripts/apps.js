//Simulador para que le muestra al sicologo, sobre el descuento de un número de citas, donde si el usuario escoge una cita
//le da un descuento de 1%, si escoge dos citas un descuento de 2% y así hasta llegar a 10 citas, que equivaldrían al 10% de descuento.
//También el sistema realiza un calculo para corvertir en moneda colombiana, tanto si escoge si el paciente paga en dolares o en euros.
//Nota: La pagina web se uso usando boostrat de una plantilla (https://startbootstrap.com/theme/freelancer)


//Saludo inicial al usuario
alert("Bienvenido a nuestro SIMULADOR DE CALCULO. Nota: La información del desarrollo de este ejercicio se encuentra en la consola");

//Variables iniciales
let nombrePaciente = prompt("Escriba su nombre");
let numeroConsultas = Number(prompt("Escoja el número de consultas que desea recibir con el especialista - Máximo 10 citas, por cada cita escogida se ofrece un valor de descuento"));
let tipoMoneda = prompt("Escoja la moneda a pagar donde 1 es Dolar (4.800 COP)  americano y 2 es Euro (5.100 COP)");
let dolarCOP = 4800;
let euroCOP = 5100;
let precioDolares = 30;
let precioEuro = 25;
let precioConsulta = 0;
let validacionCorrecta = false;

//Función que realiza el cambio de moneda (Euro a peso colombiano // dolar a peso colombiano)
function calculoMoneda(valorcConsuta, tasaCambio) {

    return valorcConsuta * tasaCambio;

}

//Validación para que el usuario solo escoja entre 1 y 10 números de consultas a tratar con el sicologo, y sino arroja un error
if (numeroConsultas >= 1 && numeroConsultas <= 10) {

    //Validación para que el usuario solo escoja el número 1 (dolar) o número 2 (euro)
    if (tipoMoneda === "1") {
        alert("El costo en DOLARES de una consulta es de 30 USD");
        precioConsulta = calculoMoneda(precioDolares, dolarCOP);
        validacionCorrecta = true;


    } else if (tipoMoneda === "2") {

        alert("El costo en EUROS de una consulta es de 25 Euros");
        precioConsulta = calculoMoneda(precioEuro, euroCOP);
        validacionCorrecta = true;
    }

    else {

        alert("Moneda erronea");
        validacionCorrecta = false;

    }

}
else {
    alert("El número de consultas ingresado es erroneo");
    validacionCorrecta = false;
}

let descuentoCita = 0;
let porcentajeDescuento = 0;


// Calculadora de descuento, primero valida que la información anterior, sea verdadera, para realizar los siguientes calculos
if (validacionCorrecta == true) {

    console.log("El precio normal de una consulta es: "+precioConsulta);
    
    for (let i = 1; i <= numeroConsultas; i++) {

        descuentoCita = 0;
        porcentajeDescuento = 0;
        porcentajeDescuento = i / 100;

        
        descuentoCita = (precioConsulta) - (precioConsulta * porcentajeDescuento);

        console.log("El valor de: " + nombrePaciente + " (con descuento en pesos Colombianos) "+ porcentajeDescuento*100+" % " +"de la cita: # " + i + " Es de = " + descuentoCita + " Pesos colombianos");


    }
} else {
    console.log("Información incorrecta");

}



console.log("Fin del simulador")






