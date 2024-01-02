import { createCostumerController } from "../controllers/createCostumers";

const express = require('express');

const router = express.Router();

console.log('Constumer route');

router.post('/',createCostumerController );



module.exports = router;