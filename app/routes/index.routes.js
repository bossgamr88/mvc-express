// hadle routes index

// 1. สร้าง routes ไปเรียก controller ของ ฟีเจอร์
module.exports = (app) =>{  
	// (app) = var app = express() -> (instance express) -> ใน ไฟล์ config  
	// เวลา call ก็จะส่ง app เข้ามา 
	var index = require('../controllers/index.controller') 
	var about = require('../controllers/about.controller')
	app.get('/',index.render)
	app.get('/about',about.render)
}

/*
var index = require('../controllers/index.controller')
 relative จาก mvc/express/app/controllers/index.controller
 เป็นการทำงานเเบบ require จะทำงานเมื่อถูกเรียกใช้ 

*/