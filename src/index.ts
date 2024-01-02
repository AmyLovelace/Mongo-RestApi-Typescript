import { MongoClient } from "mongodb";
import { couldStartTrivia } from "typescript";

const express = require('express');
const body = require('body-parser');

async function start(){

    try {
    
        const app = express();
        const mongo = await MongoClient.connect('mongodb://localhost:27017/restapi');

        await mongo.connect();

        app.db = mongo.db();

        app.use(body.json({
            limit :'500kb'
        }));

        app.use('/costumers',require('./routes/costumers'));

        const port = 3000;
        app.listen(port,()=> {
            console.log(`server on ${port}`);
        })

        
    } catch (error) {
        console.error(error);
        
    }

}

start();
