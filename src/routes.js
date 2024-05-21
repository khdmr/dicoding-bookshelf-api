const { addBookHandler } = require("./handler");

const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addBookHandler,
    },
    {
      method: 'GET',
      path: '/books',
      handler: () => {},
    },
];
    
module.exports = routes;