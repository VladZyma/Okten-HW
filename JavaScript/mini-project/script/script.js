// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули


fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        console.log(users);
        const divOut = document.getElementsByClassName('container')[0];

        for (let item of users) {
            f1(item);
        }
        function f1(user) {
            const div = document.createElement('div');
            div.classList.add('user');

            const p = document.createElement('p');
            p.classList.add('user__id');
            p.innerText = `ID:` + ' ' + user.id;
            div.appendChild(p);

            const h2 = document.createElement('h2');
            h2.classList.add('user__name');
            h2.textContent = 'Name:' + ' ' + user.name;
            div.appendChild(h2);

            const a = document.createElement('a');
            a.classList.add('user__button-link');
            a.href = `user_details.html?id=${user.id}`;
            const button = document.createElement('button');
            button.classList.add('user__btn');
            button.textContent = 'User details';
            a.appendChild(button);
            div.appendChild(a);

            divOut.appendChild(div);

        }
    });