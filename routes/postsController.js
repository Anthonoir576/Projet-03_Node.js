/* ############  Import / Variable / Constante ################ */

const { response } = require('express');
const express = require('express');
const router = express.Router();

const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

/* ############################################################ */




/* ############           MIDDLEWARE           ################ */


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
   
   newRecord.save((err, docs) => {

    if(!err) {

        response.send(docs);

    } else {

        console.log('Erreur création nouvelle donnée');

    };

   });

});

router.put('/:id', (request, response) => {

    if (!ObjectID.isValid(request.params.id)) {

        return response.status(400).send(' Identifiant inconnu : ' + request.params.id);

    } else {

       const updateRecord = {

        author: request.body.author,
        message: request.body.message

       }; 

        PostsModel.findByIdAndUpdate(

            request.params.id,
            { $set: updateRecord },
            { new: true },
            (error, docs) => {

                if (!error) {
                    response.send(docs)
                } else {
                    console.log('Update erreur :' + error);
                };

            }

        );

    };

});

module.exports = router;

/* ############################################################ */