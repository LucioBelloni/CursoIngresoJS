/*
Belloni
Lucio
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let r;

	dividendo =parseInt( document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt (document.getElementById("txtIdNumeroDivisor").value);

	r = dividendo % divisor;

	alert("El resto es: " + r); 
}
