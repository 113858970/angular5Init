const path = require('path');
const config = {
  path:{
    dist:path.resolve(__dirname,'dist'),
    view:path.resolve(__dirname,'view'),
    app:path.resolve(__dirname,'app')
  },
  port:8007,
  env: process.env.NODE_ENV || 'development',
}



module.exports = config;
