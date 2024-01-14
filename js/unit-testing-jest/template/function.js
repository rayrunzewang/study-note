const axios = require ('axios');

      const functions = {
        add: (num1, num2) => num1 + num2,
        isNull: ()=> null,
        checkValue: x => x,
        createUser: () => {
          const user = {
            firstName: 'Ray'
          }
          user['lastName'] = 'Wang';
          return user;
        },
        // async text and axios
        // `npm i axios`
        fetchUser: () => 
           axios
            .get('https://www.domain.com/users/1')
            .then(res => res.data)
            .catch(error => 'error')
      }

      module.exports = functions;