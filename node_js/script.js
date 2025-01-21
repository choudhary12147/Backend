
/** 1.  node.js -> it is javascript runtime environment
 * 
 *   it is used for server side programming
 *   its not a language , library and framework
 */


/**     
     2. node repl -> read evaluate print loop 

 */

/**

     3. process -> this object provide information about and control over, the current node.js process

       process.argv -> returns an array containing the command-line arguments passed when the node.js process was launched
            example we pass some argument with file that is store in a array

 */

// console.log(process.argv);

/**
   4. module.exports  transfer data from one file to another
       
      a. require()      -> a bulit-in function that is used to include external modules that is exist in separate file
      b. module.exports -> a special object 
 */


//  const math = require("./math");
  
//  console.log(math);
     
   
 /**
   5. module.exports -> tranfer data from one directory to another 
 
 */     

  const fruits = require("./fruits/index")

  console.log(fruits);

  /**
   6.  npm -> node pakage manager  it is a standard package manager  for node.js
           1.we imagine it as a library of pakages 
              example reactjs is pakage , expressjs is pakage use through npm 
            so, npm is library or tool from where we use package and install packages
            and npm manage the already written code like reactjs , expressjs 

           2.command line tool -> through which another developer access the package or tool or framework 

           pakage is already written code which we use 


           it is pre install with node
   */

/**
  7. installing pakages

  command npm install <pakage name>
  
    a. node modules -> the node_modules folder contains every install dependency for your project
    b.packagelock.json ->it records exact version of every installed dependency, including its sub-dependenies
                          and their version 
    c.package.json  ->  it contain descriptive and functional meta data about a project ,
                           such as a name ,version and dependencies
                           it contain information about the pakage that which packages are used in project etc.
                           we alway install package.json that is important that npm init means npm initialisation

 */


/**
  global vs local  installation of   
    
  local ->  default installation
     npm package is not can we used global means 

     the package and module installed in directory we can use only in that directory
         that is local installation
 global -> 1. npm install -g <package name> 
            still we can't use directly first we have to link this 
           2.npm link <package name>
*/                           