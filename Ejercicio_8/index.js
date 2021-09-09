//Constructor para el nombre y la edad
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//Caprurar datos del usuario
const nameOne = prompt("Ingresa el nombre de la primera persona");
const ageOne = Number(prompt("Ingresa la edad de la primera persona"));

const nameTwo = prompt("Ingresa el nombre de la segunda persona");
const ageTwo = Number(prompt("Ingresa la edad de la segunda persona"));

const nameThree = prompt("Ingresa el nombre de la tercera persona");
const ageThree = Number(prompt("Ingresa la edad de la tercera persona"));

//Crear objetos con los datos suministrados por el usuario
const personOne = new person(nameOne, ageOne);
const personTwo = new person(nameTwo, ageTwo);
const personThree = new person(nameThree, ageThree);

//Agrupar todos los datos de cada persona en un array
const list = [];

list.push(personOne);
list.push(personTwo);
list.push(personThree);

//Obtener solo los datos de la edad
let ageList = list.map((older) => {
  return older.age;
});

//Encontrar el mayor e imprimir en pantalla el resultado
let mayor = Math.max(...ageList);

let position = ageList.indexOf(mayor);

document.write(`El mayor de las personas es: ${list[position].name}`);
