const cors = require('cors');
const chat = require('./chat');
const pdf = require('./pdf');


module.exports = (app) => {
    app.use('/chat',  chat);
    app.use('/pdf',  pdf);

};
