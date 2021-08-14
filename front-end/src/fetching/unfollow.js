const unfollow = (following) => {
    return fetch('/data/unfollow', {
        method: 'POST',
        body: JSON.stringify({
            following
        })
    })
    .then(res => res.json())
    .then(result => result)
    .catch(er => console.log(er));
};

export default unfollow;