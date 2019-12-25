// hadle routes index
moduls.exports = (app) =>{
	// (app) = var app = express() -> (instance express)  
	// เวลา call ก็จะส่ง app เข้ามา 
	var index = require('../controllers/index.controller')
	app.get('/',index.render)
}