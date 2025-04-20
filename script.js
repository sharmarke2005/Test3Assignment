document.addEventListener('DOMContentLoaded', () => {
  const postInput = document.getElementById('postInput');
  const addPostBtn = document.getElementById('addPostBtn');
  const postsContainer = document.getElementById('postsContainer');

  // Add new post
  addPostBtn.addEventListener('click', () => {
      const content = postInput.value.trim();
      if (content === '') return;

      // Create a post element
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      const postContent = document.createElement('p');
      postContent.textContent = content;

      const likeBtn = document.createElement('button');
      likeBtn.textContent = 'Like';
      likeBtn.classList.add('like-btn');

      postDiv.appendChild(postContent);
      postDiv.appendChild(likeBtn);

      postsContainer.prepend(postDiv); // Add to top of feed

      // Clear input
      postInput.value = '';

      // Like/unlike functionality
      likeBtn.addEventListener('click', () => {
          if (likeBtn.textContent === 'Like') {
              likeBtn.textContent = 'Unlike';
              likeBtn.classList.add('liked');
          } else {
              likeBtn.textContent = 'Like';
              likeBtn.classList.remove('liked');
          }
      });
  });
});
