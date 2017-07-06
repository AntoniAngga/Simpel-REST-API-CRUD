const Restaurant = require("../model/Restaurant");

let getRestaurant = function (req,res){
  Restaurant.find({}, function(err,data) {
    if (err) {
      res.status(503).send(`Something error with your connection ${err}`);
    } else {
      res.status(200).send(data);
    }
  })
}

let getbyidRestaurant = function(req,res){
  Restaurant.findById(req.params.id, function(err,data){
      if (err) {
        res.status(503).send(`Something error with your connection ${err}`);
      } else {
        res.send(data)
      }
    })
}

let postRestaurant = function(req,res){
    let data = req.body;
    let newRestaurant = Restaurant({
      name : data.name,
      owner : data.owner,
      address : data.address
    });
    newRestaurant.save(function (err) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            res.send("1 Document Inserted");
        }
    });
}

let updateRestaurant = function(req,res){
  Restaurant.findById(req.params.id, function (err,restaurant) {
        if(err){
            res.status(501).send("something wrong with your connection");
        } else {
            let data = req.body;
            restaurant.name = data.name;
            restaurant.owner = data.owner;
            restaurant.address = data.address;

            restaurant.save(function (err) {
                if (err){
                    res.status(502).send(`something wrong with your add${err}`);
                } else {
                    res.send(`Updated 1 Document`);
                }
            });
        }
    })
}

let deleteRestaurant = function(req,res){
  Restaurant.findById(req.params.id, function (err,restaurant) {
        if (err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            restaurant.remove(function (err) {
                if(err){
                    res.status(501).send(`Something Wrong with your Delete${err}`);
                } else {
                    res.send(`1 Document deleted`);
                }
            })
        }
    });
}


module.exports = {
  getRestaurant,
  getbyidRestaurant,
  postRestaurant,
  updateRestaurant,
  deleteRestaurant
}