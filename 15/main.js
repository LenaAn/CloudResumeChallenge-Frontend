document.addEventListener('DOMContentLoaded', function () {
    const tagButtons = document.querySelectorAll('.tag-button');
    const blogPosts = document.querySelectorAll('.education-link');
    const blogPostsContainer = document.querySelector('.blog-posts-container');

    tagButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const tag = this.getAttribute('data-tag');
            const sortedPosts = [...blogPosts];

            if (tag !== 'all') {
                sortedPosts.sort((a, b) => {
                    if (a.getAttribute('data-tag') === tag && b.getAttribute('data-tag') !== tag) {
                        return -1;
                    }
                    if (a.getAttribute('data-tag') !== tag && b.getAttribute('data-tag') === tag) {
                        return 1;
                    }
                    return 0;
                });
            }

            blogPostsContainer.innerHTML = '';

            sortedPosts.forEach((post) => {
                if (tag === 'all') {
                    post.style.display = 'list-item';
                } else {
                    if (post.getAttribute('data-tag') === tag) {
                        post.style.display = 'list-item';
                    } else {
                        post.style.display = 'none';
                    }
                }
                blogPostsContainer.appendChild(post);
            });
        });
    });
});
