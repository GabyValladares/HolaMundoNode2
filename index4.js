const express = require('express')
const https = require('https');
const app = express();
const listaNombres=[];
const BDDpersona='Persona.json';
app.get('/hola',(req,res)=>{

res.json(listaNombres);

});

var id=1;
app.post('/hola',(req,res)=>{
   
    const nombre=req.query.name;
    const edad=req.query.edad;
    console.log(nombre);
    listaNombres.push(
                    {id:id++,
                    name:nombre,
                    edad:edad});
                  

    res.send({
        message:'Se almaceno el nombre',
    });

});

app.put('/hola',(req,res)=>{
  const num=parseInt(req.query.id);
  const n=req.query;
  const p=listaNombres.find(f=>f.id===num);
  console.log(n.name);
  console.log(n.edad);
  if(p){
    p.name=n.name;
    p.edad=n.edad;
    res.json({message:'Datos:',p});
  }
app.delete('/hola',(req,res)=>{
    const id=req.query;
    const p=listaNombres.find(l=>l.id===id.id);
    if(p){
        listaNombres.splice(p,1);
    }
    res.json({message:'Datos Eliminados:',p});


});
});

app.all('/hola',(req,res)=>{
    const num=parseInt(req.query.id);
    
    const p=listaNombres.find(f=>f.id===num);
   
    if(p){
      listaNombres.splice(p,1)
      res.json({message:'Datos eliminados:',p});
    }
  
  });


app.listen(3000,function(){
    console.log("Se está ejecutando el servidor");
});