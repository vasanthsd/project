const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000

let dbURL = process.env.DB_URL || 'mongodb://user:pass22@ds115854.mlab.com:15854/distributor';
let dbUserName = process.env.DB_UserName || 'user';
let dbPassword = process.env.DB_Password || 'pass22';
let Distributer = require('./models/distributerModel');


mongoose.connect(dbURL,
    {
        auth:
        {
            user: dbUserName,
            password: dbPassword
        },
        useNewUrlParser: true
    }).then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
distributorRouter = require('./repo/distributer')(Distributer);
app.use('/api/distributors', distributorRouter);

app.get('/', (req, res) => {
    res.send('Welcome to cinema business');
});

app.listen(port, () => {
    console.log('server started on port:' + port);
})