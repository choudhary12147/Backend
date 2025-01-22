/*
 EJS(embedded javascript templates)

 -> it is simple templating language that lets you generate HTML markup with plain javascript 

*/
// require("./views/home.ejs")

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

// start server listen for request at a particular port

const port = 8080;



app.listen(port,()=>{
     console.log(`listening on the ${port}`)
})



// app.get("/",(req,res)=>{
//     console.log("request received")
//      res.send("hello this is home");
// })


/**
  we can also provide the ejs file on request and ejs should be in the views directory 
 */

// app.get("/",(req,res)=>{
//       res.render("home")
// })

/**
 interpolation syntax
   
   interpolation refer to embedding expression into marked up text
    example <%= %>

 */

 /**
   
 passing data to ejs 

 */   

// app.get("/rolldice" , (req,res)=>{

//       let data_from_database = Math.floor(Math.random()*6)+1;
  
//       res.render("rolldice",{data_from_database});
// })

/**
conditional statement in ejs 
 */
/**
  instagram ejs
 */

app.get("/ig/:username",(req,res)=>{
      
  console.log("request received")

    let username = req.params.username;

    const instaData = require("./data.json");
       
     let data = instaData[username];
          
     console.log(data);
     res.render("instagram.ejs",{data});
})  

