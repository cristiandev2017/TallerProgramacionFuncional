/*Realizar una calculadora que permita 
suma
multiplica
dividir y restar
pero solo usando las funciones suma y resto, 
es decir a partir de la suma y la resta se debe realizar la multiplicación y división.
Se debe usar solo funciones y no se puede usar el paradigma orientado a objetos, 
también se puede desarrollar bajo cualquier lenguaje de programación. */

//Suma
const suma =(a,b)=>a+b;
//Mostrar el dato
console.log(suma(4,6));

//Resta
const resta = (a,b)=>a-b;
//Mostrar el resta
console.log(resta(7,6));

//Multiplicacion
const multiplicacion = (a,b)=>{
  if(b===0){
    return 0;
  }else{
    return suma(a,multiplicacion(a,resta(b,1)));
  }
}
//suma(2,multiplicacion(2,resta(2,1))
//suma(2,multiplicacion(2,resta(1-1))
//suma(2,multiplicacion(2,0))
//suma(2,suma(2,0))
//suma 2,2 = >4
function multiplica(c, d) {
  return c > 0 ? suma(multiplica(resta(c,1), d),d) : 0;
}
//Mostrar datos
console.log(multiplicacion(5,4));
console.log(multiplica(1,6));

//División
const division = (a,b)=>{
  if(a<b){
    return 0;
  }else{
    return division(resta(a,b),b)+1;
  }
}
console.log(division(10,2));

