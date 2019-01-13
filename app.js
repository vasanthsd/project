const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let dbURL = process.env.DB_URL ||'mongodb://user:pass22@ds115854.mlab.com:15854/distributor';
let dbUserName = process.env.DB_UserName || 'user';
let dbPassword = process.env.DB_Password || 'pass22';
mongoose.connect(dbURL,
    {
        auth:
        {
        user:dbUserName,
        password:dbPassword
        }
    }).then(()=>console.log('connection successful'))
    .catch((err)=>console.error(err));
    let Distribute = require('./models/dist');
const app = express();
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
distRouter = require('./repo/getDistribute1') (Distribute);
app.use('/api/Dist',distRouter);
app.get('/',(req,res)=>
{
    res.send('Welcome to cinema business');
});
app.listen(port,()=>
{
    console.log('server started on port:' +port);
})