// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location.href);
const postId = url.searchParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        console.log(post);
        const outEl = document.getElementsByClassName('container')[0];
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        const postUl = document.createElement('ul')
        postUl.classList.add('post__list');

        for (let key in post) {
            const li = document.createElement('li');
            li.textContent = key + ':' + ' ' + post[key];
            postUl.appendChild(li);
            postDiv.appendChild(postUl);
            outEl.appendChild(postDiv);
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                const outEl = document.getElementsByClassName('container')[0];
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');

                for (const item of comments) {
                    console.log(item.body);
                    const innerDiv = document.createElement('div');
                    const p = document.createElement('p');

                    p.textContent = item.body;
                    innerDiv.appendChild(p);
                    commentDiv.appendChild(innerDiv);
                }
                outEl.appendChild(commentDiv);

            });

    });
