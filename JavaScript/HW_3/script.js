// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = prompt('Enter number');
// if (x > 0) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('Enter time');
// if (time > 0 && time <= 15) {
//     document.write('first quoter');
// }
// else if (time > 15 && time <= 30) {
//     document.write('second quoter');
// }
// else if (time > 30 && time <= 45) {
//     document.write('third quoter');
// }
// else if (time > 45 && time <= 59) {
//     document.write('fourth quoter');
// }
// else {
//     document.write('enter correct time');
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('Enter day');
// if (day > 0 && day <= 10) {
//     document.write('first decade');
// }
// else if (day > 10 && day <= 20) {
//     document.write('second decade');
// }
// else if (day > 20 && day <= 31) {
//     document.write('third decade');
// }
// else {
//     document.write('enter correct date');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let weekdayNumber = +prompt("Enter weekday number");
// switch (weekdayNumber) {
//     case 1:
//         document.write('Monday');
//         break;
//     case 2:
//         document.write('Tuesday');
//         break;
//     case 3:
//         document.write('Wednesday');
//         break;
//     case 4:
//         document.write('Thursday');
//         break;
//     case 5:
//         document.write('Friday');
//         break;
//     case 6:
//         document.write('Saturday');
//         break;
//     case 7:
//         document.write('Sunday');
//         break;
//     default:
//         document.write('Wrong weekday number!!!');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = prompt('Enter a');
// let b = prompt('Enter b');
// if (a > b) {
//     document.write(a);
// }
// else if (b > a) {
//     document.write(b);
// }
// else {
//     document.write(`${a} = ${b}`);
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt('Enter something') || 'Underground';
// document.write(x);

