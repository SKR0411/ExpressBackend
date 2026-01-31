import express from 'express'
import router from './router.js'
import ejs from 'ejs';

const app = express()
const PORT = 3333

// set ejs as view engine 
app.set('view engine', ejs)

app.get('/', (req, res) => {
	const userName = 'sujan kumar roy'
	res.render('index', {userName})
})

module.exports = app; 