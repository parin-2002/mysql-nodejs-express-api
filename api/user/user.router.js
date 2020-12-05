const router=require('express').Router();
const {createUser,selectAll,checkUser,delUser,updateUser}=require('./user.controller');
const { checkToken }=require('../../auth/token_validat');

router.post('/register',checkToken,createUser);
router.get('/select',checkToken,selectAll);
router.post('/check',checkUser);
router.post('/delete',checkToken,delUser);
router.put('/update/:id',checkToken,updateUser);

module.exports=router;