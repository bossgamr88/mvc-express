// hadle routes index
moduls.exports = (app) =>{  
	// (app) = var app = express() -> (instance express) -> ใน ไฟล์ config  
	// เวลา call ก็จะส่ง app เข้ามา 
	var index = require('../controllers/index.controller') 
	app.get('/',index.render)

}

/*
var index = require('../controllers/index.controller')
 relative จาก mvc/express/app/controllers/index.controller
 เป็นการทำงานเเบบ require จะทำงานเมื่อถูกเรียกใช้ 

*/