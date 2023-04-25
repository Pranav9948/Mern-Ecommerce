const express=require('express')
const dotenv=require('dotenv')

const app=express()
dotenv.config()

const dbConfig = require("../Backend/config/dbConfig");


const {
    notFound,
    errorHandler,
  } = require("../Backend/middleware/ErrorHandlingMiddleware");

app.get('/',(req,res)=>{

    res.send("hello")
})


app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT

app.listen(5000,console.log(`server started on Port ${PORT}`));