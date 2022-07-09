/*
Belloni
Lucio
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let sumaUno;
	let sumaDos;
	let mensaje;

	sumaUno = document.getElementById("txtIdNumeroUno").value;
	sumaDos = document.getElementById("txtIdNumeroDos").value;
	sumaUno = parseFloat(sumaUno);
	sumaDos = parseFloat(sumaDos);

	resultado = sumaUno + sumaDos;

	mensaje = "La suma es: " + resultado;

	alert(mensaje);






	
	
	
	
	
	
	
	
	
	
	// let suma;
	// let mensaje;
	// let primerNumero; // numeroUno, primeroOperando  //mal x1, num1, numero1 
	// let segundoNumero;

	// // primerNumero = 6;
	// // segundoNumero =66;
	// primerNumero = document.getElementById("txtIdNumeroUno").value;
	// segundoNumero = document.getElementById("txtIdNumeroDos").value;


	// // suma = 6+66;

	// suma= primerNumero + segundoNumero;


	// mensaje ="La suma es "  + suma;

	// alert(mensaje);

	
	
	
	

}