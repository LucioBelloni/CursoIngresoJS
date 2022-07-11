/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let Centígrados; 
    let mensaje;

    temperatura = document.getElementById("txtIdTemperatura").value;
    
    temperatura = parseFloat(temperatura);

    Centígrados = (temperatura - 32 )* 5 / 9;

    mensaje = temperatura.toFixed(2) + " Fahrenheit son " + Centígrados.toFixed(2) + " centigrados "
    
    alert(mensaje);
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let Centígrados; 
    let mensaje;

    temperatura = document.getElementById("txtIdTemperatura").value;

    temperatura = parseFloat(temperatura);

    Centígrados = (temperatura * 9/5 )+ 32;

    mensaje = temperatura.toFixed(2) + "centigrados son " + Centígrados.toFixed(2) + " Fahrenheit";

    alert(mensaje);
}
