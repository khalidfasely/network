const unlike = (id) => {
    return fetch(`/data/unlike/${id}`)
    .then(res => res.json())
    .then(result => result)
    .catch(er => console.log(er));
};

export default unlike;