const Restaurant = require("../model/Restaurant");

let getRestaurant = function (req,res){
  res.send("ini get Restaurant");
}

let getbyidRestaurant = function(req,res){
  res.send("ini get by id Restaurant");
}

let postRestaurant = function(req,res){
  res.send("ini post Restaurant");
}

let updateRestaurant = function(req,res){
  res.send("ini Update Restaurant");
}

let deleteRestaurant = function(req,res){
  res.send("ini Delete Restaurant");
}


module.exports = {
  getRestaurant,
  getbyidRestaurant,
  postRestaurant,
  updateRestaurant,
  deleteRestaurant
}