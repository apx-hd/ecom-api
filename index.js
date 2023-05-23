const express = require('express');
const PORT = 5000;
const homeRouter = require('./routes/home')
const productRouter = require('./routes/product')
const errorRouter = require('./routes/error')
const cors = require('cors')
const morgan = require('morgan')
const logger = require('./middlewares/logger')

const app = express();

//Global middleware
app.use(cors())
app.use(logger)
app.use(morgan('dev'))

// Link the routes file
app.use(homeRouter)
app.use("/api/products", productRouter)
app.use(errorRouter)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})