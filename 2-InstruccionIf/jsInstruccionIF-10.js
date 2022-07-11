function mostrar() {
  let resultadoExamen;

  resultadoExamen = Math.floor(Math.random() * 11);

  if (resultadoExamen == 10 || resultadoExamen == 9) {
    alert("Exelente " + resultadoExamen);
  } else 
  	if (resultadoExamen >= 4) {
    alert("Aprobo " + resultadoExamen);
  } else {
    alert("Vamos, la proxima se puede " + resultadoExamen);
  }
} //FIN DE LA FUNCIÓN
