const logout = () => {
    return fetch('/data/logout')
    .then(res => res.json())
    .then((result) => {
      //console.log(result);
      return result;
    })
    .catch(er => console.log(er));
};

export default logout;