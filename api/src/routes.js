import { Router } from 'express'

const routes = Router()

routes.post('/certifications', async (req, res) => {
  const message = {
    user: { id: 1, name: 'Guilherme Teixeira Ais' },
    course: 'Kafka com NodeJS',
    grade: 5
  }
  
  await req.producer.send({
    topic: 'issue-certificate',
    messages: [
      { 
        value: JSON.stringify(message)
      }
    ]
  })
  return res.json({success: true})
})

export default routes