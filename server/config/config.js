var path = require('path');

var rootPath = path.normalize(__dirname + '/../../');


module.exports = {
  development: {
    db: 'mongodb://jesse:ichiban987@ds011933.mlab.com:11933/jlab_parse',
    rootPath: rootPath,
    port: process.env.PORT || 3000
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://jesse:ichiban987@ds011933.mlab.com:11933/jlab_parse',
    port: process.env.PORT || 80
  }
}