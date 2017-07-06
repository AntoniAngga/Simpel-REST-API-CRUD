const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name    : {type:String},
  owner   : {type:String},
  address : {type:String}
}, {
  timeStamp : true
})

let Restaurant = mongoose.model('restaurant',restaurantSchema);

module.exports = Restaurant;