const {create,select,check,del,update}=require('./user.service');
const { sign } = require('jsonwebtoken');

function createUser(req,res) 
{
	create(req.body).then((data)=>{
		return res.status(200).json({ success:1,result:data});
     }).catch((error)=>{
     	return res.status(500).json({ success:0,result:error});
     });
}

function selectAll(req,res) 
{
	select().then((data)=>{
		return res.status(200).json({ success:1,result:data});
    }).catch((error)=>{
    	return res.status(500).json({ success:0,result:error});
    });
}

function checkUser(req,res)
{  
  check(req.body).then(data=>{
  	if(req.body.email!=undefined&&req.body.email!=""){
  	   if(data[0]!=undefined){
  	      let password=false;
            if(req.body.password!=undefined) {
            	password=req.body.password==data[0].password;
                data[0].password=undefined;
                const jsontoken=sign({results:data},"qwe1234",{
                	expiresIn:"1h"
               });
              return res.status(200).json({ success:1,matchpassword:password,token:jsontoken,result:data });
            }
  	     return res.status(200).json({ success:1,message:"email exists",result:data });
  	   }
    	 return res.status(200).json({ success:0,message:"email is worng " });
  	}
    return res.status(200).json({ success:0,message:"please enter email"});
  }).catch(error=>{
  	return res.status(500).json({ success:0,result:error });
  });
}

function delUser(req,res)
{
	del(req.body.email).then(data=>{
		if(req.body.email!=undefined&&req.body.email!=""){
	      return res.status(200).json({success:1,result:data});
	    }
   	return res.status(200).json({ success:0,message:"please enter email"});
    }).catch(error=>{
   	return res.status(500).json({success:0,result:error});
    });
}

function updateUser(req,res) 
{
  update(req.params.id,req.body).then(data=>{
  	return res.status(200).json({ success:1,result:data});
  }).catch(error=>{
  	return res.status(500).json({ success:0,result:error});
  });
}

module.exports={createUser,selectAll,checkUser,delUser,updateUser};