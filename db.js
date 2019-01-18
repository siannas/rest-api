var mongoose = require('mongoose');
mongoose.connect('mongodb://'+ process.env.DB_USER_PASSWORD +'@ds159574.mlab.com:59574/rest-api');