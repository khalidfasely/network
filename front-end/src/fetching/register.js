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
          return result.message;
      })
      .catch(e => console.log(e));

      //return error;
};

export default register;

//const register = ({ username, email, password, confirmation }) => {
//    fetch('/data/register', {
//        method: 'POST',
//        body: JSON.stringify({
//            username,
//            email,
//            password,
//            confirmation
//        })
//      })
//      //.then(response => response.json())
//      //.then(result => {
//      //    // Print result
//      //    console.log(result);
//      //})
//      .catch(e => console.log(e));
//
//      //return error;
//};
//
//export default register;