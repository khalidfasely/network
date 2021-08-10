const posts = () => {
    return fetch('/data/posts')
    .then(res => res.json())
    .then(result => {
        //console.log(result.posts);
        return result.posts;
    })
    .catch(er => console.log(er));
};

export default posts;