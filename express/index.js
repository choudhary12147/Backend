// library v/s framework

// library -> it is a collection of pre-written code that can be used to perform specific tasks
// example :- axios

// framework -> it is set of pre-written code that provides a structure for developing software application
// example :- express.js


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

// for request and response


app.use((req,res) =>{
    console.log("request is received");
})