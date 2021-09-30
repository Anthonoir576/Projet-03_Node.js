/* ############  Import / Variable / Constante ################ */

// Connection DB
const mongoose = require('mongoose');

// Modele auteur / message / date :
const PostsModel = mongoose.model(

   "API_REST",
   {

    author: {

        type: String,
        required: true

    },

    message: {

        type: String,
        required: true

    },

    date: {

        type: Date,
        default: Date.now

    }

   },
   "posts" 

);

// Export modele 
module.exports = { PostsModel };

/* ############################################################ */