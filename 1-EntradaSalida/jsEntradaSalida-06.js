/*
Belloni
Lucio
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroOne;
	let numeroTwo;
	

	
	
	  numeroOne= document.getElementById("txtIdNumeroUno").value;
	  numeroTwo= document.getElementById("txtIdNumeroDos").value;

	
	  resultado = parseInt(numeroOne) + parseInt(numeroTwo);



	alert("La suma es: " + resultado);

}