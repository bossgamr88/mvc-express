var express = require('express')
var morgan = require('morgan')
var compression = require('compression')
var bodyParser = require('body-parser')
// var cookieSession = require('cookie-session')
var session = require('express-session')

module.exports = () => {
	var app = express()

	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'))
	}else{
		app.use(compression)
	}



	// app.use(cookieSession({ // ใส่ไว้ก่อนจะมีการเรียกใช้ cookie 
	// 	name : 'session',
	// 	keys : ['secret_key1','secret_key2'] // หมุน key กัน
	// }))

	// เเนะนำให้อ่าน doc api 
	app.use(session({ // ใส่ไว้ก่อนจะมีการเรียกใช้ cookie 
		secret : 'secret_key',
		resave : false,
		saveUninitialized : true // ถ้าคนเข้า Browser มันก็จะ save ทันที
	}))


	app.use(bodyParser.urlencoded({ // รองรับ application/x-www-form-urlencoded
		// true -> ประเภทอะไรก็ได้
		// false -> string กับ array 
		extended : true	
	}))
	app.use(bodyParser.json()) // รองรับ application/json

	
	app.set('views','./app/views')
	app.set('view engine','jade')  

	// เราต้อง โฟกัส เรื่อง ลำดับ การทำงานของ code ด้วย


	require('../app/routes/index.routes')(app)
	require('../app/routes/user.routes')(app)

	app.use(express.static('./public')) 
	return app
	
}
