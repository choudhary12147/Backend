/**
 1.REST -> repersentational state transfer
       :- it is an architectural style that defines a set of constraints(means rules) to be used for creating web services.
     
       we bulid api using expess.js
  */

       /**
       2. use of rest api -> it is used for the  crud operation (create , read , update and delete)
        */

        /**
         crud operations

         1. GET    ->retrieves resources.
         2. POST   -> submit new data to server
         3. PUT    -> updates existing data
         4. PATCH   -> update existing data partially
         5. DELETE  -> removes data
         
         */

const express =  require("express");
const { syncBuiltinESMExports } = require("module");
const path  = require("path");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended:true}));

app.set("views",path.join(__dirname,"views"));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port,()=>{
     console.log("listening to port : 8080");
})




let posts = [

       {name:"sunil",
        content:"hard work is key of success"   
       }
       ,
       {
          name:"amit",
          content:"with hardwork smartwork is also needed"
       },
       {
          name:"suresh",
          content:"i am a motivater"
       }
]



app.get("/posts",(req,res)=>{
        res.render("index.ejs",{posts})
})

app.get("/posts/new",(req,res)=>{
      res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username , content} = req.body;
    posts.push({username,content});
    res.redirect("/posts");
    
})