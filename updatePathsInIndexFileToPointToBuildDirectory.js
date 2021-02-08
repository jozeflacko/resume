var fs = require('fs')

var someFile = 'index.html';

fs.readFile(someFile, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var result = data.split('="/').join('="/build/');
    fs.writeFile(someFile, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});