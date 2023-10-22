function printTwoDigits(n) {
   // Convierte el número a una cadena para poder verificar su longitud.
   const newNumber = n.toString();
 
   // Si la cadena tiene una longitud de 1, agrega un cero al principio.
   if (newNumber.length === 1) {
     return '0' + newNumber;
   }
 
   // Si la cadena ya tiene dos dígitos, no se hace nada.
   return newNumber;
 }
 
 const myNumber = 7;
 console.log(printTwoDigits(myNumber)); // Imprimirá '07'
 