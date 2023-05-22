const express = require('express');
const PORT = 5000;
const homeRouter = require('./routes/home')
const productRouter = require('./routes/product')
const errorRouter = require('./routes/error')
const cors = require('cors')

const app = express();

app.use(cors())

// Link the routes file
app.use(homeRouter)
app.use("/api/products", productRouter)
app.use(errorRouter)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})