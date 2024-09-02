const { Router} = require('express')
const {gettodo, savetodo, updatetodo, deletedtodo} = require('../Controller/Todocontroller')

const router= Router()

// router.get('/',(req, res)=>{
//     res.json({message:"hi i am using the server"})
// })

router.get('/',gettodo)
router.post('/save',savetodo)
router.post('/update',updatetodo)
router.post('/delete',deletedtodo)



module.exports = router;