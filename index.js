import express from 'express'
import router from './router.js'

const app = express()
const PORT = 3333

// set ejs as view engine 
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	const userName = 'sujan kumar roy'
	res.render('index', {userName})
})

app.listen(3333, () => {
	console.log('server started at http://localhost:3333')
})