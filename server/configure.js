const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const errhandler = require('errorhandler');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const routes = require('../routes/routes');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const multer = require('multer');

const exp = require('constants');

var moment = require('moment');


module.exports = function(app) {
    app.use(morgan('dev'));
    app.use(express({
        uploadDir:path.join(__dirname, 'public/upload/temp')
        }));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(methodOverride());
    app.use(cookieParser('some-secret-value-here'));
    app.use(multer({ dest: path.join(__dirname,
        'public/upload/temp')}));

    //Views Setting
    app.engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: app.get('views')+'/layouts',
        partialsDir: [app.get('views')+'/partials'],
        helpers: {
            timeago: (timestamp)=>{
                return moment(timestamp).startOf('minute').fromNow();
            }
        }
    }))
    app.set('view engine', '.hbs');


    routes(app);
    app.use('/public/', express.static(path.join(__dirname,'../public')));
    if('development'=== app.get('env')){
        app.use(errorHandler())
    }

    
    return app;
};