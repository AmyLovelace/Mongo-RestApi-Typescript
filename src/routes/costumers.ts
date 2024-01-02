import { createCostumerController } from "../controllers/createCostumers";
import { getCostumerController } from "../controllers/getCostumersController";

const express = require('express');

const router = express.Router();

console.log('Constumer route');

router.post('/',createCostumerController );
router.get('/',getCostumerController);




module.exports = router;