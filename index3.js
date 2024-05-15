const express = require('express');

const app = express();
app.get('/users-list', (req, res) => {
    // Get complete list of users
    const usersList = [];
  
    // Send the usersList as a response to the client
    res.send(usersList);
  });

  app.post('/users-list', (req, res) => {
    const usersList = req.body;
  
    // Save the data of user that was sent by the client
  
    // Send a response to client that will show that the request was successfull.
    res.send({
      message: 'New user was added to the list',
    });
  });


app.post('/hola',(req,res)=>{
    console.log(req.query);
    res.send();
});

  app.listen(3000,function(){
    console.log("Se está ejecutando el servidor");
});