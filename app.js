const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const patients = require('./routes/app-routes');
patients(app);
const healths = require('./routes/health-routes');
healths(app);

app.listen(8070, () => {
    console.log('App started on port: ' + 8070);
});