
/* ############  Import / Variable / Constante ################ */

const express = require('express');
const app = express();

// Appel DB
require('./models/dbConfig');

/* ############################################################ */



/* ##############    APPEL SERVEUR   ########################## */
app.listen(5500, () => {

    console.log('Serveur sur le port : 5500 RAS');

});
/* ############################################################ */