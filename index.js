const express = require('express');
const bodyParser = require('body-parser');
const { connectDb } = require('./db.js'); 

const blogRoutes = require('./controller.js');
const { errorHandler } = require('./error.js');
const app = express();
app.use(bodyParser.json());
app.use('/api/blogs', blogRoutes);
app.use(errorHandler);

connectDb() 
    .then(() => {
        console.log('db connection succeeded');
        app.listen(3000, () => console.log('server started at 3000'));
    })
    .catch(err => console.error(err)); 
