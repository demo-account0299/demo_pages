var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var library_books= new Schema({
    a_string: String,
    a_data: Date
});
var somModel = mongoose.model('someModel',library_books);

var awesome_instance = new SomeModel({name:'awesome'});

awesome_instance.save(function(err){
    if(err) return handleError(err);
});

SomeModel.create({name:'also_awesome'}, function(err,awesome_instance){
    if(err) return handleError(err);
});

console.log(awesome_instance.name);

awesome_instance.name="New cool name";
awesome_instance.save(function(err){
    if (err) return handleError(err);
});