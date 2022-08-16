import express from 'express'
import { Kafka } from 'kafkajs'
import routes from './routes'

const PORT = process.env.PORT || 3333

const app = express()


const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()
app.use((req, res,next) => {
  req.producer = producer
  return next()
})

app.use(routes)

async function run () {
  await producer.connect()

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}

run().catch(console.error)


