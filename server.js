
/* ############  Import / Variable / Constante ################ */

const express = require('express');
const app = express();

// Appel DB
require('./models/dbConfig');

const postsRoutes = require('./routes/postsController');

/* ############################################################ */




/* ##############     Middleware     ########################## */

app.use('/posts', postsRoutes);

/* ############################################################ */



/* ##############    APPEL SERVEUR   ########################## */
app.listen(5500, () => {

    console.log('Serveur sur le port : 5500 RAS');

});
/* ############################################################ */