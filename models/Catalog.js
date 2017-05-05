var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var catalogSchema = new Schema({

});

var Catalog = mongoose.model('Todos', todoSchema);

module.exports = Catalog;