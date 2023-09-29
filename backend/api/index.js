const router = require('express').Router();

router.route('/').get(()=> [
    console.log('api')
])

module.exports = router;