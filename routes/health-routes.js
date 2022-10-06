module.exports = (app) => {

    const health = require('../controllers/health-controller');
    
    app.get('/', health.getHealth);
};