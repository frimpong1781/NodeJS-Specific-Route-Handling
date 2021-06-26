const express = require('express');

const server = express();

// request handling methods
const handleAllTypesOfRequest = (req, res) => {
     res.send('response from server.use');
};

const handleProfilePutRequest = (req, res) => {
     res.send('Responded to profile request with method of value PUT');
};
const handleLoginGetRequest = (req, res) => {
     res.send('Hello this is the login page');
};
const handleSignupGetRequest = (req, res) => {
     res.send('from signup request with GET method');
};
const handleSignupPostRequest = (req, res) => {
     res.send('from signup request with  POST method');
};

// const middlewareFunction = (req, res, next) => {
//      console.log('hello this is the middleware');
//      next();
// };

const loginRouteSpecificMiddleware = (req, res, next) => {
     console.log('login route middleware exercuted');
     next();
};
const profileRouteSpecificMiddleware = (req, res, next) => {
     console.log('profile route middleware exercuted');
     next();
};
const signupRouteSpecificMiddleware = (req, res, next) => {
     console.log('signup route middleware exercuted');
     next();
};

//middlewares
// server.use(middlewareFunction);

//Routes
server.post('/profile', handleAllTypesOfRequest);
server.get('/login', loginRouteSpecificMiddleware, handleLoginGetRequest);
server.put('/profile', profileRouteSpecificMiddleware, handleProfilePutRequest);
server.get('/signup', signupRouteSpecificMiddleware, handleSignupGetRequest);
server.post('/signup', handleSignupPostRequest);

server.listen(5000, () => console.log('server is ready'));
