// library v/s framework

// library -> it is a collection of pre-written code that can be used to perform specific tasks
// example :- axios

// framework -> it is set of pre-written code that provides a structure for developing software application
// example :- express.js


/**
  1. express.js -> a node.js web application framework that help us to make web application 
                   it is used for server side programming  
 */


 /**
    use of express.js ->  1. listen for incomming request
                          2. parse  
                          3. match response with routes 
  */                  


const express =  require("express");

const app = express();

let port = 8080;

/*
port ->  the logical endpoints of a network connection that is used to exchange information
          between a web server and a web client
*/


// console.dir(app);    app is a function of express.js module
// console.log(typeof app);


// for server start

app.listen(port, ()=>{
    console.log( ` app listening on the port ${port}`);
}) 


//request response when request on port that is server the response is render to browsre

// app.use( (req,res) =>{
//     console.log("request received");
//     res.send("this is basic response");
// })

// app.use listen for all requests


// routing -> it is process of selecting a path for traffic in a network or between or across multiple networks.

// app.get( "/fruits",(req,res) => {
//     console.log("request received");
//     res.send("<h1>fruits</h1> <br> <br> <ul><li>apple</li> <li>banana</li> <li>mango </li></ul>   ")
// })

// nodemon package -> server automatically  

// it same in both type global and local

/**
       path parameter ->  that we passed when we send request on local host
 */

//  app.get("/:username/:id",(req,res) =>{
//       console.log(req.params);
//         let urname = req.params.username;
//         let id = req.params.id;
//       res.send( "urname"+ urname+ "id: "+ id);
//  })

 /**
    query strings    on browser search?= <search key> & colour = green
  */

  // app.get("/search",(req,res)=>{

  //   let {q}  =  req.query;
  //     console.log(req.query);
  //     res.send(`this are the search result ${q}`);
  // })  

  /**
    get and put request :-
 
     get request ->
         1. used to get some response
drawbacks -> data sent in query strings is limited 
             , convert the data send in string  and
             data visible in the url

      post request ->
          1.   used  to post something(for create , write and update) 
               data sent via request body (any type of  data)     
 

   */

/**
   get and post for form
 */

   app.get("/register" , (req,res)=>{

    let {username , pass } = req.query;
    
         res.send("register success ful");
   })


   app.post("/register" , (req,res)=>{
      

    res.send("register success ful");
})