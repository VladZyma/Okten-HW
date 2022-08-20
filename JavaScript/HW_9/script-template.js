p = document.createElement('p');
p.classList.add('task-title');
p.innerHTML = 'Task 4';
document.body.prepend(p);
//================================================================
// - Є масив:
let array = ['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let divMenu = document.getElementsByClassName('menu')[0];
let menuList = document.createElement('ul');
for (let item of array) {
    const menuItem = document.createElement('li');
    menuItem.textContent = `${item}`;
    menuList.appendChild(menuItem);
}
divMenu.appendChild(menuList);
//==================================================================
p = document.createElement('p');
p.classList.add('task-title');
p.innerHTML = 'Task 5';
document.body.appendChild(p);
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('courses-container');
    const h3 = document.createElement('h3');
    h3.innerHTML = `${item['title']}`;
    div.appendChild(h3);
    const p = document.createElement('p');
    p.innerHTML = `Duration: ${item['monthDuration']}`;
    div.appendChild(p);

    document.body.appendChild(div);
}
//=================================================================================
p = document.createElement('p');
p.classList.add('task-title');
p.innerHTML = 'Task 6';
document.body.appendChild(p);
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (let item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = `${item['title']}`;
    const p = document.createElement('p');
    p.classList.add('description');
    p.textContent = `Duration: ${item['monthDuration']}`;
    div.append(h1, p);

    document.body.appendChild(div);
}
//=========================================================================
p = document.createElement('p');
p.classList.add('task-title');
p.innerHTML = 'Task 7';
document.body.appendChild(p);
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const element = document.createElement('div');
element.id = 'text';
const button = document.createElement('button');
button.innerHTML = 'hide';
document.body.append(element, button);

button.addEventListener('click', function () {
    element.classList.add('hide');
})

//========================================================================
p = document.createElement('p');
p.classList.add('task-title');
p.innerHTML = 'Task 8';
document.body.appendChild(p);
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const form = document.createElement('form');
form.name = 'f1';
const input = document.createElement('input');
input.type = 'number';
input.name = 'in1'
input.placeholder = 'enter age';
form.appendChild(input);
const inputBtn = document.createElement('button');
inputBtn.innerHTML = 'check age';
form.appendChild(inputBtn);
document.body.appendChild(form);

let ageForm = document.forms.f1;
ageForm.onsubmit = function (event) {
    event.preventDefault();
    let age = ageForm.in1.value;
    if (age < 18) {
        alert('age < 18');
    } else {
        alert('age is ok');
    }
}
//========================================================================
p = document.createElement('p');
p.classList.add('task-title');
p.innerHTML = 'Task 9';
document.body.appendChild(p);
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const form2 = document.createElement('form');
form2.name = 'form2';

const inputRow = document.createElement('input');
inputRow.type = 'number';
inputRow.name = 'inputRow';
inputRow.placeholder = 'enter rows';
form2.appendChild(inputRow);

const inputCol = document.createElement('input');
inputCol.type = 'number';
inputCol.name = 'inputCol';
inputCol.placeholder = 'enter cols';
form2.appendChild(inputCol);

const inputText = document.createElement('input');
inputText.type = 'text';
inputText.name = 'inputText';
inputText.placeholder = 'enter text';
form2.appendChild(inputText);

const buttonForm2 = document.createElement('button');
buttonForm2.innerHTML = 'create table';
form2.appendChild(buttonForm2);
document.body.appendChild(form2);

let myForm = document.forms.form2;
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let rows = +this.inputRow.value;
    let cols = +this.inputCol.value;
    let text = this.inputText.value;

    tableMaker(rows, cols, text);
})

function tableMaker(rows, cols, text) {
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let k = 0; k < cols; k++) {
            let td = document.createElement('td');
            td.innerHTML = text;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.body.appendChild(table);
}