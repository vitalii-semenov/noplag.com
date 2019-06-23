var fs = require('fs');

fs.readFile('test.js', 'utf-8', (err, data) => {
    if(err) throw err;
    var str = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
    var dataNew = data.toString().replace(str, '');
    fs.writeFile('test.js', dataNew, (err) => {
        if (err) throw err;
        let res = fs.readFileSync('test.js', 'utf-8');
        console.log(res);
    });
})