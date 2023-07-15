var fs = require('fs');

fs.writeFile("test.html",'hello world',function(err){
    if(err) 
    console.log(err);
    else 
    console.log("file written");

});