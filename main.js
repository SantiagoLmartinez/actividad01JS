//declaramos las varibles donde almacenar los datos ingresados
let num1 = prompt("Digite un numero");
let num2 = prompt("Digite otro un numero");

//parseamos el string que nos brinda por defecto
let num1ParseInt = parseInt(num1);
let num2ParseInt = parseInt(num2);

//capturamos el evento click del btn y quitamos la configuracion por defecto
document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();
//llamamos a la funcion para imprimir por consola y comparar numeros 
    compararNum();
});

//creamos la funcion para comparar datos almacenado
function compararNum(param1, param2) {
    param1 = num1ParseInt;
    param2 = num2ParseInt;
    if (param1 > param2) {
        console.log("El numero mayor es: " + param1 + " y el numero menor es: " + param2);
    } else if (param1 < param2) {
        console.log("El numero mayor es: " + param2 + " y el numero menor es: " + param1);
    } else if (param1 === param2) {
        console.log("Los numeros son iguales");
    }

}
