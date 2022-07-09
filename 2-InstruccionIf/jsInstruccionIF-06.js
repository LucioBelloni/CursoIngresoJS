function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13 ){
		alert("Sos un niño");
			
	}
	else if( edad < 18){
		alert("Sos un adolecente ");
	}else{
		alert("sos un adulto");
	}

	
	
	
	



}//FIN DE LA FUNCIÓN