const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name : {type:String},
  price : {type:Number}
}, {
  timeStamp : true
})

let Food = mongoose.model('food',foodSchema);


module.exports = Food;