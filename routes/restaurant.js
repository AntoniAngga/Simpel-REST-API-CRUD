const express = require('express');
const router = express.Router();
const cRestaurant = require('../controller/cRestaurant'); 

/* GET Restaurant page. */
router.get('/', cRestaurant.getRestaurant);
router.get('/:id', cRestaurant.getbyidRestaurant);
router.post('/', cRestaurant.postRestaurant);
router.put('/:id', cRestaurant.updateRestaurant);
router.delete('/:id', cRestaurant.deleteRestaurant);


module.exports = router;