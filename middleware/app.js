/**middleware -> it in express are functions that into play after the server receives the request 
                 and before the response is sent to the client */


                 /** common middleware functions */
                 /** app.use(express.urlencoded({extended:true}));
                     app.use(express.static(path.join(__dirname,"/public")))
                     1.methodOverride
                     2.bodyparser
                     3.express.static
                     4.express.urlencoded
                  */


 const express = require("express");
 const app = express();

 app.use(()=>{
       console.log("hi i am middleware");  
 })

 app.get("/",(req,res)=>{
    res.send("hi,i am root");
 })

 app.get("/random",(req,res)=>{
     res.send("this is random page ");
 })

 app.listen(8080,()=>{
      console.log(`server is listen at ${8080}`);
 })

