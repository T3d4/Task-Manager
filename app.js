const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
require('dotenv').config();

const port = process.env.PORT || 5000;

// Middleware
app.use(express.static('./public'))
app.use(express.json())


//routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();
