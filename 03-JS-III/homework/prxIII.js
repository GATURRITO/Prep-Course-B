// // var ages = [32, 33, 16, 40];
// // var result = ages.filter(checkAdult);

// // function checkAdult(age) {
// //   return age >= 33;
// // }
// // console.log(result)
// //function encuentraPares(array){
//     // Devuelve un arreglo con los pares encontrados
//     // en el arreglo de enteros pasado como parámetro
//     // Tu código:
//   //   var pares = []
//   //   for( i = 0; i < array.lenght; i++){
//   //     if(array[i] % 2 === 0) {
//   //   pares.push(array[i]) ; 
//   //     }
//   // }
//   // return array
//   // 
//   function sumaArray(array){
//     // Devuelve el resultado de sumar todos los elementos
//     // de un arreglo de enteros dado
//     // Tu código:
//     return array.reduce((acumulador , siguiente) => acumulador + siguiente);
  
  
//   }
//   console.log (sumaArray([1,2,3,4,5,6,7,8,9,10]));
  

//  var comidas = ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna'];

// console.log(comidas[comidas.length-2]);

// var comidas = ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna'];

// comidas.push("Macarrones");

// console.log(comidas);




// var comidas = ['Pizza', 'Pastas', 'Lasagna', 'Hamburguesa'];

// comidas.pop();

// console.log(comidas);


// var comidas = ['Pizza', 'Pastas', 'Lasagna', 'Hamburguesa'];

// comidas.unshift("peperoni");

// console.log(comidas);

// var comidas = ['Pizza', 'Pastas', 'Lasagna', 'Hamburguesa'];

// comidas.shift();

// console.log(comidas);

// function encontrarVocalA (palabra){
// for(var i = 0; i < palabra.length; i ++){
//   if(palabra.length -2 === "a"){
//     return "encontre la vocal"
//   }

// }
// return "no encontre vocal";
// }

// 

// var autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

// // Podemos escribir el callback en los paréntesis como una función anónima
// autos.forEach(function (marcas, indice) {
//   console.log(marcas, indice);
// });

// function mostrarNombres(marcas) {
//   console.log(marcas);
// // }

// var numeros = [2, 3, 4, 5]

// function multiplicPorTres(numerito){
// return numerito * 3
// }
// var triplete = numeros.map(multiplicPorTres);

// console.log(triplete);


// EQUIVALENTE
// var doble = numeros.map(function (elemento) {
//   return elemento * 2;
// });

// console.log(doble); 


// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var palabras = ["Hola,", "mi", "nombre", "es", "Martin"];

// // Podemos escribir la función anónima directamente en los paréntesis de .reduce
// // Si omitimos el elemento inicial, siempre comenzará en el primer elemento.
// var suma = numeros.reduce(function (acumulador, elemento) {
//   return acumulador + elemento;
// });



// function multiplicarDosNumeros(a, b) {
//   return a * b;
// }

// var productos = numeros.reduce(multiplicarDosNumeros);


// function dividirDosNumeros(b, a) {
//   return b/a;
// }

// var division = numeros.reduce(dividirDosNumeros);



// var frases = palabras.reduce(function (acc, elemento) {
//   return acc + " " + elemento;
// }, "Frase completa:");



// // console.log(suma);
// // console.log(productos);
// // console.log(division);
// // console.log(frases);


// function encontrarVocalA (palabra){
// for(var i = 0; i < palabra.length; i ++){
//   var posicion = i;
//   if(palabra[i] === "b"){
//     return "encontre la vocal b" + " " + posicion
//   }

// }
// return "no encontre vocal";
// }

// console.log(palabra);

// var count = 1;
// while (count < ) {
//   console.log( "Cuenta es :" + " " + count);
//   count ++;
// }

// var numbers = [1,2,3,4,5];
// var double = numbers.map(function (elementos){ 
//   return elementos * 2});
//   console.log(double);

// function encuentraPares(array){
//   // Devuelve un arreglo con los pares encontrados
//   // en el arreglo de enteros pasado como parámetro
//   // Tu código:
// //   var pares = []
// //   for( i = 0; i < array.lenght; i++){
// //     if(array[i] % 2 === 0) {
// //   pares.push(array[i]) ; 
// //     }
// // }
// // return array
// // 


// return array.filter((Element) => Element % 2 === 0);
  

// }

// function elevaAlCuadrado(array){
//   // Devuelve un arreglo con cada número del array
//   // elevado al cuadrado
//   // Tu código:
// return array.map((Element) => Element ** 2)
// }

// function sumaArray(array){
//   // Devuelve el resultado de sumar todos los elementos
//   // de un arreglo de enteros dado
//   // Tu código:
// return array.reduce((acc , ultimo) => acc + ultimo)
// }

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
   var numerosEnString = num.toString()
    var longitud = numerosEnString.length
    return longitud;

}




