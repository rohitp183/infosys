const express = require('express');
const router = express.Router();
const caseController = require('./../controllers/caseController');

//search
router.post('/search', caseController.searchCases);

router.get('/roles', caseController.getRoles); 
router.get('/accessControlTypes', caseController.getAccessControlTypes);
router.get('/caseCategories', caseController.getCaseCategories);
router.get('/caseSubCategories', caseController.getCaseSubCategories);


module.exports = router