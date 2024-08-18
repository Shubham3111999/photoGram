// The code given below is for one object refactor the code it for using the JSON Data.
let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
];

let likedPosts = new Set();
let post;

function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    for (let currentPost of postsData) {


        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const authorElement = document.createElement('h3');
        authorElement.textContent = currentPost.author;

        const contentElement = document.createElement('p');
        contentElement.textContent = currentPost.content;

        const imageElement = document.createElement('img');
        imageElement.src = currentPost.image;
        imageElement.alt = 'Post Image';

        const likeButton = document.createElement('button');
        likeButton.textContent = `Like`;
        likeButton.classList.add('like-button');
        likeButton.addEventListener('click', () => {
            if (!likedPosts.has(currentPost.id)) {
                likedPosts.add(currentPost.id);
                likePost(currentPost);
                likeButton.disabled = true; // Disable the button after clicking
            }
        });

        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Write a comment...';

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        commentButton.classList.add('comment-button')
        commentButton.addEventListener('click', () => {
            addComment(commentInput.value, currentPost);
            commentInput.value = '';
        }, { once: true });

        const postFooter = document.createElement('div');
        postFooter.classList.add('post-footer');
        postFooter.textContent = `Likes: ${currentPost.likes}   Comments: ${currentPost.comments.length}`;

        const commentsContainer = document.createElement('div');
        commentsContainer.classList.add('comments-container');
        commentsContainer.style.display = 'none';

        currentPost.comments.forEach((comment) => {
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement);
        });

        postElement.appendChild(authorElement);

        postElement.appendChild(imageElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(likeButton);
        postElement.appendChild(commentInput);
        postElement.appendChild(commentButton);
        postElement.appendChild(postFooter);
        postElement.appendChild(commentsContainer);

        postFooter.addEventListener('click', () => {
            if (commentsContainer.style.display === 'none') {
                commentsContainer.style.display = 'block';
            } else {
                commentsContainer.style.display = 'none';
            }
        });

        postsContainer.appendChild(postElement);
    }
}


// Function to handle post liking
function likePost(currentPost) {
    currentPost.likes++;
    renderPosts();
    likedPosts.forEach(e => {
        let button = document.querySelectorAll('.like-button');
        button = button[e - 1];
        button.style.backgroundColor = 'red';
    })
}

// Function to handle adding a comment
function addComment(comment, currentPost) {
    if (comment.trim() === "") {
        return;
    }
    currentPost.comments.push(comment);
    renderPosts();
}

renderPosts();

// { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' }

let postFormEl = document.getElementById("postForm");
postFormEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const postInput = document.getElementById('postInput');
    const imageInput = document.getElementById('imageInput');
    const content = postInput.value;
    const image = imageInput.files[0];

    if (content.trim() === '' || !image) {
        return;
    }

    const imageURL = URL.createObjectURL(image);

    const newPost = {
        id: postsData.length + 1,
        author: 'You',
        content: content,
        likes: 0,
        comments: [],
        image: imageURL
    };

    postsData.push(newPost);
    postInput.value = '';
    imageInput.value = '';
    renderPosts();


})



