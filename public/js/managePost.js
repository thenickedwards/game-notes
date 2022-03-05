console.log('managePost.js is connected!')

// Create new post (from dashboard page)
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
            window.location.replace('/login');
        }
    }
};

document
    .querySelector('.newpost')
    ?.addEventListener('submit', newpostFormHandler)
    ;

// Delete post
const deletePost = async function(event) {
    if (event.target.matches('.delete-btn')) {
        
        const post_id = event.target.dataset.id
        console.log(event)

        await fetch(`/api/posts/${post_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        window.location.reload();
    } else {
        alert('Delete failed. :(\nPlease login and try again!')
        window.location.replace('/login');
    }
};

document
    .querySelectorAll('.delete-btn').forEach(element => element.addEventListener('click', deletePost
    ));

    ////////////////////

// Update a post
const updatepostFormHandler = async (event) => {
    event.preventDefault();
    console.log('Function is working!')
    const id = event.target.dataset.id
    console.log(event.target)
    const title = document.querySelector('#updatepost-title').value.trim();
    const post_content = document.querySelector('#updatepost-post_content').value.trim();

    if (title && post_content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, post_content }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        console.log(response);
        if (response.ok) {
            console.log(response);
            // document.location.replace('/dashboard');
        } else {
            alert('Post failed. :(\nPlease login and try again!')
            // window.location.replace('/login');
        }
    }
};

document
    .querySelector('.updatepost')
    ?.addEventListener('submit', updatepostFormHandler)
    ;