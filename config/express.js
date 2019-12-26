// config ค่า ของ express 
var express = require('express')

modules.exports = () => {
	var app = express()
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