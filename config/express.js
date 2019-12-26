
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

	require('../app/routes/index.routes')(app)
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