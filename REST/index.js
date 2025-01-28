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
const methodOverride = require('method-override')
const app = express();
const { v4: uuidv4 } = require('uuid');

const port = 8080;

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));

app.set("views",path.join(__dirname,"views"));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port,()=>{
     console.log("listening to port : 8080");
})




let posts = [

       { 
         id:uuidv4(),
         name:"sunil",
        content:"hard work is key of success"   
       }
       ,
       {
          id:uuidv4(),
          name:"amit",
          content:"with hardwork smartwork is also needed"
       },
       {
          id:uuidv4(),
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

app.get("/posts/:id",(req,res)=>{

   let {id} = req.params;

   let post = posts.find( p => p.id === id);
     res.render("show.ejs",{post});  

})

app.post("/posts",(req,res)=>{
    let {username , content} = req.body;
       let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
    
})

/**
  uuid package -> universally unique identifier
 */
// patch


app.get("/posts/:id/edit",(req,res)=>{
     
     let {id} =  req.params;
      
      let post = posts.find(post => post.id === id);

     res.render("edit.ejs",{post});
})


app.patch("/posts/:id", (req,res)=>{

   let {id} = req.params;
   let newContent = req.body.content;
   let post = posts.find(post => post.id === id);
     post.content = newContent;
  res.redirect("/posts");

})

app.delete("/posts/:id",(req,res)=>{
      let {id} = req.params;

      posts = posts.filter(post => post.id != id);
      res.redirect("/posts");
})