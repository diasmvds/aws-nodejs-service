module.exports = (app) => {

    const patients = require('../controllers/patient-controller');

    app.get('/patients', patients.getPatients);

    app.post('/patients', patients.createPatient)
};