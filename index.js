import express from 'express'

const app = express()
const PORT = 3333

app.use(express.static('public'))
app.use(express.static('images'))

app.get('/', (req, res) => {
	res.send('hello express')
})

app.listen(3333, () => {
	console.log('server started at http://localhost:3333')
})