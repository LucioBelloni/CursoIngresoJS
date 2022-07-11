/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno; 
    let precioDos;
    let precioTres;
    let mensaje;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    resultado = precioUno + precioDos + precioTres;

    mensaje = "La suma de los tres es: " + "$" + resultado.toFixed(2);

    alert(mensaje);

}
function Promedio () 
{
	let precioUno; 
    let precioDos;
    let precioTres;
    let mensaje;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);
 
    resultado = (precioUno + precioDos + precioTres) / 3;

    mensaje = "El promedio entre los tres: " + resultado.toFixed(2);

    alert(mensaje);
}
function PrecioFinal () 
{
	let precioUno; 
    let precioDos;
    let precioTres;
    let mensaje;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);


   precioFinal = (precioUno + precioDos + precioTres )*1.21;

   mensaje = "El precio final es de " + "$" + precioFinal.toFixed(2);

    alert(mensaje);
}