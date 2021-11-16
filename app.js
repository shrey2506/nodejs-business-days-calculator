//pakages
const http = require('http');
const express= require('express')
require('dotenv').config()

const app=express()
//routes
const routes=require('./routes/calculate_working_days')


app.use(express.json())
app.use(express.urlencoded({ extended: true} ));
app.use('/api',routes)

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(err.status || 500);
    res.json({
    message: err.message,
    error: err
    });
  });


const port= process.env.PORT

app.listen(port, ()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})

//note date format used in this project is yyyy-mm-dd