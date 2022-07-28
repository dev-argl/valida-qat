
 const express = require("express");
 const app=express();
 
 
 const  dato='PRT123';

 
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
 
 app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));