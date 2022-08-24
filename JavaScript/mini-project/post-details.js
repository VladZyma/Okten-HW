
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let url = new URL(location.href);
let postId = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then(response => response.json())
.then(post =>{
    console.log(post);
    let ul = document.createElement('ul');
    let out = document.getElementsByClassName('post-details-container')[0];
    for (let key in post) {
        let li = document.createElement('li');
        li.textContent = `${key}: ${post[key]}`;
        ul.appendChild(li)
    }
    out.appendChild(ul);


    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments =>{
            console.log(comments);
            let out = document.getElementsByClassName('comments-container')[0];
            for (let item of comments) {
                let div = document.createElement('div');

                let p = document.createElement('p');
                p.innerHTML = item.body;

                div.appendChild(p);
                out.appendChild(div);
            }

        })



})