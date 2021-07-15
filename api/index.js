const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const router = require('./server/routes/routes');
// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 
app.use('/api/v1',router);
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

module.exports = {
   app
}