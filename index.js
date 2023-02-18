import express from 'express';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/userRoute.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
const PORT = 8000;
Connection();

app.use(router);
app.use('/', Routes);

app.listen(PORT, () => 
    console.log(`Be started at port ${PORT}`));