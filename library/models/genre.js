var mongoose = require('mongoose');

var Schema=mongoose.Schema;

var bookGenre = new Schema(
    {
        genres:{type:String,maxlength:200},
    }
);

bookGenre.virtual('url').get(function(){
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('genre',bookGenre);

