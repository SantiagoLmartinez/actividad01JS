//let name = prompt("¿Cual es tu nombre?");
let num1 = prompt("Digite un numero");
let num2 = prompt("Digite otro un numero");
let num1ParseInt = parseInt(num1);
let num2ParseInt = parseInt(num2);



document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();
   // compararNumMayor();
     compararNum();
});

// function compararNumMayor(param1, param2) {
//     param1 = num1ParseInt;
//     param2 = num2ParseInt;
//     if (param1 > param2) {
//         console.log("El numero mayor es" + param1 + "y el numero menor es " + param2);
//     } else {
//         console.log("El numero mayor es" + param2+ "y el numero menor es " + param1);


//}

function compararNum(param1, param2) {
    param1 = num1ParseInt;
    param2 = num2ParseInt;
    if (param1 > param2) {
        console.log("El numero mayor es: " + param1 + " y el numero menor es: " + param2);
    } else if(param1 < param2){
        console.log("El numero mayor es: " + param2+ " y el numero menor es: " + param1);
    }else if(param1===param2){
        console.log("Los numeros son iguales")
    }


}

// function compararNumMenor(param1, param2) {
//     param1 = num1ParseInt;
//     param2 = num2ParseInt;
//     if (param1 < param2) {
//         console.log("El numero menor es" + (param1));
//     } else {
//         console.log("El numero menor es" + (param2));
//     }

