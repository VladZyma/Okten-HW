// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(respons => respons.json())
    .then(users => users.forEach(user => {
        const out = document.getElementsByClassName('users-container')[0];
        const userDivEl = document.createElement('div');
        userDivEl.classList.add('user');
        let p = document.createElement('p');
        p.textContent = 'ID:' + ' ' + user.id;
        userDivEl.appendChild(p);

        p = document.createElement('p');
        p.textContent = 'Name:' + ' ' + user.name;
        userDivEl.appendChild(p);

        const button = document.createElement('button');
        button.textContent = 'Details';
        const a = document.createElement('a');
        a.href = `user-details.html?id=${user.id}`;
        a.appendChild(button);
        userDivEl.appendChild(a);

        out.appendChild(userDivEl);
    }
    ))


