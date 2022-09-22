const connectToMongo = require('./db');

const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/addproducts', require('./routes/addproducts'));
app.use('/api/getproducts', require('./routes/getproducts'));
app.use('/api/updateproducts', require('./routes/updateproducts'));

app.listen(port, () => {
  console.log(`iChat listening at http://localhost:${port}`)
})