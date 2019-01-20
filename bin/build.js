const fs = require('fs');

let result = {};

const dirs = fs.readdirSync(__dirname + '/../data');

dirs.forEach(dirName => {
    result[dirName] = require(__dirname + '/../data/' + dirName);
});

fs.writeFileSync(__dirname + '/../index.json', JSON.stringify(result), {
    encoding: 'utf8'
});
