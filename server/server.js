const express = require('express');
const path = require('path');
var app = express();
const config = require('./configure');

app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'../views'));

app = config(app)

    
app.listen(app.get('port'),()=>{
    console.log(`Server running on port ${app.get('port')}`)
})