const express = require('express');
const router = express.Router();

// 1. Import all your controllers at the top
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const menuController = require('../controllers/menuController');
const orderController = require('../controllers/orderController');

// 2. Define all your routes
// General Routes
router.get('/', homeController.getHome);
router.get('/about', aboutController.getAbout);

// Menu Routes
router.get('/restaurants/:id/menu', menuController.getMenuByRestaurant);

// Order Routes
router.post('/orders', orderController.createOrder);
router.get('/orders/:id', orderController.getOrder);
router.post('/orders/:id/update', orderController.updateOrder);
router.post('/orders/:id/cancel', orderController.cancelOrder);

// 3. Export the router at the VERY BOTTOM of the file
module.exports = router;
