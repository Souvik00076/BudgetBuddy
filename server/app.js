var express=require('express');
var app=express();
const portNumber=process.env.PORt||8080;

app.get('/',(req,res)=>{
  res.send("hello world");  
});
app.listen(portNumber,()=>{
    console.log("Server started at port ",portNumber);

});