// 

// //Задание 1
// let name = prompt('Здравствуйте,Введите ваше имя');
// let age = Number(prompt('Введите ваш возраст'));

// if (age < 18) {
//     alert('Ваш возраст не подходит!');

// } else {
   
//     alert('Ваш возраст подходит для регистрации!');
//     alert(`Здрааствуйте ${name} вы успешно зарегестрировались!`)

// }

// ЗАдание 2


// let imya = prompt('Здравствуйте,Введите ваше имя!').trim()
// let data = prompt('Введите год!').trim()
// let vozrast = Number(prompt('Введите год рождения!'))
// let vozrast2 = Number(data - vozrast)
// alert(`Здравствуйте ${imya} ваш возраст ${vozrast2}!`)
// alert(`В этом году вам исполнится ${vozrast2 + 1}`)
// if (vozrast2 < 10) {
//     alert("Вы еще ребенок!")
// }
// else if (vozrast2 < 18 ) {
//     alert("Вы подросток!")
// } else if (vozrast2 > 50){
//       alert("Вы пожилой!")
// }else{
//  alert('Вы взрослый!')
// }
// let category = ''
// if (vozrast2 < 10) {
//   category = "Вы еще ребенок!"
// }
// if (vozrast2 < 18 && vozrast2 > 10) {
//     category = " еще подросток!"
// } else if (vozrast2 > 50){
//     category = "пожилой человек!"
// }else{
//     category = 'Взрослый человек!'
// }
// let id = Math.round(Math.random() * 100000)
// alert(`Ваш ID: ${id}`)
// let user = {
//     name:imya,
//     age:vozrast2,
//     birthYear:vozrast,
//     iD:id,
//     Statistic:category
// };

// alert(`Здравствуйте, ${imya}, Вам ${vozrast2}, Вы ${vozrast} года рождения, ваш ID, ${id}, вы ${category}`)
// console.log(user);
// Задание 3
let name3 = prompt('Введите имя!').trim().toUpperCase();
let age3 = Number(prompt('Введите возраст!').trim());
alert(`Через 5 лет вам исполнится ${age3 + 5} лет!`);
let city = prompt('Введите город проживания!').trim();
let ID = Math.round(Math.random() * 100000);


alert(`Ваш ID ${ID}`)
alert(`Здравствуйте ${name3},Вам ${age3} лет,Через 5 лет вам исполнится: ${age3 + 5} лет,Ваш: город ${city},Ваш: ID ${ID}.`);

let user2 = {
  Имя: name3,
  Возраст: age3,
  Город: city,
  Айди: ID
};

console.log(user2);

