const posts = () => {
    return fetch('/data/posts')
    .then(res => res.json())
    .then(result => {
        //console.log(result);
        return result;
    })
    .catch(er => console.log(er));
};

export default posts;