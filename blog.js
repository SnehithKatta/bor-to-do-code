document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        post.style.setProperty('--delay', `${index * 0.5}s`);
    });
});
