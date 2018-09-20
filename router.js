var queryString = require("querystring")
var renderer = require('./renderer.js')
var generator = require("./generator.js")

var commonHeaders = {'Content-Type': 'text/html'}


function home(request, response) {
    if(request.url === "/"){
        if(request.method.toLowerCase() === "get"){
            response.writeHead(200, commonHeaders);
            renderer.view("header", {}, response)
            renderer.view("form", {}, response)
            renderer.view("footer", {}, response)
            response.end()

        } else {
            request.on("data", function(postBody){
                var query = queryString.parse(postBody.toString())
                let genType = query.type || 'sentences';
                let genNumber = query.genNumber || 5;
                response.writeHead(303, {"Location": "/" + genType  + "/" + genNumber});
                response.end()
            })
           
        }
    }
}

function lorem(request, response){
    if (request.url !== "/") {
        var wording = "";
        var url = request.url.replace("/","");
        if (url.length > 0) {
            response.writeHead(200, commonHeaders);
            renderer.view("header", {}, response)
            urlArray = url.split('/');
            if (urlArray[0] === "sentences"){
                wording = generator.getSentences(urlArray[1])
            } else if (urlArray[0] === "paragraphs") {
                wording = generator.getParagraphs(urlArray[1])
            } else {
                wording = generator.getWords(urlArray[1])
            }
            var values = {
                wording: wording
            }
            renderer.view("header", {}, response)
            renderer.view("lorem", values, response)
            renderer.view("footer", {}, response)
            response.end()
        }
    }
}



module.exports.home = home;
module.exports.lorem = lorem;