
const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const { addService, getAllServices, updateService, deleteService } = require('../services/serviceService');
const router = express.Router();


router.post('/category/:categoryId/service', authenticateToken, addService);
router.get('/category/:categoryId/services', authenticateToken, getAllServices);
router.put('/category/:categoryId/service/:serviceId', authenticateToken, updateService);
router.delete('/category/:categoryId/service/:serviceId', authenticateToken, deleteService);

module.exports = router;
