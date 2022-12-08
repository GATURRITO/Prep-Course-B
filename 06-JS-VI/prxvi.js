// function uno (num, cb){
//     var edad = cb (num);
//     return "tu edad es  " +  edad

// }

// function dos (num){
//    return 2022 - num
// }

// dos(1997)

// uno (1997, dos)

// function mayuscula(nombre) {
//     //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
//     //ej: Recibe "mario" ----> Devuelve "Mario"
//     //Tu código:
  
//       console.log (nombre)
//       console.log (nombre[0].toUpperCase())
//       console.log (nombre.slice(1))

//       return nombre[0].toU+pperCase() + nombre.slice(1)
    
//   }
  
//   console.log(mayuscula("mario"))

// function saludo (name){
//     return "Hola, mi nombre es   " + name
// }

// function llamarCallback (name, cb){
//     return cb(name);
// } 
// console.log(llamarCallback("rich", saludo))

// function sumarArray(numeros, cb) {
//     // Suma todos los números enteros (int/integers) de un array ("numeros")
//     // Pasa el resultado a `cb`
//     // No es necesario devolver nada
//     //Tu código:
//     var suma = numeros.reduce((acumul, sgte) => acumul + sgte)
//     console.log(suma)
//     return cb(suma)
    
//   }
  
//   console.log(sumarArray([1,2,3,4]))






// function sumaMasUno (element){
//     return element + 1
// }


// function forEach(array, cb) {
//     // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
//     // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
//     //Tu código:
//   return array.forEach(element => {
//     cb(element)
//   });
//   }
//   console.log(forEach([1, 2 , 3 ,4 ,5], sumaMasUno))
  