var router = require('./router.js');


var http = require('http');
http.createServer(function(request, response) {
    router.home(request, response)
    router.lorem(request, response)
}).listen(3000);
console.log('Server running at port 3000');

