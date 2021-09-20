// PAGE 62 (85)
const router = require('express').Router();
const home = require('../contollers/home');
const image = require('../contollers/image');

module.exports = function(app){
    //Home routes
    router.get('/',home.index);
    
    //Image routes
    router.get('/images/:image_id',image.index);
    router.post('/images', image.create);
    router.post('/images/:image_id/like',image.like);
    router.post('/images/:image_id/comment', image.comment);
    app.use(router);
}
