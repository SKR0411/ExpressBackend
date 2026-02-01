import express from 'express'

const app = express()
const PORT = 3333

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
	res.send('hello express')
})

app.post('/form', (req, res) => {
	
	console.log(req.body)
	res.send('form recived')
})

app.listen(3333, () => {
	console.log('server started at http://localhost:3333')
})