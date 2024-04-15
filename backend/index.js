const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.get('/', (req, res) => {
    res.send({ res: 'working' })
})

app.listen(5000, () => {
    console.log('server is running on port 5000');
})