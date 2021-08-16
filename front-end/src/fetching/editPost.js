const editPost = (id, newContent) => {
    return fetch(`/data/savep/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            content: `${newContent}`
        })
    })
    .then(response => response.json())
    .then(message => {
        return message;
    });
};

export default editPost;