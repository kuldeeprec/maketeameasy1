const connectToMongo = require('./db');

const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/addproducts', require('./routes/addproducts'));
app.use('/api/getproducts', require('./routes/getproducts'));
app.use('/api/updateproducts', require('./routes/updateproducts'));
app.use('/api/searchplayer', require('./routes/searchplayer'));
app.use('/api/friends', require('./routes/friends'));
app.use('/api/playing_live', require('./routes/playing_live'));
app.use('/api/payment', require('./routes/payment'));
app.use('/api/file', require('./routes/file'));

app.listen(port, () => {
  console.log(`iChat listening at http://localhost:${port}`)
})
