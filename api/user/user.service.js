const pool=require('../../config/database');

function create(data)
{
	return new Promise(function( resolve,reject){
		pool.query(`insert into register (username,email,password) values (?,?,?)`,
              [data.username,data.email,data.password],
              (error,result)=>{
              	if(error){
              	 reject(error);
              	}
                  resolve(result);
              });
    });
}

function select() 
{
	return new Promise(function(resolve,reject){
		pool.query('select * from register',
                 (error,result)=>{
                 	if(error){
                 	reject(error);
                 	}
                     resolve(result);
              });
    });
}

function check(data)
{ 
	return new Promise(function(resolve,reject){
		pool.query(`select * from register where email=?`,
		         [data.email], 
                (error,result)=>{
                	if(error) {
                	  reject(error);
                	}
                     resolve(result);
               });
    });
}

function del(email)
{
  return new Promise(function(resolve,reject){
  	pool.query(`DELETE FROM register WHERE email=?`,
             [email],
            (error,result)=>{
             if(error){
             	reject(error);
             	}
                 resolve(result);
       });
  });
}

function update(id,data) 
{
  return new Promise(function(resolve,reject){
  	pool.query(`UPDATE register SET username=?, email=?, password=? WHERE id=?`,
             [data.username,data.email,data.password,id],
             (error,result)=>{
             	if(error) {
             	reject(error);
             	}
                resolve(result);
            });
  });
}

module.exports={create,select,check,del,update};