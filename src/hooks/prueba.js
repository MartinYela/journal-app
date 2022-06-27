//esta es la prueba de la entrevista


const a =  [[3,4,5],[9,8,7],[2,5,7]];
// const b = [[],[],[]];
const b = [];
a.forEach(() => b.push([]));

a.forEach((array, ind) => array.forEach((num, i) => b[i][ind] = num))

console.log(a)
console.log(b)





// const a =  [[3,4,5],[9,8,7],[2,5,7]];
// let b = [[],[],[]];

// for ( let i = 0; i <a.length ; i++){
//     for ( let j = 0; j <a[i].length ; j++){
//         b[j][i] = a[i][j];
//     }
// }

// console.log(b)
// console.log(a)