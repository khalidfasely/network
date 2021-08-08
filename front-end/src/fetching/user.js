const user = () => {
    return fetch('/data/user')
    .then(res => res.json())
    .then(result => {
        if(result.user !== "AnonymousUser") {
            return result.user;
        } else {
            return undefined;
        };
    })
    .catch(er => console.log(er));
};

export default user;