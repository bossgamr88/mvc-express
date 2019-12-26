
// 3. สร้าง config เพื่อสร้าง express instance เเละส่งค่าให้ routes
// config ค่า ของ express 
var express = require('express')
var morgan = require('morgan')
var compression = require('compression')
var bodyParser = require('body-parser')

module.exports = () => {
	var app = express()

	// ติดตั้ง config เเอพ ตามเเต่ environment
	// node.js สามารถดึง environment variable ออกมาได้ผ่าน process.env.xxx 
	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'))
	}else{
		app.use(compression)
	}
	app.use(bodyParser.urlencoded({
		extended : true	
	}))
	app.use(bodyParser.json())

	// ถ้าไม่ config view จะมองเป็น HTML ธรรมดา
	app.set('views','./app/views')  // relative จาก server.js (server.js/app/views)
	// set ว่า เวลา render html template จะใช้ jade view engine
	app.set('view engine','jade')  


	require('../app/routes/index.routes')(app)

	//  ลำดับมีความสำคัญ : เอาไว้ที่หลัง routing เพื่อความเร็ว 
	//  ถ้าเจอ routes ก็ค่อยมาเอา file จาก static ไปทีหลัง
	
	// เรียกใช้ middleware static 
	app.use(express.static('./public')) // relative จาก server.js  (server.js/app/public)

	return app

}
/*
Note :
require มามันได้ function เลยใช่ parameter app ได้ เเละ ก็ return ออกไป
เเปะ code นั่นเลย 

เบื้องหลัง จะเป็นเเบบนี้ 
function (app) {
	var index = require('../controllers/index.controller') 
	app.get('/',index.render)
	return app
}


*/