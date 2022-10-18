const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongo.URI);

const app = express();

require('./routes/auth.routes')(app);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT);
