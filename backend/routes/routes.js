const router = require('express').Router();
const controller = require('../controllers/controller')
const Auth = require('../middleware/auth')

router.post('/login', controller.login);
router.post('/category', Auth.checkAuth, controller.addCategory);
router.get('/categories',Auth.checkAuth, controller.getAllCategories);
router.put('/category/:categoryId',Auth.checkAuth, controller.updateCategory );
router.delete('/category/:categoryId', Auth.checkAuth,controller.deleteCategory );
router.post('/category/:categoryId/service',Auth.checkAuth, controller.addService);
router.get('/category/:categoryId/services',Auth.checkAuth,controller.getService );
router.put('/category/:categoryId/services',Auth.checkAuth,controller.updateService );
router.delete('/category/:categoryId/services',Auth.checkAuth, controller.deleteService);

module.exports = router;