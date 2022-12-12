import express from 'express'
import router from './routes/index'

const app = express()
const cors = require('cors');

app.use('/api/artplatform', router)

app.use(cors());
app.options('*', cors());

export default app