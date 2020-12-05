const express=require('express');
const app=express();
const router=require('./api/user/user.router');

app.use(express.json());
app.use('/api',router);

app.get('/',(req,res)=>{
	res.json({
	    success:1, 
	    message:'api working'
    });
});

app.listen(3003,()=>{
	console.log('server running ::-\thttp://localhost:3003');
});