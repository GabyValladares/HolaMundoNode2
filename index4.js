const express = require('express')
const https = require('https');
const app = express();
const listaNombres=[];

app.post('/hola',(req,res)=>{
    const nombre=req.query;
    console.log(nombre);
    listaNombres.push(nombre);
    res.send({
        message:'Se almaceno el nombre',
    });

});

app.listen(3000,function(){
    console.log("Se está ejecutando el servidor");
});