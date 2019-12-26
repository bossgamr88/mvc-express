module.exports = (app) =>{  
	var index = require('../controllers/index.controller') 
	var about = require('../controllers/about.controller')
	app.get('/',index.render)
	app.get('/about',about.render)
}