//Install express server
const express = require('express');
const path = require('path');

const app = express();

// The Angular application builder emits browser files beneath this directory.
app.use(express.static(path.join(__dirname, 'angularapp', 'browser')));

app.get('*', function(req,res) {
res.sendFile(path.join(__dirname, 'angularapp', 'browser', 'index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
