var http = require('http');
var fs = require('fs');



//404 response
function send404Response(response) {
response.writeHead(404, {"Content-type": "text/plain"});
response.write('Page not found');
response.end();
}

//handle user request
function onRequest(request, response) {
	if(request.method == 'GET' && (request.url == '/' || request.url == '/index.html')) {
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream('../html/index.html').pipe(response);
	} else {
		send404Response(response);
	}
};



http.createServer(onRequest).listen(8888);
console.log('Server is running....');














	// console.log('I made a request' + request.url);
	// response.writeHead(200, {'Content-Type': 'text/plain'});
	// response.write('Here is your data');
	// response.end();