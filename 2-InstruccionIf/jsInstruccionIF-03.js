function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value
	edad = parseInt(edad);

	if(edad >=18){
		alert("Sos mayor de edad")
	}
	else{
		alert("Sos menor de edad")
	}

}//FIN DE LA FUNCIÓN