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
          return result.message;
      })
      .catch(e => console.log(e));
};

export default login;

//const login = ({ username, password }) => {
//    return fetch('/data/login', {
//        method: 'POST',
//        body: JSON.stringify({
//            username,
//            password
//        })
//      })
//      .then(response => {
//          if(response.ok){
//              console.log('Login');
//              return 'Login';
//          } else{
//              console.log('Invalid username and/or password.');
//              return 'Not Login';
//          }
//      })
//      //.then(response => response.json())
//      //.then(result => {
//      //    // Print result
//      //    console.log(result);
//      //})
//      .catch(e => console.log(e));
//};
//
//export default login;