const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

console.log("MONGO_URI:",process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB connected"))
.catch(err => console.log(err));

app.use('/api/auth',require('./routes/auth'));
app.listen(3000, () => console.log("Server running"));
