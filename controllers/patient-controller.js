const patients = [];

exports.getPatients = (req, res) => {
    res.send(patients);
};

exports.createPatient = (req,res) => {
    let patient = {
        "name": req.body.name,
        "age": parseInt(req.body.age)
    };

    patients.push(patient);
    res.send(patient);
};