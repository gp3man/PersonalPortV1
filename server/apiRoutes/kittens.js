// apiRoutes/kittens.js
const router = require('express').Router();

// matches GET requests to /api/kittens/
router.get('/', function (req, res, next) { /* etc */});

// matches POST requests to /api/kittens/
router.post('/', function (req, res, next) { /* etc */});

// matches PUT requests to /api/kittens/:kittenId
router.put('/:kittenId', function (req, res, next) { /* etc */});

// matches DELETE requests to /api/kittens/:kittenId
router.delete('/:kittenId', function (req, res, next) { /* etc */});

module.exports = router;
