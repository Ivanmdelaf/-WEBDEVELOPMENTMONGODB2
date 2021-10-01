var fs= require('fs');
var path = require('path');

module.exports = {
    index : (req,res)=>{
        var viewModel = {
           image: {
               uniqueId: 1,
               tittle: 'Sample Image 1',
               description: 'This is a sample',
               filename: 'sample1.jpg',
               views: 0,
               likes: 0,
               timestamp: Date.now()
           },
           comments: [
               {
                    image_id: 1,
                    email: 'test@testing.com',
                    name: 'Test Tester',
                    gravatar: 'http://lorempixel.com/75/75/animals/1',
                    comment: 'This is a test comment...',
                    timestamp: Date.now()
               },{
                    image_id: 1,
                    email: 'test@testing.com',
                    name: 'Test Tester',
                    gravatar: 'http://lorempixel.com/75/75/animals/2',
                    comment: 'Another followup comment!',
                    timestamp: Date.now()
               }
           ] 
        }
        res.render('image',viewModel);
    },
    create: (req,res)=>{
       var saveImage = ()=>{
        //to do
        
       }
       saveImage();
    },
    like: (req,res)=>{

    },
    comment: (req,res)=>{

    }
}