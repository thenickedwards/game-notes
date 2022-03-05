console.log('addComment.js is connected!')

// Post new comment
const newcommentFormHandler = async (event) => {
    event.preventDefault();

    const comment_content = document.querySelector('#newcomment-content').value.trim();
    const post_id = event.target.dataset.id

    if (comment_content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            window.location.reload();
        } else {
            alert('Comment failed. :(\nPlease login and try again!')
            window.location.replace('/login');
        }
    }
};

document
    .querySelector('.post-form')
    ?.addEventListener('submit', newcommentFormHandler)
    ;