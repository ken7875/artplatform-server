import express from 'express'
import router from './routes/index'

const app = express()

app.use('/api/artplatform', router)

export default app