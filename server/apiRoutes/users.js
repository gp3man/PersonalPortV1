const User = require('../db/models/user');

// apiRoutes/users.js
const router = require('express').Router();

// matches GET requests to /api/users/
router.get('/', function (req, res, next) { /* etc */});

// matches POST requests to /api/users/
router.post('/', function (req, res, next) { /* etc */});


router.post('/login', async (req, res, next)=> {
  try {
    res.send({token: await User.authenticate(req.body)})
  } catch (error) {
    next(error)
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

// matches PUT requests to /api/users/:usersId
router.put('/:usersId', function (req, res, next) { /* etc */});

// matches DELETE requests to /api/users/:usersId
router.delete('/:usersId', function (req, res, next) { /* etc */});

module.exports = router;
