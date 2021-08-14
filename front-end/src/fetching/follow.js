const follow = (following) => {
    return fetch('/data/follow', {
        method: 'POST',
        body: JSON.stringify({
            following
        })
    })
    .then(res => res.json())
    .then(result => result)
    .catch(er => console.log(er));
};

export default follow;