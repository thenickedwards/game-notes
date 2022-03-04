const newpostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newpost-title').value.trim();
    const post_content = document.querySelector('#newpost-post_content').value.trim();

    console.log('LOOK OVER HERE!');
    console.log(title);
    console.log(post_content);

    if (title && post_content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, post_content}),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            // document.location.replace('/dashboard');
            console.log(response);
        } else {
            alert('Post failed. :( \n Please login and try again!')
        }
    }
};

document
    .querySelector('.post-form')
    .addEventListener('submit', newpostFormHandler)
    ;