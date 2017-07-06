let getFoods = function (req,res){
  res.send("ini get Foods");
}

let getbyidFood = function(req,res){
  res.send("ini get by id Food");
}

let postFood = function(req,res){
  res.send("ini post Food");
}

let updateFood = function(req,res){
  res.send("ini Update Food");
}

let deleteFood = function(req,res){
  res.send("ini Delete Food");
}


module.exports = {
  getFoods,
  getbyidFood,
  postFood,
  updateFood,
  deleteFood
}