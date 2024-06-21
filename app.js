////---------------array.map()----------------------

const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map((fruta) => fruta); // no muta el array original

console.log(nuevoArray);

const copiaArray = frutas;  // de esta forma se modifica el copiaArray por referencia

frutas.push(('🍉')); // esto no afecta el copiaArray si usamos el map
 
console.log(copiaArray);


const users = [
    {  name: "John" , age: 34},
    {  name: "Jane" , age: 24} ,
    {  name: "Bob" , age: 44}
];

const names = users.map((user) => user.name);
 
console.log(names);


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dobles = numeros.map((numero) => numero * 2);

console.log(dobles);

//------------------array.filter()----------------------

const users1 = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Jane", age: 24 },
    { uid: 3, name: "Bob", age: 44 },
];
  
const mayoresDeEdad = users1.filter((user) => user.age >= 30);


console.log(mayoresDeEdad,"Cantidad:"+ mayoresDeEdad.length);

const userFiltrado = users.filter((user) => user.uid !== 3);
 
console.log(userFiltrado); 

//--------------array.find()---------devuelve el 1er e item que cumpla la condicion

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeroEncontrado = numeros1.find((numero) => numero > 5);

console.log(numeroEncontrado);

//-------------array.destructuring--------devuelve el 1er e item que cumpla la condicion
//------------permite obtener solo la propiedad que necesitamos de un objeto-----------------

const paxs = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Jane", age: 24 },
    { uid: 3, name: "Bob", age: 44 },
];

const {age} = paxs.find((pax) => pax.uid === 2);

console.log(age);

//-------------array.some()---------devuelve true si al menos 1 item cumple la condicion

const paxs1 = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Jane", age: 24 },
    { uid: 3, name: "Bob", age: 44 },
];

const existePax = paxs1.some((pax) => pax.age > 30);

console.log(existePax);

//-------array.findIndex--------devuelve el indice del 1er item que cumpla la condicion
//-------si no lo encuentra devuelve -1-----------------

const paxs2 = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Jane", age: 24 },
    { uid: 3, name: "Bob", age: 44 },
];

const indicePax = paxs2.findIndex((pax) => pax.uid === 2);
 console.log(indicePax, paxs2[indicePax]);


//-------------array.every()---------devuelve true si todos los item cumple la condicion

const paxs3 = [ 
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Jane", age: 24 },
    { uid: 3, name: "Bob", age: 44 },
];

const todosMayoresDeEdad = paxs3.every((pax) => pax.age >= 18);

console.log(todosMayoresDeEdad, "ALL");

//-------array.slice()---------devuelve una copia del array original 
//-----desde el indice start hasta el indice end(no incluye el end)-----------------

const animals = ["ant", "bison", "camel", "duck", "elephant"];

const nuevosAnimales = animals.slice(2, animals.length-1);

console.log(nuevosAnimales);

//-------array.concat()---------devuelve un nuevo array con 
//-------los elementos de los arrays concatenados-----------------

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

//---------array.spread operator---------devuelve un nuevo array con
//---------los elementos de los arrays concatenados-----------------

const array4 = ["a", "b", "c"];
const array5 = ["d", "e", "f"];


const array6 = [...array5, "-", ...array4]; 

console.log(array6); 

//---------array.reduce()---------devuelve un solo valor
//---------acumulando los valores de un array-----------------

const array7 = [1, 2, 3, 4, 5];

const array8 = array7.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(array8, "SUMA");

//--------Convertir una matriz a un array Plano  ------------
//----------Diferentes Variantes-------------------------------

const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

//----Variante 1------------------
const arrayPlano = arrayNumeros.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(arrayPlano);
 
//----Variante 2------------------
const arrayPlano2 = [].concat(...arrayNumeros);

console.log(arrayPlano2);

//------array.flat()-----------Aplanar matrices anidadas------con un numero de profundidad------
const arrayPlano4 = arrayNumeros.flat(1);

//----Variante 3---teoria experimental--------
const arrayPlano3 = arrayNumeros.flat();
 
console.log(arrayPlano3);

//------array.split()------ divide un objeto de tipo String en un array, mediante un separador.
const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenaMeses.split(",");

console.log(arrayMeses);

//------array.join()------ une los elementos de un array en un String, mediante un separador.
//-----Separador: Es una cadena usada para separar cada uno de los elementos del arreglo. El separador 
//--es convertido a una cadena si es necesario.Si este se omite, los elementos del arreglo son separados con una coma(",")
const arrayMeses2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const cadenaMeses2 = arrayMeses2.join(" / ");
// const cadenaMeses2 = arrayMeses2.join();

console.log(cadenaMeses2);

