var fs = require('fs');
var data="\nHoten:Nguyen Ba Chien \n namsinh:2000\n quequan:hanoi"
fs.appendFileSync("test.html",data,'utf8');
