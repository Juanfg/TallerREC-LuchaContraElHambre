const express = require('express');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 8084));

app.use('/public', express.static(path.join(__dirname, '/public')));

app.listen(app.get('port'), function(req, res) {
    console.log('Running on port ' + app.get('port'));
});
