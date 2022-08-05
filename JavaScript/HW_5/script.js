// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function getRectangleAria(a, b) {
    let s = a * b;
    return s;
}
console.log(getRectangleAria(5, 2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function getCircleAria(r) {
    let s = 3.14 * r**2;
    return s;
}
console.log(getCircleAria(7));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function getCylinderAria(h, r) {
    let s = 2 * 3.14 * r * (h + r);
    return s;
}

console.log(getCylinderAria(7, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

function showArray(arr) {
    let out = '';
    for (let item of arr) {
        out += `${item} `;
    }
    console.log(out);
}
showArray([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function makeTextParagraf(text) {
    document.write(`<p>${text}</p>`);
}
makeTextParagraf('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function makeUList(text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

console.log(makeUList('li text'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function makeUList2(text, num) {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

console.log(makeUList2('li text 2', 5));

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function makePrimList(arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}
makePrimList([1, 'str', true, 15, false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 18735, name: 'Sveta', age: 23},
    {id: 84634, name: 'Inna', age: 25},
    {id: 93624, name: 'Ivan', age: 31},
    {id: 83644, name: 'Taras', age: 19},
];
function createUsersList(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<ul>`);
            for (let key in arr[i]) {
                document.write(`<li>${key} : ${arr[i][key]}</li>`);
            }
        document.write(`</ul>`);
    }
}
createUsersList(users);
// - створити функцію яка повертає найменьше число з масиву

function findMinNum(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}

console.log(findMinNum([23,45,12,6,3,1]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(getSum([1,2,10]) );