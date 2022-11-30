// var ages = [32, 33, 16, 40];
// var result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 33;
// }
// console.log(result)
//function encuentraPares(array){
    // Devuelve un arreglo con los pares encontrados
    // en el arreglo de enteros pasado como parámetro
    // Tu código:
  //   var pares = []
  //   for( i = 0; i < array.lenght; i++){
  //     if(array[i] % 2 === 0) {
  //   pares.push(array[i]) ; 
  //     }
  // }
  // return array
  // 
  function sumaArray(array){
    // Devuelve el resultado de sumar todos los elementos
    // de un arreglo de enteros dado
    // Tu código:
    return array.reduce((acumulador , siguiente) => acumulador + siguiente);
  
  
  }
  console.log (sumaArray([1,2,3,4,5,6,7,8,9,10]));