// Create new post on dashboard page
const newpostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newpost-title').value.trim();
    const post_content = document.querySelector('#newpost-post_content').value.trim();

    if (title && post_content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, post_content }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        // console.log(response);
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Post failed. :(\nPlease login and try again!')
        }
    }
};

document
    .querySelector('.post-form')
    .addEventListener('submit', newpostFormHandler)
    ;

// Delete post on dahsboard page
const deletePost = async function(event) {
    if (event.target.matches('.delete-btn')) {
        console.log('HEY WHATS UP')
        const post_id = event.target.dataset.id
        console.log(post_id)

        await fetch(`/api/posts/${post_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // window.location.reload();
    }
};

document
    .querySelector('.button-container')
    .addEventListener('click', deletePost
    );