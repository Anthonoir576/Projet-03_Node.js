/* ############  Import / Variable / Constante ################ */

// Connection DB
const mongoose = require('mongoose');
mongoose.connect(

    "mongodb+srv://Anthonoir576:475719711993@nodeapi.gpfxq.mongodb.net/API_REST?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {

        if (!error) {

            console.log("MongoDB Connecté");

        } else {

            console.log('Connection erreur' + error);

        };

    }

);

/* ############################################################ */