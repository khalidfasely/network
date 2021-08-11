const postsProfile = (id) => {
    return fetch(`/data/profile/${id}`)
    .then(res => res.json())
    .then(result => {
        //console.log(result);
        return result;
    })
    .catch(er => console.log(er));
}

export default postsProfile;