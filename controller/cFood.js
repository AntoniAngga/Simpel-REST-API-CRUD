const Food = require("../model/Food");

let getFoods = function (req,res){
  Food.find({}, function(err,data) {
    if (err) {
      res.status(503).send(`Something error with your connection ${err}`);
    } else {
      res.status(200).send(data);
    }
  })
}

let getbyidFood = function(req,res){
  Food.findById(req.params.id, function(err,data){
      if (err) {
        res.status(503).send(`Something error with your connection ${err}`);
      } else {
        res.send(data)
      }
    })
}

let postFood = function(req,res){
  //create a new Food
    let data = req.body;
    let newFood = Food({
      name : data.name,
      harga : data.harga
    });
    res.send(newFood)
    // Save Data nya
    newFood.save(function (err) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            res.send("1 Document Inserted");
        }
    });
}

let updateFood = function(req,res){
  res.send("ini Update Food");
  Food.findById(req.params._id, function (err,food) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            let data = req.body;
            food.name = data.name;
            food.price = data.price;

            food.save(function (err) {
                if (err){
                    res.status(502).send(`something wrong with your add`+err);
                } else {
                    res.send(`Updated 1 Document`);
                }
            });
        }
    })
}

let deleteFood = function(req,res){
  Food.findById(req.params._id, function (err,food) {
        if (err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            food.remove(function (err) {
                if(err){
                    res.status(501).send(`Something Wrong with your Delete`+err);
                } else {
                    res.send(`1 Document deleted`);
                }
            })
        }
    });
}


module.exports = {
  getFoods,
  getbyidFood,
  postFood,
  updateFood,
  deleteFood
}