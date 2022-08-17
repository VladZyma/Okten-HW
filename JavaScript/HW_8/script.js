// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user1 = new User(12309, 'Vlad', 'Zyma', 'dfg@com.ua', 380974342645);
const user2 = new User(835234, 'Viktor', 'Biba', 'mnur@com.ua', 380734342626);
const user3 = new User(83527, 'Olena', 'Oput', 'poti@com.ua', 380964642609);
const user4 = new User(4734635, 'Inna', 'Nunti', 'olpit@com.ua', 380974348352);
const user5 = new User(382647, 'Oleg', 'Bondi', 'ncuei@com.ua', 380664742628);
const user6 = new User(7342, 'Alla', 'Pash', 'open67@com.ua', 380678742654);
const user7 = new User(9346, 'Sveta', 'Pup', 'poklin@com.ua', 380978942656);
const user8 = new User(735294, 'Dima', 'Lapik', 'lol85@com.ua', 380678242683);
const user9 = new User(93452, 'Anna', 'Smurf', 'titi@com.ua', 380974092609);
const user10 = new User(653578, 'Ira', 'Mamba', 'pster55@com.ua', 380730742608);

const users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const usersEvenId = users.filter(user => user.id.toString().length % 2 === 0);
// console.log(usersEvenId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const usersUpId = users.sort((user1, user2) => {
    return user1.id - user2.id
});
// console.log(usersUpId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const client1 = new Client(12309, 'Vlad', 'Zyma', 'dfg@com.ua', 380974342645, ['banan', 'spoon', 'table']);
const client2 = new Client(835234, 'Viktor', 'Biba', 'mnur@com.ua', 380734342626, ['plane']);
const client3 = new Client(83527, 'Olena', 'Oput', 'poti@com.ua', 380964642609, ['computer', 'display']);
const client4 = new Client(4734635, 'Inna', 'Nunti', 'olpit@com.ua', 380974348352, ['keyboard', 'gum', 'glass', 'plate', 'knife']);
const client5 = new Client(382647, 'Oleg', 'Bondi', 'ncuei@com.ua', 380664742628, ['bread', 'butter', 'cheese', 'oil']);
const client6 = new Client(7342, 'Alla', 'Pash', 'open67@com.ua', 380678742654, ['pencil', 'pen', 'notebook', 'ruler']);
const client7 = new Client(9346, 'Sveta', 'Pup', 'poklin@com.ua', 380978942656, ['window', 'dore', 'roof']);
const client8 = new Client(735294, 'Dima', 'Lapik', 'lol85@com.ua', 380678242683, ['car']);
const client9 = new Client(93452, 'Anna', 'Smurf', 'titi@com.ua', 380974092609, ['tea', 'coffee', 'orange', 'potato', 'tomato']);
const client10 = new Client(653578, 'Ira', 'Mamba', 'pster55@com.ua', 380730742608, ['burger', 'coffee', 'pizza', 'beer', 'nuts']);

const clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const clientsOrderUp = clients.sort((client1, client2) => {
    return client1.order.length - client2.order.length;
});
// console.log(clientsOrderUp);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, speed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.speed = speed;
    this.engine = engine;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    this.info = function () {
        let carInfo = `model - ${this.model}, producer - ${this.producer}, year - ${this.year}, speed - ${this.speed}, engine - ${this.engine}`;
        console.log(carInfo);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        return this.speed += newSpeed;
    }
    this.changeYear = function (newValue) {
        return this.year = newValue;
    }
    this.addDriver = function (driver) {
        return this.driver = driver;
    }
}
const myCar = new Car('Passat', 'VW', 2020, 210, 1.8);
// console.log(myCar);
// myCar.drive();
// myCar.info();
//
// myCar.increaseMaxSpeed(10);
// console.log(myCar);
//
// myCar.changeYear(2022);
// console.log(myCar);
//
// const customer = {name: 'Vlad', age:'35', email: 'hdgftr@gmail.com'};
// myCar.addDriver(customer);
// console.log(myCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, speed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    info() {
        let carInfo = {};
        for (let key in this) {
            carInfo[key] = this[key];
        }
        console.log(carInfo);
    }
    increaseMaxSpeed(newSpeed) {
        return this.speed += newSpeed;
    }
    changeYear(newValue){
        return this.year = newValue;
    }
    addDriver(driver) {
        return this.driver = driver;
    }
}
const car2 = new Car2('X5', 'BMW', '2019', 230, 3.0);
// console.log(car2);
// car2.drive();
// car2.info();
//
// car2.increaseMaxSpeed(20);
// console.log(car2);
//
// car2.changeYear(2022);
// console.log(car2);
//
// const customer2 = {name: 'Alla', phone: '+38-099-555-55', email: 'alla@gmail.com'};
// car2.addDriver(customer2);
// console.log(car2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const cinderella1 = new Cinderella('Alla', 27, 34);
const cinderella2 = new Cinderella('Inna', 28, 36);
const cinderella3 = new Cinderella('Olya', 29, 37);
const cinderella4 = new Cinderella('Ira', 30, 36);
const cinderella5 = new Cinderella('Sveta', 32, 37.5);
const cinderella6 = new Cinderella('Inga', 29, 35);
const cinderella7 = new Cinderella('Anna', 35, 38);
const cinderella8 = new Cinderella('Gala', 33, 39.5);
const cinderella9 = new Cinderella('Nata', 28, 37);
const cinderella10 = new Cinderella('Ruslana', 30, 38.5);

const cinderellas = [cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10,]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe){
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
const prince = new Prince('Vlad', 33, 34);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let cinderella;
for (let item of cinderellas) {
    if(item["footSize"] === prince['shoe']) cinderella = item;
}
console.log(cinderella);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findedCinderella = cinderellas.find(item => item['footSize'] === prince['shoe']);
console.log(findedCinderella);
