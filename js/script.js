// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);


  //función que filtra los elementos según su tipo y retorna true si son string
function filtrar (elemento){
if (typeof elemento === "string"){
return true
  }
}
  
//constante que va a tener el array filtrado
  const array_filtrado= strangeArray.filter(filtrar)

  console.log(array_filtrado)


//la función de map, toma como parametros (1° el elemento que se encuentra en la posición
//en el array original, 2° el indice de ese elemento), y crea un nuevo array basado en el original.
//toLowerCase, para pasar todos los strings a minúscula.

const array_ordenado = array_filtrado.map(function (elemento, indice) {
  return { index: indice, value: elemento.toLowerCase() };
});

//ordena el array anterior, con sort, le paso una función que toma los valores de los strings
//y los compara, si el valor del elemento a, es mayor que el de b, retorna 1, por lo que debería
//aparecer b antes que a. Esta función sirve para ordenar de la A-Z, de menos a más.

array_ordenado.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

console.log(array_ordenado)

// Recorre los elementos de array_ordenado, a través del parametro elemento
// y los devuelve desde array_filtrado, hacia el array_final.
const array_final = array_ordenado.map(function (elemento) {
  return array_filtrado[elemento.index];
});

console.log(array_final);

showList(array_final);
});
