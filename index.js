//USO PROTOCOLO HTTP
var http=require('http');
//CREACIÓN DE UN SERVIDOR USANDO HTTP
var server=http.createServer();

function mensaje(petic,resp){
    //Cabecera cuando el estado sea satisfactorio envíe un texto
    resp.writeHead(200,{'content-type':'text/plain'});
    //Escribe el mensaje a presentar
    resp.write("HOLA MUNDO!");
    //Finaliza el mensaje
    resp.end();

}
//Cuando tenga un requerimiento por parte de un Cliente 
//envíe a presentar la función mensaje
server.on('request',mensaje);
//Cada vez que escuche una peticion puerto 3000 y a mostrar 
//el mensaje en consola
server.listen(3000,function(){
    console.log("Se está ejecutando el servidor");
});