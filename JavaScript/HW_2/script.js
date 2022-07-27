// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, true, 'string', 'array', 545, '328', 'lorem', 'name', 2020, 'end'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: 'How Google Works',
    pageCount: 304,
    genre: 'Non-fiction',
}
let book2 = {
    title: 'The Hidden One',
    pageCount: 280,
    genre: 'Thriller & Suspense',
}
let book3 = {
    title: "Firekeeper's Daughter",
    pageCount: 278,
    genre: 'Young adult fiction, Thriller, Mystery',
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'Northern Spy',
    pageCount: 288,
    genre: 'Novel',
    authors: [
        {name: "Flynn Berry", age: 43,},
        {name: "Berry Flynn ", age: 34,},
    ]
}
let book5 = {
    title: 'The Paper Palace',
    pageCount: 400,
    genre: 'Novel',
    authors: [
        {neme: 'Miranda Cowley Heller', age: 28,},
        {name: 'Heller Cowley Miranda', age: 30,},
    ]
}
let book6 = {
    title: "The Four Winds",
    pageCount: 464,
    genre: 'Historical Fiction',
    authors: [
        {name: 'Kristin Hannah', age: 33,},
        {name: 'Hannah Kristin', age: 35,},
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Vasy', username: 'Cat', password: 54783,},
    {name: 'Petro', username: 'Turtle', password: '1835ter',},
    {name: 'Olga', username: 'Parrot', password: 890264,},
    {name: 'Oksana', username: 'Humster', password: 'kdur9586',},
    {name: 'Ira', username: 'Ari', password: 'ieu88ifk',},
    {name: 'Vlad', username: 'Dalv', password: 'ggg000ggg',},
    {name: 'Alex', username: 'Xela', password: 'xela123',},
    {name: 'Max', username: 'Dog', password: 'dog-123',},
    {name: 'Inna', username: 'Dood', password: 'inna987',},
    {name: 'Alla', username: 'Candy', password: 'candy777',},
];
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);