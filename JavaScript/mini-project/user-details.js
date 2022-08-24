const url = new URL(location.href);
const userId = url.searchParams.get('id');

// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const out2 = document.getElementsByClassName('user-details-container')[0];

        let ul = document.createElement('ul');
        for (let key in user) {

            if (key === 'address') {
                for (let key in user.address) {

                    if (key === 'geo') {
                        for (let key in user.address.geo) {
                            let li = document.createElement("li");
                            li.textContent = `${key}: ${user.address.geo[key]}`;
                            ul.appendChild(li);
                        }
                    }else {
                    let li = document.createElement('li');
                    li.textContent = `${key}: ${user.address[key]}`;
                    ul.appendChild(li);
                    }

                }
            }

            else if (key === 'company') {
                for (let key in user.company) {
                    let li = document.createElement('li');
                    li.textContent = `${key}: ${user.company[key]}`;
                    ul.appendChild(li);
                }
            }

            else {
            let li = document.createElement('li');
            li.textContent = `${key}: ${user[key]}`;
            ul.appendChild(li);
            }


        }
        out2.appendChild(ul);

        const button = document.createElement('button');
        button.classList.add('post-btn');
        button.textContent = 'posts of current user'
        document.body.appendChild(button);

        button.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(response => response.json())
                .then(posts =>{

                    let out = document.getElementsByClassName('user-posts-container')[0];

                    for (let post of posts) {
                        let div = document.createElement('div');
                        let p = document.createElement('p');
                        p.textContent = post.title;
                        let a = document.createElement('a');
                        a.textContent = 'post-details';
                        a.classList.add('post-details-link');
                        a.href = `post-details.html?id=${post.id}`;
                        p.appendChild(a);
                        div.appendChild(p);
                        out.appendChild(div);
                    }

                    out.classList.remove('hidden');
                    button.classList.add('hidden');

                })
        }

    })



