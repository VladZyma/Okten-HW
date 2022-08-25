// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const url = new URL(location.href);
const userId = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const out = document.getElementsByClassName('container')[0];
        const userDiv = document.getElementsByClassName('user-details')[0];
        const ul = document.createElement('ul');
        ul.classList.add('user-details__list');

        function createUserInfo(myUser) {
            for (const key in myUser) {
                if(typeof myUser[key] === 'object') {
                    createUserInfo(myUser[key]);
                }else {
                // console.log(key, myUser[key]);
                const li = document.createElement('li');
                li.textContent = key + ':' + ' ' + myUser[key];
                ul.appendChild(li);
                userDiv.appendChild(ul);
                out.appendChild(userDiv);
                }
            }
        }
        createUserInfo(user);

        const button = document.createElement('button');
        button.classList.add('user-posts-btn');
        button.textContent = `${user.name} posts`;
        out.appendChild(button);

        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(response => response.json())
                .then(posts => {
                    console.log(posts);
                    const postsDiv = document.getElementsByClassName('user-posts')[0];

                    for (let item of posts) {
                        createUserPosts(item);
                    }

                    function createUserPosts(postObj) {
                        const p = document.createElement('p');
                        p.textContent = postObj.title;

                        const innerDiv = document.createElement('div');
                        innerDiv.appendChild(p)

                        const a = document.createElement('a');
                        a.href = `post_details.html?postId=${postObj.id}`;
                        const button = document.createElement('button');
                        button.classList.add('user-post-btn');
                        button.textContent = 'Post details';
                        a.appendChild(button);
                        innerDiv.appendChild(a);

                        postsDiv.appendChild(innerDiv);
                    }
                });
        }

    });