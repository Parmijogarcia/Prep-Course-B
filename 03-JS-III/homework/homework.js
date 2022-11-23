// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var numeros = [1,2,3,4,5,6,7,8,9,10]
   var suma = 0;
   for (var i = 0; i < numeros.length; i++) {
    suma = numeros[i] + suma;
   }
   return suma
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
 // for (var i = 0; i < numeros.length; i++)
// if ([i] % 2 === 0)
 //  return numeros[i]


 //if (numeros.forEach(element % 2 === 0))
 // return numeros
 //;
 
// var pares = numeros.map(elemento => )
var pares = []
for (i = 0; i < array.length; i++){
if (array[i] % 2 === 0) {
  pares.push(array[i]);
}
}
return pares
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  //array = []
  //for (i = 0; i < array.length; i++){
    //Math.pow([i],2)
    //return array[i]
  //} 
  var cuadrado = array.map(elemento => elemento * elemento)
  return cuadrado
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var suma = 0
  for (var i = 0; i < array.length; i++) {
     suma = array[i] + suma;
  }
  return suma
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
 // var num = []
  //return num.length

  //var contar = []
  //for (i = 0; i <= num.length; i++) {
    //return contar[i]
   
   // var num = toString.num
    //return num.length

    return num.toString().length;
  } 
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
