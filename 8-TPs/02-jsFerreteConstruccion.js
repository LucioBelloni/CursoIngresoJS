/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
        
    let largo;
    let ancho;
    let perimetro;
    let total;
    let mensaje;


    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    
    perimetro = ((largo + ancho)* 2);
    
    total = perimetro * 3;

    mensaje = " la cantidad de alambre a comprar es de: " + total + " metros"; 

    alert(mensaje);
}
function Circulo () 
{
	
	let radio;
    let perimetro;
    let total;
    let mensaje

    radio = document.getElementById("txtIdRadio").value;
    
    radio = parseFloat(radio);

    perimetro = 2 * Math.PI * radio ;
    
    total = perimetro * 3;

    mensaje = "La cantidad de alambre a comprar es: " + total.toFixed(2) + " metros";
    alert (mensaje);

}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let bolsaCemento;
    let bolsaCal;
    let mensaje;    
    largo= document.getElementById("txtIdLargo").value;
    ancho= document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    
    area= largo * ancho;
    
    bolsaCemento = area * 2;
    
    bolsaCal = area * 3;

    mensaje ="se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal para hacer el contrapiso";

    alert(mensaje);


}