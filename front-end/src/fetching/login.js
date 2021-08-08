const login = ({ username, password }) => {
    return fetch('/data/login', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        })
      })
      .then(res => res.json())
      .then(result => {
          return result;
      })
      .catch(e => console.log(e));
};

export default login;