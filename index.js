import express from 'express'
import router from './router.js'

const app = express()
const PORT = 3333

app.get('/', (req, res) => {
	res.send('hello world')
})

app.use('/user', router)

app.post('/users', express.json(), (req, res) => {
	const { name, email } = req.body
	res.json({
		message: `User ${name} with email ${email} created successfully.`
	})
})

app.listen(3333, () => {
	console.log('server started at http://localhost:3333')
})