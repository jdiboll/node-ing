var http = require('http');


function onRequest(request, response) {
	console.log('I made a request' + request.url);
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Here is your data');
	response.end();
}



http.createServer(onRequest).listen(8888);
console.log('Server is running....');