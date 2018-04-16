var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', err => {
        throw err;
      })
       .on('response', response => {
        console.log (response.statusCode, response.statusMessage, response.headers['content-type']);
        console.log('Downloading image...');
      })
       .pipe(fs.createWriteStream('./future.jpg'))
      });