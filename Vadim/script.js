// 1 Області видимості
// 2 6(шість) значень які повернуть false
// 3 Мутабельні та Імутабельні типи даних   https://habr.com/ru/company/developersoft/blog/302118/
// 4 Присвоєння по посиланню та присвоєння по значенню.
// 5 Оператор нульового поєднання  (??) https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
//  6 цикл for of
//  7 inludes
//  8 методи роботи з масивом

// let a = 10;
// a = 14;
// *********************************************
// const arr = [1, 2, 3];
// arr.splice(1, 1);
// console.log(arr);
// ************************************************
// const user = {
//   name: "user",
//   age: 27,
// };
// delete user.age;
// console.log(user);
// ****************************************************
// const test = "asd";
// let test2;
// console.log(test2);
// **************використання var***********************
// console.log(a);
// var a;
// var a = 10;
// console.log(a);
// var a = 15;
// console.log(a);
// ************************************************
// if (true) {
//   let a = 99;
//   a = 15;
//   console.log(a);
// }

// let a = 10;
// if (true) {
//   if (true) {
//     a = 99;
//   }
//   if (true) {
//     let a = 1;
//   }
//   a = 16;
// }
// console.log(a);

// let a = 10;
// let b = a;
// a = 15;
// console.log(b);

// let a = [1, 2, 3];
// let b = a;

// a.splice(1, 1);

// console.log("a", a);
// console.log("b", b);

// && || ! ??
// && він повертає перший false або останій true, для свого виконання потребує зліва та з права true
// console.log(0 && 1); //0
// console.log(1 && null); // null
// console.log(null && 1);//null
// console.log(1 && 0 && 1);//0

// || він повертає перший true або останій false, вимагає для свого виконання 1 true

// console.log(1 || 0);
// console.log(null || undefined);
// console.log('null' || 1);
// console.log(21 || "" || null);

// console.log(5 && 4 || null);
// console.log(null || 5 && 4);
// console.log('' && 5 || 4);

//  ||  => 6 значень які дають false
//  ??  => 2 значення null undefined

// console.log(undefined ?? null);
