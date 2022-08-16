import { Kafka } from 'kafkajs'

const kafka = new Kafka({
    clientId: 'certificate',
    brokers: ['localhost:9092']
})

const TOPIC = 'issue-certificate' 
const consumer = kafka.consumer({groupId: 'certificate-group'})

async function run () {
  await consumer.connect()
  await consumer.subscribe({ topic: TOPIC })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
      console.log(`- ${prefix} ${message.key}#`, JSON.parse(message.value.toString()))
    }
  })
}

run().catch(console.error)


