const addPost = ({ content }) => {
    return fetch('/data/new_post', {
        method: 'POST',
        body: JSON.stringify({
            content
        })
    })
    .then(res => res.json())
    .then(result => {
        return result;
        console.log('callApi done');
    })
    .catch(er => console.log(er));
}

export default addPost;