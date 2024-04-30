//constante que llama al framework
const express = require('express')

const app = express()

//SERVICIO WEB DE TIPO GET 
app.get('/', function (req, res) {
    //ENVIA UN MENSAJE DE RESPUESTA
  res.send('Hello World')
  //MENSAJE EN CONSOLO DEL LADO DEL SERVIDOR
  console.log("EL SERVICIO ESTÁ CORRIENDO");
});

//2.- SERVICIO WEB DE TIPO GET 
app.get('/a',function(req,res){
    //ENVIAMOS UN TEXTO PLANO
    res.send('VOCAL')

});

//3.-DEFINIR CON UN PARÁMETRO EN LA URL
//: INDICA EL INGRESO DE UN PARÁMETRO
app.get('/suma/:n1',(req,res)=>{
    //CREAMOS UNA CONSTANTE QUE CAPTURA ATRAVÉS DEL 
    //REQUERIMIENTO req LA VARIABLE n1
    const num1=parseInt(req.params.n1);
    //sumamos el valor en una variable var (camufla/camaleon)
    var tot=11+num1;
    //através de la respuesta al cliente res enviamos el texto plano tot
    res.send(tot);

});

//4.-DEFINIR CON UN PARÁMETRO EN LA URL enviando en JSON
app.get('/suma/:n1',(req,res)=>{
    //num1 capturamos de la url que envía el cliente (petición)
   //la variable n1 y la transformamos en entero
    const num1=parseInt(req.params.n1);
    //sumamos en variable var
    var tot=11+num1;
    //creamos una estructura json
    const respuesta={
        //clave:valor
        resultado:tot
    };
    //enviamos respuesta con estructura json
    res.json(respuesta);


});

//5.- SUMA DE 2 NÚMEROS USANDO PARÁMETROS URL
//url : http://localhost:3000/suma/1/2
//=> representa la captura de información através de la url
app.get('/suma/:n1/:n2',(req,resp)=>{
    //capturo la información enviada por el cliente
    //en la url como parametros de entrada
    //parseInt: transforma el parametro (cadena)en número int
    const n1=parseInt(req.params.n1);
    const n2=parseInt(req.params.n2);
    //genero la operación 
    var suma=n1+n2;
    //envia una respuesta pero la transforma en texto +""
    resp.send(suma+"")

});

//6.- RESTA DE 2 NÚMEROS USANDO PARÁMETROS URL DEVOLVER JSON
//url : http://localhost:3000/resta/6/2
app.get('/resta/:n1/:n2',(req,resp)=>{
    //capturo parámetros del required y los transformo en int
    const n1=parseInt(req.params.n1);
    const n2=parseInt(req.params.n2);
    //genero la operación
    var resta=n1-n2;
    //creo una estructura json
    const texto={respuesta:resta};
    //envío el json
    resp.json(texto);

});

//7.- SE CAPTURA DE LA URL PERO NO ESTÁ DEFINIDO EL PARÁMETRO COMO VARIABLE
//url : http://localhost:3000/nombre=name=flor
app.get('/nombre',(req,res)=>{
    //me ayuda a obtener información no definida
    const datoObtener=req.query.name;
    res.send('HOLA'+' '+datoObtener)

});

//8.- SUMA 2 NÚMEROS SIN DEFINIR PARÁMETRO EN LA URL
//url : http://localhost:3000/sumar?n1=4&n2=5
app.get('/sumar',(req,res)=>{
    //me ayuda a obtener información no definida
    const n1Obtener=parseInt(req.query.n1);
    const n2Obtener=parseInt(req.query.n2);
    var respuesta=n1Obtener+n2Obtener;
    //res.send('HOLA'+' '+respuesta+"")
    const resp={tot:respuesta};
    res.json(resp);

});






//SERVICIO ESCUCHE DESDE EL PUERTO 3000
app.listen(3000)