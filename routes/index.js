var express = require('express');
const userRoute = require('./user.route');
var router = express.Router();


const defaultRoutes = [
  {
    path: '/users',
    route: userRoute
  }
];

defaultRoutes.forEach( route => {
  router.use(route.path, route.route)
});

module.exports = router;
