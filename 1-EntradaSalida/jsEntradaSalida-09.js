/*
Belloni
Lucio
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let importe; 

 importe = document.getElementById("txtIdSueldo").value;

 importe = parseInt(importe);

 r = ((importe * 10) /100) + importe;
 
 document.getElementById("txtIdResultado").value = r;

}
