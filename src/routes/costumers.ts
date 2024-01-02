import { createCostumerController } from "../controllers/createCostumers";
import { getCostumerController } from "../controllers/getCostumerController";
import { getCostumersController } from "../controllers/getCostumersController";

const express = require('express');

const router = express.Router();

console.log('Constumer route');

router.post('/',createCostumerController );

router.get('/',getCostumersController);

router.get('/:id',getCostumerController);





module.exports = router;