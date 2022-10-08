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
// *************************************************************
// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// const workers = [
//   {
//     name: "Alex",
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: "Dima",
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: "Oleg",
//     salary: 1500,
//     month: 36,
//   },
// ];
// function getSallery(arr, workerName) {
//   const worker = arr.find((worker) => {
//     return worker.name === workerName;
//   });
//   return worker.salary * worker.month;
//   console.log(worker);
// }
// console.log(getSallery(workers, "Alex"));
// **********************************************************
// doSomething();
// function doSomething(car, list) {}
// doSomething2();
// const doSomething2 = function (car, list) {};
// const doSomething3 = (car, list) => {

// }
// **********************************************************
// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
// const names = ['Anna', 3, 'Roma', 17, 'Kate', 14, 'Oleg'];
// ***************************************************************
//Створити функцію яка буде приймати 2 параметри:
//1 масив імен які вже зареєстровані. (users)
//2 ім'я введене в prompt(). (name)
//Функція повертає меседж.
//Якщо юзер з таким ім'ям вже існує повертаємо меседж що потрібно обрати інше ім'я
//Якщо юзера з таким ім'ям не існує добавляємо його в масив та вказуємо що юзера додано успішно.

// const users = ["artem", "anna", "maks", "vlad"];
// function createUser(users, name) {
//   if (users.includes(name)) {
//     return "юзер з таким ім'ям вже існує";
//   } else {
//     users.push[name];
//     return "юзера з таким ім'ям не існує";
//   }
// }
// const userName = prompt();
// console.log(createUser(users, userName));
// **********************************************************
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];
// function getUsers(arr, bookName) {
//   const newUsers = arr.filter((element) => {
//     if (element.books.includes(bookName)) {
//       return element;
//     }
//   });
//   // console.log(newUsers);
//   const names = newUsers.map((user) => user.name);
//   console.log(names.join(" "));
// }
// getUsers(friends, "Harry Potter");
// *************************************************
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//   {
//     name: `Lika`,
//     langunage: `html`,
//   },
//   {
//     name: `Anton`,
//     langunage: `css`,
//   },
//   {
//     name: `Andriy`,
//     langunage: `js`,
//   },
//   {
//     name: `Vova`,
//     langunage: `html`,
//   },
//   {
//     name: `Alina`,
//     langunage: `css`,
//   },
//   {
//     name: `Egor`,
//     langunage: `js`,
//   },
//   {
//     name: `Aleksandr`,
//     langunage: `html`,
//   },
//   {
//     name: `Taras`,
//     langunage: `css`,
//   },
//   {
//     name: `Ivan`,
//     langunage: `js`,
//   },
//   {
//     name: `Make`,
//     langunage: `html`,
//   },
// ];

// function newStudents(arr, langunageName) {
//   const users = arr.filter((element) => element.langunage === langunageName);
//   console.log(users);
//   const userList = users.map((user) => user.name);
//   console.log(userList);
// }

// newStudents(students, "html");
// ****************************************************
// За допомогою методу forEach потрібно заповнити масив uploadedFiles
// baseUrl потрібно передати, як this

// const imagesName = ["car", "grass", "avatar", "user", "sea", "water", "bird"];
// const baseUrl = "domain-name.com";
// let uploadedFiles = [];

// const resultUploadedFiles = [
//   "domain-name.com/upload/car",
//   "domain-name.com/upload/grass",
//   "domain-name.com/upload/avatar",
//   "domain-name.com/upload/user",
//   "domain-name.com/upload/sea",
//   "domain-name.com/upload/water",
//   "domain-name.com/upload/bird",
// ];

// imagesName.forEach(function (element) {
//   uploadedFiles.push(`${baseUrl}/upload/${element}`);
// }, baseUrl);
// console.log(uploadedFiles);
// ******************************************************************переписати з мап
// Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

// Після цього порахувати суму всіх покупок і вивести total;

// let total = 0;

// const product1 = {
//   id: 33,
//   title: "T-shirt",
//   price: 99,
//   count: 1,
// };

// const product2 = {
//   id: 29,
//   title: "Jeans",
//   price: 199,
//   count: 1,
// };

// const basketItems = [
//   {
//     id: 28,
//     title: "iPhone 14",
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: "Jeans",
//     price: 199,
//     count: 2,
//   },
// ];
// function addItemToBasket(product) {
//   const newProduct = basketItems.find((el) => Element.id === product.id);
//   console.log(newProduct);
//   if (!newProduct) {
//     return [...basketItems, product];
//   } else {
//     basketItems.map((el) => {
//       if (el.id === product.id) {
//         return {
//           ...el,
//           count: el.count + 1,
//         };
//       } else return el;
//     });
//   }
// }
// addItemToBasket(product1);
// addItemToBasket(product2);

// *******************************************************
// Потрібно отримати URL адресу із адресного рядка бразуера.
// Далі необхідно параметри запиту записати в об'єкт  (query) - ключ, значення (axios)

// const url =
//   "https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311";

// // console.log(window.location);
// console.log(url);
// const link = new URL(url);
// console.log(link);
// const search = link.search.slice(1);
// console.log(search);
// const arrQuery = search.split("&");
// console.log(arrQuery);
// const objQuery = arrQuery.reduce((obj, item) => {
//   const [key, value] = item.split("=");
//   //   console.log(values);
//   obj[key] = value;
//   console.log(obj);
//   return obj;
// }, {});
// console.log(objQuery);
// ***************************************************
// Напишіть метод, який очищає масив від усіх непотрібних елементів, таких як false, undefined, порожні рядки, нуль, null

const data = [0, 1, false, 2, undefined, "", 3, null];
const filter
console.log(compact(data)); // [1, 2, 3]
