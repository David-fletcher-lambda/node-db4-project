const router = require('express').Router()

router.get('/', (req, res, next) => {
   console.log('well this should do somethign')
   next()
})

module.exports = router