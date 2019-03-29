const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/publimarket', {

useCreateIndex: true,
useNewUrlParser: true,
useFindAndModify: false
}).then(db => console.log('Mongodb esta conectado'))
  .catch(err => console.error(err));

