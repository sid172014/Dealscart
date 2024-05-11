const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();

const corsOptions = {
    origin : "http://localhost:3001",
    credentials : true
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

//Importing the routes
const publicRoutes = require('./routes/publicRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(publicRoutes);
app.use(userRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is listening at PORT : ", process.env.PORT);
});