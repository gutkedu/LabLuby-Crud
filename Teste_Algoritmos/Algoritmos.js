/*
1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
*/

let newArray = (number, input) => {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(input)
  }
  return array
}

console.log('Resposta pergunta 1:');
console.log(newArray(3, 'a'));

/*
2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
*/

array_2 = [1, 2, 3, 4];

function reverse_array(input) {
  var output = [];
  while (input.length) {
    output.push(input.pop());
  }
  return output
}

console.log('Resposta pergunta 2:');
console.log(reverse_array(array_2));

/*
3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
*/

array_3 = [1, 2, '', undefined];

let cleanArray = (arr) => {
  temp = [];
  for (let i of arr) {
    i && temp.push(i);
  }
  arr = temp;
  return arr;
}

console.log('Resposta pergunta 3:');
console.log(cleanArray(array_3));

/*
4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do método: {c:2, d:4}
*/

array_4 = [["c", 2], ["d", 4]];

let convertObjKey = (arr) => {
  const obj = {};
  for (pair of arr) {
    const [key, value] = pair;
    obj[key] = value;
  };
  return obj;
}

console.log('Resposta pergunta 4:');
console.log(convertObjKey(array_4));

/*
5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
*/

array_5 = [[5, 4, 3, 2, 5], 5, 3];

/*
6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
*/

const array_6 = [1, 2, 3, 3, 2, 4, 5, 4, 7, 3];
const remove_duplicates = (input) => {
  const data_set = new Set(input);
  const data_array = Array.from(data_set);
  return data_array;
};
console.log('Resposta pergunta 6:');
console.log(remove_duplicates(array_6));

/*
7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
*/
array_7 = [[1, 2, 3, 4], [1, 2, 3, 4]];
const equal_arrays = (input) => {
  const a = input[0];
  const b = input[1];
  return JSON.stringify(a) === JSON.stringify(b);
};
console.log('Resposta pergunta 7:');
console.log(equal_arrays(array_7));

/*
8) Implemente um método que remova os alinhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
*/
array_8 = [1, 2, [3], [4, 5]];

function flatArray(arr1) {
  return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatArray(val)) : acc.concat(val), []);
};

console.log('Resposta pergunta 8:')
console.log(flatArray(array_8));

/*
9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
*/
var array_9 = [1, 2, 3, 4, 5];

function split_array_parts(input, num) {
  var parts = [];
  i = 0;
  n = input.length;

  while (i < n) {
    parts.push(input.slice(i, i += num));
  }
  return parts;
}

console.log('Resposta pergunta 9: ')
console.log(split_array_parts(array_9, 2));

/*
10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
*/

array_10 = [[6, 8], [8, 9]];

let filteredArray = (arr) => {
  arr1 = arr[0];
  arr2 = arr[1];
  const new_array = arr1.filter(value => arr2.includes(value));
  return new_array;
}

console.log('Resposta pergunta 10:');
console.log(filteredArray(array_10));