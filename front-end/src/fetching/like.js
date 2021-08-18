const like = (id) => {
    return fetch(`/data/like/${id}`)
    .then(res => res.json())
    .then(result => result)
    .catch(er => console.log(er));
};

export default like;