import express from 'express'
import { router as diaryRouter } from './routes/diares'
import cors from 'cors'
const app = express()

app.use(express.json())

app.use(cors())

app.get('/ping', (_req, res) => {
  console.log('he ingresado')
  res.json('Hello world')
})

const PORT = 3000

app.use('/api/diary/', diaryRouter)

app.listen(PORT, () =>
  console.log(`Server is running on  http://localhost:${PORT}`)
)
