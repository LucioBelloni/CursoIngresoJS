/*
Belloni
Lucio
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let mensaje;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;

	mensaje = "La suma es " + resultado;
	
	alert(mensaje);	
}

function restar()
{
	
	let numeroUno;
	let numeroDos;
	let mensaje;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	respuesta = numeroUno - numeroDos;

	mensaje = "La resta es " + respuesta;
	
	alert(mensaje);	


}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let mensaje;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	respuesta = numeroUno * numeroDos;

	mensaje = "La multiplicacion es " + respuesta;
	
	alert(mensaje);	


}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let mensaje; 

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	respuesta = numeroUno / numeroDos;

	mensaje = "La division es " + respuesta;
	
	alert(mensaje);	

}

