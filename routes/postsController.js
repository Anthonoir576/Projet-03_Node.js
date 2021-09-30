/* ############  Import / Variable / Constante ################ */

const { response } = require('express');
const express = require('express');
const router = express.Router();

const { PostsModel } = require('../models/postsModel');

router.get('/', (request, response) => {

    PostsModel.find((error, docs) => {

        if(!error) {
            
            response.send(docs);

        } else {

            console.log('erreur data base' + error);

        }

    });

});

router.post('/', (request, response) => {

   const newRecord = new PostsModel({

    author: request.body.author,
    message: request.body.message

   }); 

});

module.exports = router;

/* ############################################################ */