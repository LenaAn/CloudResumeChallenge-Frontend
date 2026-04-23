document.addEventListener('DOMContentLoaded', function () {
    const tagButtons = document.querySelectorAll('.tag-button');
    const blogPosts = document.querySelectorAll('.education-link');
    const blogPostsContainer = document.querySelector('.blog-posts-container');
    const copyEmail = document.querySelector('#copy-email');
    const copySuccess = document.querySelector('#copy-success');

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

    copyEmail.addEventListener('click', function (e) {
        e.preventDefault();
        const text = e.target.textContent;
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.body.removeChild(dummy);

        copySuccess.classList.add('visible');
        setTimeout(function () {
            copySuccess.classList.remove('visible');
        }, 2000);
    });
});
