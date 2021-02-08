var fs = require('fs')

var file = 'index.html';

fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.split('="/').join('="/build/');

    fs.writeFile(file, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});