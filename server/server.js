import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';


const app = express();

dotenv.config();

app.use(bodyParser.json({ extended:true })); //post api is send in json format
app.use(bodyParser.urlencoded({extended:true})); //for parsing the url...

app.use(cors());

app.use('/', Routes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

const PORT =  process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@crud-app.a6p38.mongodb.net/PROJECT0?retryWrites=true&w=majority`;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));