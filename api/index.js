const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const router = require('./server/routes/routes');
const cors = require('cors')
var corsOptions = {
   origin: ['https://golky-front.herokuapp.com/', 'http://localhost:4200/', '*', 'https://golky-front.herokuapp.com'
   ]
}
app.options('*', cors(corsOptions))
app.use(cors(corsOptions))

// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 
app.use('/api/v1',router);
app.get('/' , (req , res)=>{

   res.send('Hello from Golky Back :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

module.exports = {
   app
}