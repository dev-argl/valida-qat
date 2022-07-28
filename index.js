
 const request = require("request");
 const express = require("express");
 const app=express();
 
 
 const  dato='PRT123';

 const port=process.env.SERVERPORT || 8080
 const serverip=process.env.SERVERIP || '0.0.0.0'
 
 

 app.get('/consulta/status', function(req, res) {

    const valor = req.query.iniciativa;
    let row = null;
 
  
        if(valor == dato){
            row = 'aprobado'
        }
        else{
            row =  'rechazado'
        }
       res.json({ status: row });
            
                
 
     });
 

 
 
 /** EXPONEMOS EL SERVIDOR DE EXPRESS  */
 
 app.listen(port, serverip, function(req, res) {
    console.log("Servicios de tipo de cambio se encuentra arriba");
 });
 