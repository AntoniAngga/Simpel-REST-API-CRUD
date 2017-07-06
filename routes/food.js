const express = require('express');
const router = express.Router();
const cFood = require('../controller/cFood');

/* GET Food page. */
router.get('/', cFood.getFoods);
router.get('/:id', cFood.getbyidFood);
router.post('/', cFood.postFood);
router.put('/:id', cFood.updateFood);
router.delete('/:id', cFood.deleteFood);


module.exports = router;