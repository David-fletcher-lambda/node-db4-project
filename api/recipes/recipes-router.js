const router = require('express').Router()

router.get('/', (req, res, next) => {
   res.json({
      message: 'we getting '
   })
   console.log('well this should do somethign')
   next()
})

module.exports = router