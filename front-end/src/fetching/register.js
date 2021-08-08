const register = ({ username, email, password, confirmation }) => {
    return fetch('/data/register', {
        method: 'POST',
        body: JSON.stringify({
            username,
            email,
            password,
            confirmation
        })
      })
      .then(response => response.json())
      .then(result => {
          // Print result
          return result;
      })
      .catch(e => console.log(e));

      //return error;
};

export default register;