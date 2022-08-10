// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const str1 = 'hello world';
// console.log(str1.length);

const str2 = 'lorem ipsum';
// console.log(str2.length);

const str3 = 'javascript is cool';
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const strLow = 'hello world';
const strUp = strLow.toUpperCase();
// console.log(strUp);
const strLow2 = 'lorem ipsum';
const strUp2 = strLow2.toUpperCase();
const strLow3 = 'javascript is cool';
const strUp3 = strLow3.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const stringUp = 'HELLO WORLD';
const stringLow = stringUp.toLowerCase();
// console.log(stringLow);
const stringUp2 = 'LOREM IPSUM';
const stringLow2 = stringUp2.toLowerCase();
const stringUp3 = 'JAVASCRIPT IS COOL';
const stringLow3 = stringUp3.toLowerCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str4 = ' dirty string   ';
let cleanStr = str4.trim();
// console.log(cleanStr);
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str5 = 'Ревуть воли як ясла повні';
function stringToarray(str) {
    return str.split(' ');
}
let arr = stringToarray(str5);
// console.log(arr);
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

const numsArr = [10,8,-7,55,987,-1011,0,1050,0];
const strArr = numsArr.map(item => item + '');
// console.log(strArr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(nums,direction) {
    if(direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return nums.sort((a, b) => {
            if(a - b > 0) return -1;
        })
    }
}
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums,'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a, b) => {
    if (a.monthDuration - b.monthDuration > 0) return -1;
})
// console.log(coursesAndDurationArray);

let filteredCoursesAndDurationArray = coursesAndDurationArray.filter(cours => cours.monthDuration > 5);
// console.log(filteredCoursesAndDurationArray);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
const cards = [
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'joker', value: 'joker', color: 'black'},
];

let aceSpade = cards.filter(card => {
    if (card.cardSuit === 'spade' && card.value === 'ace')
    return card;
});
// console.log(aceSpade);

let allSix = cards.filter(card => card.value === 6);
// console.log(allSix);

let allReds = cards.filter(card => card.color === 'red');
// console.log(allRed);

let allDiamonds = cards.filter(card => card.cardSuit === 'diamond');
// console.log(allDiamond);

let allClubsFrom9 = cards.filter(card => (card.cardSuit === 'clubs' && (card.value >= 9 || typeof card.value === 'string')));
// console.log(allClubsFrom9);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let cardsBoxSuit = cards.reduce((accum, card) => {
    if (card.cardSuit === 'spade') {
        accum.spades.push(card);
    }else if (card.cardSuit === 'diamond') {
        accum.diamonds.push(card);
    }else if (card.cardSuit === 'heart') {
        accum.hearts.push(card);
    }else if (card.cardSuit === 'clubs') {
        accum.clubs.push(card);
    }
    return accum;
}, {spades:[],diamonds:[],hearts:[],clubs:[],} );

// console.log(cardsBoxSuit);


//=================ADDITIONAL TASKS==========================================


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
let str = 'Каждый охотник желает знать';
function delete_characters(str, length) {
    return str.substring(0, length);
}
// document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
let str6 = "HTML JavaScript PHP";
function insert_dash(str) {
    return str.replaceAll(' ', '-');
}
// document.writeln(insert_dash(str6));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
let str7 = 'duck';
function makeFirstLatterBig(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// document.writeln(makeFirstLatterBig(str7));


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function getRandomInteger(n) {
    let nums = [];
    for (let i = 0; i < n; i++) {
      nums.push(Math.floor(Math.random() * 100));
    }
    return nums;
}
// console.log(getRandomInteger(10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let nums2 = getRandomInteger(10);
let nums2Sort = nums2.sort((a,b) => a - b);
// console.log(nums2Sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

let nums3 = getRandomInteger(10);
let nums3Filter = nums3.filter(num => (num % 2 === 0));
// console.log(nums3Filter);


// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArraySorted = coursesArray.sort((a, b) => {
    if (a.modules.length - b.modules.length > 0) return -1;
});
// console.log(coursesArraySorted);


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
let str9 = "Сила тяжести приложена к центру масс тела";
function cutString(str, n) {
    let strArr = str.split(' ');
    let newStrArr = [];
    for (let i = 0; i < n; i++) {
        newStrArr.push(strArr[i]);
    }
    let newStr = newStrArr.join(' ');
    return newStr;
}

// console.log(cutString(str9, 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
const books = [
    {name: 'AAA', pages: 128, authors:[1], genres:[1, 2]},
    {name: 'BBBBB', pages: 746, authors:[1, 2, 3], genres:[1, 2, 3]},
    {name: 'CC', pages: 375, authors:[1, 2], genres:[1, 2, 3, 4]},
    {name: 'DDDDDDD', pages: 204, authors:[1, 2], genres:[1, 2, 3, 4, 5]},
    {name: 'EEEEEEE EEEE', pages: 844, authors:[1, 2, 3, 4], genres:[1, 2]},
    {name: 'FFF FFF FFFFF', pages: 103, authors:[1], genres:[1, 2, 3]},
    {name: 'GGGG GGGG gggg ggg', pages: 284, authors:[1, 2], genres:[1, 2, 3]},
    {name: 'HHH NNNNN MMMMM', pages: 363, authors:[1, 2], genres:[1]},
    {name: 'III jjjjj uuuuu', pages: 538, authors:[1, 2, 3, 4, 5], genres:[1, 2]},
];
function findBiggestBook(bookArr) {
    let sortedBookArr = bookArr.sort((a, b) => {
        if (a.pages - b.pages > 0) return -1;
    });

    let biggestBook = sortedBookArr[0];
    return biggestBook;
}

// console.log(findBiggestBook(books));

function findBiggestBook2(bookArr, parameter) {
    let sortedBookArr = bookArr.sort((a, b) => {
        if (a[parameter].length - b[parameter].length > 0) return -1;
    });

    let biggestBook = sortedBookArr[0];
    return biggestBook;
}

// console.log(findBiggestBook2(books, 'genres'));
// console.log(findBiggestBook2(books, 'name'));

function findNumAuthorBook(bookArr, authorNum) {
    let newBookArr = [];
    for (book of books) {
        if (book.authors.length === authorNum) {
            newBookArr.push(book);
        }
    }
    return newBookArr;
}
//
// console.log(findNumAuthorBook(books, 2));
// console.log(findNumAuthorBook(books, 1));

const sortedByPages = books.sort((book1, book2) => (book1.pages - book2.pages));
// console.log(sortedByPages);