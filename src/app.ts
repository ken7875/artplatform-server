import express from 'express'
import router from './routes/index'

const app = express()
const cors = require('cors');

app.use(cors());
app.options('*', cors());

app.use('/api/artplatform', router)


export default app