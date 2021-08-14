const postsFollowing = () => {
    return fetch('/data/following')
    .then(res => res.json())
    .then(result => result)
    .catch(er => console.log(er));
};

export default postsFollowing;