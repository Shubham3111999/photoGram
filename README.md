# Instagram-like Post Rendering Application

This is a simple Instagram-like web application built using JavaScript that allows users to render posts from JSON data, interact with posts (like, comment), and create new posts with images.

## Features

- Display a list of posts with author, content, image, likes, and comments.
- Like a post (with the button disabled and colored after being liked).
- Add comments to posts and display them dynamically.
- Toggle the visibility of comments for each post.
- Create a new post with text and image using a form.

## Project Structure

- `postsData`: A sample JSON-like array that contains the posts information (author, content, likes, comments, and image).
- Dynamic rendering of posts using vanilla JavaScript and DOM manipulation.
- Ability to interact with posts (like, comment) and see real-time updates.

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)
- DOM Manipulation

## How It Works

1. **Rendering Posts**: 
    - The `renderPosts()` function dynamically creates HTML elements for each post and appends them to the container.
    - The function updates the post data, handles likes, and displays comments.

2. **Handling Likes**: 
    - Clicking the like button increases the like count for the respective post and changes the button state to disabled.

3. **Adding Comments**: 
    - Users can type a comment and add it to the respective post by clicking the "Comment" button. Comments can be toggled on/off by clicking on the footer of each post.

4. **Creating New Posts**: 
    - Users can create a new post with text content and an image using the form provided. The image is displayed using a temporary URL.

## How to Run the Project

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/instagram-like-post-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd instagram-like-post-app
    ```

3. Open the `index.html` file in your browser to view and interact with the application.

## Sample Data

The initial data is stored in the `postsData` array:

```javascript
let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
];
