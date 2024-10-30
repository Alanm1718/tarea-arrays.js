// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    const cliente = pedido[0]; 
    return ["bebida", ...pedido.slice(1), cliente]; 
}

let pedido = ["Alan", "hamburguesa", "coca"];
let resultado = procesarPedido(pedido);
console.log(resultado); // ["bebida", "hamburguesa", "coca", "Alan"]


// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(arr) {
    let suma = 0;
    for (let num of arr) {
      if (num % 2 === 0) {
        suma += num; 
      }
    }
    return suma;
  }
  
  
  console.log(sumarPares([1, 2, 3, 4, 5, 6])); 
  console.log(sumarPares([7, 8, 10, 11]));
  


// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    for (let palabra of palabras) {
      if (!palabra.endsWith('a')) {
        return false; 
      }
    }
    return true; 
  }
  
  const palabras = ['casa', 'silla', 'mesa'];
  console.log(palabrasTerminanConA(palabras));
  

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras después de ese índice en un nuevo array
function buscaPalabras(words, word) {
    const index = words.indexOf(word); 
    if (index === -1) {
      return []; 
    }
    return words.slice(index + 1); 
  }
  
  const words = ['hola', 'mundo', 'javascript', 'node'];
  console.log(buscaPalabras(words, 'mundo')); 
  

// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 'JavaScript') {
          return [i, j];
        }
      }
    }
    return [-1, -1]; 
  }
  
  const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ];
  
  const position = findJavaScript(matrix);
  console.log(position); 
  

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    let minIndex = books.indexOf(Math.min(...books));
    let maxIndex = books.indexOf(Math.max(...books));
    return [minIndex, maxIndex];  // Retorna los índices
}

let books = [350, 120, 540, 275, 390, 130, 670];  
let resultado2 = findMinMaxPages(books);  // Se usa 'books' como argumento
console.log(resultado2); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
