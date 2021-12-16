var http = require('http');

var options = {
    host: 'jsonplaceholder.typicode.com',
    path: '/todos',
    method: 'GET' // GET, POST, PUT, DELETE, PATCH
};

const formatData = (obj) => {
    for(let index = 0; index < obj.length; index++){
        const outputText = `Título: ${obj[index].title}
        Tarea ${index+1} (completed)
        - id: ${obj[index].id}
        - userId: ${obj[index].userId}`
        console.log(outputText)
    }
}

callback = function(response) {
    var body = []

    response.on('data', function (chunk) {
        body.push(chunk)
    });

    response.on('end', function () {
        try {
            const responseText = Buffer.concat(body).toString()
            //console.log('responseText', responseText)
            body = JSON.parse(responseText);
            formatData(body)
        } catch(error) {
            console.log('e',error);
        }
    });
}

http.request(options, callback).end();